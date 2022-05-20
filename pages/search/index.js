import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Button, ButtonSize, ButtonVariant, Input } from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/solar/icons'
import Head from 'next/head'
import React from 'react'
import Events from '~/components/Events'
import getFilteredEvents from '~/graphql/queries/getFilteredEvents'

function Search() {
  const [name, setName] = useState('')

  const [fetchData, { data, loading }] = useLazyQuery(getFilteredEvents)

  const handleSearch = e => {
    e.preventDefault()
    fetchData({
      variables: {
        name,
      },
    })
  }

  return (
    <>
      <Head>
        <title>Search | TicketSwap Challenger</title>
      </Head>

      <form onSubmit={handleSearch}>
        <Input
          id="search"
          placeholder="Search for an event"
          leftAdornment={<MagnifyingGlass size={24} />}
          onChange={e => setName(e.target.value)}
        />
        <Button
          size={ButtonSize.medium}
          variant={ButtonVariant.primary}
          type="submit"
        >
          Search
        </Button>
      </form>

      {(data || loading) && <Events data={data} loading={loading} />}
    </>
  )
}

export default Search

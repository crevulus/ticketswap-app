import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  Button,
  ButtonSize,
  ButtonVariant,
  Input,
  space,
} from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/solar/icons'
import Head from 'next/head'
import React from 'react'
import Events from '~/components/Events'
import getFilteredEvents from '~/graphql/queries/getFilteredEvents'
import Container from '~/components/Container'
import styled from '@emotion/styled'

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${space[16]};
  margin-bottom: ${space[16]};

  label {
    // NOTE: Tried doing this directly in a StyledInput, but the styling was difficult because of the various layers within the component
    flex: 1;
  }
`

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
    <main>
      <Head>
        <title>Search | TicketSwap Challenger</title>
      </Head>

      <Container>
        {/* Styling is difficult here because of all the extra layers around the search */}
        <StyledForm onSubmit={handleSearch}>
          <Input
            id="search"
            placeholder="Search for an event"
            hideLabel
            onChange={e => setName(e.target.value)}
          />
          <Button
            size={ButtonSize.medium}
            variant={ButtonVariant.primary}
            type="submit"
            leftAdornment={<MagnifyingGlass size={24} />}
          />
        </StyledForm>
        {(data || loading) && <Events data={data} loading={loading} />}
      </Container>
    </main>
  )
}

export default Search

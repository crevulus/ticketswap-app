import { useQuery } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import getFilteredEvents from '~/graphql/queries/getFilteredEvents'

function index() {
  const { data, loading } = useQuery(getFilteredEvents, {
    variables: {
      name: 'DI-RECT',
    },
  })

  if (loading || !data) return null

  return (
    <Head>
      <title>Search | TicketSwap Challenger</title>
    </Head>
  )
}

export default index

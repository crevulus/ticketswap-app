import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'
import Cover from '~/components/Cover'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Home | TicketSwap Challenger</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      {/* NOTE: Moved this to one location */}
      <Cover />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

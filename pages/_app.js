import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Home | TicketSwap Challenger</title>
        <meta
          name="description"
          content="This is a description of the website."
        ></meta>{' '}
        {/* NOTE: Added meta tags for best SEO (otherwise what's the point of using Next!) */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      {/* NOTE: Moved Cover to one location */}
      <Cover />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

/* A TODO list if I had more time:
  - Refactor to TS
  - Testing (unit or storybook integrated)
  - Performance checks - lighthouse score is not great!
  - Amendments to some stories, e.g. to improve a11y
  - Make footer stick to bottom if not much content
  - Storybook docs
*/

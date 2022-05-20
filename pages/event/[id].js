import React from 'react'
import Container from '~/components/Container'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import Head from 'next/head'

const Event = ({ eventId }) => {
  const { data, loading } = useQuery(getEvent, {
    variables: {
      id: parseInt(eventId),
    },
  })

  if (loading || !data.event) return null

  const { name, date, location, imageUrl, description } = data.event

  return (
    <>
      {/* NOTE: Add title tags for ease of use */}
      <Head>
        <title>{name} | TicketSwap Challenger</title>
      </Head>

      <Container>
        <Image src={imageUrl} size={128} />
        <H2>{name}</H2>
        <H5>{new Date(date).toLocaleString()}</H5>
        <H5>{location}</H5>
        <Text>{description}</Text>
      </Container>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      eventId: params.id,
    },
  }
}

export default Event

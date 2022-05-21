import React from 'react'
import Container from '~/components/Container'
import {
  Image,
  H2,
  Text,
  H1,
  Collapsible,
  H3,
  Pill,
  space,
  fontSize,
} from '@ticketswap/solar'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import Head from 'next/head'
import { GQL_URI } from '~/graphql/client'
import styled from '@emotion/styled'
import { Ticket } from '@ticketswap/solar/icons'
import Link from 'next/link'

const StyledHeading = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

// NOTE: Chose to use `grid` for better spacing
const StyledSubHeading = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 70% 1fr;
  align-items: center;
  justify-items: start;
  gap: ${space[16]};
`

const StyledH2 = styled(H2)`
  font-size: ${fontSize[16]};
  grid-column-start: 2;
`

// NOTE: Wanted to do this with a blurred Cover from Solar but couldn't get it to work
const StyledImage = styled(Image)`
  position: relative;
  max-height: 400px;
`

const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${space[16]};
  }
`

const Event = ({ data, loading }) => {
  if (!data) return null
  if (loading) return <div>Loading...</div>

  const { name, date, location, imageUrl, description } = data.event

  return (
    <main>
      {/* NOTE: Add title tags for ease of use */}
      <Head>
        <title>{name} | TicketSwap Challenger</title>
      </Head>

      <StyledHeading>
        <H1>{name}</H1>
        <StyledSubHeading>
          {/* NOTE: Follow heading guidelines for a11y */}
          {/* NOTE: Time arguably not so important; keep it down to important info for user. */}
          <StyledH2>
            {new Date(date).toLocaleDateString()}, {location}
          </StyledH2>
          <Link href="https://www.ticketswap.com/">
            <Pill leftAdornment={<Ticket size={16} />}>25</Pill>
          </Link>
        </StyledSubHeading>
      </StyledHeading>

      <StyledImage src={imageUrl} />

      <Container>
        <Text>{description}</Text>
      </Container>
      <Container>
        <Collapsible buttonLabel="Venue info">
          <ul>
            <StyledListItem>
              <H3>Lockers</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </StyledListItem>
            <StyledListItem>
              <H3>Access</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </StyledListItem>
            <StyledListItem>
              <H3>Safety</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </StyledListItem>
          </ul>
        </Collapsible>
      </Container>
    </main>
  )
}

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    // NOTE: As far as I understand from the following post I need to instantiate a new client to work in SSR. For re-use could make this an exported value in client.js. https://stackoverflow.com/questions/67163527/does-usequery-run-on-server-side-rendering
    uri: GQL_URI,
    cache: new InMemoryCache(),
  })

  const { data, loading } = await client.query({
    query: getEvent,
    variables: {
      id: parseInt(params.id),
    },
  })

  return {
    props: {
      eventId: params.id,
      data,
      loading,
    },
  }
}

export default Event

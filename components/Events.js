import React from 'react'
import { Card, space, Spinner, color } from '@ticketswap/solar'
import styled from '@emotion/styled'
import Link from 'next/link'
import { WarningRounded } from '@ticketswap/solar/icons'
import Container from './Container'

// NOTE: I like `Styled{{component}}` because it helps to differentiate between the a regular import and one with custom stylings
const StyledWrapper = styled.div`
  display: grid;
  grid-gap: ${space[16]};
  grid-template-columns: repeat(
    auto-fit,
    minmax(350px, 1fr)
  ); // 1 NOTE: Change card spacing for greater responsiveness
`

const StyledLink = styled.a`
  max-width: 350px;
`

const StyledErrorWarning = styled(Card)`
  background-color: ${color.failureBackground};
`

const Events = ({ data, loading }) => {
  if (loading) {
    return (
      <StyledWrapper>
        <Spinner />
      </StyledWrapper>
    )
  }

  // 3 NOTE: Bit hacky, maybe. Could also pass in a query type def as a string and extract that. But the queries in this proj always return one item in the data obj, so I feel this is safe for now.
  const dataLabel = Object.keys(data)[0]
  const events = data[dataLabel]

  const noResults = data && events.length === 0

  return (
    <StyledWrapper>
      {events.map(({ id, name, location, date, imageUrl }) => (
        <Link href={`/event/${id}`} key={id} passHref>
          <StyledLink>
            <Card
              title={name}
              // NOTE: Would like to change the subtitle colour because it's bad for a11y
              subtitle={`${location} - ${new Date(date).toLocaleDateString()}`}
              image={imageUrl}
            />
          </StyledLink>
        </Link>
      ))}
      {noResults && (
        <Container>
          <StyledErrorWarning
            title="No results"
            subtitle="Try searching for something else"
            leftAdornment={<WarningRounded color={color.failure} />}
          />
        </Container>
      )}
    </StyledWrapper>
  )
}

export default Events

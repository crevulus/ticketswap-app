import React from 'react'
import { TicketSwap } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import { space, color, H1, shadow, fontSize } from '@ticketswap/solar'
import { CoverLink } from './CoverLink'

const Wrapper = styled.div`
  text-align: center;
  padding: ${space[16]} 0;
  margin-bottom: ${space[32]};
  color: ${color.lightForeground};
  background-color: ${color.brand};
  box-shadow: ${shadow.strong};
`

const Title = styled(H1)`
  color: ${color.lightForeground};
`

const LinksContainer = styled.div`
  display: flex;
  gap: ${space[16]};
  justify-content: center;
  align-items: center;
  margin: ${space[16]};
  font-size: ${fontSize[24]};
`

const Cover = () => {
  return (
    <Wrapper>
      <TicketSwap size={64} />
      <Title>TicketSwap Challenger</Title>
      <LinksContainer>
        <CoverLink href="/" label="Home" />
        <CoverLink href="/search" label="Search" />
      </LinksContainer>
    </Wrapper>
  )
}

export default Cover

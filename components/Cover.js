import React from 'react'
import { TicketSwap } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import { space, color, H1, shadow, fontSize } from '@ticketswap/solar'
import { CoverLink } from './CoverLink'

const StyledWrapper = styled.div`
  text-align: center;
  padding: ${space[16]} 0;
  color: ${color.lightForeground};
  background-color: ${color.brand};
  box-shadow: ${shadow.strong};
`

const StyledTitle = styled(H1)`
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
    <StyledWrapper>
      <TicketSwap size={64} />
      <StyledTitle>TicketSwap Challenger</StyledTitle>
      <LinksContainer>
        <CoverLink href="/" label="Home" />
        <CoverLink href="/search" label="Search" />
      </LinksContainer>
    </StyledWrapper>
  )
}

export default Cover

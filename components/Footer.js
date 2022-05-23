import React from 'react'
import styled from '@emotion/styled'
import { space } from '@ticketswap/solar'
import { TicketSwap } from '@ticketswap/solar/icons'

const StyledWrapper = styled.footer`
  padding: ${space[32]} 0;
  margin-top: ${space[32]};
  text-align: center;
`

const Footer = () => (
  <StyledWrapper>
    <TicketSwap /> TicketSwap
  </StyledWrapper>
)

export default Footer

import React from 'react'
import styled from '@emotion/styled'
import { space } from '@ticketswap/solar'
import { TicketSwap } from '@ticketswap/solar/icons'

const Wrapper = styled.footer`
  padding: ${space[32]} 0;
  margin-top: ${space[32]};
  text-align: center;
`

// NOTE: With more time I'd make this a sticky footer, like I did it in https://github.com/crevulus/kijkkat/blob/main/src/styles/index.css
const Footer = () => (
  <Wrapper>
    <TicketSwap /> TicketSwap
  </Wrapper>
)

export default Footer

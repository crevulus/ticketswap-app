import React from 'react'
import styled from '@emotion/styled'
import { space, sizes } from '@ticketswap/solar'

// NOTE: Changed this from `main` for better a11y
const Container = styled.div`
  padding: 0 ${space[16]};
  margin: ${space[16]} auto;
  max-width: ${sizes.tablet}px;
`

export default Container

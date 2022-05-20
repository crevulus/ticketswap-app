import styled from '@emotion/styled'
import { color, fontWeight, shadow } from '@ticketswap/solar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const StyledLink = styled.a`
  font-weight: ${({ $active }) =>
    $active ? fontWeight.bold : fontWeight.regular};
  color: ${({ $active }) =>
    $active ? color.foregroundMuted : color.lightForeground};
  cursor: pointer;

  &:hover {
    color: ${({ $active }) => !$active && color.foregroundSubtle};
  }
`

export const CoverLink = ({ href, label }) => {
  const router = useRouter()

  const active = router.pathname === href

  return (
    <Link href={href}>
      <StyledLink $active={active}>{label}</StyledLink>
    </Link>
  )
}

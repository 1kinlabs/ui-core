/* eslint-disable react/jsx-props-no-spreading */
import { PropsWithChildren } from 'react'
import { Card } from '@mui/material'
import { styled } from 'theme'

type Props = PropsWithChildren<{
  className?: string
}>

export const PricingCard = styled(({ className, children }: Props) => (
  <Card className={className}>
    {children}
  </Card>
))`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.surface.paperLight};
  position: relative;
`

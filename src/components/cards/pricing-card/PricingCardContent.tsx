import { CardContent } from '@mui/material'
import { styled } from 'theme'

export const PricingCardContent = styled(CardContent)`
  background-color: ${({ theme }) => theme.surface.body};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing(2)};
`

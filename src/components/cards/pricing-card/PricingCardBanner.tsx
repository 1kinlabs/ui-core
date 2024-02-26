import { Box } from '@mui/material'
import { styled } from 'theme'

export const PricingCardBanner = styled(Box)`
  background: linear-gradient(90deg, #00C5F8 5.88%, #8A5EFF 49.98%, #FF00F4 97.99%);
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  text-align: center;
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.surface.body};
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
`

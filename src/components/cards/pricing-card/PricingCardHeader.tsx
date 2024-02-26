import { styled } from 'theme'

export const PricingCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.surface.paper};
  padding: ${({ theme }) => theme.spacing(4)};
`

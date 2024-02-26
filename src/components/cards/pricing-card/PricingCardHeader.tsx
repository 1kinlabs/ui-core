import { styled } from 'theme'

export const PricingCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.surface.paper};
  padding: ${({ theme }) => theme.spacing(4)};
`

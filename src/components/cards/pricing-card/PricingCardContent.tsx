import { styled } from 'theme'

export const PricingCardContent = styled.div`
  background-color: ${({ theme }) => theme.surface.body};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`

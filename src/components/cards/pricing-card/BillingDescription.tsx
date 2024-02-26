import { styled } from 'theme';


export const BillingDescription = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
`;

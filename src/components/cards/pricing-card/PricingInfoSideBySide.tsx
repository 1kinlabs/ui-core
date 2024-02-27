import { Typography } from '@mui/material'
import { styled } from 'theme'
import { PricingCardPrice } from './PricingCardPrice'
import { BillingDescription } from './BillingDescription'

type Props = {
  className?: string
  price: number
  billingFrequency: 'monthly' | 'yearly'
}
export const PricingInfoSideBySide = styled(({ className, price, billingFrequency }: Props) => (
  <div className={className}>
    <PricingCardPrice>{Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(price)}</PricingCardPrice>
    <BillingDescription>
      <Typography variant="overline" fontSize={12} lineHeight="15px">{'PER MONTH'}</Typography>
      <Typography variant="overline" fontSize={12} lineHeight="15px">{`BILLED ${billingFrequency}`}</Typography>
    </BillingDescription>
  </div>
))`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
`

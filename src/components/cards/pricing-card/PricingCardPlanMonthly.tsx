import { OnePassLogo } from 'svg/1Pass'
import { Button, Typography } from '@mui/material'
import { PricingCard } from './PricingCard'
import { PricingCardContent } from './PricingCardContent'
import { PricingCardBanner } from './PricingCardBanner'
import { PricingCardHeader } from './PricingCardHeader'
import { PricingCardHeaderTextContainer } from './PricingCardHeaderTextContainer'
import { PlanBenefitsListPaid } from './PlanBenefitsListPaid'
import { PricingInfoSideBySide } from './PricingInfoSideBySide'
import { PricingCardPlanProps } from './PricingCardPlanProps'

type Props = PricingCardPlanProps
export function PricingCardMonthly({ isCurrent }: Props) {
  const btnDisabled = isCurrent ?? false
  const btnLabel = isCurrent ? 'Current' : 'Get Started'
  return (
    <PricingCard>
      <PricingCardHeader>
        <OnePassLogo />
        <PricingCardHeaderTextContainer>
          <Typography variant="h4">{'Monthly'}</Typography>
          <Typography variant="body1">
            {'Get serious about your collectibles and claim all you can!'}
          </Typography>
        </PricingCardHeaderTextContainer>
      </PricingCardHeader>
      <PricingCardBanner>{'Early Bird Pricing'}</PricingCardBanner>
      <PricingCardContent>
        <PricingInfoSideBySide price={4.99} billingFrequency="monthly" />
        <Typography variant="body2" fontSize={20}><s>{'Normally $9.99'}</s></Typography>
        <div>
          <Button fullWidth variant="outlined" disabled={btnDisabled} color="primary">
            {btnLabel}
          </Button>
          <PlanBenefitsListPaid />
        </div>
      </PricingCardContent>
    </PricingCard>
  )
}

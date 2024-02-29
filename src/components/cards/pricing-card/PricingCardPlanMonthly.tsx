import { useEffect } from 'react'
import { OnePassLogo } from 'svg/1Pass'
import { Typography } from '@mui/material'
import { PricingPlan } from 'types/PricingPlan'
import useCheckout from 'data/billing/useCheckout'
import Button from 'atoms/Button'
import { PricingCard } from './PricingCard'
import { PricingCardContent } from './PricingCardContent'
import { PricingCardBanner } from './PricingCardBanner'
import { PricingCardHeader } from './PricingCardHeader'
import { PricingCardHeaderTextContainer } from './PricingCardHeaderTextContainer'
import { PlanBenefitsListPaid } from './PlanBenefitsListPaid'
import { PricingInfoSideBySide } from './PricingInfoSideBySide'
import { PricingCardPlanProps } from './types'

type Props = PricingCardPlanProps
export function PricingCardMonthly({ isCurrent }: Props) {
  const {
    mutate,
    isPending,
    isSuccess,
    data,
  } = useCheckout(PricingPlan.monthly)

  useEffect(() => {
    if (data?.url) {
      window.location.href = data.url
    }
  }, [data?.url])

  const btnDisabled = isPending || (isCurrent ?? false)
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
          <Button loading={isPending || isSuccess} fullWidth variant="outlined" disabled={btnDisabled} onClick={mutate} color="primary">
            {btnLabel}
          </Button>
          <PlanBenefitsListPaid />
        </div>
      </PricingCardContent>
    </PricingCard>
  )
}

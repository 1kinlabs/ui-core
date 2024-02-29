import { useEffect } from 'react'
import { OnePassLogo } from 'svg/1Pass'
import { Typography } from '@mui/material'
import useCheckout from 'data/billing/useCheckout'
import Button from 'atoms/Button'
import { PricingPlan } from 'types/PricingPlan'
import { PricingCard } from './PricingCard'
import { PricingCardContent } from './PricingCardContent'
import { PricingCardBadge } from './PricingCardBadge'
import { PricingCardBanner } from './PricingCardBanner'
import { PricingCardHeader } from './PricingCardHeader'
import { PricingCardHeaderTextContainer } from './PricingCardHeaderTextContainer'
import { PricingInfoSideBySide } from './PricingInfoSideBySide'
import { PlanBenefitsListPaid } from './PlanBenefitsListPaid'
import { PricingCardPlanProps } from './types'

type Props = PricingCardPlanProps
export function PricingCardYearly({ isCurrent }: Props) {
  const {
    mutate,
    isPending,
    isSuccess,
    data,
  } = useCheckout(PricingPlan.yearly)

  useEffect(() => {
    if (data?.url) {
      window.location.href = data.url
    }
  }, [data?.url])

  const btnDisabled = isPending || (isCurrent ?? false)
  const btnVariant = isCurrent ? 'outlined' : 'contained'
  const btnLabel = isCurrent ? 'Current' : 'Get Started'
  return (
    <PricingCard>
      <PricingCardBadge>{'Best Value'}</PricingCardBadge>
      <PricingCardHeader>
        <OnePassLogo />
        <PricingCardHeaderTextContainer>
          <Typography variant="h4">{'Yearly'}</Typography>
          <Typography variant="body1">
            {'Get serious about your collectibles and claim all you can!'}
          </Typography>
        </PricingCardHeaderTextContainer>
      </PricingCardHeader>
      <PricingCardBanner>{'Early Bird Pricing'}</PricingCardBanner>
      <PricingCardContent>
        <PricingInfoSideBySide price={2.49} billingFrequency="yearly" />
        <Typography variant="body2" fontSize={20}><s>{'Normally $9.99'}</s></Typography>
        <div>
          <Button
            loading={isPending || isSuccess}
            onClick={mutate}
            fullWidth
            variant={btnVariant}
            disabled={btnDisabled}
            color="primary"
          >
            {btnLabel}
          </Button>
          <PlanBenefitsListPaid />
        </div>
      </PricingCardContent>
    </PricingCard>
  )
}

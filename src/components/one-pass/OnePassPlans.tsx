import { PricingCardFree } from 'components/cards/pricing-card/PricingCardPlanFree'
import { PricingCardMonthly } from 'components/cards/pricing-card/PricingCardPlanMonthly'
import { PricingCardYearly } from 'components/cards/pricing-card/PricingCardPlanYearly'
import { container } from 'css/media'
import { styled } from 'theme'

const Container = styled.div`
  flex-grow: 1;
`

const PlanColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(4)};
  
  ${container.mobile} {
    grid-template-columns: auto;
    place-content: center;
  }

  ${container.mobileSmall} {
    grid-template-columns: auto;
    place-content: center;
  }
`

type Props = {
  currentPlan?: 'free' | 'monthly' | 'yearly'
}
export function OnePassPlans({ currentPlan }: Props) {
  return (
    <Container>
      <PlanColumns>
        <PricingCardFree isCurrent={currentPlan === 'free'} />
        <PricingCardMonthly isCurrent={currentPlan === 'monthly'} />
        <PricingCardYearly isCurrent={currentPlan === 'yearly'} />
      </PlanColumns>
    </Container>
  )
}

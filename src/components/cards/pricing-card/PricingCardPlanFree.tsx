import { OnePassLogo } from 'svg/1Pass'
import { Button, Typography } from '@mui/material'
import { styled } from 'theme'
import { PricingCard } from './PricingCard'
import { PricingCardContent } from './PricingCardContent'
import { PricingCardHeader } from './PricingCardHeader'
import { PricingCardList, PricingCardListItem } from './PricingCardList'
import { PricingCardPrice } from './PricingCardPrice'
import { PricingCardHeaderTextContainer } from './PricingCardHeaderTextContainer'
import { PricingCardPlanProps } from './types'

type Props = PricingCardPlanProps
export const PricingCardFree = styled(({ isCurrent }: Props) => {
  const btnDisabled = isCurrent ?? false
  const btnLabel = isCurrent ? 'Current' : 'Get Started'

  return (
    <PricingCard>
      <PricingCardHeader>
        <OnePassLogo visibility="hidden" />
        <PricingCardHeaderTextContainer>
          <Typography variant="h4">{'Free'}</Typography>
          <Typography variant="body1">
            {'Find great games, and claim a little loot.'}
          </Typography>
        </PricingCardHeaderTextContainer>
      </PricingCardHeader>
      <PricingCardContent>
        <PricingCardPrice>{'$0'}</PricingCardPrice>
        <Button fullWidth variant="outlined" disabled={btnDisabled} color="primary">
          {btnLabel}
        </Button>
        <PricingCardList>
          <PricingCardListItem>
            {'7 day risk-free trial'}
          </PricingCardListItem>
          <PricingCardListItem>
            {'Unlimited Credits'}
          </PricingCardListItem>
        </PricingCardList>
      </PricingCardContent>
    </PricingCard>
  )
})`
`

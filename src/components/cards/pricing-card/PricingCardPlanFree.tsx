import { OnePassLogo } from 'svg/1Pass'
import { Button, Typography } from '@mui/material'
import { styled } from 'theme'
import { PricingCard } from './PricingCard'
import { PricingCardContent } from './PricingCardContent'
import { PricingCardHeader } from './PricingCardHeader'
import { PricingCardList, PricingCardListItem } from './PricingCardList'
import { PricingCardPrice } from './PricingCardPrice'
import { PricingCardHeaderTextContainer } from './PricingCardHeaderTextContainer'

type Props = {
  isCurrent: boolean
}
export const PricingCardFree = styled(({ isCurrent }: Props) => {
  const btnDisabled = isCurrent ?? false
  const btnLabel = isCurrent ? 'Current' : 'Get Started'

  return (
    <PricingCard>
      <PricingCardHeader>
        <OnePassLogo visibility="hidden" />
        <PricingCardHeaderTextContainer>
          <Typography variant="h2">{'Free'}</Typography>
          <Typography variant="body1">
            {'Get serious about your collectibles and claim all you can!'}
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

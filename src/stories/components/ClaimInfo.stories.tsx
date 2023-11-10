/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react'
import { styled } from 'styled-components'

import ClaimInfo, { Props } from 'components/collectible/ClaimInfo'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'
import { pineapplePizzaHero } from 'mock-data/game'
import { ClaimStatus } from 'enums/ClaimStatus'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
`

function Component(props: Props) {
  return (
    <Wrapper>
      <ClaimInfo {...props} />
    </Wrapper>
  )
}

const meta: Meta<typeof ClaimInfo> = {
  title: 'components/collectible/ClaimInfo',
  component: Component,
  parameters: {
    layout: 'centered',
    deepControls: { enabled: true },
  },
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
  argTypes: {
    'game.title': { control: 'text' },
    'collectible.title': { control: 'text' },
    'collectible.claimStatus': { control: 'radio', options: Object.values(ClaimStatus) },
    'collectible.total_count': { control: 'number' },
    'collectible.available_codes': { control: 'number' },
    'collectible.claimed_count': { control: 'number' },
    'collectible.auto_generate_claim_code': { control: 'boolean' },
  },
} as Meta<typeof ClaimInfo>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Claimed: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.COMPLETED },
  },
}

export const InProgressClaim: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.IN_PROGRESS },
  },
}

export const AvailableForClaim: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.AVAILABLE },
  },
}

export const SoldOutClaim: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.SOLD_OUT },
  },
}

export const ExpiredClaim: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.EXPIRED },
  },
}

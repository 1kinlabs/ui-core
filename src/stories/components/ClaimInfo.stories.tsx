import type { Meta, StoryObj } from '@storybook/react'

import ClaimInfo from 'components/collectible/ClaimInfo'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'
import { pineapplePizzaHero } from 'mock-data/game'
import { ClaimStatus } from 'enums/ClaimStatus'

const meta: Meta<typeof ClaimInfo> = {
  title: 'components/collectible/ClaimInfo',
  component: ClaimInfo,
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
type Story = StoryObj<typeof meta>

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
    collectible: {
      ...pineapplePizzaHeroCard,
      claimStatus: ClaimStatus.SOLD_OUT,
      available_codes: 0,
    },
  },
}

export const ExpiredClaim: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.EXPIRED },
  },
}

export const AvailableForClaimUserIsLoggedIn: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.AVAILABLE },
    user: { id: 120, availableCredits: 2 },
  },
}

export const SoldOutClaimUserIsLoggedIn: Story = {
  args: {
    collectible: {
      ...pineapplePizzaHeroCard,
      claimStatus: ClaimStatus.SOLD_OUT,
      available_codes: 0,
    },
    user: { id: 120, availableCredits: 1 },
  },
}

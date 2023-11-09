import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'
import Collectible from 'pages/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'
import { completedClaim, inProgressClaim } from 'mock-data/claim'

const meta: Meta<typeof Collectible> = {
  title: 'pages/Collectible',
  component: Collectible,
  parameters: {
    layout: 'centered',
  },
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
  tags: ['autodocs'],
} as Meta<typeof Collectible>

export default meta
type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.AVAILABLE },
  },
}

export const InProgress: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.IN_PROGRESS },
    claim: inProgressClaim,
  },
}

export const Completed: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.COMPLETED },
    claim: completedClaim,
  },
}

export const SoldOut: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.SOLD_OUT },
  },
}

export const Expired: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.EXPIRED },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

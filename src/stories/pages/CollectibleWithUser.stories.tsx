import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import {
  pineapplePizzaHeroCard, shieldOfTheAncients,
} from 'mock-data/collectible'
import Collectible from 'pages/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'
import { SubscriptionType } from 'types/Subscription'

const meta: Meta<typeof Collectible> = {
  title: 'pages/Collectible/withAuthenticatedUser',
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
type Story = StoryObj<typeof meta>

export const AvailableWithNoCredits: Story = {
  args: {
    collectible: { ...shieldOfTheAncients, claimStatus: ClaimStatus.AVAILABLE },
    user: { id: 1, availableCredits: 0 },
  },
}

export const AvailableWithCredits: Story = {
  args: {
    collectible: { ...shieldOfTheAncients, claimStatus: ClaimStatus.AVAILABLE },
    user: { id: 1, availableCredits: 10 },
  },
}

export const AvailableWithUnlimitedSubscription: Story = {
  args: {
    collectible: { ...shieldOfTheAncients, claimStatus: ClaimStatus.AVAILABLE },
    user: {
      id: 1,
      availableCredits: 10,
      subscription: { id: 1, type: SubscriptionType.UNLIMITED },
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHeroCard } from 'mock-data/collectible'
import CollectibleCard from 'components/cards/CollectibleCard'
import { ClaimStatus } from 'enums/ClaimStatus'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'components/CollectibleCard',
  component: CollectibleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CollectibleCard>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Completed: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
  },
}

export const InProgress: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.IN_PROGRESS },
  },
}

export const Available: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claimStatus: ClaimStatus.AVAILABLE },
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

export const Focused: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
  },
  parameters: {
    pseudo: { focus: true },
  },
}

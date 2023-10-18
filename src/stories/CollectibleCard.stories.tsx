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
  tags: ['autodocs']
} satisfies Meta<typeof CollectibleCard>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
    isSelected: false,
    claimStatus: ClaimStatus.IN_PROGRESS
  },
}

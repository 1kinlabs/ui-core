import type { Meta, StoryObj } from '@storybook/react'

import NextSteps from 'components/collectible/NextSteps'
import { cloakOfTheAges, pineapplePizzaHeroCard } from 'mock-data/collectible'

const meta = {
  title: 'components/collectible/NextSteps',
  component: NextSteps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NextSteps>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    claimCode: '1234567',
    claimInstructions: cloakOfTheAges.claim_instructions,
  },
}

export const Tablet: Story = {
  args: {
    claimCode: '1234567',
    claimInstructions: pineapplePizzaHeroCard.claim_instructions,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    claimCode: '1234567',
    claimInstructions: cloakOfTheAges.claim_instructions,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import ClaimProgress from 'components/collectible/ClaimProgress'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'

const meta: Meta<typeof ClaimProgress> = {
  title: 'components/collectible/ClaimProgress',
  component: ClaimProgress,
  parameters: {
    layout: 'padded',
    deepControls: { enabled: true },
  },
  argTypes: {
    'collectible.total_count': { control: 'number' },
    'collectible.available_codes': { control: 'number' },
    'collectible.claimed_count': { control: 'number' },
    'collectible.auto_generate_claim_code': { control: 'boolean' },
  },
  tags: ['autodocs'],
} as Meta<typeof ClaimProgress>

export default meta
type Story = StoryObj<typeof meta>;

const collectible = {
  id: pineapplePizzaHeroCard.id,
  title: pineapplePizzaHeroCard.title,
  assets: pineapplePizzaHeroCard.assets,
  claimStatus: pineapplePizzaHeroCard.claimStatus,
  claim_instructions: pineapplePizzaHeroCard.claim_instructions,
  total_count: 100,
  available_codes: 30,
  claimed_count: 100,
  auto_generate_claim_code: false,
}

export const Default: Story = {
  args: {
    collectible,
  },
}

export const MaxAmount: Story = {
  args: {
    collectible: {
      ...collectible,
      available_codes: 100,
    },
  },
}

export const OverflowAmount: Story = {
  args: {
    collectible: {
      ...collectible,
      available_codes: 1000,
    },
  },
}

export const NegativeAmount: Story = {
  args: {
    collectible: {
      ...collectible,
      available_codes: -100,
    },
  },
}

export const Mobile: Story = {
  args: {
    collectible,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

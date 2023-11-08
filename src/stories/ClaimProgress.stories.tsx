import type { Meta, StoryObj } from '@storybook/react'

import ClaimProgress from 'components/collectible/ClaimProgress'

const meta = {
  title: 'components/collectible/ClaimProgress',
  component: ClaimProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClaimProgress>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    claimed: 35,
    totalAvailable: 100,
  },
}

export const MaxAmount: Story = {
  args: {
    claimed: 100,
    totalAvailable: 100,
  },
}

export const OverflowAmount: Story = {
  args: {
    claimed: 120,
    totalAvailable: 100,
  },
}

export const Mobile: Story = {
  args: {
    claimed: 35,
    totalAvailable: 100,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

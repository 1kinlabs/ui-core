import type { Meta, StoryObj } from '@storybook/react'

import Chip, { TypeKey } from 'atoms/Chip'

const meta = {
  title: 'atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    type: TypeKey.IN_PROGRESS,
  },
}

export const SoldOut: Story = {
  args: {
    type: TypeKey.SOLD_OUT,
  },
}

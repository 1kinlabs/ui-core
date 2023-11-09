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

export const Available: Story = {
  args: {
    type: TypeKey.AVAILABLE,
  },
}

export const InProgress: Story = {
  args: {
    type: TypeKey.IN_PROGRESS,
  },
}

export const Completed: Story = {
  args: {
    type: TypeKey.COMPLETED,
  },
}

export const SoldOut: Story = {
  args: {
    type: TypeKey.SOLD_OUT,
  },
}

export const Expired: Story = {
  args: {
    type: TypeKey.EXPIRED,
  },
}

export const AvailableOutline: Story = {
  args: {
    type: TypeKey.AVAILABLE,
    outline: true,
  },
}

export const InProgressOutline: Story = {
  args: {
    type: TypeKey.IN_PROGRESS,
    outline: true,
  },
}

export const CompletedOutline: Story = {
  args: {
    type: TypeKey.COMPLETED,
    outline: true,

  },
}

export const SoldOutOutline: Story = {
  args: {
    type: TypeKey.SOLD_OUT,
    outline: true,
  },
}

export const ExpiredOutline: Story = {
  args: {
    type: TypeKey.EXPIRED,
    outline: true,
  },
}

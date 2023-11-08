import type { Meta, StoryObj } from '@storybook/react'

import TextField from 'atoms/TextField'

const meta = {
  title: 'atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Some text',
    value: '12345345',
  },
}

export const Compact: Story = {
  args: {
    label: 'Some text',
    value: '12345345',
    compact: true,
  },
}

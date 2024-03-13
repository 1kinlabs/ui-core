import type { Meta, StoryObj } from '@storybook/react'

import CopyInput from 'components/CopyInput'

const meta = {
  title: 'components/CopyInput',
  component: CopyInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CopyInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '1234567',
    label: 'Redemption code',
  },
}

export const Disabled: Story = {
  args: {
    value: '######',
    label: 'Redemption code',
    disabled: true,
  },
}

export const Mobile: Story = {
  args: {
    value: '1234567',
    label: 'Some label',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import ClaimCode from 'components/collectible/ClaimCode'

const meta = {
  title: 'components/collectible/ClaimCode',
  component: ClaimCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClaimCode>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: '1234567',
  },
}

export const NoCode: Story = {
  args: {},
}

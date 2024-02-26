import type { Meta, StoryObj } from '@storybook/react'
import { PricingCard } from 'components/cards/pricing-card/PricingCard'

const meta = {
  title: 'components/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
  },
}

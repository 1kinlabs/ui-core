import type { Meta, StoryObj } from '@storybook/react'
import { PricingCardMonthly } from 'components/cards/pricing-card/PricingCardPlanMonthly'

const meta = {
  title: 'components/pricing-cards/PricingCardMonthly',
  component: PricingCardMonthly,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingCardMonthly>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

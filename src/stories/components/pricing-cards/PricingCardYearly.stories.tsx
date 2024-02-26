import type { Meta, StoryObj } from '@storybook/react'
import { PricingCardYearly } from 'components/cards/pricing-card/PricingCardPlanYearly'

const meta = {
  title: 'components/pricing-cards/PricingCardYearly',
  component: PricingCardYearly,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingCardYearly>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

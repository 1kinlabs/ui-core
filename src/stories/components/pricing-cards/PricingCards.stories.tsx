import type { Meta, StoryObj } from '@storybook/react'
import { PricingCardFree } from 'components/cards/pricing-card/PricingCardPlanFree'

const meta = {
  title: 'components/pricing-cards/PricingCards',
  component: PricingCardFree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingCardFree>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

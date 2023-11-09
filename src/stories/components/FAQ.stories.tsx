import type { Meta, StoryObj } from '@storybook/react'

import FAQ from 'components/FAQ'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'

const meta = {
  title: 'components/collectible/FAQ',
  component: FAQ,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FAQ>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqs: pineapplePizzaHeroCard.faq_list,
  },
}

export const Tablet: Story = {
  args: {
    faqs: pineapplePizzaHeroCard.faq_list,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    faqs: pineapplePizzaHeroCard.faq_list,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

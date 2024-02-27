import type { Meta, StoryObj } from '@storybook/react'
import { OnePassPlans } from 'components/one-pass/OnePassPlans'

const meta = {
  title: 'components/pricing-cards/OnePassPlans',
  component: OnePassPlans,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OnePassPlans>

export default meta
type Story = StoryObj<typeof meta>

export const Free: Story = {
  args: {
    currentPlan: 'free',
  },
}

export const Monthly: Story = {
  args: {
    currentPlan: 'monthly',
  },
}

export const Yearly: Story = {
  args: {
    currentPlan: 'yearly',
  },
}

export const MobileSmall: Story = {
  args: {
    currentPlan: 'free',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}

export const Mobile: Story = {
  args: {
    currentPlan: 'free',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    currentPlan: 'free',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

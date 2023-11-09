import type { Meta, StoryObj } from '@storybook/react'

import NextSteps from 'components/collectible/NextSteps'
import { cloakOfTheAges, pineapplePizzaHeroCard } from 'mock-data/collectible'
import { inProgressClaim } from 'mock-data/claim'

const meta = {
  title: 'components/collectible/NextSteps',
  component: NextSteps,
  parameters: {
    layout: 'centered',
  },
  args: {
    claim: inProgressClaim,
    collectible: cloakOfTheAges,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NextSteps>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const MaliciousClaimInstructions: Story = {
  args: {
    collectible: { ...cloakOfTheAges, claim_instructions: "<img src='invalid.jpg' onerror='alert(\"This should not run if sanitized correctly\")' /><p>If you did not see an alert, you have sanitized your HTML correctly.</p>" },
  },
}

export const ContainsImage: Story = {
  args: {
    collectible: { ...pineapplePizzaHeroCard, claim_instructions: `<img height="340px" width="600px" src="${pineapplePizzaHeroCard.assets.featureImage}" /> <p>Do something cool!</p>` },
  },
}

export const ContainsLink: Story = {
  args: {
    collectible: { ...cloakOfTheAges, claim_instructions: '<p>This should be wrapped in a link tag: https://www.google.com</p><p>This should also be wrapped in a link tag: www.google.com</p><p>This one should not be wrapped in a new link tag: <a href="https://www.google.com/tag">https://www.google.com/tag</a></p>' },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

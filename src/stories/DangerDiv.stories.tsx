import type { Meta, StoryObj } from '@storybook/react'

import DangerDiv from 'atoms/DangerDiv'
import { cloakOfTheAges, pineapplePizzaHeroCard } from 'mock-data/collectible'

const meta = {
  title: 'atoms/DangerDiv',
  component: DangerDiv,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DangerDiv>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlString: cloakOfTheAges.claim_instructions,
  },
}

export const MaliciousString: Story = {
  args: {
    htmlString: "<img src='invalid.jpg' onerror='alert(\"This should not run if sanitized correctly\")' /><p>If you did not see an alert, you have sanitized your HTML correctly.</p>",
  },
}

export const ContainsImage: Story = {
  args: {
    htmlString: `<img height="340px" width="600px" src="${pineapplePizzaHeroCard.assets.featureImage}" /> <p>Do something cool!</p>`,
  },
}

export const ContainsLink: Story = {
  args: {
    htmlString: '<p>This should be wrapped in a link tag: https://www.google.com</p><p>This should also be wrapped in a link tag: www.google.com</p><p>This one should not be wrapped in a new link tag: <a href="https://www.google.com/tag">https://www.google.com/tag</a></p>',
  },
}

export const Tablet: Story = {
  args: {
    htmlString: pineapplePizzaHeroCard.claim_instructions,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    htmlString: cloakOfTheAges.claim_instructions,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import { pineapplePizzaHeroCard } from 'mock-data/collectible'
import Collectible from 'pages/Collectible'

const meta = {
  title: 'pages/Collectible',
  component: Collectible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collectible>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
}

export const Tablet: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

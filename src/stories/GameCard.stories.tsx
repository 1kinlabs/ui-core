import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import GameCard from 'components/cards/GameCard'

const meta = {
  title: 'components/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameCard>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    game: pineapplePizzaHero,
  },
}

export const Focused: Story = {
  args: {
    game: pineapplePizzaHero,
  },
  parameters: {
    pseudo: { focus: true },
  },
}

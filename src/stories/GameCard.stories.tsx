import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaTrivia } from 'mock-data/game'
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
    game: pineapplePizzaTrivia,
  },
}

export const Focused: Story = {
  args: {
    game: pineapplePizzaTrivia,
  },
  parameters: {
    pseudo: { focus: true },
  },
}

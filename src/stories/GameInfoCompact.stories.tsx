import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import GameInfoCompact from 'components/game/GameInfoCompact'

const meta = {
  title: 'components/game/GameInfoCompact',
  component: GameInfoCompact,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameInfoCompact>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    game: pineapplePizzaHero,
  },
}

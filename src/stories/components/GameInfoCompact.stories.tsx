import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import GameLauncher from 'components/game/GameLauncher'

const meta = {
  title: 'components/game/GameLauncher',
  component: GameLauncher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameLauncher>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    game: pineapplePizzaHero,
  },
}

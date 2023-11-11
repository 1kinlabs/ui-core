import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import GameInfo from 'components/game/GameInfo'

const meta = {
  title: 'components/game/GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameInfo>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    game: pineapplePizzaHero,
  },
}

export const Tablet: Story = {
  args: {
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
    game: pineapplePizzaHero,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const MobileSmall: Story = {
  args: {
    game: pineapplePizzaHero,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}

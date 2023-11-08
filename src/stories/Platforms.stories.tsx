import type { Meta, StoryObj } from '@storybook/react'

import Platforms from 'components/game/Platforms'
import { Platform } from 'enums/Game'

const meta = {
  title: 'components/game/Platforms',
  component: Platforms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Platforms>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    platforms: [
      Platform.ANDROID,
      Platform.STEAM,
      Platform.IOS,
    ],
  },
}

const fullListPlatforms = [

  Platform.ANDROID,
  Platform.EPIC_GAME_STORE,
  Platform.IOS,
  Platform.MAC,
  Platform.PC,
  Platform.PLAYSTATION,
  Platform.STEAM,
  Platform.WEB_BROWSER,
  Platform.XBOX,
]

export const FullList: Story = {
  args: {
    platforms: fullListPlatforms,
  },
}

export const Compact: Story = {
  args: {
    compact: true,
    platforms: fullListPlatforms,
  },
}

export const Small: Story = {
  args: {
    small: true,
    platforms: fullListPlatforms,
  },
}

export const CompactAndSmall: Story = {
  args: {
    compact: true,
    small: true,
    platforms: fullListPlatforms,
  },
}

export const Mobile: Story = {
  args: {
    platforms: fullListPlatforms,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

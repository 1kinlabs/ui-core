import type { Meta, StoryObj } from '@storybook/react'

import { pineapplePizzaHero } from 'mock-data/game'
import {
  pineapplePizzaHeroCard, shieldOfTheAncients,
} from 'mock-data/collectible'
import Collectible from 'pages/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'
import { AuthProvider } from '1sdk/context/AuthContext'

const meta: Meta<typeof Collectible> = {
  title: 'pages/Collectible/withAuthenticatedUser',
  component: Collectible,
  parameters: {
    layout: 'centered',
  },
  args: {
    collectible: pineapplePizzaHeroCard,
    game: pineapplePizzaHero,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AuthProvider
        clientId="757119649002-a1va2jck8mk3m672vn1hgutuel457bpp.apps.googleusercontent.com"
        initialValue={{
          user: { id: 1, availableCredits: 0 },
        }}
      >
        <Story />
      </AuthProvider>
    ),
  ],
} as Meta<typeof Collectible>

export default meta
type Story = StoryObj<typeof meta>

export const AvailableWithNoCredits: Story = {
  args: {
    collectible: { ...shieldOfTheAncients, claimStatus: ClaimStatus.AVAILABLE },
  },
}

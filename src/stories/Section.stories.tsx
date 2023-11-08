import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@mui/material'
import Section from 'atoms/Section'
import { pineapplePizzaHero } from 'mock-data/game'

const meta = {
  title: 'atoms/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {

  args: {
    children: [
      <Typography variant="h6" key="About the game">About the Game</Typography>,
      <Typography variant="body2" key="Game Description">
        {pineapplePizzaHero.description}
      </Typography>,
    ],
  },
}

export const Mobile: Story = {
  args: {
    children: (
      <>
        <Typography variant="h6">About the Game</Typography>
        <Typography variant="body2">
          {pineapplePizzaHero.description}
        </Typography>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

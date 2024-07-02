import type { Meta, StoryObj } from '@storybook/react'
import { TerminalLogo } from 'svg/TerminalLogo'

const meta: Meta<typeof TerminalLogo> = {
  title: 'svg/TerminalLogo',
  component: TerminalLogo,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TerminalLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

import type { Meta, StoryObj } from '@storybook/react'

import LoginSignUp from '1sdk/components/LoginSignUp'

const meta: Meta = {
  title: '1sdk/LoginSignUp',
  component: LoginSignUp,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Default: StoryObj<typeof LoginSignUp> = {
  args: {
    // Define default props if any
  },
}

export const MobileView: StoryObj<typeof LoginSignUp> = {
  args: {
    // Define props specific to mobile view if any
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { AuthProvider } from '1sdk/context/AuthContext'
import LoginSignUp from '1sdk/components/LoginSignUp'

const meta: Meta = {
  title: '1sdk/LoginSignUp',
  component: LoginSignUp,
  decorators: [
    (Story) => (
      <AuthProvider clientId="757119649002-a1va2jck8mk3m672vn1hgutuel457bpp.apps.googleusercontent.com">
        <Story />
      </AuthProvider>
    ),
  ],
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

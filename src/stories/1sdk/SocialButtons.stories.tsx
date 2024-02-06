import type { Meta, StoryObj } from '@storybook/react'

import Amazon, { Scopes } from '1sdk/components/SocialButtons/Amazon'

const meta: Meta = {
  title: '1sdk/SocialButtons/Amazon',
  component: Amazon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    scope: {
      control: { type: 'inline-check', options: Object.values(Scopes) },
      defaultValue: [Scopes.profile],
    },
    onLogin: { action: 'onLogin' },
  },
}

export default meta

export const Default: StoryObj<typeof Amazon> = {
  args: {
    full: false,
  },
}

export const FullWidthButton: StoryObj<typeof Amazon> = {
  args: {
    full: true,
  },
}

export const CustomText: StoryObj<typeof Amazon> = {
  args: {
    full: true,
    children: 'Wooooo custom text yo',
  },
}

export const CustomScope: StoryObj<typeof Amazon> = {
  args: {
    scope: [Scopes.profile, Scopes.sandbox],
    full: true,
    children: 'Log in with Amazon Sandbox',
  },
}

export const MobileView: StoryObj<typeof Amazon> = {
  args: {
    full: true,
    children: 'Log in with Amazon',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

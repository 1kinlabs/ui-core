import type { Meta, StoryObj } from '@storybook/react'

import Dialog from 'components/Dialog'

const meta = {
  title: 'components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: <div>{'Hello World'}</div>,
  },
}

export const IncludesBanner: Story = {
  args: {
    open: true,
    includeBanner: true,
    onClose: () => {},
    children: <div>{'Hello World'}</div>,
  },
}

export const Tablet: Story = {
  args: {
    open: true,
    includeBanner: true,
    onClose: () => {},
    children: <div>{'Hello World'}</div>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    open: true,
    includeBanner: true,
    onClose: () => {},
    children: <div>{'Hello World'}</div>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

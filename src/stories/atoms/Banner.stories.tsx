import type { Meta, StoryObj } from '@storybook/react'

import bannerImage from 'images/banners/1Kin_banner_compressed.jpg'

import Banner from 'atoms/Banner'

const meta = {
  title: 'atoms/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: bannerImage.src,
    alt: '1Kin Banner',
  },
}

export const Tablet: Story = {
  args: {
    src: bannerImage.src,
    alt: '1Kin Banner',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Mobile: Story = {
  args: {
    src: bannerImage.src,
    alt: '1Kin Banner',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}

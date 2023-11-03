import type { Meta, StoryObj } from '@storybook/react'
import MediaSlider from 'components/media/MediaSlider'

const meta = {
  title: 'components/MediaSlider',
  component: MediaSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof MediaSlider>

export default meta
  type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    images: [
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1_c718c8b66c.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/6_b621031e7f.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/8_5ab01e5af9.png',
    ],
  },
}

export const DifferentStartingIndex: Story = {
  args: {
    open: true,
    images: [
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1_c718c8b66c.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/6_b621031e7f.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/8_5ab01e5af9.png',
    ],
    startIndex: 3,
  },
}

export const OnClose: Story = {
  args: {
    open: true,
    images: [
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1_c718c8b66c.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/6_b621031e7f.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/8_5ab01e5af9.png',
    ],
    onClose: () => window.alert('Initiated onClose!'),
  },
}

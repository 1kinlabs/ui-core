import type { Meta, StoryObj } from '@storybook/react'
import MediaGrid from 'components/media/MediaGallery'

const meta = {
  title: 'components/MediaGallery',
  component: MediaGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof MediaGrid>

export default meta
  type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1_c718c8b66c.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/6_b621031e7f.png',
      'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/8_5ab01e5af9.png',
    ],
  },
}

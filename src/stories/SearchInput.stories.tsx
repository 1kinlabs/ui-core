import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from 'atoms/SearchInput'

const meta: Meta = {
  title: 'components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the search input',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Search Collection',
  },
}

export const Compact: Story = {
  args: {
    compact: true,
    label: 'Search Label',
  },
}

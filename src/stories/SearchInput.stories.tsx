import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from 'atoms/SearchInput'

const meta: Meta = {
  title: 'components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the search input',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
  render: () => <SearchInput />,
}

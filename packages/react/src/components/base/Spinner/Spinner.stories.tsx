import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Base/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width and height of the spinner',
    },
    borderWidth: {
      control: 'text',
      description: 'Border width of the spinner',
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner />
      <Spinner width="3rem" borderWidth="0.2rem" />
      <Spinner width="4rem" borderWidth="0.4rem" />
    </div>
  ),
}

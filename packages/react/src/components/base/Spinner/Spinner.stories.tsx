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
    borderWidth: { control: 'text', description: 'Border width' },
    label: { control: 'text', description: 'Accessible label' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

const Variants = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <Spinner />
    <Spinner width="3rem" borderWidth="0.2rem" />
    <Spinner width="4rem" borderWidth="0.4rem" />
    <Spinner width="6rem" borderWidth="0.6rem" />
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

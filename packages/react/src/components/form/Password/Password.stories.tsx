import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from './Password'

const meta: Meta<typeof InputPassword> = {
  title: 'Form/Password',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    showLabel: { control: 'text' },
    hideLabel: { control: 'text' },
  },
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    disabled: false,
    required: false,
  },
}

export default meta
type Story = StoryObj<typeof InputPassword>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <InputPassword label="Default" placeholder="Enter password" />
    <InputPassword
      label="Required"
      placeholder="Enter password"
      required
    />
    <InputPassword
      label="Disabled"
      placeholder="Enter password"
      disabled
    />
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

import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from './Password'

const meta: Meta<typeof InputPassword> = {
  title: 'Form/Password',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
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

export const Playground: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
}

export const Required: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: true,
  },
}

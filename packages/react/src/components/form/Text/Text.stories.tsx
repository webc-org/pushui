import type { Meta, StoryObj } from '@storybook/react'
import { InputText } from './Text'

const meta: Meta<typeof InputText> = {
  title: 'Form/Text',
  component: InputText,
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
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
  },
}

export default meta
type Story = StoryObj<typeof InputText>

export const Playground: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Email',
    defaultValue: 'user@example.com',
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true,
  },
}

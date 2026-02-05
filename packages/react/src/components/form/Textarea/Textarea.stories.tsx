import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './Textarea'

const meta: Meta<typeof InputTextarea> = {
  title: 'Form/Textarea',
  component: InputTextarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Textarea label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    disabled: false,
    showCount: false,
  },
}

export default meta
type Story = StoryObj<typeof InputTextarea>

const TextareaWithState = (args: {
  label?: string
  placeholder?: string
  value?: string
  maxLength?: number
  showCount?: boolean
  disabled?: boolean
}) => {
  const [value, setValue] = useState(args.value || '')
  return <InputTextarea {...args} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: {
    label: 'Description',
    placeholder: 'Enter description',
  },
}

export const WithCharacterCount: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: {
    label: 'Bio',
    placeholder: 'Write a short bio',
    maxLength: 280,
    showCount: true,
  },
}

export const Disabled: Story = {
  render: (args) => <TextareaWithState {...args} />,
  args: {
    label: 'Notes',
    placeholder: 'Enter notes',
    disabled: true,
  },
}

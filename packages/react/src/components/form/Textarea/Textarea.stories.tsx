import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './Textarea'

const meta: Meta<typeof InputTextarea> = {
  title: 'Form/Textarea',
  component: InputTextarea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
    showCount: { control: 'boolean' },
    disabled: { control: 'boolean' },
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

const TextareaWithState = ({
  label,
  placeholder,
  maxLength,
  showCount,
  disabled,
}: {
  label?: string
  placeholder?: string
  maxLength?: number
  showCount?: boolean
  disabled?: boolean
}) => {
  const [value, setValue] = useState('')
  return (
    <InputTextarea
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      maxLength={maxLength}
      showCount={showCount}
      disabled={disabled}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <TextareaWithState label="Default" placeholder="Enter text" />
    <TextareaWithState
      label="With character count"
      placeholder="Max 280 chars"
      maxLength={280}
      showCount
    />
    <TextareaWithState
      label="Disabled"
      placeholder="Cannot edit"
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

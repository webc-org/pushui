import { useId, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputRadio } from './Radio'
import type { RadioOptionTypes } from './Radio.types'

const directions = ['vertical', 'horizontal'] as const

const defaultOptions: RadioOptionTypes[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const meta: Meta<typeof InputRadio> = {
  title: 'Form/Radio',
  component: InputRadio,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio group label',
    },
    direction: {
      control: 'select',
      options: directions,
      description: 'Layout direction',
      table: {
        defaultValue: { summary: 'vertical' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
    },
  },
  args: {
    name: 'radio-group',
    direction: 'vertical',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputRadio>

const RadioWithState = (args: {
  name: string
  options?: RadioOptionTypes[]
  label?: string
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
  value?: string
}) => {
  const id = useId()
  const [value, setValue] = useState(args.value || '')
  return (
    <InputRadio
      {...args}
      name={`${args.name}-${id}`}
      options={args.options || defaultOptions}
      value={value}
      onChange={setValue}
    />
  )
}

export const Playground: Story = {
  render: (args) => <RadioWithState {...args} options={defaultOptions} />,
  args: {
    name: 'playground',
    label: 'Select an option',
    direction: 'vertical',
  },
}

export const Horizontal: Story = {
  render: (args) => <RadioWithState {...args} options={defaultOptions} />,
  args: {
    name: 'horizontal',
    label: 'Select an option',
    direction: 'horizontal',
  },
}

export const WithoutLabel: Story = {
  render: (args) => <RadioWithState {...args} options={defaultOptions} />,
  args: {
    name: 'no-label',
  },
}

export const Disabled: Story = {
  render: (args) => <RadioWithState {...args} options={defaultOptions} />,
  args: {
    name: 'disabled',
    label: 'Disabled options',
    disabled: true,
  },
}

export const Preselected: Story = {
  render: (args) => <RadioWithState {...args} options={defaultOptions} />,
  args: {
    name: 'preselected',
    label: 'Select an option',
    value: 'option2',
  },
}

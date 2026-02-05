import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from './Number'

const meta: Meta<typeof InputNumber> = {
  title: 'Form/Number',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    incrementLabel: { control: 'text' },
    decrementLabel: { control: 'text' },
  },
  args: {
    label: 'Label',
    step: 1,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputNumber>

const NumberWithState = (args: {
  label?: string
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}) => {
  const [value, setValue] = useState(args.value ?? 0)
  return <InputNumber {...args} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: {
    label: 'Quantity',
  },
}

export const WithMinMax: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: {
    label: 'Age',
    min: 0,
    max: 120,
  },
}

export const WithStep: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: {
    label: 'Price',
    step: 0.01,
    min: 0,
  },
}

export const Disabled: Story = {
  render: (args) => <NumberWithState {...args} />,
  args: {
    label: 'Quantity',
    disabled: true,
  },
}

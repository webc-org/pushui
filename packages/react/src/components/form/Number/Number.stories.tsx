import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from './Number'

const meta: Meta<typeof InputNumber> = {
  title: 'Form/Number',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Label', step: 1, disabled: false },
}

export default meta
type Story = StoryObj<typeof InputNumber>

const NumberWithState = ({
  label,
  value: initial = 0,
  min,
  max,
  step,
  disabled,
}: {
  label?: string
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}) => {
  const [value, setValue] = useState(initial)
  return (
    <InputNumber
      label={label}
      value={value}
      onChange={setValue}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <NumberWithState label="Default" />
    <NumberWithState label="With min/max (0–120)" min={0} max={120} />
    <NumberWithState label="Decimal step (0.01)" step={0.01} min={0} />
    <NumberWithState label="Disabled" disabled />
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

import { useId, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputRadio } from './Radio'
import type { RadioOptionTypes } from './Radio.types'

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
    label: { control: 'text' },
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
  },
  args: { name: 'radio-group', direction: 'vertical', disabled: false },
}

export default meta
type Story = StoryObj<typeof InputRadio>

const RadioWithState = ({
  name,
  label,
  direction,
  disabled,
  value: initial = '',
}: {
  name: string
  label?: string
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
  value?: string
}) => {
  const id = useId()
  const [value, setValue] = useState(initial)
  return (
    <InputRadio
      name={`${name}-${id}`}
      options={defaultOptions}
      label={label}
      direction={direction}
      disabled={disabled}
      value={value}
      onChange={setValue}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <RadioWithState
      name="vertical"
      label="Vertical"
      direction="vertical"
    />
    <RadioWithState
      name="horizontal"
      label="Horizontal"
      direction="horizontal"
    />
    <RadioWithState
      name="preselected"
      label="Preselected"
      value="option2"
    />
    <RadioWithState name="disabled" label="Disabled" disabled />
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

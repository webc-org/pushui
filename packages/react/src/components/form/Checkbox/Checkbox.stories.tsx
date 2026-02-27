import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Checkbox label', checked: false, disabled: false },
}

export default meta
type Story = StoryObj<typeof Checkbox>

const CheckboxWithState = ({
  label,
  checked: initial = false,
  disabled,
}: {
  label?: string
  checked?: boolean
  disabled?: boolean
}) => {
  const [checked, setChecked] = useState(initial)
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={setChecked}
      disabled={disabled}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <CheckboxWithState label="Default" />
    <CheckboxWithState label="Checked" checked />
    <CheckboxWithState label="Disabled" disabled />
    <CheckboxWithState label="Disabled + checked" checked disabled />
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

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    label: 'Checkbox label',
    checked: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

const CheckboxWithState = (args: {
  label?: string
  checked?: boolean
  disabled?: boolean
}) => {
  const [checked, setChecked] = useState(args.checked || false)
  return <Checkbox {...args} checked={checked} onChange={setChecked} />
}

export const Playground: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
  },
}

export const Checked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
}

export const Disabled: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    label: 'Disabled and checked',
    checked: true,
    disabled: true,
  },
}

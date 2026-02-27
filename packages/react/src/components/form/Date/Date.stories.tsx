import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputDate } from './Date'

const meta: Meta<typeof InputDate> = {
  title: 'Form/Date',
  component: InputDate,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    dateFormat: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    placeholder: 'Select a date',
    dateFormat: 'yyyy-MM-dd',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputDate>

const DateWithState = ({
  placeholder,
  dateFormat,
  disabled,
  label,
  selected,
  minDate,
  maxDate,
}: {
  placeholder?: string
  dateFormat?: string
  disabled?: boolean
  label?: string
  selected?: Date | null
  minDate?: Date
  maxDate?: Date
}) => {
  const [date, setDate] = useState<Date | null>(selected || null)
  return (
    <InputDate
      placeholder={placeholder}
      dateFormat={dateFormat}
      disabled={disabled}
      label={label}
      selected={date}
      onChange={setDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <DateWithState label="Default" placeholder="Select a date" />
    <DateWithState label="With value" selected={new Date()} />
    <DateWithState
      label="Custom format (dd/MM/yyyy)"
      dateFormat="dd/MM/yyyy"
      selected={new Date()}
    />
    <DateWithState
      label="Future dates only"
      minDate={new Date()}
      placeholder="From today"
    />
    <DateWithState label="Disabled" placeholder="Select a date" disabled />
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

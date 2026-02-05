import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputDate } from './Date'

const meta: Meta<typeof InputDate> = {
  title: 'Form/Date',
  component: InputDate,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    dateFormat: {
      control: 'text',
      description: 'Date format string (yyyy-MM-dd)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label for the date picker',
    },
    selectDateLabel: { control: 'text' },
    previousMonthLabel: { control: 'text' },
    nextMonthLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    applyLabel: { control: 'text' },
  },
  args: {
    placeholder: 'Select a date',
    dateFormat: 'yyyy-MM-dd',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputDate>

const DateWithState = (args: {
  placeholder?: string
  dateFormat?: string
  disabled?: boolean
  label?: string
  selected?: Date | null
  minDate?: Date
  maxDate?: Date
}) => {
  const [date, setDate] = useState<Date | null>(args.selected || null)
  return (
    <InputDate
      {...args}
      selected={date}
      onChange={(newDate) => setDate(newDate)}
    />
  )
}

export const Default: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a date',
    label: 'Date',
  },
}

export const WithValue: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    selected: new Date(),
    label: 'Date',
  },
}

export const WithMinMax: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a date',
    label: 'Date (next 30 days only)',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
}

export const Disabled: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a date',
    label: 'Date',
    disabled: true,
  },
}

export const CustomFormat: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a date',
    label: 'Date (dd/MM/yyyy)',
    dateFormat: 'dd/MM/yyyy',
    selected: new Date(),
  },
}

export const WithoutLabel: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a date',
  },
}

export const PastDatesOnly: Story = {
  render: (args) => <DateWithState {...args} />,
  args: {
    placeholder: 'Select a past date',
    label: 'Birth date',
    maxDate: new Date(),
  },
}

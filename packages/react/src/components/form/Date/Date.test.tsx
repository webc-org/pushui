import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputDate } from './Date'

describe('InputDate', () => {
  it('renders with placeholder', () => {
    render(
      <InputDate
        selected={null}
        onChange={() => {}}
        placeholder="Select a date"
      />
    )

    expect(
      screen.getByPlaceholderText('Select a date')
    ).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<InputDate selected={null} onChange={() => {}} label="Date" />)

    expect(screen.getByText('Date')).toBeInTheDocument()
  })

  it('displays selected date in input', () => {
    const date = new Date(2025, 0, 15) // January 15, 2025
    render(
      <InputDate
        selected={date}
        onChange={() => {}}
        dateFormat="yyyy-MM-dd"
      />
    )

    expect(screen.getByDisplayValue('2025-01-15')).toBeInTheDocument()
  })

  it('opens calendar modal on button click', async () => {
    const user = userEvent.setup()
    render(<InputDate selected={null} onChange={() => {}} />)

    const trigger = screen.getByRole('button', { name: /select/i })
    await user.click(trigger)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('opens calendar modal on input click', async () => {
    const user = userEvent.setup()
    render(
      <InputDate
        selected={null}
        onChange={() => {}}
        placeholder="Select"
      />
    )

    await user.click(screen.getByPlaceholderText('Select'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('calls onChange when date is selected and applied', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<InputDate selected={null} onChange={handleChange} />)

    await user.click(screen.getByRole('button', { name: /select/i }))

    // Click on day 15
    await user.click(screen.getByText('15'))

    // Click Apply button to confirm
    await user.click(screen.getByRole('button', { name: /apply/i }))

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
    expect(handleChange.mock.calls[0][0].getDate()).toBe(15)
  })

  it('disables dates outside min/max range', async () => {
    const user = userEvent.setup()
    const today = new Date()
    const minDate = new Date(today.getFullYear(), today.getMonth(), 10)
    const maxDate = new Date(today.getFullYear(), today.getMonth(), 20)

    render(
      <InputDate
        selected={null}
        onChange={() => {}}
        minDate={minDate}
        maxDate={maxDate}
      />
    )

    await user.click(screen.getByRole('button', { name: /select/i }))

    // Day 5 should be disabled
    const day5 = screen.getByText('5')
    expect(day5).toBeDisabled()

    // Day 15 should be enabled
    const day15 = screen.getByText('15')
    expect(day15).not.toBeDisabled()

    // Day 25 should be disabled
    const day25 = screen.getByText('25')
    expect(day25).toBeDisabled()
  })

  it('is disabled when disabled prop is true', () => {
    render(<InputDate selected={null} onChange={() => {}} disabled />)

    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(screen.getByRole('button')).toBeDisabled()
  })
})

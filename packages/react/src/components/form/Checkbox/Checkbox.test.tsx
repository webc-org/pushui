import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders with label', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        checked={false}
        onChange={() => {}}
        label="Test Label"
      />
    )
    expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox')).toHaveTextContent('Test Label')
  })

  it('renders in checked state', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        checked
        onChange={() => {}}
        label="Checked"
      />
    )
    const input = screen
      .getByTestId('checkbox')
      .querySelector('input') as HTMLInputElement
    expect(input.checked).toBe(true)
  })

  it('renders in unchecked state', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        checked={false}
        onChange={() => {}}
        label="Unchecked"
      />
    )
    const input = screen
      .getByTestId('checkbox')
      .querySelector('input') as HTMLInputElement
    expect(input.checked).toBe(false)
  })

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox
        data-testid="checkbox"
        checked={false}
        onChange={handleChange}
        label="Click me"
      />
    )
    fireEvent.click(screen.getByTestId('checkbox').querySelector('input')!)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('calls onChange with false when unchecking', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox
        data-testid="checkbox"
        checked
        onChange={handleChange}
        label="Uncheck me"
      />
    )
    fireEvent.click(screen.getByTestId('checkbox').querySelector('input')!)
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('applies disabled state', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        checked={false}
        onChange={() => {}}
        disabled
        label="Disabled"
      />
    )
    expect(
      screen.getByTestId('checkbox').querySelector('input')
    ).toBeDisabled()
  })

  it('applies custom className', () => {
    render(
      <Checkbox
        data-testid="checkbox"
        checked={false}
        onChange={() => {}}
        className="custom-class"
      />
    )
    expect(screen.getByTestId('checkbox')).toHaveClass('custom-class')
  })
})

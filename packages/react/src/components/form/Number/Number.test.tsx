import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputNumber } from './Number'

describe('InputNumber', () => {
  it('renders with label', () => {
    render(
      <InputNumber
        data-testid="number"
        value={5}
        onChange={() => {}}
        label="Quantity"
      />
    )
    expect(screen.getByTestId('number')).toBeInTheDocument()
    expect(screen.getByText('Quantity')).toBeInTheDocument()
  })

  it('displays current value', () => {
    render(
      <InputNumber data-testid="number" value={10} onChange={() => {}} />
    )
    const input = screen.getByTestId('number') as HTMLInputElement
    expect(input.value).toBe('10')
  })

  it('calls onChange when typing in input', () => {
    const handleChange = vi.fn()
    render(
      <InputNumber
        data-testid="number"
        value={0}
        onChange={handleChange}
      />
    )
    fireEvent.change(screen.getByTestId('number'), {
      target: { value: '15' },
    })
    expect(handleChange).toHaveBeenCalledWith(15)
  })

  it('increments value when increment button clicked', () => {
    const handleChange = vi.fn()
    render(
      <InputNumber
        data-testid="number"
        value={5}
        onChange={handleChange}
        incrementLabel="Increment"
      />
    )
    fireEvent.click(screen.getByTitle('Increment'))
    expect(handleChange).toHaveBeenCalledWith(6)
  })

  it('decrements value when decrement button clicked', () => {
    const handleChange = vi.fn()
    render(
      <InputNumber
        data-testid="number"
        value={5}
        onChange={handleChange}
        decrementLabel="Decrement"
      />
    )
    fireEvent.click(screen.getByTitle('Decrement'))
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('respects minimum value', () => {
    const handleChange = vi.fn()
    render(
      <InputNumber
        data-testid="number"
        value={3}
        onChange={handleChange}
        min={3}
        decrementLabel="Decrement"
      />
    )
    fireEvent.click(screen.getByTitle('Decrement'))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('respects maximum value', () => {
    const handleChange = vi.fn()
    render(
      <InputNumber
        data-testid="number"
        value={10}
        onChange={handleChange}
        max={10}
        incrementLabel="Increment"
      />
    )
    fireEvent.click(screen.getByTitle('Increment'))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies disabled state', () => {
    render(
      <InputNumber
        data-testid="number"
        value={5}
        onChange={() => {}}
        disabled
      />
    )
    expect(screen.getByTestId('number')).toBeDisabled()
  })
})

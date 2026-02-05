import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputText } from './Text'

describe('InputText', () => {
  it('renders with label', () => {
    render(<InputText data-testid="text" label="Username" />)
    expect(screen.getByTestId('text')).toBeInTheDocument()
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('displays current value', () => {
    render(
      <InputText
        data-testid="text"
        label="Username"
        value="hello"
        onChange={() => {}}
      />
    )
    const input = screen.getByTestId('text') as HTMLInputElement
    expect(input.value).toBe('hello')
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(
      <InputText
        data-testid="text"
        label="Username"
        onChange={handleChange}
      />
    )
    fireEvent.change(screen.getByTestId('text'), {
      target: { value: 'test' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders with placeholder', () => {
    render(
      <InputText
        data-testid="text"
        label="Username"
        placeholder="Enter text"
      />
    )
    const input = screen.getByTestId('text') as HTMLInputElement
    expect(input.placeholder).toBe('Enter text')
  })

  it('applies disabled state', () => {
    render(<InputText data-testid="text" label="Username" disabled />)
    expect(screen.getByTestId('text')).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(
      <InputText
        data-testid="text"
        label="Username"
        className="custom-class"
      />
    )
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })
})

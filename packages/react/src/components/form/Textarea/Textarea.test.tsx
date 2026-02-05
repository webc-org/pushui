import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputTextarea } from './Textarea'

describe('InputTextarea', () => {
  it('renders with label', () => {
    render(<InputTextarea data-testid="textarea" label="Description" />)
    expect(screen.getByTestId('textarea')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('displays current value', () => {
    render(
      <InputTextarea
        data-testid="textarea"
        value="Hello world"
        onChange={() => {}}
      />
    )
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement
    expect(textarea.value).toBe('Hello world')
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(
      <InputTextarea data-testid="textarea" onChange={handleChange} />
    )
    fireEvent.change(screen.getByTestId('textarea'), {
      target: { value: 'New content' },
    })
    expect(handleChange).toHaveBeenCalledWith('New content')
  })

  it('renders with placeholder', () => {
    render(
      <InputTextarea
        data-testid="textarea"
        placeholder="Enter description"
      />
    )
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement
    expect(textarea.placeholder).toBe('Enter description')
  })

  it('applies disabled state', () => {
    render(<InputTextarea data-testid="textarea" disabled />)
    expect(screen.getByTestId('textarea')).toBeDisabled()
  })

  it('renders with specified number of rows', () => {
    render(<InputTextarea data-testid="textarea" rows={6} />)
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement
    expect(textarea.rows).toBe(6)
  })

  it('shows character count when showCount and maxLength are set', () => {
    render(
      <InputTextarea
        data-testid="textarea"
        value="Hello"
        maxLength={100}
        showCount
      />
    )
    expect(screen.getByText('5/100')).toBeInTheDocument()
  })

  it('applies maxLength attribute', () => {
    render(<InputTextarea data-testid="textarea" maxLength={200} />)
    const textarea = screen.getByTestId('textarea') as HTMLTextAreaElement
    expect(textarea.maxLength).toBe(200)
  })
})

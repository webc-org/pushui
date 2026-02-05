import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputPassword } from './Password'

describe('InputPassword', () => {
  it('renders with label', () => {
    render(<InputPassword data-testid="password" label="Password" />)
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('hides value by default', () => {
    render(<InputPassword data-testid="password" label="Password" />)
    const input = screen.getByTestId('password') as HTMLInputElement
    expect(input.type).toBe('password')
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(
      <InputPassword
        data-testid="password"
        label="Password"
        onChange={handleChange}
      />
    )
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'newpassword' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies disabled state', () => {
    render(
      <InputPassword data-testid="password" label="Password" disabled />
    )
    expect(screen.getByTestId('password')).toBeDisabled()
  })

  it('toggles password visibility', () => {
    const { container } = render(
      <InputPassword data-testid="password" label="Password" />
    )
    const input = screen.getByTestId('password') as HTMLInputElement
    const toggle = container.querySelector('button')!
    expect(input.type).toBe('password')
    fireEvent.click(toggle)
    expect(input.type).toBe('text')
    fireEvent.click(toggle)
    expect(input.type).toBe('password')
  })
})

import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button data-testid="button">Click me</Button>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.getByTestId('button')).toHaveTextContent('Click me')
  })

  it('renders with title as fallback content', () => {
    render(<Button data-testid="button" title="Button title" />)
    expect(screen.getByTestId('button')).toHaveTextContent('Button title')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button data-testid="button" onClick={handleClick}>
        Click me
      </Button>
    )
    fireEvent.click(screen.getByTestId('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies disabled state', () => {
    render(
      <Button data-testid="button" disabled>
        Disabled
      </Button>
    )
    expect(screen.getByTestId('button')).toBeDisabled()
  })

  it('has no styled class without variant or appearance', () => {
    render(<Button data-testid="button">Unstyled</Button>)
    expect(screen.getByTestId('button').className).not.toMatch(/styled/)
  })

  it('has styled class with variant', () => {
    render(
      <Button data-testid="button" variant="primary">
        Primary
      </Button>
    )
    expect(screen.getByTestId('button').className).toMatch(/styled/)
    expect(screen.getByTestId('button').className).toMatch(
      /variant-primary/
    )
  })

  it('has styled class with appearance', () => {
    render(
      <Button data-testid="button" appearance="button">
        Styled
      </Button>
    )
    expect(screen.getByTestId('button').className).toMatch(/styled/)
    expect(screen.getByTestId('button').className).toMatch(
      /appearance-button/
    )
  })

  it('has correct type attribute', () => {
    render(
      <Button data-testid="button" type="submit">
        Submit
      </Button>
    )
    expect(screen.getByTestId('button')).toHaveAttribute('type', 'submit')
  })

  it('applies custom className', () => {
    render(
      <Button data-testid="button" className="custom-class">
        Button
      </Button>
    )
    expect(screen.getByTestId('button')).toHaveClass('custom-class')
  })
})

import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Link } from './Link'

describe('Link', () => {
  it('renders with children', () => {
    render(
      <Link data-testid="link" href="#">
        Click me
      </Link>
    )
    expect(screen.getByTestId('link')).toBeInTheDocument()
    expect(screen.getByTestId('link')).toHaveTextContent('Click me')
  })

  it('renders with title as fallback content', () => {
    render(<Link data-testid="link" href="#" title="Link title" />)
    expect(screen.getByTestId('link')).toHaveTextContent('Link title')
  })

  it('has correct href attribute', () => {
    render(
      <Link data-testid="link" href="https://example.com">
        Example
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
  })

  it('has no styled class without variant or appearance', () => {
    render(
      <Link data-testid="link" href="#">
        Unstyled
      </Link>
    )
    expect(screen.getByTestId('link').className).not.toMatch(/styled/)
  })

  it('has styled class with variant', () => {
    render(
      <Link data-testid="link" href="#" variant="primary">
        Primary
      </Link>
    )
    expect(screen.getByTestId('link').className).toMatch(/styled/)
    expect(screen.getByTestId('link').className).toMatch(/variant-primary/)
  })

  it('has styled class with appearance', () => {
    render(
      <Link data-testid="link" href="#" appearance="button">
        Styled
      </Link>
    )
    expect(screen.getByTestId('link').className).toMatch(/styled/)
    expect(screen.getByTestId('link').className).toMatch(
      /appearance-button/
    )
  })

  it('applies custom className', () => {
    render(
      <Link data-testid="link" href="#" className="custom-class">
        Link
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveClass('custom-class')
  })

  it('applies disabled state', () => {
    render(
      <Link data-testid="link" href="#" disabled>
        Disabled
      </Link>
    )
    expect(screen.getByTestId('link')).toHaveAttribute('tabindex', '-1')
    expect(screen.getByTestId('link')).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })
})

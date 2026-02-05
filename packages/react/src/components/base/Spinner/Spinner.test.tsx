import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Spinner label="Loading data" />)
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Loading data'
    )
  })

  it('applies custom width', () => {
    render(<Spinner width="3rem" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveStyle({ width: '3rem' })
  })

  it('applies custom borderWidth', () => {
    render(<Spinner borderWidth="0.4rem" data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveStyle({
      borderWidth: '0.4rem',
    })
  })

  it('removes role when inline', () => {
    render(<Spinner inline data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).not.toHaveAttribute('role')
    expect(screen.getByTestId('spinner')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Progress } from './Progress'

describe('Progress', () => {
  it('renders with default props', () => {
    render(<Progress />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('sets aria-valuenow to value', () => {
    render(<Progress value={50} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    )
  })

  it('sets aria-valuemax to max', () => {
    render(<Progress value={50} max={200} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '200'
    )
  })

  it('calculates percentage correctly', () => {
    render(<Progress value={25} max={50} data-testid="progress" />)
    const bar = screen
      .getByTestId('progress')
      .querySelector('[class*="bar"]')
    expect(bar).toHaveStyle({ width: '50%' })
  })

  it('clamps value between 0 and 100%', () => {
    render(<Progress value={150} data-testid="progress" />)
    const bar = screen
      .getByTestId('progress')
      .querySelector('[class*="bar"]')
    expect(bar).toHaveStyle({ width: '100%' })
  })

  it('shows label when showLabel is true', () => {
    render(<Progress value={75} showLabel />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('does not show label when indeterminate', () => {
    render(<Progress value={75} showLabel indeterminate />)
    expect(screen.queryByText('75%')).not.toBeInTheDocument()
  })

  it('applies custom height', () => {
    render(<Progress height="1rem" data-testid="progress" />)
    expect(screen.getByTestId('progress')).toHaveStyle({ height: '1rem' })
  })

  it('applies variant class', () => {
    render(<Progress variant="success" data-testid="progress" />)
    expect(screen.getByTestId('progress').className).toMatch(
      /variant-success/
    )
  })

  it('applies indeterminate class', () => {
    render(<Progress indeterminate data-testid="progress" />)
    expect(screen.getByTestId('progress').className).toMatch(
      /indeterminate/
    )
  })

  it('does not set aria-valuenow when indeterminate', () => {
    render(<Progress indeterminate />)
    expect(screen.getByRole('progressbar')).not.toHaveAttribute(
      'aria-valuenow'
    )
  })

  it('sets aria-label', () => {
    render(<Progress label="Loading content" />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-label',
      'Loading content'
    )
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Progress ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders hr element', () => {
    render(<Divider data-testid="divider" />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('applies variant class', () => {
    render(<Divider variant="dashed" data-testid="divider" />)
    expect(screen.getByTestId('divider').className).toContain(
      'variant-dashed'
    )
  })

  it('applies spacing class', () => {
    render(<Divider spacing={4} data-testid="divider" />)
    expect(screen.getByTestId('divider').className).toContain('spacing-4')
  })

  it('applies custom className', () => {
    render(<Divider className="custom-class" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Divider ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLHRElement)
  })

  it('renders with text when children provided', () => {
    render(<Divider data-testid="divider">or</Divider>)
    expect(screen.getByText('or')).toBeInTheDocument()
  })

  it('renders two hr elements when children provided', () => {
    render(<Divider data-testid="divider">or</Divider>)
    const divider = screen.getByTestId('divider')
    const hrs = divider.querySelectorAll('hr')
    expect(hrs.length).toBe(2)
  })

  it('applies spacing to divider with text', () => {
    render(
      <Divider spacing={3} data-testid="divider">
        or
      </Divider>
    )
    expect(screen.getByTestId('divider').className).toContain('spacing-3')
  })
})

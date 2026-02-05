import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Image } from './Image'

describe('Image', () => {
  it('renders with required alt', () => {
    render(<Image src="test.jpg" alt="Test image" data-testid="image" />)
    expect(screen.getByTestId('image')).toBeInTheDocument()
    expect(screen.getByAltText('Test image')).toBeInTheDocument()
  })

  it('applies className to img', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test"
        className="fit-cover r-full"
        data-testid="image"
      />
    )
    expect(screen.getByTestId('image')).toHaveClass('fit-cover')
    expect(screen.getByTestId('image')).toHaveClass('r-full')
  })

  it('renders figure with caption', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test image"
        caption="© 2024 Author"
        data-testid="image"
      />
    )

    const figure = screen.getByRole('group')
    expect(figure).toBeInTheDocument()
    expect(figure).toHaveAttribute('aria-labelledby')

    expect(screen.getByText('© 2024 Author')).toBeInTheDocument()
  })

  it('applies className to figure when caption present', () => {
    render(
      <Image
        src="test.jpg"
        alt="Test"
        caption="Caption"
        className="fit-cover"
        data-testid="image"
      />
    )
    const figure = screen.getByRole('group')
    expect(figure).toHaveClass('fit-cover')
  })

  it('does not render figure without caption', () => {
    render(<Image src="test.jpg" alt="Test image" />)
    expect(screen.queryByRole('group')).not.toBeInTheDocument()
  })

  it('forwards ref to img element', () => {
    const ref = { current: null }
    render(<Image src="test.jpg" alt="Test" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLImageElement)
  })
})

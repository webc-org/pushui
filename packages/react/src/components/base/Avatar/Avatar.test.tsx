import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders with image', () => {
    render(<Avatar src="/photo.jpg" alt="John Doe" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveAttribute('aria-label', 'John Doe')
    expect(avatar.querySelector('img')).toHaveAttribute(
      'src',
      '/photo.jpg'
    )
  })

  it('shows initials when no src', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('shows single initial for single name', () => {
    render(<Avatar name="John" />)
    expect(screen.getByText('J')).toBeInTheDocument()
  })

  it('shows initials on image error', () => {
    render(<Avatar src="/broken.jpg" name="Jane Smith" />)
    const img = screen.getByRole('img').querySelector('img')
    fireEvent.error(img!)
    expect(screen.getByText('JS')).toBeInTheDocument()
  })

  it('shows icon fallback when no name or image', () => {
    render(<Avatar data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom width', () => {
    render(<Avatar name="Test" width="5rem" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveStyle({ width: '5rem' })
  })

  it('applies variant class', () => {
    render(<Avatar name="Test" variant="primary" data-testid="avatar" />)
    expect(screen.getByTestId('avatar').className).toMatch(
      /variant-primary/
    )
  })

  it('uses name for aria-label when no alt', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'John Doe'
    )
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Avatar ref={ref} name="Test" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

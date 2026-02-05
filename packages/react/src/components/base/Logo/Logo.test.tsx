import '@testing-library/jest-dom/vitest'

import { Image } from 'base/Image'
import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Logo, LogoFallback } from './Logo'

describe('Logo', () => {
  it('renders as link with href', () => {
    render(
      <Logo href="/home">
        <span>Logo</span>
      </Logo>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/home')
  })

  it('supports asChild pattern', () => {
    render(
      <Logo asChild>
        <button type="button">Button Logo</button>
      </Logo>
    )
    expect(
      screen.getByRole('button', { name: 'Button Logo' })
    ).toBeInTheDocument()
  })
})

describe('LogoImage', () => {
  it('renders with src and alt', () => {
    render(<Image src="/logo.png" alt="Company Logo" />)
    const img = screen.getByAltText('Company Logo')
    expect(img).toHaveAttribute('src', '/logo.png')
  })
})

describe('LogoFallback', () => {
  it('renders children', () => {
    render(<LogoFallback>ACME</LogoFallback>)
    expect(screen.getByText('ACME')).toBeInTheDocument()
  })
})

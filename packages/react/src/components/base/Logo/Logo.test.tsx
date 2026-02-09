import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders as link with children', () => {
    render(
      <Logo href="/home">
        <img src="/logo.png" alt="Home" />
      </Logo>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/home')
    expect(screen.getByAltText('Home')).toBeInTheDocument()
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

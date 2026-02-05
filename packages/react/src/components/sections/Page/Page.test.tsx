import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { PageRoot } from './Page'

describe('PageRoot', () => {
  it('renders children', () => {
    render(
      <PageRoot>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </PageRoot>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

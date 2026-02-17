import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Page } from './Page'

describe('Page', () => {
  it('renders children', () => {
    render(
      <Page>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </Page>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

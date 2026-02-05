import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Note } from './Note'

describe('Note', () => {
  it('returns null when no children', () => {
    const { container } = render(<Note />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders children', () => {
    render(<Note>Test content</Note>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})

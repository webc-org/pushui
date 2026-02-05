import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Title } from './Title'

describe('Title', () => {
  it('renders children', () => {
    render(<Title>Test Title</Title>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders correct heading level', () => {
    render(
      <Title level="h3" data-testid="title">
        Heading
      </Title>
    )
    expect(screen.getByTestId('title').tagName).toBe('H3')
  })
})

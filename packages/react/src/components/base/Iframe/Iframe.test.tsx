import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Iframe } from './Iframe'

describe('Iframe', () => {
  it('renders iframe element', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toBeInTheDocument()
  })

  it('has required title for accessibility', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Accessible title"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toHaveAttribute(
      'title',
      'Accessible title'
    )
  })

  it('has src attribute', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toHaveAttribute(
      'src',
      'https://example.com'
    )
  })

  it('has lazy loading by default', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toHaveAttribute('loading', 'lazy')
  })

  it('allows fullscreen by default', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toHaveAttribute('allowfullscreen')
  })

  it('can disable fullscreen', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        allowFullScreen={false}
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).not.toHaveAttribute(
      'allowfullscreen'
    )
  })

  it('applies custom className', () => {
    render(
      <Iframe
        src="https://example.com"
        title="Example"
        className="aspect-video"
        data-testid="iframe"
      />
    )
    expect(screen.getByTestId('iframe')).toHaveClass('aspect-video')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Iframe ref={ref} src="https://example.com" title="Example" />)
    expect(ref.current).toBeInstanceOf(HTMLIFrameElement)
  })
})

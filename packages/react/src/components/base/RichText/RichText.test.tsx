import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { RichText } from './RichText'

describe('RichText', () => {
  it('renders with children', () => {
    render(
      <RichText data-testid="richtext">
        <p>Test content</p>
      </RichText>
    )
    expect(screen.getByTestId('richtext')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders with html prop', () => {
    render(<RichText html="<p>HTML content</p>" data-testid="richtext" />)
    expect(screen.getByTestId('richtext')).toBeInTheDocument()
    expect(screen.getByText('HTML content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<RichText className="custom-class" data-testid="richtext" />)
    expect(screen.getByTestId('richtext')).toHaveClass('custom-class')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<RichText ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders headings correctly', () => {
    render(
      <RichText
        html="<h1>Title</h1><h2>Subtitle</h2>"
        data-testid="richtext"
      />
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Title'
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Subtitle'
    )
  })

  it('renders lists correctly', () => {
    render(
      <RichText
        html="<ul><li>Item 1</li><li>Item 2</li></ul>"
        data-testid="richtext"
      />
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('renders links correctly', () => {
    render(
      <RichText
        html='<a href="https://example.com">Link</a>'
        data-testid="richtext"
      />
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
  })

  it('renders tables correctly', () => {
    render(
      <RichText
        html="<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table>"
        data-testid="richtext"
      />
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('columnheader')).toHaveTextContent('Header')
    expect(screen.getByRole('cell')).toHaveTextContent('Cell')
  })
})

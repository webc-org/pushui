import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Link } from '../Link'
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' },
  ]

  it('renders all items', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Current Page')).toBeInTheDocument()
  })

  it('renders links for non-last items', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByText('Products').closest('a')).toHaveAttribute(
      'href',
      '/products'
    )
  })

  it('renders last item as span with aria-current', () => {
    render(<Breadcrumb items={items} />)
    const currentPage = screen.getByText('Current Page')
    expect(currentPage.tagName).toBe('SPAN')
    expect(currentPage).toHaveAttribute('aria-current', 'page')
  })

  it('has nav with aria-label', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label')
  })

  it('renders custom aria-label', () => {
    render(<Breadcrumb items={items} aria-label="Custom breadcrumb" />)
    expect(screen.getByRole('navigation')).toHaveAttribute(
      'aria-label',
      'Custom breadcrumb'
    )
  })

  it('renders custom separator', () => {
    render(<Breadcrumb items={items} separator=">" />)
    const separators = screen.getAllByText('>')
    expect(separators).toHaveLength(2)
  })

  it('renders with custom renderLink', () => {
    render(
      <Breadcrumb
        items={items}
        renderLink={(item, children) => (
          <Link href={item.href} data-testid="custom-link">
            {children}
          </Link>
        )}
      />
    )
    const customLinks = screen.getAllByTestId('custom-link')
    expect(customLinks).toHaveLength(2)
  })

  it('applies custom className', () => {
    const { container } = render(
      <Breadcrumb items={items} className="custom-class" />
    )
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })
})

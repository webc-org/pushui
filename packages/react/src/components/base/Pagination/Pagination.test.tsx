import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders page numbers', () => {
    render(<Pagination currentPage={5} totalPages={10} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('marks current page with aria-current', () => {
    render(<Pagination currentPage={3} totalPages={10} />)
    expect(screen.getByText('3')).toHaveAttribute('aria-current', 'page')
  })

  it('renders prev and next links by default', () => {
    render(<Pagination currentPage={5} totalPages={10} />)
    expect(screen.getByLabelText(/previous/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next/i)).toBeInTheDocument()
  })

  it('disables prev link on first page', () => {
    render(<Pagination currentPage={1} totalPages={10} />)
    expect(screen.getByLabelText(/previous/i)).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  it('disables next link on last page', () => {
    render(<Pagination currentPage={10} totalPages={10} />)
    expect(screen.getByLabelText(/next/i)).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  it('calls onPageChange when page is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={handleChange}
      />
    )

    await user.click(screen.getByText('6'))
    expect(handleChange).toHaveBeenCalledWith(6)
  })

  it('calls onPageChange when prev is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={handleChange}
      />
    )

    await user.click(screen.getByLabelText(/previous/i))
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('calls onPageChange when next is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={handleChange}
      />
    )

    await user.click(screen.getByLabelText(/next/i))
    expect(handleChange).toHaveBeenCalledWith(6)
  })

  it('renders first and last links when showFirstLast is true', () => {
    render(<Pagination currentPage={5} totalPages={10} showFirstLast />)
    expect(screen.getByLabelText(/first/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last/i)).toBeInTheDocument()
  })

  it('hides prev and next links when showPrevNext is false', () => {
    render(
      <Pagination currentPage={5} totalPages={10} showPrevNext={false} />
    )
    expect(screen.queryByLabelText(/previous/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/next/i)).not.toBeInTheDocument()
  })

  it('renders ellipsis for many pages', () => {
    render(<Pagination currentPage={10} totalPages={20} />)
    const ellipses = screen.getAllByText('…')
    expect(ellipses.length).toBeGreaterThan(0)
  })

  it('does not render when totalPages is 1', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} />
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('renders links with correct href', () => {
    render(<Pagination currentPage={5} totalPages={10} />)
    const link = screen.getByText('6').closest('a')
    expect(link).toHaveAttribute('href', '?page=6')
  })

  it('renders links with custom getPageHref', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        getPageHref={(p) => `/articles/${p}`}
      />
    )
    const link = screen.getByText('6').closest('a')
    expect(link).toHaveAttribute('href', '/articles/6')
  })

  it('applies disabled state', () => {
    render(<Pagination currentPage={5} totalPages={10} disabled />)
    expect(screen.getByRole('navigation')).toHaveClass(/_disabled/)
  })

  it('has nav with aria-label', () => {
    render(<Pagination currentPage={5} totalPages={10} />)
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label')
  })
})

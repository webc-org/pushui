import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputSearch } from './Search'

describe('InputSearch', () => {
  it('renders with placeholder', () => {
    render(<InputSearch data-testid="search" placeholder="Search..." />)
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<InputSearch data-testid="search" label="Search products" />)
    expect(screen.getByText('Search products')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<InputSearch data-testid="search" onChange={handleChange} />)

    const input = screen.getByTestId('search')
    await user.type(input, 'test')

    expect(handleChange).toHaveBeenCalledTimes(4)
    expect(handleChange).toHaveBeenLastCalledWith('test')
  })

  it('clears input when clear button is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(
      <InputSearch
        data-testid="search"
        value="test"
        onChange={handleChange}
      />
    )

    const clearButton = screen.getByRole('button', { name: /clear/i })
    await user.click(clearButton)

    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('calls onSearch after debounce in dropdown mode', async () => {
    const user = userEvent.setup()
    const handleSearch = vi.fn()
    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        onSearch={handleSearch}
        searchDebounce={100}
        minChars={2}
      />
    )

    const input = screen.getByTestId('search')
    await user.type(input, 'tes')

    await waitFor(
      () => {
        expect(handleSearch).toHaveBeenCalledWith('tes')
      },
      { timeout: 200 }
    )
  })

  it('displays results in dropdown mode', async () => {
    const results = [
      { id: 1, label: 'Apple' },
      { id: 2, label: 'Banana' },
    ]

    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        results={results}
        value="ap"
        minChars={1}
      />
    )

    const input = screen.getByTestId('search')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument()
      expect(screen.getByText('Banana')).toBeInTheDocument()
    })
  })

  it('calls onSelect when result is clicked', async () => {
    const user = userEvent.setup()
    const handleSelect = vi.fn()
    const results = [{ id: 1, label: 'Apple' }]

    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        results={results}
        value="ap"
        minChars={1}
        onSelect={handleSelect}
      />
    )

    const input = screen.getByTestId('search')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument()
    })

    await user.click(screen.getByText('Apple'))
    expect(handleSelect).toHaveBeenCalledWith(results[0])
  })

  it('navigates results with keyboard', async () => {
    const results = [
      { id: 1, label: 'Apple' },
      { id: 2, label: 'Banana' },
    ]

    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        results={results}
        value="a"
        minChars={1}
      />
    )

    const input = screen.getByTestId('search')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument()
    })

    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(screen.getByText('Apple').closest('li')).toHaveAttribute(
      'aria-selected',
      'true'
    )

    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(screen.getByText('Banana').closest('li')).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('closes dropdown on Escape', async () => {
    const results = [{ id: 1, label: 'Apple' }]

    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        results={results}
        value="ap"
        minChars={1}
      />
    )

    const input = screen.getByTestId('search')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument()
    })

    fireEvent.keyDown(input, { key: 'Escape' })

    await waitFor(() => {
      expect(screen.queryByText('Apple')).not.toBeInTheDocument()
    })
  })

  it('renders redirect mode with form', () => {
    render(
      <InputSearch
        data-testid="search"
        mode="redirect"
        action="/search"
        method="get"
        paramName="q"
      />
    )

    const form = document.querySelector('form')
    expect(form).toHaveAttribute('action', '/search')
    expect(form).toHaveAttribute('method', 'get')
  })

  it('is disabled when disabled prop is true', () => {
    render(<InputSearch data-testid="search" disabled />)
    expect(screen.getByTestId('search')).toBeDisabled()
  })

  it('shows no results message when results are empty', async () => {
    render(
      <InputSearch
        data-testid="search"
        mode="dropdown"
        results={[]}
        value="xyz"
        minChars={1}
        noResultsText="No results found"
      />
    )

    const input = screen.getByTestId('search')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('No results found')).toBeInTheDocument()
    })
  })
})

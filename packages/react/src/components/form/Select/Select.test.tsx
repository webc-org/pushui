import '@testing-library/jest-dom/vitest'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor, within } from 'utils/Test'
import { beforeAll, describe, expect, it } from 'vitest'
import {
  ChoiceClear,
  ChoiceList,
  ChoiceListItem,
  OptionList,
  OptionListItem,
  SelectActions,
  SelectModal,
  SelectPlaceholder,
  SelectRoot,
  SelectSearch,
  SelectTrigger,
} from './Select'
import { useSelectContext } from './SelectContext'
import type { OptionTypes } from './Select.types'

// Mock scrollIntoView (not implemented in JSDOM)
beforeAll(() => {
  Element.prototype.scrollIntoView = () => {}
})

const options: OptionTypes[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

// Helper component for options
const OptionListWithContext = ({ controlId }: { controlId: string }) => {
  const { filteredOptions } = useSelectContext()

  return (
    <OptionList controlId={controlId}>
      {filteredOptions.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  )
}

// Single Select Test Component
const SingleSelect = ({
  initialValue = [],
  disabled = false,
  searchable = false,
  label,
}: {
  initialValue?: OptionTypes[]
  disabled?: boolean
  searchable?: boolean
  label?: string
}) => {
  const [value, setValue] = useState<OptionTypes[]>(initialValue)

  return (
    <SelectRoot
      options={options}
      value={value}
      onChange={setValue}
      disabled={disabled}
      searchable={searchable}
      label={label}
      data-testid="select-root"
    >
      <SelectSearch />
      <SelectPlaceholder data-testid="placeholder" />
      <SelectActions>
        <SelectTrigger />
      </SelectActions>

      <SelectModal data-testid="modal">
        <OptionListWithContext controlId="single-test" />
      </SelectModal>
    </SelectRoot>
  )
}

// Multi Select Test Component
const MultiSelect = ({
  initialValue = [],
  disabled = false,
}: {
  initialValue?: OptionTypes[]
  disabled?: boolean
}) => {
  const [value, setValue] = useState<OptionTypes[]>(initialValue)

  return (
    <SelectRoot
      multiple
      value={value}
      options={options}
      onChange={setValue}
      disabled={disabled}
      data-testid="select-root"
    >
      <ChoiceList selectedOptions={value} data-testid="choice-list">
        {value.map((opt) => (
          <ChoiceListItem
            key={opt.value}
            option={opt}
            onRemove={(o) =>
              setValue(value.filter((v) => v.value !== o.value))
            }
          />
        ))}
      </ChoiceList>
      <SelectSearch />
      <SelectPlaceholder data-testid="placeholder" />
      <SelectActions>
        <ChoiceClear data-testid="clear-all" />
        <SelectTrigger />
      </SelectActions>

      <SelectModal data-testid="modal">
        <OptionListWithContext controlId="multi-test" />
      </SelectModal>
    </SelectRoot>
  )
}

describe('Select - Single', () => {
  it('renders placeholder when nothing selected', () => {
    render(<SingleSelect />)
    expect(screen.getByTestId('placeholder')).toHaveTextContent(
      /select an option/i
    )
  })

  it('opens modal on click', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    await user.click(screen.getByTestId('select-root'))
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('selects option and closes modal', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    await user.click(screen.getByTestId('select-root'))
    await user.click(screen.getByRole('option', { name: /apple/i }))

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })

  it('replaces selection on new pick', async () => {
    const user = userEvent.setup()
    render(<SingleSelect initialValue={[options[0]]} />)

    expect(screen.getByText('Apple')).toBeInTheDocument()

    await user.click(screen.getByTestId('select-root'))
    await user.click(screen.getByRole('option', { name: /banana/i }))

    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })

  it('closes modal on escape', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    await user.click(screen.getByTestId('select-root'))
    expect(screen.getByTestId('modal')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('has correct ARIA attributes', () => {
    render(<SingleSelect />)
    const root = screen.getByTestId('select-root')

    expect(root).toHaveAttribute('role', 'combobox')
    expect(root).toHaveAttribute('aria-expanded', 'false')
    expect(root).toHaveAttribute('aria-haspopup', 'listbox')
    expect(root).toHaveAttribute('aria-label')
  })

  it('has aria-multiselectable on listbox when multiple', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)

    await user.click(screen.getByTestId('select-root'))
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-multiselectable',
      'true'
    )
  })

  it('is disabled when disabled prop is true', () => {
    render(<SingleSelect disabled />)
    expect(screen.getByTestId('select-root')).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  it('renders label when provided', () => {
    render(<SingleSelect label="Fruit" />)
    expect(screen.getByText('Fruit')).toBeInTheDocument()
    expect(screen.getByLabelText('Fruit')).toBeInTheDocument()
  })
})

describe('Select - Multiple', () => {
  it('renders placeholder when nothing selected', () => {
    render(<MultiSelect />)
    expect(screen.getByTestId('placeholder')).toHaveTextContent(
      /select an option/i
    )
  })

  it('shows checkboxes in options', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)

    await user.click(screen.getByTestId('select-root'))
    const modal = screen.getByTestId('modal')
    expect(modal.querySelectorAll('input[type="checkbox"]')).toHaveLength(
      3
    )
  })

  it('keeps modal open after selection', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)

    await user.click(screen.getByTestId('select-root'))
    await user.click(screen.getByRole('option', { name: /apple/i }))

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('allows multiple selections', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)

    await user.click(screen.getByTestId('select-root'))
    await user.click(screen.getByRole('option', { name: /apple/i }))
    await user.click(screen.getByRole('option', { name: /banana/i }))

    const choiceList = screen.getByTestId('choice-list')
    expect(within(choiceList).getByText('Apple')).toBeInTheDocument()
    expect(within(choiceList).getByText('Banana')).toBeInTheDocument()
  })

  it('removes item when clicking remove button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect initialValue={[options[0]]} />)

    expect(screen.getByText('Apple')).toBeInTheDocument()
    await user.click(screen.getByLabelText(/remove apple/i))
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })

  it('clears all when clicking clear button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect initialValue={[options[0], options[1]]} />)

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()

    await user.click(screen.getByTestId('clear-all'))

    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
  })
})

describe('Select - Keyboard Navigation', () => {
  it('opens on Enter key', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    screen.getByTestId('select-root').focus()
    await user.keyboard('{Enter}')

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('opens on Space key', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    screen.getByTestId('select-root').focus()
    await user.keyboard(' ')

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('opens on ArrowDown key', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    screen.getByTestId('select-root').focus()
    await user.keyboard('{ArrowDown}')

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('navigates options with arrow keys', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    await user.click(screen.getByTestId('select-root'))

    // First option should be focused by default
    const firstOption = screen.getByRole('option', { name: /apple/i })
    expect(firstOption.className).toMatch(/focused/)

    await user.keyboard('{ArrowDown}')
    const secondOption = screen.getByRole('option', { name: /banana/i })
    expect(secondOption.className).toMatch(/focused/)

    await user.keyboard('{ArrowUp}')
    expect(firstOption.className).toMatch(/focused/)
  })

  it('selects focused option with Enter', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    await user.click(screen.getByTestId('select-root'))
    await user.keyboard('{ArrowDown}') // Move to Banana
    await user.keyboard('{Enter}')

    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('returns focus to root on close', async () => {
    const user = userEvent.setup()
    render(<SingleSelect />)

    await user.click(screen.getByTestId('select-root'))
    await user.keyboard('{Escape}')

    expect(document.activeElement).toBe(screen.getByTestId('select-root'))
  })
})

describe('Select - Searchable', () => {
  it('shows search input when searchable', async () => {
    const user = userEvent.setup()
    render(<SingleSelect searchable />)

    await user.click(screen.getByTestId('select-root'))
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('filters options by search query', async () => {
    const user = userEvent.setup()
    render(<SingleSelect searchable />)

    await user.click(screen.getByTestId('select-root'))
    expect(screen.getAllByRole('option')).toHaveLength(3)

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'app' },
    })

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(1)
      expect(
        screen.getByRole('option', { name: /apple/i })
      ).toBeInTheDocument()
    })
  })

  it('clears search when modal closes', async () => {
    const user = userEvent.setup()
    render(<SingleSelect searchable />)

    await user.click(screen.getByTestId('select-root'))
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'app' },
    })

    await user.keyboard('{Escape}')
    await user.click(screen.getByTestId('select-root'))

    expect(screen.getByRole('searchbox')).toHaveValue('')
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('navigates with arrow keys while searching', async () => {
    const user = userEvent.setup()
    render(<SingleSelect searchable />)

    await user.click(screen.getByTestId('select-root'))

    // Wait for search input to be focused
    const searchInput = screen.getByRole('searchbox')
    await waitFor(() => expect(document.activeElement).toBe(searchInput))

    await user.keyboard('{ArrowDown}')

    const secondOption = screen.getByRole('option', { name: /banana/i })
    expect(secondOption.className).toMatch(/focused/)
  })

  it('search input has proper accessibility attributes', async () => {
    const user = userEvent.setup()
    render(<SingleSelect searchable />)

    await user.click(screen.getByTestId('select-root'))
    const searchInput = screen.getByRole('searchbox')

    expect(searchInput).toHaveAttribute('aria-label')
    expect(searchInput).toHaveAttribute('aria-autocomplete', 'list')
  })
})

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
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

const options: OptionTypes[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
]

const meta: Meta<typeof SelectRoot> = {
  title: 'Form/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple selections',
    },
    searchable: {
      control: 'boolean',
      description: 'Enables search input in dropdown',
    },
    flip: {
      control: 'boolean',
      description: 'Flips dropdown position when near viewport edge',
    },
    searchDebounce: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'Debounce time for async search (ms)',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    clearAllLabel: { control: 'text' },
    selectedOptionsLabel: { control: 'text' },
    removeLabel: { control: 'text' },
    searchLabel: { control: 'text' },
  },
  args: {
    disabled: false,
    multiple: false,
    searchable: false,
    flip: true,
    searchDebounce: 300,
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof SelectRoot>

// Helper to render options from context
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

// Controlled Select component for stories
type SelectStoryProps = {
  label?: string
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  searchable?: boolean
  flip?: boolean
  searchDebounce?: number
  loading?: boolean
  showClearAll?: boolean
}

const SelectStory = ({
  label,
  placeholder,
  disabled,
  multiple,
  searchable,
  flip,
  searchDebounce,
  loading,
  showClearAll,
}: SelectStoryProps) => {
  const [value, setValue] = useState<OptionTypes[]>([])

  return (
    <SelectRoot
      options={options}
      value={value}
      onChange={setValue}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      multiple={multiple}
      searchable={searchable}
      flip={flip}
      searchDebounce={searchDebounce}
      loading={loading}
    >
      {/* Tags first (for multiple) */}
      {multiple && (
        <ChoiceList selectedOptions={value}>
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
      )}

      {/* Search input inline (after tags) */}
      <SelectSearch />

      {/* Placeholder (only when closed and no selection) */}
      <SelectPlaceholder />

      {/* Actions on the right */}
      <SelectActions>
        {multiple && showClearAll && <ChoiceClear />}
        <SelectTrigger />
      </SelectActions>

      <SelectModal>
        <OptionListWithContext controlId="select-story" />
      </SelectModal>
    </SelectRoot>
  )
}

// Default playground story with all controls
export const Playground: Story = {
  render: (args) => <SelectStory {...args} />,
  args: {
    label: '',
    placeholder: '',
    disabled: false,
    multiple: false,
    searchable: false,
    flip: true,
    loading: false,
  },
}

// Single Select
export const Single: Story = {
  render: () => <SelectStory />,
  parameters: { controls: { disable: true } },
}

// Single with Label
export const SingleWithLabel: Story = {
  render: () => <SelectStory label="Fruit" />,
  parameters: { controls: { disable: true } },
}

// Single Disabled
export const SingleDisabled: Story = {
  render: () => <SelectStory disabled />,
  parameters: { controls: { disable: true } },
}

// Multiple
export const Multiple: Story = {
  render: () => <SelectStory multiple />,
  parameters: { controls: { disable: true } },
}

// Multiple with Label
export const MultipleWithLabel: Story = {
  render: () => <SelectStory multiple label="Fruits" />,
  parameters: { controls: { disable: true } },
}

// Multiple Disabled
export const MultipleDisabled: Story = {
  render: () => <SelectStory multiple disabled />,
  parameters: { controls: { disable: true } },
}

// Multiple with Clear All
export const MultipleWithClearAll: Story = {
  render: () => <SelectStory multiple showClearAll />,
  parameters: { controls: { disable: true } },
}

// Searchable Single
export const SearchableSingle: Story = {
  render: () => <SelectStory searchable />,
  parameters: { controls: { disable: true } },
}

// Searchable Multiple
export const SearchableMultiple: Story = {
  render: () => <SelectStory multiple searchable />,
  parameters: { controls: { disable: true } },
}

// Async Search Example
const AsyncSearchStory = () => {
  const [value, setValue] = useState<OptionTypes[]>([])
  const [items, setItems] = useState<OptionTypes[]>(options)
  const [loading, setLoading] = useState(false)

  const handleSearch = (query: string) => {
    setLoading(true)
    setTimeout(() => {
      if (!query) {
        setItems(options)
      } else {
        setItems(
          options.filter((o) =>
            o.label.toLowerCase().includes(query.toLowerCase())
          )
        )
      }
      setLoading(false)
    }, 500)
  }

  return (
    <SelectRoot
      options={items}
      value={value}
      onChange={setValue}
      searchable
      onSearch={handleSearch}
      loading={loading}
      label="Async Search"
    >
      <SelectSearch />
      <SelectPlaceholder />
      <SelectActions>
        <SelectTrigger />
      </SelectActions>

      <SelectModal>
        <OptionList controlId="async-search">
          {items.map((opt, i) => (
            <OptionListItem key={opt.value} option={opt} index={i} />
          ))}
        </OptionList>
      </SelectModal>
    </SelectRoot>
  )
}

export const AsyncSearch: Story = {
  render: () => <AsyncSearchStory />,
  parameters: { controls: { disable: true } },
}

// Infinite Scroll Example
const InfiniteScrollStory = () => {
  const [items, setItems] = useState<OptionTypes[]>(
    Array.from({ length: 20 }, (_, i) => ({
      value: `item-${i}`,
      label: `Item ${i + 1}`,
    }))
  )
  const [value, setValue] = useState<OptionTypes[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = () => {
    if (loading || !hasMore) return
    setLoading(true)

    setTimeout(() => {
      const currentLength = items.length
      if (currentLength >= 100) {
        setHasMore(false)
      } else {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 20 }, (_, i) => ({
            value: `item-${currentLength + i}`,
            label: `Item ${currentLength + i + 1}`,
          })),
        ])
      }
      setLoading(false)
    }, 500)
  }

  return (
    <SelectRoot
      options={items}
      value={value}
      onChange={setValue}
      onLoadMore={loadMore}
      hasMore={hasMore}
      loading={loading}
      multiple
      label="Infinite Scroll (100 items max)"
    >
      <ChoiceList selectedOptions={value}>
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
      <SelectPlaceholder />
      <SelectActions>
        <SelectTrigger />
      </SelectActions>

      <SelectModal>
        <OptionList controlId="infinite-scroll">
          {items.map((opt, i) => (
            <OptionListItem key={opt.value} option={opt} index={i} />
          ))}
        </OptionList>
      </SelectModal>
    </SelectRoot>
  )
}

export const InfiniteScroll: Story = {
  render: () => <InfiniteScrollStory />,
  parameters: { controls: { disable: true } },
}

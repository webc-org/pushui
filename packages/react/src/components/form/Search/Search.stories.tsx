import { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from './Search'
import type { SearchResultTypes } from './Search.types'

const meta: Meta<typeof InputSearch> = {
  title: 'Form/Search',
  component: InputSearch,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    clearLabel: { control: 'text' },
    noResultsText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { disabled: false },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof InputSearch>

const mockResults: SearchResultTypes[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Date' },
  { id: 5, label: 'Elderberry' },
  { id: 6, label: 'Fig' },
]

const DropdownSearch = ({ disabled }: { disabled?: boolean }) => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<SearchResultTypes[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback((query: string) => {
    setLoading(true)
    setTimeout(() => {
      setResults(
        mockResults.filter((r) =>
          r.label.toLowerCase().includes(query.toLowerCase())
        )
      )
      setLoading(false)
    }, 300)
  }, [])

  return (
    <InputSearch
      mode="dropdown"
      value={value}
      onChange={setValue}
      results={results}
      onSearch={handleSearch}
      onSelect={(r) => setValue(r.label)}
      loading={loading}
      placeholder={disabled ? 'Disabled search' : 'Search fruits...'}
      disabled={disabled}
    />
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <InputSearch
      mode="redirect"
      action="/search"
      method="get"
      paramName="q"
      placeholder="Redirect mode (press Enter)..."
    />
    <DropdownSearch />
    <InputSearch
      mode="dropdown"
      value=""
      results={[]}
      onSearch={() => {}}
      placeholder="No results example..."
      noResultsText="Nothing found"
    />
    <DropdownSearch disabled />
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

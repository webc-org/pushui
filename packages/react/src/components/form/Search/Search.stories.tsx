import { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from './Search'
import type { SearchResultTypes } from './Search.types'

const meta: Meta<typeof InputSearch> = {
  title: 'Form/Search',
  component: InputSearch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    clearLabel: { control: 'text' },
    noResultsText: { control: 'text' },
  },
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

// Mock data
const mockResults: SearchResultTypes[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Date' },
  { id: 5, label: 'Elderberry' },
  { id: 6, label: 'Fig' },
  { id: 7, label: 'Grape' },
  { id: 8, label: 'Honeydew' },
]

// Async search simulation
const searchAsync = (query: string): Promise<SearchResultTypes[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockResults.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
      resolve(filtered)
    }, 500)
  })
}

// Paginated search simulation
const searchPaginated = (
  query: string,
  page: number
): Promise<{ results: SearchResultTypes[]; hasMore: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allResults = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        label: `${query} - Result ${i + 1}`,
      }))
      const pageSize = 10
      const start = (page - 1) * pageSize
      const end = start + pageSize
      resolve({
        results: allResults.slice(start, end),
        hasMore: end < allResults.length,
      })
    }, 500)
  })
}

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Search products',
    placeholder: 'Search...',
  },
}

export const RedirectMode: Story = {
  args: {
    mode: 'redirect',
    action: '/search',
    method: 'get',
    paramName: 'q',
    placeholder: 'Search and press Enter...',
  },
}

// Component wrappers for stories with hooks
function DropdownWithResultsExample() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<SearchResultTypes[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback(async (query: string) => {
    setLoading(true)
    const data = await searchAsync(query)
    setResults(data)
    setLoading(false)
  }, [])

  const handleSelect = useCallback((result: SearchResultTypes) => {
    setValue(result.label)
    console.log('Selected:', result)
  }, [])

  return (
    <InputSearch
      mode="dropdown"
      value={value}
      onChange={setValue}
      results={results}
      onSearch={handleSearch}
      onSelect={handleSelect}
      loading={loading}
      placeholder="Search fruits..."
    />
  )
}

export const DropdownWithResults: Story = {
  render: () => <DropdownWithResultsExample />,
}

function AsyncPaginatedExample() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<SearchResultTypes[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [page, setPage] = useState(1)
  const [currentQuery, setCurrentQuery] = useState('')

  const handleSearch = useCallback(async (query: string) => {
    setLoading(true)
    setCurrentQuery(query)
    setPage(1)
    const data = await searchPaginated(query, 1)
    setResults(data.results)
    setHasMore(data.hasMore)
    setLoading(false)
  }, [])

  const handleLoadMore = useCallback(async () => {
    if (loading) return
    setLoading(true)
    const nextPage = page + 1
    const data = await searchPaginated(currentQuery, nextPage)
    setResults((prev) => [...prev, ...data.results])
    setHasMore(data.hasMore)
    setPage(nextPage)
    setLoading(false)
  }, [loading, page, currentQuery])

  const handleSelect = useCallback((result: SearchResultTypes) => {
    setValue(result.label)
    console.log('Selected:', result)
  }, [])

  return (
    <InputSearch
      mode="dropdown"
      value={value}
      onChange={setValue}
      results={results}
      onSearch={handleSearch}
      onSelect={handleSelect}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      loading={loading}
      placeholder="Type to search (paginated)..."
      minChars={1}
    />
  )
}

export const AsyncPaginated: Story = {
  render: () => <AsyncPaginatedExample />,
}

const mockProductResults: SearchResultTypes[] = [
  { id: 1, label: 'MacBook Pro', price: '2499€', category: 'Laptops' },
  { id: 2, label: 'iPhone 15', price: '999€', category: 'Phones' },
  { id: 3, label: 'AirPods Pro', price: '279€', category: 'Audio' },
  { id: 4, label: 'iPad Air', price: '699€', category: 'Tablets' },
  { id: 5, label: 'Apple Watch', price: '449€', category: 'Wearables' },
]

function CustomRenderResultExample() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<SearchResultTypes[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback((query: string) => {
    setLoading(true)
    setTimeout(() => {
      const filtered = mockProductResults.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setLoading(false)
    }, 300)
  }, [])

  const handleSelect = useCallback((result: SearchResultTypes) => {
    setValue(result.label)
    console.log('Selected:', result)
  }, [])

  return (
    <InputSearch
      mode="dropdown"
      value={value}
      onChange={setValue}
      results={results}
      onSearch={handleSearch}
      onSelect={handleSelect}
      loading={loading}
      placeholder="Search products..."
      minChars={1}
      renderResult={(result) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontWeight: 500 }}>{result.label}</div>
            <div style={{ fontSize: '1.2rem', color: '#666' }}>
              {result.category as string}
            </div>
          </div>
          <div style={{ fontWeight: 600, color: '#06c' }}>
            {result.price as string}
          </div>
        </div>
      )}
    />
  )
}

export const CustomRenderResult: Story = {
  render: () => <CustomRenderResultExample />,
}

function NoResultsExample() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <InputSearch
      mode="dropdown"
      value={value}
      onChange={setValue}
      results={[]}
      onSearch={handleSearch}
      loading={loading}
      placeholder="Search (no results)..."
      minChars={1}
      noResultsText="No products found"
    />
  )
}

export const NoResults: Story = {
  render: () => <NoResultsExample />,
}

export const Disabled: Story = {
  args: {
    placeholder: 'Search disabled...',
    disabled: true,
  },
}

# InputSearch

Search input with dropdown results or form redirect mode, debouncing, and infinite scroll.

## Import

```tsx
import { InputSearch } from '@ui'
```

## Usage

### Dropdown Mode (Default)

```tsx
const [results, setResults] = useState([])

<InputSearch
  mode="dropdown"
  results={results}
  onSearch={async (query) => {
    const data = await searchApi(query)
    setResults(data)
  }}
  onSelect={(result) => {
    router.push(`/product/${result.id}`)
  }}
/>
```

### Redirect Mode (Form Submit)

```tsx
<InputSearch
  mode="redirect"
  action="/search"
  method="get"
  paramName="q"
  placeholder="Search products..."
/>
```

### Custom Result Rendering

```tsx
<InputSearch
  results={products}
  onSearch={handleSearch}
  onSelect={handleSelect}
  renderResult={(result) => (
    <div className="flex items-center g-2">
      <img src={result.image} alt="" width={40} height={40} />
      <div>
        <strong>{result.label}</strong>
        <p>{result.price}</p>
      </div>
    </div>
  )}
/>
```

### Infinite Scroll

```tsx
<InputSearch
  results={results}
  onSearch={handleSearch}
  onSelect={handleSelect}
  onLoadMore={loadMore}
  hasMore={hasNextPage}
  loading={isLoading}
/>
```

### With Loading State

```tsx
<InputSearch
  results={results}
  onSearch={handleSearch}
  onSelect={handleSelect}
  loading={isSearching}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'dropdown' \| 'redirect'` | `'dropdown'` | Search mode |
| `label` | `string` | - | Field label |
| `placeholder` | `string` | `'Search'` | Input placeholder |
| `value` | `string` | - | Controlled value |
| `onChange` | `(value: string) => void` | - | Value change handler |
| `disabled` | `boolean` | `false` | Disable input |
| `clearLabel` | `string` | `'Clear'` | Clear button label |

### Dropdown Mode Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `results` | `SearchResultTypes[]` | `[]` | Search results |
| `onSearch` | `(query: string) => void` | - | Search handler |
| `onSelect` | `(result) => void` | - | Selection handler |
| `onLoadMore` | `() => void` | - | Infinite scroll handler |
| `hasMore` | `boolean` | `false` | More results available |
| `loading` | `boolean` | `false` | Loading state |
| `searchDebounce` | `number` | `300` | Debounce delay (ms) |
| `minChars` | `number` | `2` | Min chars to trigger search |
| `renderResult` | `(result) => ReactNode` | - | Custom result renderer |
| `noResultsText` | `string` | `'No results found'` | Empty state text |
| `flip` | `boolean` | `true` | Flip dropdown if no space |

### Redirect Mode Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `action` | `string` | - | Form action URL |
| `method` | `'get' \| 'post'` | `'get'` | Form method |
| `paramName` | `string` | `'q'` | Query parameter name |

### SearchResultTypes

```tsx
type SearchResultTypes = {
  id: string | number  // Unique identifier
  label: string        // Display text
  [key: string]: unknown  // Additional data
}
```

## Accessibility

- Uses `role="combobox"` for ARIA
- `aria-expanded`, `aria-haspopup="listbox"`
- `aria-activedescendant` tracks focused option
- Keyboard navigation (arrows, Enter, Escape)
- Clear button has accessible label

## Common Patterns

### Product Search

```tsx
<InputSearch
  placeholder="Search products..."
  results={products}
  onSearch={searchProducts}
  onSelect={(product) => router.push(`/products/${product.id}`)}
  renderResult={(p) => (
    <div className="flex items-center g-2">
      <Image src={p.image} alt="" width={32} height={32} />
      <span>{p.label}</span>
      <Badge>{p.category}</Badge>
    </div>
  )}
/>
```

### Global Search

```tsx
<InputSearch
  mode="redirect"
  action="/search"
  placeholder="Search..."
/>
```

## Strapi Integration

```tsx
<InputSearch
  mode="dropdown"
  results={searchResults}
  onSearch={async (query) => {
    const { data } = await strapi.find('products', {
      filters: { title: { $contains: query } },
    })
    setSearchResults(data.map(p => ({ id: p.id, label: p.title })))
  }}
  onSelect={(result) => router.push(`/products/${result.id}`)}
/>
```

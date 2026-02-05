# Select

Compound component for single/multiple selection with search, infinite scroll, and full keyboard navigation.

## Import

```tsx
import {
  SelectRoot,
  SelectPlaceholder,
  SelectSearch,
  SelectActions,
  SelectTrigger,
  SelectModal,
  OptionList,
  OptionListItem,
  ChoiceList,
  ChoiceListItem,
  ChoiceClear,
} from '@ui'
```

## Usage

### Basic Single Select

```tsx
const [value, setValue] = useState<OptionTypes[]>([])

<SelectRoot
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select a country"
>
  <SelectPlaceholder />
  <SelectActions>
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="country">
      {options.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

### Multiple Select with Choices

```tsx
<SelectRoot
  multiple
  options={options}
  value={selected}
  onChange={setSelected}
  placeholder="Select tags"
>
  <ChoiceList selectedOptions={selected}>
    {selected.map((opt) => (
      <ChoiceListItem
        key={opt.value}
        option={opt}
        onRemove={() => {
          setSelected(prev => prev.filter(o => o.value !== opt.value))
        }}
      />
    ))}
  </ChoiceList>
  <SelectPlaceholder />
  <SelectActions>
    <ChoiceClear />
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="tags">
      {options.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

### Searchable Select

```tsx
<SelectRoot
  searchable
  options={filteredOptions}
  value={value}
  onChange={setValue}
  placeholder="Search countries..."
>
  <ChoiceList selectedOptions={value}>
    {/* choices */}
  </ChoiceList>
  <SelectSearch />
  <SelectPlaceholder />
  <SelectActions>
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="search">
      {filteredOptions.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

### With API Search and Infinite Scroll

```tsx
<SelectRoot
  searchable
  multiple
  options={results}
  value={selected}
  onChange={setSelected}
  onSearch={handleSearch}
  onLoadMore={fetchNextPage}
  hasMore={hasNextPage}
  loading={isLoading}
>
  {/* ... */}
</SelectRoot>
```

## Components

### SelectRoot

Main container that provides context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `OptionTypes[]` | **required** | Available options |
| `value` | `OptionTypes[]` | **required** | Selected options |
| `onChange` | `(value: OptionTypes[]) => void` | **required** | Change handler |
| `placeholder` | `string` | `'Select an option'` | Placeholder text |
| `multiple` | `boolean` | `false` | Allow multiple selections |
| `searchable` | `boolean` | `false` | Enable search input |
| `disabled` | `boolean` | `false` | Disable select |
| `label` | `string` | - | Field label |
| `flip` | `boolean` | `true` | Flip dropdown if no space |
| `onSearch` | `(query: string) => void` | - | API search handler |
| `searchDebounce` | `number` | `300` | Search debounce (ms) |
| `onLoadMore` | `() => void` | - | Infinite scroll handler |
| `hasMore` | `boolean` | `false` | More options available |
| `loading` | `boolean` | `false` | Loading state |

### i18n Props on SelectRoot

| Prop | Type | Default |
|------|------|---------|
| `clearAllLabel` | `string` | `'Clear all'` |
| `selectedOptionsLabel` | `string` | `'Selected options'` |
| `removeLabel` | `string` | `'Remove'` |
| `searchLabel` | `string` | `'Search'` |

### OptionTypes

```tsx
type OptionTypes = {
  value: string
  label: string
}
```

### Other Components

| Component | Purpose |
|-----------|---------|
| `SelectPlaceholder` | Shows placeholder or selected value |
| `SelectSearch` | Search input (when searchable) |
| `SelectActions` | Container for trigger/clear buttons |
| `SelectTrigger` | Dropdown arrow indicator |
| `SelectModal` | Dropdown portal |
| `OptionList` | List container |
| `OptionListItem` | Individual option |
| `ChoiceList` | Selected items container |
| `ChoiceListItem` | Selected item with remove button |
| `ChoiceClear` | Clear all button |

## Keyboard Navigation

- **Enter/Space**: Open dropdown, select option
- **Escape**: Close dropdown
- **Arrow Up/Down**: Navigate options
- **Home/End**: First/last option
- **Tab**: Close and move focus

## Accessibility

- Uses `role="combobox"` on root
- `role="listbox"` for options
- `aria-multiselectable` for multiple
- `aria-activedescendant` tracks focus
- Full keyboard support

## Common Patterns

### Country Selector

```tsx
<SelectRoot
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable
  placeholder="Select country"
>
  <SelectSearch />
  <SelectPlaceholder />
  <SelectActions>
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="country">
      {countries.map((c, i) => (
        <OptionListItem key={c.value} option={c} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

### Tag Selector

```tsx
<SelectRoot
  multiple
  searchable
  options={tags}
  value={selectedTags}
  onChange={setSelectedTags}
  placeholder="Add tags"
>
  <ChoiceList selectedOptions={selectedTags}>
    {selectedTags.map((tag) => (
      <ChoiceListItem
        key={tag.value}
        option={tag}
        onRemove={() => removeTag(tag)}
      />
    ))}
  </ChoiceList>
  <SelectSearch />
  <SelectPlaceholder />
  <SelectActions>
    <ChoiceClear />
    <SelectTrigger />
  </SelectActions>
  <SelectModal>
    <OptionList controlId="tags">
      {tags.map((t, i) => (
        <OptionListItem key={t.value} option={t} index={i} />
      ))}
    </OptionList>
  </SelectModal>
</SelectRoot>
```

## Strapi Integration

```tsx
<SelectRoot
  options={field.options}
  value={formData[field.name] || []}
  onChange={(v) => updateField(field.name, v)}
  multiple={field.multiple}
  placeholder={field.placeholder}
>
  {/* compound components */}
</SelectRoot>
```

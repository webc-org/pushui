# Accordion

Expandable/collapsible content sections with single or multiple mode.

## Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@ui'
```

## Usage

### Single Mode (Default)

```tsx
<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Content for section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Mode

```tsx
<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  <AccordionItem value="item-1">
    <AccordionTrigger>FAQ 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>FAQ 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Controlled

```tsx
const [value, setValue] = useState('item-1')

<Accordion type="single" value={value} onValueChange={setValue}>
  {/* items */}
</Accordion>
```

### Non-Collapsible

```tsx
<Accordion type="single" defaultValue="item-1" collapsible={false}>
  {/* One item must always be open */}
</Accordion>
```

### Disabled Item

```tsx
<AccordionItem value="item-3" disabled>
  <AccordionTrigger>Disabled Section</AccordionTrigger>
  <AccordionContent>Cannot open</AccordionContent>
</AccordionItem>
```

### Custom Heading Level

```tsx
<AccordionTrigger headingLevel="h2">Section Title</AccordionTrigger>
```

## Components

### Accordion

Root container providing context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Expansion mode |
| `defaultValue` | `string \| string[]` | - | Initial expanded items |
| `value` | `string \| string[]` | - | Controlled expanded items |
| `onValueChange` | `(value) => void` | - | Change handler |
| `collapsible` | `boolean` | `true` | Allow collapsing all (single mode) |
| `className` | `string` | - | Additional CSS class |

### AccordionItem

Individual expandable section.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Unique identifier |
| `disabled` | `boolean` | `false` | Disable this item |
| `className` | `string` | - | Additional CSS class |

### AccordionTrigger

Header button that toggles expansion.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headingLevel` | `'h1'-'h6'` | `'h3'` | Semantic heading level |
| `children` | `ReactNode` | - | Trigger text |
| `className` | `string` | - | Additional CSS class |

### AccordionContent

Expandable content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content |
| `className` | `string` | - | Additional CSS class |

## Keyboard Navigation

- **Enter/Space**: Toggle current item
- **Arrow Down**: Focus next trigger
- **Arrow Up**: Focus previous trigger
- **Home**: Focus first trigger
- **End**: Focus last trigger

## Accessibility

- Uses proper ARIA attributes
- `aria-expanded` on triggers
- `aria-controls` links to content
- `role="region"` on content
- Proper heading structure

## Strapi Integration

```tsx
<Accordion type="single">
  {data.items.map((item) => (
    <AccordionItem key={item.id} value={`item-${item.id}`}>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>
        <RichText html={item.content} />
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

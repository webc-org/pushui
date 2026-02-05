# Table

Data table with semantic markup, striped rows, and hover states.

## Import

```tsx
import {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableCaption
} from '@ui'
```

## Usage

### Basic

```tsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Caption

```tsx
<Table>
  <TableCaption>Monthly sales report</TableCaption>
  <TableHead>
    {/* headers */}
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>
```

### Striped Rows

```tsx
<Table striped>
  <TableHead>
    {/* headers */}
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>
```

### Hoverable Rows

```tsx
<Table hoverable>
  <TableHead>
    {/* headers */}
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>
```

### Bordered

```tsx
<Table bordered>
  <TableHead>
    {/* headers */}
  </TableHead>
  <TableBody>
    {/* rows */}
  </TableBody>
</Table>
```

### Combined Styles

```tsx
<Table striped hoverable bordered>
  {/* content */}
</Table>
```

### With Footer

```tsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Product</TableHeaderCell>
      <TableHeaderCell>Quantity</TableHeaderCell>
      <TableHeaderCell>Price</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {items.map(item => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>${item.price}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFoot>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell>${total}</TableCell>
    </TableRow>
  </TableFoot>
</Table>
```

## Components

### Table

Root table element.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `striped` | `boolean` | `false` | Alternate row colors |
| `hoverable` | `boolean` | `false` | Highlight on row hover |
| `bordered` | `boolean` | `false` | Add cell borders |
| `className` | `string` | - | Additional CSS class |

### TableHead

Header section wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### TableBody

Body section wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### TableFoot

Footer section wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### TableRow

Table row.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### TableHeaderCell

Header cell (`<th>`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scope` | `'col' \| 'row'` | `'col'` | Header scope |
| `colSpan` | `number` | - | Column span |
| `rowSpan` | `number` | - | Row span |
| `className` | `string` | - | Additional CSS class |

### TableCell

Data cell (`<td>`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colSpan` | `number` | - | Column span |
| `rowSpan` | `number` | - | Row span |
| `className` | `string` | - | Additional CSS class |

### TableCaption

Table caption for accessibility.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top' \| 'bottom'` | `'top'` | Caption position |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Semantic `<table>`, `<thead>`, `<tbody>`, `<tfoot>` elements
- `<th>` with `scope` attribute for headers
- `<caption>` for table description
- Proper row/column spanning

## Common Patterns

### Data Table with Actions

```tsx
<Table striped hoverable>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
      <TableHeaderCell>Actions</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map(user => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>
          <Badge variant={user.active ? 'success' : 'secondary'}>
            {user.active ? 'Active' : 'Inactive'}
          </Badge>
        </TableCell>
        <TableCell>
          <Button appearance="ghost" size="sm" onClick={() => edit(user)}>
            Edit
          </Button>
          <Button appearance="ghost" size="sm" variant="danger" onClick={() => remove(user)}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Pricing Table

```tsx
<Table bordered>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Feature</TableHeaderCell>
      <TableHeaderCell>Free</TableHeaderCell>
      <TableHeaderCell>Pro</TableHeaderCell>
      <TableHeaderCell>Enterprise</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {features.map(feature => (
      <TableRow key={feature.name}>
        <TableCell>{feature.name}</TableCell>
        <TableCell>{feature.free ? '✓' : '-'}</TableCell>
        <TableCell>{feature.pro ? '✓' : '-'}</TableCell>
        <TableCell>{feature.enterprise ? '✓' : '-'}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Responsive Table

```tsx
<div className="overflow-x-auto">
  <Table>
    {/* wide table content */}
  </Table>
</div>
```

## Strapi Integration

```tsx
<Table striped={data.striped} bordered={data.bordered}>
  {data.caption && <TableCaption>{data.caption}</TableCaption>}
  <TableHead>
    <TableRow>
      {data.columns.map(col => (
        <TableHeaderCell key={col.key}>{col.label}</TableHeaderCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {data.rows.map((row, index) => (
      <TableRow key={index}>
        {data.columns.map(col => (
          <TableCell key={col.key}>{row[col.key]}</TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
</Table>
```

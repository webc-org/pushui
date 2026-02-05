# Tab

Tabbed interface with accessible keyboard navigation. Compound component pattern.

## Import

```tsx
import { Tab, TabList, TabButton, TabPanels, TabPanel } from '@ui'
```

## Usage

### Basic

```tsx
<Tab defaultTab="tab1">
  <TabList>
    <TabButton value="tab1">Overview</TabButton>
    <TabButton value="tab2">Features</TabButton>
    <TabButton value="tab3">Pricing</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">
      <p>Overview content here.</p>
    </TabPanel>
    <TabPanel value="tab2">
      <p>Features content here.</p>
    </TabPanel>
    <TabPanel value="tab3">
      <p>Pricing content here.</p>
    </TabPanel>
  </TabPanels>
</Tab>
```

### Controlled

```tsx
const [activeTab, setActiveTab] = useState('tab1')

<Tab value={activeTab} onChange={setActiveTab}>
  <TabList>
    <TabButton value="tab1">Tab 1</TabButton>
    <TabButton value="tab2">Tab 2</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Content 1</TabPanel>
    <TabPanel value="tab2">Content 2</TabPanel>
  </TabPanels>
</Tab>
```

### With Icons

```tsx
<Tab defaultTab="settings">
  <TabList>
    <TabButton value="settings">
      <Icon name="settings" /> Settings
    </TabButton>
    <TabButton value="profile">
      <Icon name="user" /> Profile
    </TabButton>
    <TabButton value="notifications">
      <Icon name="bell" /> Notifications
    </TabButton>
  </TabList>
  <TabPanels>
    {/* panels */}
  </TabPanels>
</Tab>
```

### Disabled Tab

```tsx
<Tab defaultTab="tab1">
  <TabList>
    <TabButton value="tab1">Active</TabButton>
    <TabButton value="tab2" disabled>Disabled</TabButton>
    <TabButton value="tab3">Another</TabButton>
  </TabList>
  <TabPanels>
    {/* panels */}
  </TabPanels>
</Tab>
```

### Vertical Layout

```tsx
<Tab defaultTab="tab1" orientation="vertical">
  <TabList>
    <TabButton value="tab1">General</TabButton>
    <TabButton value="tab2">Security</TabButton>
    <TabButton value="tab3">Billing</TabButton>
  </TabList>
  <TabPanels>
    {/* panels */}
  </TabPanels>
</Tab>
```

## Components

### Tab

Root container providing context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTab` | `string` | - | Initial active tab (uncontrolled) |
| `value` | `string` | - | Active tab (controlled) |
| `onChange` | `(value: string) => void` | - | Tab change handler |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `className` | `string` | - | Additional CSS class |

### TabList

Container for tab buttons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | TabButton components |
| `className` | `string` | - | Additional CSS class |

### TabButton

Individual tab trigger.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Tab identifier |
| `children` | `ReactNode` | - | Button content |
| `disabled` | `boolean` | `false` | Disable this tab |
| `className` | `string` | - | Additional CSS class |

### TabPanels

Container for tab content panels.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | TabPanel components |
| `className` | `string` | - | Additional CSS class |

### TabPanel

Content panel for a tab.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Matching tab identifier |
| `children` | `ReactNode` | - | Panel content |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- `role="tablist"` on TabList
- `role="tab"` on TabButton with `aria-selected`
- `role="tabpanel"` on TabPanel
- `aria-controls` links tab to panel
- `aria-labelledby` links panel to tab
- Arrow keys navigate between tabs
- Home/End jump to first/last tab
- Tab key moves to panel content

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `ArrowLeft/ArrowUp` | Previous tab |
| `ArrowRight/ArrowDown` | Next tab |
| `Home` | First tab |
| `End` | Last tab |
| `Tab` | Move to panel |

## Common Patterns

### Settings Page

```tsx
<Tab defaultTab="general" orientation="vertical">
  <TabList className="w-48">
    <TabButton value="general">General</TabButton>
    <TabButton value="security">Security</TabButton>
    <TabButton value="notifications">Notifications</TabButton>
    <TabButton value="billing">Billing</TabButton>
  </TabList>
  <TabPanels className="flex-1">
    <TabPanel value="general">
      <GeneralSettings />
    </TabPanel>
    <TabPanel value="security">
      <SecuritySettings />
    </TabPanel>
    <TabPanel value="notifications">
      <NotificationSettings />
    </TabPanel>
    <TabPanel value="billing">
      <BillingSettings />
    </TabPanel>
  </TabPanels>
</Tab>
```

### Product Details

```tsx
<Tab defaultTab="description">
  <TabList>
    <TabButton value="description">Description</TabButton>
    <TabButton value="specs">Specifications</TabButton>
    <TabButton value="reviews">Reviews ({reviewCount})</TabButton>
  </TabList>
  <TabPanels>
    <TabPanel value="description">
      <RichText html={product.description} />
    </TabPanel>
    <TabPanel value="specs">
      <Table>
        {product.specs.map(spec => (
          <TableRow key={spec.label}>
            <TableCell>{spec.label}</TableCell>
            <TableCell>{spec.value}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TabPanel>
    <TabPanel value="reviews">
      <ReviewList productId={product.id} />
    </TabPanel>
  </TabPanels>
</Tab>
```

## Strapi Integration

```tsx
<Tab defaultTab={data.tabs[0]?.id}>
  <TabList>
    {data.tabs.map(tab => (
      <TabButton key={tab.id} value={tab.id}>
        {tab.icon && <Icon name={tab.icon} />}
        {tab.label}
      </TabButton>
    ))}
  </TabList>
  <TabPanels>
    {data.tabs.map(tab => (
      <TabPanel key={tab.id} value={tab.id}>
        <RichText html={tab.content} />
      </TabPanel>
    ))}
  </TabPanels>
</Tab>
```

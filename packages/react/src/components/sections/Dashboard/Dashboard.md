# Dashboard

Admin dashboard layout with sidebar navigation and main content area.

## Import

```tsx
import {
  DashboardLayout,
  DashboardSidebar,
  DashboardBrand,
  DashboardNav,
  DashboardNavTitle,
  DashboardNavLink,
  DashboardMain,
  DashboardMainHeader,
  DashboardMainTitle,
} from '@ui'
```

## Usage

### Basic Dashboard

```tsx
<DashboardLayout>
  <DashboardSidebar>
    <DashboardBrand>
      <Logo href="/dashboard">
        <Image src="/logo.svg" alt="Admin" width={120} height={32} />
      </Logo>
    </DashboardBrand>

    <DashboardNav>
      <DashboardNavLink asChild current>
        <Link href="/dashboard">
          <Icon name="home" /> Dashboard
        </Link>
      </DashboardNavLink>
      <DashboardNavLink asChild>
        <Link href="/dashboard/users">
          <Icon name="users" /> Users
        </Link>
      </DashboardNavLink>
      <DashboardNavLink asChild>
        <Link href="/dashboard/settings">
          <Icon name="settings" /> Settings
        </Link>
      </DashboardNavLink>
    </DashboardNav>
  </DashboardSidebar>

  <DashboardMain>
    <DashboardMainHeader>
      <DashboardMainTitle>Dashboard</DashboardMainTitle>
    </DashboardMainHeader>

    <div className="p-6">
      {/* main content */}
    </div>
  </DashboardMain>
</DashboardLayout>
```

### With Nav Sections

```tsx
<DashboardSidebar>
  <DashboardBrand>
    <Logo href="/dashboard">
      <Image src="/logo.svg" alt="Admin" />
    </Logo>
  </DashboardBrand>

  <DashboardNav>
    <DashboardNavTitle>Main</DashboardNavTitle>
    <DashboardNavLink asChild current>
      <Link href="/dashboard">
        <Icon name="home" /> Overview
      </Link>
    </DashboardNavLink>
    <DashboardNavLink asChild>
      <Link href="/dashboard/analytics">
        <Icon name="chart" /> Analytics
      </Link>
    </DashboardNavLink>
  </DashboardNav>

  <DashboardNav>
    <DashboardNavTitle>Management</DashboardNavTitle>
    <DashboardNavLink asChild>
      <Link href="/dashboard/users">
        <Icon name="users" /> Users
      </Link>
    </DashboardNavLink>
    <DashboardNavLink asChild>
      <Link href="/dashboard/products">
        <Icon name="box" /> Products
      </Link>
    </DashboardNavLink>
    <DashboardNavLink asChild>
      <Link href="/dashboard/orders">
        <Icon name="cart" /> Orders
      </Link>
    </DashboardNavLink>
  </DashboardNav>

  <DashboardNav>
    <DashboardNavTitle>Settings</DashboardNavTitle>
    <DashboardNavLink asChild>
      <Link href="/dashboard/settings">
        <Icon name="settings" /> General
      </Link>
    </DashboardNavLink>
    <DashboardNavLink asChild>
      <Link href="/dashboard/billing">
        <Icon name="credit-card" /> Billing
      </Link>
    </DashboardNavLink>
  </DashboardNav>
</DashboardSidebar>
```

### With Header Actions

```tsx
<DashboardMainHeader>
  <DashboardMainTitle>Users</DashboardMainTitle>
  <div className="flex g-2">
    <Button appearance="outline">
      <Icon name="download" /> Export
    </Button>
    <Button variant="primary">
      <Icon name="plus" /> Add User
    </Button>
  </div>
</DashboardMainHeader>
```

## Components

### DashboardLayout

Root container with sidebar/main layout.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Sidebar and Main |
| `className` | `string` | - | Additional CSS class |

### DashboardSidebar

Fixed sidebar navigation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Brand and Nav components |
| `className` | `string` | - | Additional CSS class |

### DashboardBrand

Logo/brand area at top of sidebar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo content |
| `className` | `string` | - | Additional CSS class |

### DashboardNav

Navigation group in sidebar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | NavTitle and NavLinks |
| `className` | `string` | - | Additional CSS class |

### DashboardNavTitle

Section title in navigation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title text |
| `className` | `string` | - | Additional CSS class |

### DashboardNavLink

Navigation link in sidebar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Link content |
| `asChild` | `boolean` | `false` | Render as child element |
| `current` | `boolean` | `false` | Mark as current page |
| `className` | `string` | - | Additional CSS class |

### DashboardMain

Main content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Page content |
| `className` | `string` | - | Additional CSS class |

### DashboardMainHeader

Header bar in main area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title and actions |
| `className` | `string` | - | Additional CSS class |

### DashboardMainTitle

Page title in header.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title text |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Semantic `<aside>` for sidebar
- Semantic `<main>` for content
- `<nav>` elements with proper structure
- Current page marked with `current` prop

## Common Patterns

### Stats Grid

```tsx
<DashboardMain>
  <DashboardMainHeader>
    <DashboardMainTitle>Overview</DashboardMainTitle>
  </DashboardMainHeader>

  <div className="p-6">
    <Grid col={1} colSM={2} colLG={4} gap="md">
      <Card>
        <CardBody>
          <p className="text-sm text-muted">Total Users</p>
          <Title level="h2">12,345</Title>
          <Badge variant="success">+12%</Badge>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <p className="text-sm text-muted">Revenue</p>
          <Title level="h2">$54,321</Title>
          <Badge variant="success">+8%</Badge>
        </CardBody>
      </Card>
      {/* more stat cards */}
    </Grid>
  </div>
</DashboardMain>
```

### Data Table Page

```tsx
<DashboardMain>
  <DashboardMainHeader>
    <DashboardMainTitle>Users</DashboardMainTitle>
    <div className="flex g-2">
      <InputSearch
        placeholder="Search users..."
        value={search}
        onChange={setSearch}
      />
      <Button variant="primary">Add User</Button>
    </div>
  </DashboardMainHeader>

  <div className="p-6">
    <Table striped hoverable>
      {/* user table */}
    </Table>
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  </div>
</DashboardMain>
```

## Strapi Integration

```tsx
<DashboardLayout>
  <DashboardSidebar>
    <DashboardBrand>
      <Logo href="/dashboard">
        <Image
          src={getMediaUrl(data.logo.url)}
          alt={data.logo.alternativeText}
        />
      </Logo>
    </DashboardBrand>

    {data.navSections.map(section => (
      <DashboardNav key={section.id}>
        {section.title && (
          <DashboardNavTitle>{section.title}</DashboardNavTitle>
        )}
        {section.links.map(link => (
          <DashboardNavLink
            key={link.id}
            asChild
            current={currentPath === link.url}
          >
            <Link href={link.url}>
              {link.icon && <Icon name={link.icon} />}
              {link.label}
            </Link>
          </DashboardNavLink>
        ))}
      </DashboardNav>
    ))}
  </DashboardSidebar>

  <DashboardMain>
    <DashboardMainHeader>
      <DashboardMainTitle>{pageTitle}</DashboardMainTitle>
    </DashboardMainHeader>
    <div className="p-6">
      {children}
    </div>
  </DashboardMain>
</DashboardLayout>
```

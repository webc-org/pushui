# Footer

Site footer with main content area, navigation columns, and bottom bar.

## Import

```tsx
import {
  FooterRoot,
  FooterMain,
  FooterMainLogo,
  FooterMainMenu,
  FooterMainNav,
  FooterMainLink,
  FooterBottom,
  FooterBottomNav,
  FooterBottomLink,
} from '@ui'
```

## Usage

### Basic Footer

```tsx
<FooterRoot>
  <FooterMain>
    <FooterMainLogo>
      <Logo href="/">
        <Image src="/logo.svg" alt="Site Logo" width={144} height={40} />
      </Logo>
    </FooterMainLogo>

    <FooterMainMenu>
      <FooterMainNav title="Products">
        <FooterMainLink asChild>
          <Link href="/software">Software</Link>
        </FooterMainLink>
        <FooterMainLink asChild>
          <Link href="/services">Services</Link>
        </FooterMainLink>
      </FooterMainNav>

      <FooterMainNav title="Company">
        <FooterMainLink asChild>
          <Link href="/about">About</Link>
        </FooterMainLink>
        <FooterMainLink asChild>
          <Link href="/careers">Careers</Link>
        </FooterMainLink>
      </FooterMainNav>

      <FooterMainNav title="Support">
        <FooterMainLink asChild>
          <Link href="/help">Help Center</Link>
        </FooterMainLink>
        <FooterMainLink asChild>
          <Link href="/contact">Contact</Link>
        </FooterMainLink>
      </FooterMainNav>
    </FooterMainMenu>
  </FooterMain>

  <FooterBottom copyright="© 2024 Company Name">
    <FooterBottomNav>
      <FooterBottomLink asChild>
        <Link href="/privacy">Privacy</Link>
      </FooterBottomLink>
      <FooterBottomLink asChild>
        <Link href="/terms">Terms</Link>
      </FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

### With Brand Description

```tsx
<FooterMain brand={
  <div>
    <Logo href="/">
      <Image src="/logo.svg" alt="Logo" />
    </Logo>
    <p className="mt-4">
      Building the future of web development with modern tools and frameworks.
    </p>
  </div>
}>
  <FooterMainMenu>
    {/* nav columns */}
  </FooterMainMenu>
</FooterMain>
```

### Minimal Footer

```tsx
<FooterRoot>
  <FooterBottom copyright="© 2024 Company Name">
    <FooterBottomNav>
      <FooterBottomLink asChild>
        <Link href="/privacy">Privacy</Link>
      </FooterBottomLink>
      <FooterBottomLink asChild>
        <Link href="/terms">Terms</Link>
      </FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

## Components

### FooterRoot

Root footer container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content |
| `className` | `string` | - | Additional CSS class |

### FooterMain

Main content area with logo and navigation columns.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo and menu content |
| `brand` | `ReactNode` | - | Brand section (logo + description) |
| `className` | `string` | - | Additional CSS class |

### FooterMainLogo

Logo wrapper in main section.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo content |
| `className` | `string` | - | Additional CSS class |

### FooterMainMenu

Container for navigation columns.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | FooterMainNav components |
| `className` | `string` | - | Additional CSS class |

### FooterMainNav

Navigation column with title.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | FooterMainLink components |
| `title` | `string` | - | Column heading |
| `aria-label` | `string` | - | Accessible label |
| `className` | `string` | - | Additional CSS class |

### FooterMainLink

Link in navigation column.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Link content |
| `asChild` | `boolean` | `false` | Render as child element |
| `current` | `boolean` | `false` | Mark as current page |
| `className` | `string` | - | Additional CSS class |

### FooterBottom

Bottom bar with copyright and legal links.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Bottom nav content |
| `copyright` | `string` | - | Copyright text |
| `className` | `string` | - | Additional CSS class |

### FooterBottomNav

Navigation in bottom bar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | FooterBottomLink components |
| `aria-label` | `string` | - | Accessible label |
| `className` | `string` | - | Additional CSS class |

### FooterBottomLink

Link in bottom bar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Link content |
| `asChild` | `boolean` | `false` | Render as child element |
| `current` | `boolean` | `false` | Mark as current page |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Semantic `<footer>` element
- `<nav>` elements with `aria-label` attributes
- Column headings for navigation sections
- Current page links can be marked with `current` prop

## Common Patterns

### E-commerce Footer

```tsx
<FooterRoot>
  <FooterMain>
    <FooterMainLogo>
      <Logo href="/">
        <Image src="/logo.svg" alt="Store" />
      </Logo>
      <div className="mt-4 flex g-2">
        <Link href="https://twitter.com" aria-label="Twitter">
          <Icon name="twitter" />
        </Link>
        <Link href="https://facebook.com" aria-label="Facebook">
          <Icon name="facebook" />
        </Link>
      </div>
    </FooterMainLogo>

    <FooterMainMenu>
      <FooterMainNav title="Shop">
        <FooterMainLink asChild><Link href="/new">New Arrivals</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/sale">Sale</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/collections">Collections</Link></FooterMainLink>
      </FooterMainNav>

      <FooterMainNav title="Customer Service">
        <FooterMainLink asChild><Link href="/shipping">Shipping</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/returns">Returns</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/faq">FAQ</Link></FooterMainLink>
      </FooterMainNav>

      <FooterMainNav title="About">
        <FooterMainLink asChild><Link href="/about">Our Story</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/careers">Careers</Link></FooterMainLink>
        <FooterMainLink asChild><Link href="/press">Press</Link></FooterMainLink>
      </FooterMainNav>
    </FooterMainMenu>
  </FooterMain>

  <FooterBottom copyright="© 2024 Store Name. All rights reserved.">
    <FooterBottomNav>
      <FooterBottomLink asChild><Link href="/privacy">Privacy Policy</Link></FooterBottomLink>
      <FooterBottomLink asChild><Link href="/terms">Terms of Service</Link></FooterBottomLink>
      <FooterBottomLink asChild><Link href="/accessibility">Accessibility</Link></FooterBottomLink>
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

## Strapi Integration

```tsx
<FooterRoot>
  <FooterMain brand={
    data.brand && (
      <div>
        <Logo href="/">
          <Image
            src={getMediaUrl(data.logo.url)}
            alt={data.logo.alternativeText}
          />
        </Logo>
        {data.description && <p className="mt-4">{data.description}</p>}
      </div>
    )
  }>
    <FooterMainMenu>
      {data.columns.map(column => (
        <FooterMainNav key={column.id} title={column.title}>
          {column.links.map(link => (
            <FooterMainLink key={link.id} asChild>
              <Link href={link.url}>{link.label}</Link>
            </FooterMainLink>
          ))}
        </FooterMainNav>
      ))}
    </FooterMainMenu>
  </FooterMain>

  <FooterBottom copyright={data.copyright}>
    <FooterBottomNav>
      {data.legalLinks.map(link => (
        <FooterBottomLink key={link.id} asChild>
          <Link href={link.url}>{link.label}</Link>
        </FooterBottomLink>
      ))}
    </FooterBottomNav>
  </FooterBottom>
</FooterRoot>
```

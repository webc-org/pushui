# Header

Responsive site header with desktop navigation, mobile menu, top bar, and dropdown support.

## Import

```tsx
import {
  // Root
  HeaderRoot,
  // Top bar
  TopMenu,
  TopMenuNav,
  TopMenuLink,
  TopMenuDropdown,
  TopMenuDropdownLink,
  // Main navigation
  MainMenu,
  MainMenuLogo,
  MainMenuNav,
  MainMenuLink,
  MainMenuDropdown,
  MainMenuDropdownLink,
  // Mobile
  HeaderMobileRoot,
  MobileTopMenu,
  MobileTopMenuLogo,
  MobileTopMenuToggle,
  MobileMainMenu,
  MobileMainMenuTop,
  MobileMainMenuNav,
  MobileMainMenuLink,
  MobileMainMenuDropdown,
  MobileMainMenuDropdownLink,
} from '@ui'
```

## Usage

### Basic Header

```tsx
<HeaderRoot>
  <MainMenu>
    <MainMenuLogo>
      <Logo href="/">
        <Image src="/logo.svg" alt="Site Logo" width={144} height={40} />
      </Logo>
    </MainMenuLogo>

    <MainMenuNav>
      <MainMenuLink asChild current>
        <Link href="/">Home</Link>
      </MainMenuLink>
      <MainMenuLink asChild>
        <Link href="/products">Products</Link>
      </MainMenuLink>
      <MainMenuLink asChild>
        <Link href="/about">About</Link>
      </MainMenuLink>
    </MainMenuNav>

    <MainMenuNav>
      <Button appearance="button" variant="primary">Sign Up</Button>
    </MainMenuNav>
  </MainMenu>

  <HeaderMobileRoot>
    <MobileTopMenu>
      <MobileTopMenuLogo>
        <Logo href="/">
          <Image src="/logo.svg" alt="Site Logo" width={144} height={40} />
        </Logo>
      </MobileTopMenuLogo>
      <MobileTopMenuToggle />
    </MobileTopMenu>

    <MobileMainMenu>
      <MobileMainMenuTop>
        <Title level="h3">Menu</Title>
        <MobileTopMenuToggle />
      </MobileMainMenuTop>
      <MobileMainMenuNav>
        <MobileMainMenuLink asChild>
          <Link href="/">Home</Link>
        </MobileMainMenuLink>
        <MobileMainMenuLink asChild>
          <Link href="/products">Products</Link>
        </MobileMainMenuLink>
      </MobileMainMenuNav>
    </MobileMainMenu>
  </HeaderMobileRoot>
</HeaderRoot>
```

### With Top Bar

```tsx
<HeaderRoot>
  <TopMenu>
    <TopMenuNav>
      <TopMenuLink asChild>
        <Link href="/help">Help</Link>
      </TopMenuLink>
      <TopMenuLink asChild>
        <Link href="/contact">Contact</Link>
      </TopMenuLink>
    </TopMenuNav>

    <TopMenuNav>
      <TopMenuDropdown label="EN">
        <TopMenuDropdownLink asChild>
          <Link href="/en">English</Link>
        </TopMenuDropdownLink>
        <TopMenuDropdownLink asChild>
          <Link href="/fr">Français</Link>
        </TopMenuDropdownLink>
      </TopMenuDropdown>
    </TopMenuNav>
  </TopMenu>

  <MainMenu>
    {/* main navigation */}
  </MainMenu>

  <HeaderMobileRoot>
    {/* mobile menu */}
  </HeaderMobileRoot>
</HeaderRoot>
```

### With Dropdowns

```tsx
<MainMenuNav>
  <MainMenuLink asChild>
    <Link href="/">Home</Link>
  </MainMenuLink>

  <MainMenuDropdown label="Products" current>
    <MainMenuDropdownLink asChild>
      <Link href="/software">Software</Link>
    </MainMenuDropdownLink>
    <MainMenuDropdownLink asChild>
      <Link href="/services">Services</Link>
    </MainMenuDropdownLink>
  </MainMenuDropdown>

  <MainMenuDropdown label="Solutions">
    <MainMenuDropdownLink asChild>
      <Link href="/enterprise">Enterprise</Link>
    </MainMenuDropdownLink>
    <MainMenuDropdownLink asChild>
      <Link href="/startup">Startup</Link>
    </MainMenuDropdownLink>
  </MainMenuDropdown>
</MainMenuNav>
```

### Mega Menu

```tsx
<MainMenuDropdown label="Solutions" mega>
  <Grid col={4} gap="md">
    <GridItem>
      <Title level="h4">Products</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/product-a">Product A</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/product-b">Product B</Link>
      </MainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/consulting">Consulting</Link>
      </MainMenuDropdownLink>
    </GridItem>
    {/* more columns */}
  </Grid>
</MainMenuDropdown>
```

### Mobile Menu with Dropdowns

```tsx
<MobileMainMenu>
  <MobileMainMenuTop>
    <Title level="h3">Menu</Title>
    <MobileTopMenuToggle />
  </MobileMainMenuTop>

  <MobileMainMenuNav>
    <MobileMainMenuLink asChild>
      <Link href="/">Home</Link>
    </MobileMainMenuLink>

    <MobileMainMenuDropdown label="Products">
      <MobileMainMenuDropdownLink asChild>
        <Link href="/software">Software</Link>
      </MobileMainMenuDropdownLink>
      <MobileMainMenuDropdownLink asChild>
        <Link href="/services">Services</Link>
      </MobileMainMenuDropdownLink>
    </MobileMainMenuDropdown>
  </MobileMainMenuNav>

  <MobileMainMenuNav>
    <Button appearance="button" variant="primary" className="w-full">
      Sign Up
    </Button>
  </MobileMainMenuNav>
</MobileMainMenu>
```

## Components

### HeaderRoot

Root container providing context for mobile menu state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `baseId` | `string` | auto | Base ID for accessibility |
| `isOverlay` | `boolean` | `false` | Overlay mode (header floats over content) |
| `textColor` | `'light' \| 'dark'` | - | Text/icon color |
| `className` | `string` | - | Additional CSS class |

### TopMenu

Top utility bar (help links, language selector).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | TopNav components |
| `containerClassName` | `string` | - | Inner container class |
| `bgColor` | `string` | `'var(--color-grey-7)'` | Background color (CSS value or hex) |
| `bgOpacity` | `string` | `'1'` | Background opacity (`'0'`–`'1'`). Forced to `'1'` on scroll |
| `textColor` | `'light' \| 'dark'` | inherited | Text/icon color (defaults to HeaderRoot value) |

### MainMenu

Main navigation bar with logo and links.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo, Nav components |
| `containerClassName` | `string` | - | Inner container class |
| `bgColor` | `string` | `'var(--color-white)'` | Background color (CSS value or hex) |
| `bgOpacity` | `string` | `'1'` | Background opacity (`'0'`–`'1'`). Forced to `'1'` on scroll |
| `textColor` | `'light' \| 'dark'` | inherited | Text/icon color (defaults to HeaderRoot value) |

### MobileTopMenu

Mobile bar containing logo and toggle.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo and toggle |
| `bgColor` | `string` | `'var(--color-white)'` | Background color (CSS value or hex) |
| `bgOpacity` | `string` | `'1'` | Background opacity (`'0'`–`'1'`). Forced to `'1'` on scroll |
| `textColor` | `'light' \| 'dark'` | inherited | Text/icon color (defaults to HeaderRoot value) |

### MobileMainMenu

Slide-out mobile navigation panel.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Menu content |
| `aria-label` | `string` | `'Mobile navigation'` | Accessible label |
| `bgColor` | `string` | `'var(--color-white)'` | Background color (CSS value or hex) |
| `textColor` | `'light' \| 'dark'` | - | Text/icon color |

### MainMenuDropdown

Dropdown menu in main nav.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | **required** | Trigger label |
| `href` | `string` | - | Optional link on trigger |
| `mega` | `boolean` | `false` | Full-width mega menu |
| `current` | `boolean` | `false` | Mark as current section |

### HeaderMobileRoot

Container for mobile navigation (visible < 1024px).

### MobileTopMenuToggle

Hamburger/close button for mobile menu.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | aria-label (auto-generated) |
| `closeLabel` | `string` | `'Close'` | Close state label |
| `menuLabel` | `string` | `'Menu'` | Open state label |

### Link Components

All link components support `asChild` for custom link rendering and `current` for active state.

| Component | Description |
|-----------|-------------|
| `TopMenuLink` | Link in top bar |
| `TopMenuDropdownLink` | Link in top dropdown |
| `MainMenuLink` | Link in main nav |
| `MainMenuDropdownLink` | Link in main dropdown |
| `MobileMainMenuLink` | Link in mobile menu |
| `MobileMainMenuDropdownLink` | Link in mobile dropdown |

## Overlay Header

Use `overlay` and `textColor` to float the header over hero content. Each bar controls its own background via `bgColor`/`bgOpacity`. On scroll, opacity is forced to `1` (fully opaque) and a shadow appears.

```tsx
<HeaderRoot isOverlay textColor="light">
  <TopMenu bgColor="#111" bgOpacity="0.2" textColor="light">
    {/* top bar */}
  </TopMenu>
  <MainMenu bgColor="#222" bgOpacity="0.2" textColor="light">
    {/* main nav */}
  </MainMenu>
  <HeaderMobileRoot>
    <MobileTopMenu bgColor="#222" bgOpacity="1" textColor="light">
      {/* mobile bar */}
    </MobileTopMenu>
    <MobileMainMenu bgColor="#333">
      {/* mobile menu with custom bg */}
    </MobileMainMenu>
  </HeaderMobileRoot>
</HeaderRoot>

<Banner backgroundImage="..." overlay="dark" className="h-screen">
  <BannerContent textColor="light">{/* hero content */}</BannerContent>
</Banner>
```

Add `header-overlay` class to `<body>` to remove default header padding:

```html
<body class="with-main-nav with-mobile-nav header-overlay">
```

### Context

`useHeader()` exposes state for consumer-side logic (e.g. logo swap):

```tsx
const { isOverlay, isScrolled, textColor } = useHeader()
```

| Value | Type | Description |
|-------|------|-------------|
| `isOverlay` | `boolean` | `true` when overlay mode is active |
| `isScrolled` | `boolean` | `true` when page has scrolled past threshold |
| `textColor` | `'light' \| 'dark'` | Current text color variant |

## Behavior

- Desktop nav visible ≥ 1024px, mobile visible < 1024px
- Mobile menu closes on resize to desktop
- Escape key closes mobile menu
- Body scroll locked when mobile menu open
- Focus returns to toggle on close
- Bar backgrounds solidify (`opacity: 1`) and gain shadow on scroll

## Accessibility

- Semantic `<header>` element
- `<nav>` elements with `aria-label`
- Mobile toggle has `aria-expanded` and `aria-controls`
- Dropdowns use `aria-haspopup` and keyboard navigation
- Current links marked with `aria-current="page"`

## Common Patterns

### E-commerce Header

```tsx
<HeaderRoot>
  <TopMenu>
    <TopMenuNav>
      <TopMenuLink asChild>
        <Link href="/stores">Find a Store</Link>
      </TopMenuLink>
      <TopMenuLink asChild>
        <Link href="/help">Help</Link>
      </TopMenuLink>
    </TopMenuNav>
    <TopMenuNav>
      <TopMenuDropdown label="USD">
        {/* currency options */}
      </TopMenuDropdown>
    </TopMenuNav>
  </TopMenu>

  <MainMenu>
    <MainMenuLogo>
      <Logo href="/"><Image src="/logo.svg" alt="Store" /></Logo>
    </MainMenuLogo>
    <MainMenuNav>
      <MainMenuDropdown label="Shop" mega>
        {/* category grid */}
      </MainMenuDropdown>
      <MainMenuLink asChild>
        <Link href="/sale">Sale</Link>
      </MainMenuLink>
    </MainMenuNav>
    <MainMenuNav>
      <Button appearance="ghost">
        <Icon name="search" />
      </Button>
      <Button appearance="ghost">
        <Icon name="cart" />
      </Button>
    </MainMenuNav>
  </MainMenu>

  <HeaderMobileRoot>
    {/* mobile menu */}
  </HeaderMobileRoot>
</HeaderRoot>
```

## Strapi Integration

```tsx
<HeaderRoot isOverlay={isOverlay} textColor={textColor}>
  {data.topBar && (
    <TopMenu bgColor={data.topBar.bgColor} bgOpacity={data.topBar.bgOpacity}>
      <TopMenuNav>
        {data.topBar.links.map(link => (
          <TopMenuLink key={link.id} asChild>
            <Link href={link.url}>{link.label}</Link>
          </TopMenuLink>
        ))}
      </TopMenuNav>
      {data.locales && (
        <TopMenuNav>
          <TopMenuDropdown label={currentLocale}>
            {data.locales.map(locale => (
              <TopMenuDropdownLink key={locale.code} asChild>
                <Link href={`/${locale.code}`}>{locale.name}</Link>
              </TopMenuDropdownLink>
            ))}
          </TopMenuDropdown>
        </TopMenuNav>
      )}
    </TopMenu>
  )}

  <MainMenu bgColor={data.mainNav?.bgColor} bgOpacity={data.mainNav?.bgOpacity}>
    <MainMenuLogo>
      <Logo href="/">
        <Image
          src={getMediaUrl(data.logo.url)}
          alt={data.logo.alternativeText}
        />
      </Logo>
    </MainMenuLogo>

    <MainMenuNav>
      {data.mainNav.map(item => (
        item.children?.length ? (
          <MainMenuDropdown
            key={item.id}
            label={item.label}
            mega={item.mega}
          >
            {item.children.map(child => (
              <MainMenuDropdownLink key={child.id} asChild>
                <Link href={child.url}>{child.label}</Link>
              </MainMenuDropdownLink>
            ))}
          </MainMenuDropdown>
        ) : (
          <MainMenuLink key={item.id} asChild>
            <Link href={item.url}>{item.label}</Link>
          </MainMenuLink>
        )
      ))}
    </MainMenuNav>
  </MainMenu>

  <HeaderMobileRoot>
    <MobileTopMenu bgColor={data.mobileNav?.bgColor} bgOpacity={data.mobileNav?.bgOpacity}>
      {/* mobile bar */}
    </MobileTopMenu>
    {/* mobile menu */}
  </HeaderMobileRoot>
</HeaderRoot>
```

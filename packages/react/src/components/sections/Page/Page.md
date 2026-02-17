# Page

Root page wrapper that provides consistent layout structure.

## Import

```tsx
import { Page } from '@ui'
```

## Usage

### Basic Page

```tsx
<Page>
  <Header />
  <main>
    {/* page content */}
  </main>
  <Footer />
</Page>
```

### With Sections

```tsx
<Page>
  <Header />

  <Section>
    <Layout>
      <Title level="h1">Welcome</Title>
      <p>Hero section content</p>
    </Layout>
  </Section>

  <Section className="bg-grey-1">
    <Layout>
      <Grid col={3} gap="md">
        {/* feature cards */}
      </Grid>
    </Layout>
  </Section>

  <Footer />
</Page>
```

## Props

### Page

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Page content |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | Additional CSS class |

## Behavior

- Provides consistent page structure
- Handles page-level styling
- Works with Header, Footer, and Section components

## Accessibility

- Semantic page structure
- Allows proper landmark organization with header, main, footer

## Common Patterns

### Standard Page Layout

```tsx
<Page>
  <Header />

  <main>
    <Banner
      title="Page Title"
      subtitle="Page description"
    />

    <Section>
      <Layout>
        {/* main content */}
      </Layout>
    </Section>
  </main>

  <Footer />
</Page>
```

### Landing Page

```tsx
<Page>
  <Header />

  <Banner
    image="/hero.jpg"
    title="Welcome to Our Platform"
    subtitle="Start building amazing things today"
    cta={{ label: 'Get Started', href: '/signup' }}
  />

  <Section>
    <Layout>
      <Title level="h2" className="text-center">Features</Title>
      <Grid col={1} colMD={3} gap="lg">
        {/* feature cards */}
      </Grid>
    </Layout>
  </Section>

  <Section className="bg-primary-1">
    <Layout>
      <Title level="h2" className="text-center">Testimonials</Title>
      <Carousel>
        {/* testimonial slides */}
      </Carousel>
    </Layout>
  </Section>

  <Footer />
</Page>
```

## Strapi Integration

```tsx
<Page className={data.pageClass}>
  <Header data={headerData} />

  {data.sections.map(section => (
    <DynamicSection key={section.id} data={section} />
  ))}

  <Footer data={footerData} />
</Page>
```

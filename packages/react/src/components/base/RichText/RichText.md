# RichText

Render CMS HTML content with consistent typography and prose styling.

## Import

```tsx
import { RichText } from '@ui'
```

## Usage

### HTML Content (CMS)

```tsx
<RichText html={cmsContent} />
```

### Children (Markdown/JSX)

```tsx
<RichText>
  <h2>Section Title</h2>
  <p>Paragraph content with <strong>bold</strong> and <em>italic</em> text.</p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
</RichText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `html` | `string` | - | HTML string (uses dangerouslySetInnerHTML) |
| `children` | `ReactNode` | - | JSX content |
| `className` | `string` | - | Additional CSS class |

## Behavior

- If `html` prop provided, renders via `dangerouslySetInnerHTML`
- If `children` provided, renders as regular JSX
- Applies prose-style CSS for consistent typography

## Styling

RichText applies styling to common HTML elements:
- Headings (h1-h6)
- Paragraphs
- Lists (ul, ol)
- Links
- Blockquotes
- Code blocks
- Tables
- Images

## Security

When using `html` prop, content is rendered via `dangerouslySetInnerHTML`. Ensure content is sanitized on the server (CMS) side to prevent XSS attacks.

## Common Patterns

### WordPress Content

```tsx
<RichText html={post.content.rendered} />
```

### Strapi Content

```tsx
<RichText html={data.content} />
```

### With Layout

```tsx
<Layout>
  <article>
    <Title level="h1">{page.title}</Title>
    <RichText html={page.body} />
  </article>
</Layout>
```

### Combining with Other Components

```tsx
<RichText>
  <h2>Getting Started</h2>
  <p>Follow these steps:</p>
  <Note variant="info">
    <p>Make sure you have Node.js installed.</p>
  </Note>
  <p>Continue with the installation...</p>
</RichText>
```

## Strapi Integration

```tsx
<RichText html={data.content} />
```

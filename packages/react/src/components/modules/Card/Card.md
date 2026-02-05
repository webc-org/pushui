# Card

Content container with optional header, body, and footer sections.

## Import

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@ui'
```

## Usage

### Basic

```tsx
<Card>
  <CardHeader>
    <Title level="h3">Card Title</Title>
  </CardHeader>
  <CardBody>
    <p>Card content goes here.</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Body Only

```tsx
<Card>
  <CardBody>
    <p>Simple card with just content.</p>
  </CardBody>
</Card>
```

### With Image

```tsx
<Card>
  <Image src="/photo.jpg" alt="Featured" className="aspect-video fit-cover" />
  <CardBody>
    <Title level="h3">Article Title</Title>
    <p>Article excerpt...</p>
  </CardBody>
</Card>
```

### Horizontal Layout

```tsx
<Card className="flex-row">
  <Image src="/photo.jpg" alt="" style={{ width: '200px' }} className="fit-cover" />
  <div>
    <CardBody>
      <Title level="h3">Title</Title>
      <p>Description</p>
    </CardBody>
    <CardFooter>
      <Button>Learn More</Button>
    </CardFooter>
  </div>
</Card>
```

### With Actions

```tsx
<Card>
  <CardHeader className="flex items-center justify-between">
    <Title level="h3">Settings</Title>
    <Badge variant="primary">New</Badge>
  </CardHeader>
  <CardBody>
    <p>Configure your preferences.</p>
  </CardBody>
  <CardFooter className="flex justify-end g-2">
    <Button appearance="ghost">Cancel</Button>
    <Button appearance="button" variant="primary">Save</Button>
  </CardFooter>
</Card>
```

## Components

### Card

Main container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `className` | `string` | - | Additional CSS class |

### CardHeader

Top section, typically for title/actions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `className` | `string` | - | Additional CSS class |

### CardBody

Main content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |
| `className` | `string` | - | Additional CSS class |

### CardFooter

Bottom section for actions/metadata.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content |
| `className` | `string` | - | Additional CSS class |

## Common Patterns

### Product Card

```tsx
<Card>
  <Image src={product.image} alt={product.name} className="aspect-square fit-cover" />
  <CardBody>
    <Title level="h3">{product.name}</Title>
    <p className="text-lg">${product.price}</p>
  </CardBody>
  <CardFooter>
    <Button appearance="button" variant="primary" className="w-full">
      Add to Cart
    </Button>
  </CardFooter>
</Card>
```

### Team Member Card

```tsx
<Card className="text-center">
  <CardBody>
    <Avatar src={member.photo} name={member.name} width="6rem" fontSize={6} />
    <Title level="h3" className="mt-3">{member.name}</Title>
    <p>{member.role}</p>
  </CardBody>
</Card>
```

## Strapi Integration

```tsx
<Card className={data.class}>
  {data.image && (
    <Image
      src={getMediaUrl(data.image.url)}
      alt={data.image.alternativeText}
      className="aspect-video fit-cover"
    />
  )}
  <CardBody>
    <Title level="h3">{data.title}</Title>
    <RichText html={data.content} />
  </CardBody>
  {data.link && (
    <CardFooter>
      <Link href={data.link.url}>{data.link.label}</Link>
    </CardFooter>
  )}
</Card>
```

import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Link } from './Link'
import type { LinkAppearance } from './Link.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const appearances: LinkAppearance[] = [
  'default',
  'underline',
  'outline',
  'button',
]

const meta: Meta<typeof Link> = {
  title: 'Base/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, ...variants],
      description: 'The color variant of the link',
    },
    appearance: {
      control: 'select',
      options: [undefined, ...appearances],
      description: 'The visual style of the link',
    },
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    children: {
      control: 'text',
      description: 'Link content',
    },
  },
  args: {
    children: 'Link',
    disabled: false,
    href: '#',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    appearance: 'underline',
  },
}

export const Unstyled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Link href="#">No styles</Link>
      <Link href="https://example.com">Visit example.com</Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Without `variant` or `appearance`, the link has no visual styles - inherits color and no text decoration.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="button">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const AllOutlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="outline">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const AllUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Link key={v} href="#" variant={v} appearance="underline">
          {v}
        </Link>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'primary',
    appearance: 'button',
  },
}

export const Contrast: Story = {
  render: () => (
    <div
      style={{
        background: '#1a1a1a',
        padding: '2rem',
        borderRadius: '0.5rem',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="button"
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="outline"
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="underline"
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `contrast` prop to adapt links for dark backgrounds.',
      },
    },
  },
}

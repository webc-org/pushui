import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'components/base'
import type { ColorVariant } from 'types'
import { Link } from './Link'
import type { LinkAppearance } from './Link.types'

const variants: ColorVariant[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const appearances: LinkAppearance[] = [
  'underline',
  'outline',
  'button',
  'icon',
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

const containerStyles = {
  padding: '4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
} as CSSProperties

const rowStyles = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
} as CSSProperties

export default meta
type Story = StoryObj<typeof Link>

export const Playground: Story = {
  args: {
    children: 'Link',
  },
}

export const Light: Story = {
  render: () => {
    return (
      <div style={containerStyles} className="bg-white">
        <Title level="h3">Default</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v}>
              {v}
            </Link>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} disabled>
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3">Icon</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="icon"
              className="icon-user fs-6"
              aria-label={`Search (${v})`}
            />
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="icon"
              disabled
              className="icon-user fs-6"
              aria-label={`Search (${v})`}
            />
          ))}
        </div>
        <Title level="h3">Button</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} appearance="button">
              {v}
            </Link>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="button"
              disabled
            >
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3">Outline</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} appearance="outline">
              {v}
            </Link>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="outline"
              disabled
            >
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3">Underline</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} appearance="underline">
              {v}
            </Link>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="underline"
              disabled
            >
              {v}
            </Link>
          ))}
        </div>
      </div>
    )
  },
}

export const Dark: Story = {
  render: () => {
    return (
      <div style={containerStyles} className="bg-black">
        <Title level="h3" className="text-white">
          Default
        </Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} contrast>
              {v}
            </Link>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link key={v} href="#" variant={v} contrast disabled>
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Icon
        </Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              contrast
              variant={v}
              appearance="icon"
              className="icon-user fs-6"
              aria-label={`Search (${v})`}
            />
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              contrast
              variant={v}
              appearance="icon"
              disabled
              className="icon-user fs-6"
              aria-label={`Search (${v})`}
            />
          ))}
        </div>
        <Title level="h3" className="text-white">
          Button
        </Title>
        <div style={rowStyles}>
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
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="button"
              disabled
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Outline
        </Title>
        <div style={rowStyles}>
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
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="outline"
              disabled
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Underline
        </Title>
        <div style={rowStyles}>
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
        <div style={rowStyles}>
          {variants.map((v) => (
            <Link
              key={v}
              href="#"
              variant={v}
              appearance="underline"
              disabled
              contrast
            >
              {v}
            </Link>
          ))}
        </div>
      </div>
    )
  },
}

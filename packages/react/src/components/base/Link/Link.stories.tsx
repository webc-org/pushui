import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
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
    variant: { control: 'select', options: [undefined, ...variants] },
    appearance: {
      control: 'select',
      options: [undefined, ...appearances],
    },
    contrast: { control: 'boolean', description: 'For dark backgrounds' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: { children: 'Link', href: '#' },
}

const row: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
}

export default meta
type Story = StoryObj<typeof Link>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    {appearances.map((a) => (
      <div key={a}>
        <p
          style={{
            marginBottom: '0.8rem',
            opacity: 0.5,
            fontSize: '1.2rem',
          }}
        >
          {a}
        </p>
        <div style={row}>
          {variants.map((v) =>
            a === 'icon' ? (
              <Link
                key={v}
                href="#"
                variant={v}
                appearance="icon"
                className="icon-user fs-6"
                aria-label={v}
              />
            ) : (
              <Link key={v} href="#" variant={v} appearance={a}>
                {v}
              </Link>
            )
          )}
        </div>
        <div style={{ ...row, marginTop: '0.5rem', opacity: 0.5 }}>
          {variants.map((v) =>
            a === 'icon' ? (
              <Link
                key={v}
                href="#"
                variant={v}
                appearance="icon"
                disabled
                className="icon-user fs-6"
                aria-label={v}
              />
            ) : (
              <Link key={v} href="#" variant={v} appearance={a} disabled>
                {v}
              </Link>
            )
          )}
        </div>
      </div>
    ))}
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

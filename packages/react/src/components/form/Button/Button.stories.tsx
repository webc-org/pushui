import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Button } from './Button'
import type { ButtonAppearance } from './Button.types'

const variants: ColorVariant[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]
const appearances: ButtonAppearance[] = [
  'underline',
  'outline',
  'button',
  'icon',
]

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: [undefined, ...variants] },
    appearance: {
      control: 'select',
      options: [undefined, ...appearances],
    },
    contrast: { control: 'boolean', description: 'For dark backgrounds' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Button', disabled: false, loading: false },
}

const row: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
}

export default meta
type Story = StoryObj<typeof Button>

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
              <Button
                key={v}
                variant={v}
                appearance="icon"
                className="icon-user fs-6"
                aria-label={v}
              />
            ) : (
              <Button key={v} variant={v} appearance={a}>
                {v}
              </Button>
            )
          )}
        </div>
        <div style={{ ...row, marginTop: '0.5rem', opacity: 0.5 }}>
          {variants.map((v) =>
            a === 'icon' ? (
              <Button
                key={v}
                variant={v}
                appearance="icon"
                disabled
                className="icon-user fs-6"
                aria-label={v}
              />
            ) : (
              <Button key={v} variant={v} appearance={a} disabled>
                {v}
              </Button>
            )
          )}
        </div>
      </div>
    ))}
    <div>
      <p
        style={{
          marginBottom: '0.8rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        loading
      </p>
      <div style={row}>
        <Button variant="primary" appearance="button" loading>
          Submitting...
        </Button>
      </div>
    </div>
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

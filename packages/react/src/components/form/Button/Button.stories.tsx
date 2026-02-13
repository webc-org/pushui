import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'components/base'
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
    variant: {
      control: 'select',
      options: [undefined, ...variants],
      description: 'The color variant of the button',
    },
    appearance: {
      control: 'select',
      options: [undefined, ...appearances],
      description: 'The visual style of the button',
    },
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
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
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: 'Button',
  },
}

export const Light: Story = {
  render: () => {
    return (
      <div style={containerStyles} className="bg-white">
        <Title level="h3">Default</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} disabled>
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3">Icon</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
              variant={v}
              appearance="icon"
              className="icon-user fs-6"
              aria-label={`Search (${v})`}
            />
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
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
            <Button key={v} variant={v} appearance="button">
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="button" disabled>
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3">Outline</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="outline">
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="outline" disabled>
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3">Underline</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="underline">
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="underline" disabled>
              {v}
            </Button>
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
        <Title level="h3">Default</Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} contrast>
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} contrast disabled>
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Icon
        </Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
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
            <Button
              key={v}
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
            <Button key={v} variant={v} appearance="button" contrast>
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
              variant={v}
              appearance="button"
              disabled
              contrast
            >
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Outline
        </Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="outline" contrast>
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
              variant={v}
              appearance="outline"
              disabled
              contrast
            >
              {v}
            </Button>
          ))}
        </div>
        <Title level="h3" className="text-white">
          Underline
        </Title>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button key={v} variant={v} appearance="underline" contrast>
              {v}
            </Button>
          ))}
        </div>
        <div style={rowStyles}>
          {variants.map((v) => (
            <Button
              key={v}
              variant={v}
              appearance="underline"
              disabled
              contrast
            >
              {v}
            </Button>
          ))}
        </div>
      </div>
    )
  },
}

export const Loading: Story = {
  args: {
    children: 'Submitting...',
    loading: true,
    variant: 'primary',
    appearance: 'button',
  },
}

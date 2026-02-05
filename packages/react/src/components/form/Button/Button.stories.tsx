import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Button } from './Button'
import type { ButtonAppearance } from './Button.types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const appearances: ButtonAppearance[] = [
  'default',
  'underline',
  'outline',
  'button',
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

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    appearance: 'button',
  },
}

export const Unstyled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button>No styles</Button>
      <Button onClick={() => alert('clicked!')}>Click me</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Without `variant` or `appearance`, the button has no visual styles - like a native button reset.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="button" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const AllOutlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="outline" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const AllUnderlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button variant={v} appearance="underline" key={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: 'Submitting...',
    loading: true,
    variant: 'primary',
    appearance: 'button',
  },
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
            <Button variant={v} appearance="button" contrast key={v}>
              {v}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Button variant={v} appearance="outline" contrast key={v}>
              {v}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <Button variant={v} appearance="underline" contrast key={v}>
              {v}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `contrast` prop to adapt buttons for dark backgrounds.',
      },
    },
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Progress } from './Progress'

const variants: ColorVariant[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Progress> = {
  title: 'Base/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Current value' },
    max: { control: 'number', description: 'Maximum value' },
    variant: {
      control: 'select',
      options: variants,
      description: 'Color variant',
    },
    height: { control: 'text', description: 'Height (e.g. "0.5rem")' },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate loading state',
    },
  },
  args: {
    value: 60,
    max: 100,
    variant: 'primary',
    showLabel: false,
    indeterminate: false,
  },
}

export default meta
type Story = StoryObj<typeof Progress>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    {variants.map((v) => (
      <div
        key={v}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <span style={{ width: '9rem', fontSize: '1.2rem', opacity: 0.6 }}>
          {v}
        </span>
        <Progress variant={v} value={60} style={{ flex: 1 }} />
      </div>
    ))}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span style={{ width: '9rem', fontSize: '1.2rem', opacity: 0.6 }}>
        indeterminate
      </span>
      <Progress variant="primary" indeterminate style={{ flex: 1 }} />
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

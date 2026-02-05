import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Badge } from './Badge'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Badge> = {
  title: 'Base/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the badge',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  args: {
    children: 'Badge',
    variant: 'primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Badge variant={v} key={v}>
          {v}
        </Badge>
      ))}
    </div>
  ),
}

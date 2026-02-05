import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Avatar } from './Avatar'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Avatar> = {
  title: 'Base/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for image',
    },
    name: {
      control: 'text',
      description: 'Name for initials fallback',
    },
    width: {
      control: 'text',
      description: 'Size of the avatar',
      table: {
        defaultValue: { summary: '3rem' },
      },
    },
    fontSize: {
      control: { type: 'number', min: 1, max: 9 },
      description: 'Font size scale (1-9)',
      table: {
        defaultValue: { summary: '2' },
      },
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Background color variant for fallback',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    defaultLabel: {
      control: 'text',
      description: 'Default aria-label when no alt or name provided',
    },
  },
  args: {
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=john',
    alt: 'John Doe',
    name: 'John Doe',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
    variant: 'primary',
  },
}

export const SingleName: Story = {
  args: {
    name: 'John',
    variant: 'secondary',
  },
}

export const Fallback: Story = {
  args: {},
}

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar
        width="3rem"
        fontSize={2}
        name="John Doe"
        variant="primary"
      />
      <Avatar
        width="4rem"
        fontSize={3}
        name="John Doe"
        variant="primary"
      />
      <Avatar
        width="5rem"
        fontSize={4}
        name="John Doe"
        variant="primary"
      />
      <Avatar
        width="6rem"
        fontSize={5}
        name="John Doe"
        variant="primary"
      />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {variants.map((v) => (
        <Avatar key={v} variant={v} name="JD" />
      ))}
    </div>
  ),
}

export const ImageWithFallback: Story = {
  args: {
    src: 'https://broken-url.com/image.jpg',
    name: 'Jane Smith',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When the image fails to load, initials are shown as fallback.',
      },
    },
  },
}

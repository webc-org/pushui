import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Avatar } from './Avatar'

const variants: ColorVariant[] = [
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
    src: { control: 'text', description: 'Image URL' },
    alt: { control: 'text', description: 'Alt text for image' },
    name: { control: 'text', description: 'Name for initials fallback' },
    width: { control: 'text', description: 'Size of the avatar' },
    fontSize: {
      control: { type: 'number', min: 1, max: 9 },
      description: 'Font size scale (1-9)',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Background color variant',
    },
  },
  args: { variant: undefined },
}

export default meta
type Story = StoryObj<typeof Avatar>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {variants.map((v) => (
        <Avatar key={v} variant={v} name="JD" />
      ))}
    </div>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar
        src="https://i.pravatar.cc/150?u=john"
        alt="With image"
        name="John Doe"
      />
      <Avatar name="John Doe" variant="primary" />
      <Avatar name="John" variant="secondary" />
      <Avatar variant="info" />
      <Avatar
        src="https://broken.url/img.jpg"
        name="Fallback"
        variant="success"
      />
    </div>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {[
        ['3rem', 2],
        ['4rem', 3],
        ['5rem', 4],
        ['6rem', 5],
      ].map(([w, f]) => (
        <Avatar
          key={String(w)}
          width={String(w)}
          fontSize={Number(f)}
          name="JD"
          variant="primary"
        />
      ))}
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

import type { Meta, StoryObj } from '@storybook/react'
import { Iframe } from './Iframe'

const meta: Meta<typeof Iframe> = {
  title: 'Base/Iframe',
  component: Iframe,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL',
    },
    title: {
      control: 'text',
      description: 'Accessible title (required)',
    },
    allowFullScreen: {
      control: 'boolean',
      description: 'Allow fullscreen',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Loading behavior',
    },
  },
}

export default meta
type Story = StoryObj<typeof Iframe>

export const Default: Story = {
  args: {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'YouTube video player',
    className: 'aspect-video',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export const YouTube: Story = {
  args: {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'YouTube video player',
    className: 'aspect-video',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Vimeo: Story = {
  args: {
    src: 'https://player.vimeo.com/video/76979871',
    title: 'Vimeo video player',
    className: 'aspect-video',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export const GoogleMaps: Story = {
  args: {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1635959764123!5m2!1sen!2sfr',
    title: 'Google Maps - Eiffel Tower',
    className: 'aspect-4-3',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Square: Story = {
  args: {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Square video',
    className: 'aspect-square',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

import type { Meta, StoryObj } from '@storybook/react'
import { Video } from './Video'

const meta: Meta<typeof Video> = {
  title: 'Base/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Video source URL',
    },
    poster: {
      control: 'text',
      description: 'Poster image URL',
    },
    controls: {
      control: 'boolean',
      description: 'Show video controls',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Autoplay video',
    },
    loop: {
      control: 'boolean',
      description: 'Loop video',
    },
    muted: {
      control: 'boolean',
      description: 'Mute video',
    },
    fallbackText: {
      control: 'text',
      description: 'Fallback text for unsupported browsers',
    },
    fallbackLinkText: {
      control: 'text',
      description: 'Link text for video fallback',
    },
  },
}

export default meta
type Story = StoryObj<typeof Video>

const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4'
const samplePoster =
  'https://peach.blender.org/wp-content/uploads/bbb-splash.png'

export const Default: Story = {
  args: {
    src: sampleVideo,
    controls: true,
  },
}

export const WithPoster: Story = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    controls: true,
  },
}

export const WithCaption: Story = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    caption: 'Big Buck Bunny - Blender Foundation',
    controls: true,
  },
}

export const WithMultipleSources: Story = {
  args: {
    sources: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video/mp4',
      },
      {
        src: 'https://www.w3schools.com/html/mov_bbb.webm',
        type: 'video/webm',
      },
    ],
    poster: samplePoster,
    controls: true,
  },
}

export const WithSubtitles: Story = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    tracks: [
      {
        src: '/subtitles_en.vtt',
        kind: 'subtitles',
        srclang: 'en',
        label: 'English',
        default: true,
      },
      {
        src: '/subtitles_fr.vtt',
        kind: 'subtitles',
        srclang: 'fr',
        label: 'Fran\u00e7ais',
      },
    ],
    controls: true,
  },
}

export const AspectRatio: Story = {
  args: {
    src: sampleVideo,
    className: 'aspect-video',
    controls: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Rounded: Story = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'r-3',
    controls: true,
  },
}

export const AutoplayMuted: Story = {
  args: {
    src: sampleVideo,
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
  },
}

export const CustomFallback: Story = {
  args: {
    src: sampleVideo,
    fallback: (
      <p>
        Votre navigateur ne supporte pas la vid\u00e9o HTML5.{' '}
        <a href={sampleVideo}>T\u00e9l\u00e9charger la vid\u00e9o</a>.
      </p>
    ),
    controls: true,
  },
}

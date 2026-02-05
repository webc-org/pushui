import type { Meta, StoryObj } from '@storybook/react'
import { Audio } from './Audio'

const meta: Meta<typeof Audio> = {
  title: 'Base/Audio',
  component: Audio,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Audio source URL',
    },
    title: {
      control: 'text',
      description: 'Title above the player',
    },
    caption: {
      control: 'text',
      description: 'Caption below the player',
    },
    transcriptUrl: {
      control: 'text',
      description: 'Link to transcript',
    },
    transcriptLabel: {
      control: 'text',
      description: 'Transcript link text',
    },
    controls: {
      control: 'boolean',
      description: 'Show audio controls',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Autoplay audio',
    },
    loop: {
      control: 'boolean',
      description: 'Loop audio',
    },
    muted: {
      control: 'boolean',
      description: 'Mute audio',
    },
    fallbackText: {
      control: 'text',
      description: 'Fallback text for unsupported browsers',
    },
    fallbackLinkText: {
      control: 'text',
      description: 'Link text for audio fallback',
    },
  },
}

export default meta
type Story = StoryObj<typeof Audio>

const sampleAudio = 'https://www.w3schools.com/html/horse.mp3'

export const Default: Story = {
  args: {
    src: sampleAudio,
    controls: true,
  },
}

export const WithTitle: Story = {
  args: {
    src: sampleAudio,
    title: 'Horse Sound Effect',
    controls: true,
  },
}

export const WithCaption: Story = {
  args: {
    src: sampleAudio,
    caption: 'Audio sample from W3Schools',
    controls: true,
  },
}

export const WithTitleAndCaption: Story = {
  args: {
    src: sampleAudio,
    title: 'Horse Sound Effect',
    caption: 'A short audio clip of a horse neighing',
    controls: true,
  },
}

export const WithTranscript: Story = {
  args: {
    src: sampleAudio,
    title: 'Horse Sound Effect',
    caption: 'A short audio clip of a horse neighing',
    transcriptUrl: '/transcripts/horse.txt',
    controls: true,
  },
}

export const WithCustomTranscriptLabel: Story = {
  args: {
    src: sampleAudio,
    title: 'Horse Sound Effect',
    transcriptUrl: '/transcripts/horse.txt',
    transcriptLabel: 'Lire la transcription',
    controls: true,
  },
}

export const WithMultipleSources: Story = {
  args: {
    sources: [
      {
        src: 'https://www.w3schools.com/html/horse.mp3',
        type: 'audio/mp3',
      },
      {
        src: 'https://www.w3schools.com/html/horse.ogg',
        type: 'audio/ogg',
      },
    ],
    title: 'Horse Sound Effect',
    controls: true,
  },
}

export const Loop: Story = {
  args: {
    src: sampleAudio,
    title: 'Looping Audio',
    loop: true,
    controls: true,
  },
}

export const CustomFallback: Story = {
  args: {
    src: sampleAudio,
    fallback: (
      <p>
        Votre navigateur ne supporte pas l&apos;audio HTML5.{' '}
        <a href={sampleAudio}>Télécharger l&apos;audio</a>.
      </p>
    ),
    controls: true,
  },
}

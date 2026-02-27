import type { Meta, StoryObj } from '@storybook/react'
import { Audio } from './Audio'

const meta: Meta<typeof Audio> = {
  title: 'Base/Audio',
  component: Audio,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    caption: { control: 'text' },
    transcriptUrl: { control: 'text' },
    transcriptLabel: { control: 'text' },
    controls: { control: 'boolean' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
  },
  args: { controls: true },
}

export default meta
type Story = StoryObj<typeof Audio>

const sampleAudio = 'https://www.w3schools.com/html/horse.mp3'

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Audio src={sampleAudio} controls />
    <Audio src={sampleAudio} title="With Title" controls />
    <Audio
      src={sampleAudio}
      title="With Caption"
      caption="Audio sample from W3Schools"
      controls
    />
    <Audio
      src={sampleAudio}
      title="With Transcript"
      caption="A horse neighing"
      transcriptUrl="/transcripts/horse.txt"
      controls
    />
    <Audio
      sources={[
        {
          src: 'https://www.w3schools.com/html/horse.mp3',
          type: 'audio/mp3',
        },
        {
          src: 'https://www.w3schools.com/html/horse.ogg',
          type: 'audio/ogg',
        },
      ]}
      title="Multiple Sources"
      controls
    />
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

import type { Meta, StoryObj } from '@storybook/react'
import { Video } from './Video'

const meta: Meta<typeof Video> = {
  title: 'Base/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    poster: { control: 'text' },
    controls: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
  },
  args: { controls: true },
}

export default meta
type Story = StoryObj<typeof Video>

const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4'
const samplePoster =
  'https://peach.blender.org/wp-content/uploads/bbb-splash.png'

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Video src={sampleVideo} poster={samplePoster} controls />
    <Video
      src={sampleVideo}
      poster={samplePoster}
      caption="Big Buck Bunny – Blender Foundation"
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

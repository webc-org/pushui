import type { Meta, StoryObj } from '@storybook/react'
import { Iframe } from './Iframe'

const meta: Meta<typeof Iframe> = {
  title: 'Base/Iframe',
  component: Iframe,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    allowFullScreen: { control: 'boolean' },
    loading: { control: 'select', options: ['lazy', 'eager'] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Iframe>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube"
      className="aspect-video"
    />
    <Iframe
      src="https://player.vimeo.com/video/76979871"
      title="Vimeo"
      className="aspect-video"
    />
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1635959764123!5m2!1sen!2sfr"
      title="Google Maps – Eiffel Tower"
      className="aspect-4-3"
    />
    <div style={{ maxWidth: '400px' }}>
      <Iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Square"
        className="aspect-square"
      />
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

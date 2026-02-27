import type { Meta, StoryObj } from '@storybook/react'
import { Image } from 'components'

const meta: Meta<typeof Image> = {
  title: 'Base/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Alt text' },
    caption: { control: 'text', description: 'Caption text' },
  },
}

export default meta
type Story = StoryObj<typeof Image>

const box = {
  width: '200px',
  height: '140px',
  overflow: 'hidden' as const,
  background: 'var(--theme-bg-2)',
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div
      style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}
    >
      {(['cover', 'contain', 'fill', 'none'] as const).map((fit) => (
        <div key={fit}>
          <p
            style={{
              marginBottom: '0.5rem',
              fontSize: '1.2rem',
              opacity: 0.6,
            }}
          >
            {fit}
          </p>
          <div style={{ ...box, background: 'var(--theme-border)' }}>
            <Image
              src="https://picsum.photos/800/400"
              alt={fit}
              className={`fit-${fit}`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </div>
    <div
      style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}
    >
      {(['aspect-square', 'aspect-4-3', 'aspect-video'] as const).map(
        (cls) => (
          <div key={cls} style={{ width: '160px' }}>
            <p
              style={{
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                opacity: 0.6,
              }}
            >
              {cls}
            </p>
            <Image
              src="https://picsum.photos/800/600"
              alt={cls}
              className={`fit-cover ${cls}`}
              style={{ width: '100%' }}
            />
          </div>
        )
      )}
    </div>
    <div>
      <Image
        src="https://picsum.photos/600/400"
        alt="With caption"
        caption="© Photographer — example caption with a link"
        className="r-3"
        style={{ maxWidth: '360px' }}
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

import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Base/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rect'],
      description: 'Shape variant',
    },
    width: { control: 'text', description: 'Width (CSS value)' },
    height: { control: 'text', description: 'Height (CSS value)' },
    animation: {
      control: 'boolean',
      description: 'Enable shimmer animation',
    },
  },
  args: { variant: 'text', animation: true },
}

export default meta
type Story = StoryObj<typeof Skeleton>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="circle" width={48} height={48} />
      <Skeleton variant="rect" width="150px" height="80px" />
    </div>
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div
        style={{
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
        }}
      >
        <Skeleton variant="rect" height={120} />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
          >
            <Skeleton variant="circle" width={40} height={40} />
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="70%" height={12} />
            </div>
          </div>
        ))}
      </div>
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

import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import type { SkeletonVariant } from './Skeleton.types'

const variants: SkeletonVariant[] = ['text', 'circle', 'rect']

const meta: Meta<typeof Skeleton> = {
  title: 'Base/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'Shape variant',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    width: {
      control: 'text',
      description: 'Width (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Height (CSS value)',
    },
    animation: {
      control: 'boolean',
      description: 'Enable shimmer animation',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    variant: 'text',
    animation: true,
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: {
    variant: 'text',
  },
}

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
}

export const Rectangle: Story = {
  args: {
    variant: 'rect',
  },
}

export const CustomSize: Story = {
  args: {
    variant: 'rect',
    width: '300px',
    height: '150px',
    className: 'r-4',
  },
}

export const NoAnimation: Story = {
  args: {
    animation: false,
  },
}

export const CardSkeleton: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        padding: '1.6rem',
        border: '0.1rem solid #eee',
        borderRadius: '8px',
      }}
    >
      <Skeleton
        variant="rect"
        height={150}
        style={{ marginBottom: '1.6rem' }}
      />
      <Skeleton
        variant="text"
        width="80%"
        style={{ marginBottom: '0.8rem' }}
      />
      <Skeleton
        variant="text"
        width="60%"
        style={{ marginBottom: '1.2rem' }}
      />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Skeleton variant="circle" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <Skeleton
            variant="text"
            width="50%"
            style={{ marginBottom: '0.4rem' }}
          />
          <Skeleton variant="text" width="30%" height={12} />
        </div>
      </div>
    </div>
  ),
}

export const ListSkeleton: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}
        >
          <Skeleton variant="circle" width={48} height={48} />
          <div style={{ flex: 1 }}>
            <Skeleton
              variant="text"
              width="40%"
              style={{ marginBottom: '0.6rem' }}
            />
            <Skeleton variant="text" width="70%" height={12} />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={{ display: 'flex', gap: '1rem' }}>
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="25%" />
        </div>
      ))}
    </div>
  ),
}

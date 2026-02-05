import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColorVariant } from 'types'
import { Progress } from './Progress'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Progress> = {
  title: 'Base/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Color variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    height: {
      control: 'text',
      description: 'Height (e.g., "0.5rem", "8px")',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate loading state',
    },
  },
  args: {
    value: 60,
    max: 100,
    variant: 'primary',
    showLabel: false,
    indeterminate: false,
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
    >
      {variants.map((v) => (
        <div
          key={v}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <span style={{ width: '8rem', fontSize: '1.4rem' }}>{v}</span>
          <Progress variant={v} value={60} style={{ flex: 1 }} />
        </div>
      ))}
    </div>
  ),
}

export const CustomHeight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: '6rem', fontSize: '1.4rem' }}>0.25rem</span>
        <Progress height="0.25rem" value={60} style={{ flex: 1 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: '6rem', fontSize: '1.4rem' }}>0.5rem</span>
        <Progress height="0.5rem" value={60} style={{ flex: 1 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: '6rem', fontSize: '1.4rem' }}>1rem</span>
        <Progress height="1rem" value={60} style={{ flex: 1 }} />
      </div>
    </div>
  ),
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const CustomMax: Story = {
  args: {
    value: 3,
    max: 5,
    showLabel: true,
  },
}

function AnimatedProgress() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 5))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return <Progress value={value} variant="success" showLabel />
}

export const Animated: Story = {
  render: () => <AnimatedProgress />,
  parameters: {
    docs: {
      disable: true,
    },
  },
}

export const UploadProgress: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '1.4rem',
        }}
      >
        <span>Uploading document.pdf</span>
        <span>75%</span>
      </div>
      <Progress value={75} variant="primary" />
    </div>
  ),
}

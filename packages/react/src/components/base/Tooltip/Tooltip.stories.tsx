import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { Info } from 'lucide-react'
import { Tooltip } from './Tooltip'
import type { TooltipPosition } from './Tooltip.types'

const wrapperStyle: CSSProperties = {
  padding: '5rem',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '30rem',
  alignItems: 'center',
}
const paragraphStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: '.5rem',
  justifyContent: 'center',
}

const positions: TooltipPosition[] = ['top', 'bottom', 'left', 'right']

const meta: Meta<typeof Tooltip> = {
  title: 'Base/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    position: {
      control: 'select',
      options: positions,
      description: 'Position relative to trigger',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    delay: {
      control: 'number',
      description: 'Delay before showing (ms)',
      table: {
        defaultValue: { summary: '200' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },
  },
  args: {
    content: 'This is a tooltip',
    position: 'top',
    delay: 200,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => (
    <div style={wrapperStyle}>
      <p style={paragraphStyle}>
        <Tooltip {...args}>
          <Info size={20} />
        </Tooltip>
        Hover me
      </p>
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div
      style={{
        padding: '8rem',
        display: 'flex',
        gap: '4rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {positions.map((pos) => (
        <p key={pos} style={paragraphStyle}>
          <Tooltip content={`Tooltip on ${pos}`} position={pos} delay={0}>
            <Info size={20} />
          </Tooltip>
          {pos}
        </p>
      ))}
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    content:
      'This is a longer tooltip with more detailed information that wraps to multiple lines.',
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <p style={paragraphStyle}>
        <Tooltip {...args}>
          <Info size={20} />
        </Tooltip>
        Hover for details
      </p>
    </div>
  ),
}

export const WithReactContent: Story = {
  render: () => {
    const TooltipContent = (
      <>
        <Title level="h5">Bold title</Title>
        <p style={{ opacity: 0.8 }}>Additional info</p>
      </>
    )

    return (
      <div style={wrapperStyle}>
        <p style={paragraphStyle}>
          <Tooltip content={TooltipContent} delay={0}>
            <Info size={20} />
          </Tooltip>
          Hover for details
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <p style={paragraphStyle}>
        <Tooltip {...args}>
          <Info size={20} />
        </Tooltip>
        No tooltip
      </p>
    </div>
  ),
}

export const NoDelay: Story = {
  args: {
    delay: 0,
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Tooltip {...args}>
        <p>Instant tooltip</p>
      </Tooltip>
    </div>
  ),
}

export const EdgeDetection: Story = {
  render: () => (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '20rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={paragraphStyle}>
          <Tooltip
            content="This tooltip should flip to the right"
            position="left"
            delay={0}
          >
            <Info size={20} />
          </Tooltip>
          Tooltip
        </p>

        <p style={paragraphStyle}>
          <Tooltip
            content="This tooltip should flip to the left"
            position="right"
            delay={0}
          >
            <Info size={20} />
          </Tooltip>
          Tooltip
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={paragraphStyle}>
          <Tooltip
            content="This is a long tooltip that should shift to stay in viewport"
            position="top"
            delay={0}
          >
            <Info size={20} />
          </Tooltip>
          Tooltip
        </p>

        <p style={paragraphStyle}>
          <Tooltip
            content="This is a long tooltip that should shift to stay in viewport"
            position="top"
            delay={0}
          >
            <Info size={20} />
          </Tooltip>
          Tooltip
        </p>
      </div>
    </div>
  ),
}

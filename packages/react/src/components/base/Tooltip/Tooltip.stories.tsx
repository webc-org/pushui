import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { Info } from 'lucide-react'
import { Tooltip } from './Tooltip'
import type { TooltipPosition } from './Tooltip.types'

const positions: TooltipPosition[] = ['top', 'bottom', 'left', 'right']

const triggerStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: '.5rem',
}

const meta: Meta<typeof Tooltip> = {
  title: 'Base/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', description: 'Tooltip content' },
    position: {
      control: 'select',
      options: positions,
      description: 'Position relative to trigger',
    },
    delay: { control: 'number', description: 'Delay before showing (ms)' },
    disabled: { control: 'boolean', description: 'Disable the tooltip' },
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

const Variants = () => (
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
      <p key={pos} style={triggerStyle}>
        <Tooltip content={`Tooltip ${pos}`} position={pos} delay={0}>
          <Info size={20} />
        </Tooltip>
        {pos}
      </p>
    ))}
    <p style={triggerStyle}>
      <Tooltip
        content={
          <>
            <Title level="h5">Rich content</Title>
            <p style={{ opacity: 0.8 }}>Extra info</p>
          </>
        }
        delay={0}
      >
        <Info size={20} />
      </Tooltip>
      rich
    </p>
    <p style={triggerStyle}>
      <Tooltip content="Won't show" disabled>
        <Info size={20} />
      </Tooltip>
      disabled
    </p>
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

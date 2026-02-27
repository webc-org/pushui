import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Base/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Line style',
    },
    spacing: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'Vertical spacing (1-5)',
    },
    hidden: {
      control: 'boolean',
      description: 'Hide the line (spacing only)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <p
        style={{
          marginBottom: '0.5rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        solid
      </p>
      <Divider variant="solid" />
    </div>
    <div>
      <p
        style={{
          marginBottom: '0.5rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        dashed
      </p>
      <Divider variant="dashed" />
    </div>
    <div>
      <p
        style={{
          marginBottom: '0.5rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        dotted
      </p>
      <Divider variant="dotted" />
    </div>
    <div>
      <p
        style={{
          marginBottom: '0.5rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        with text
      </p>
      <Divider variant="solid" spacing={2}>
        or
      </Divider>
    </div>
    <div>
      <p
        style={{
          marginBottom: '0.5rem',
          opacity: 0.5,
          fontSize: '1.2rem',
        }}
      >
        hidden
      </p>
      <p>Content above</p>
      <Divider hidden spacing={2} />
      <p>Content below</p>
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

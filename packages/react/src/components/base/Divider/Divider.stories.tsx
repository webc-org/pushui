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

export const Default: Story = {}

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
}

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
}

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
}

export const Spacing1: Story = {
  args: {
    spacing: 1,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const Spacing2: Story = {
  args: {
    spacing: 2,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const Spacing3: Story = {
  args: {
    spacing: 3,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const Spacing4: Story = {
  args: {
    spacing: 4,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const Hidden: Story = {
  args: {
    spacing: 2,
    hidden: true,
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below (line hidden, spacing only)</p>
      </div>
    ),
  ],
}

export const WithText: Story = {
  args: {
    spacing: 2,
    children: 'or',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

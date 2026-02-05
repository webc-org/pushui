import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

const meta: Meta<typeof Title> = {
  title: 'Base/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: levels,
      description: 'The heading level (h1-h6)',
      table: {
        defaultValue: { summary: 'h1' },
      },
    },
    children: {
      control: 'text',
      description: 'Title content',
    },
  },
  args: {
    children: 'Title',
    level: 'h1',
  },
}

export default meta
type Story = StoryObj<typeof Title>

export const Playground: Story = {
  args: {
    children: 'Heading Text',
    level: 'h1',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {levels.map((level) => (
        <Title level={level} key={level}>
          Heading {level}
        </Title>
      ))}
    </div>
  ),
}

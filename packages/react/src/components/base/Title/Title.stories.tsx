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
      description: 'Heading level (h1-h6)',
    },
    children: { control: 'text', description: 'Title content' },
  },
  args: { children: 'Title', level: 'h1' },
}

export default meta
type Story = StoryObj<typeof Title>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {levels.map((level) => (
      <Title level={level} key={level}>
        Heading {level}
      </Title>
    ))}
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

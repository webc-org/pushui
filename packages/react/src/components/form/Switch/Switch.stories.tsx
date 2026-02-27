import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
  args: { label: 'Enable feature', disabled: false },
}

export default meta
type Story = StoryObj<typeof Switch>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Switch label="Default" />
    <Switch label="Checked" defaultChecked />
    <Switch label="Disabled" disabled />
    <Switch label="Disabled + checked" disabled defaultChecked />
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

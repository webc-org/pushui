import type { Meta, StoryObj } from '@storybook/react'
import { InputText } from './Text'

const meta: Meta<typeof InputText> = {
  title: 'Form/Text',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
  },
}

export default meta
type Story = StoryObj<typeof InputText>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <InputText label="Default" placeholder="Enter text" />
    <InputText label="With value" defaultValue="user@example.com" />
    <InputText label="Required" placeholder="Required field" required />
    <InputText label="Disabled" placeholder="Cannot edit" disabled />
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

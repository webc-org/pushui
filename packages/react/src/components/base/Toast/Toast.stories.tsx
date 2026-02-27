import type { Meta, StoryObj } from '@storybook/react'
import { Button, Title, Toasts, useToasts } from 'components'

const meta: Meta = {
  title: 'Base/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Toasts>
        <Story />
      </Toasts>
    ),
  ],
}

export default meta
type Story = StoryObj

function ToastTrigger({
  label,
  content,
}: {
  label: string
  content: React.ReactNode
}) {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() => addToast({ children: content })}
    >
      {label}
    </Button>
  )
}

const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <ToastTrigger
      label="Simple"
      content={<p>A simple toast message.</p>}
    />
    <ToastTrigger
      label="With Title"
      content={
        <>
          <Title level="h4">Toast title</Title>
          <p>This is a toast notification.</p>
        </>
      }
    />
    <ToastTrigger
      label="Long Content"
      content={
        <p>
          This is a longer toast message that contains more detailed
          information about what happened.
        </p>
      }
    />
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

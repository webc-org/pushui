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

function PlaygroundStory() {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() =>
        addToast({
          children: (
            <>
              <Title level="h4">Toast title</Title>
              <p>This is a toast notification.</p>
            </>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

function LongContentStory() {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() =>
        addToast({
          children: (
            <p>
              This is a longer toast message that contains more detailed
              information about what happened in your application.
            </p>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

function MultipleToastsStory() {
  const { addToast } = useToasts()
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button
        variant="primary"
        appearance="button"
        onClick={() =>
          addToast({
            children: (
              <>
                <Title level="h4">First Toast</Title>
                <p>This is the first notification.</p>
              </>
            ),
          })
        }
      >
        Toast 1
      </Button>
      <Button
        variant="secondary"
        appearance="button"
        onClick={() =>
          addToast({
            children: (
              <>
                <Title level="h4">Second Toast</Title>
                <p>This is the second notification.</p>
              </>
            ),
          })
        }
      >
        Toast 2
      </Button>
      <Button
        variant="default"
        appearance="button"
        onClick={() =>
          addToast({
            children: (
              <>
                <Title level="h4">Third Toast</Title>
                <p>This is the third notification.</p>
              </>
            ),
          })
        }
      >
        Toast 3
      </Button>
    </div>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundStory />,
}

export const Default: Story = {
  render: () => <PlaygroundStory />,
}

export const LongContent: Story = {
  render: () => <LongContentStory />,
}

export const MultipleToasts: Story = {
  render: () => <MultipleToastsStory />,
}

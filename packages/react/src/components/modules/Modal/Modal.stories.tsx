import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'form/Button'
import { Modals } from './Modals'
import { useModals } from './ModalsContext'

const meta: Meta = {
  title: 'Modules/Modal',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Modals>
        <Story />
      </Modals>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    closeLabel: { control: 'text' },
  },
  args: { title: 'Modal Title', width: '500px' },
}

export default meta
type Story = StoryObj

const ModalTrigger = ({
  label = 'Open Modal',
  title = 'Modal Title',
  width,
  children = <p>Modal content goes here.</p>,
}: {
  label?: string
  title?: string
  width?: string
  children?: React.ReactNode
}) => {
  const { addModal } = useModals()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() => addModal({ title, width, children })}
    >
      {label}
    </Button>
  )
}

const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <ModalTrigger label="Small (400px)" title="Small Modal" width="400px">
      <p>Small modal content.</p>
    </ModalTrigger>
    <ModalTrigger
      label="Medium (500px)"
      title="Medium Modal"
      width="500px"
    >
      <p>Medium modal content.</p>
    </ModalTrigger>
    <ModalTrigger label="Large (800px)" title="Large Modal" width="800px">
      <p>Large modal content.</p>
    </ModalTrigger>
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

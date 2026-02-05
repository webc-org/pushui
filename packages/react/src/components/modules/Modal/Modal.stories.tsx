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
    title: {
      control: 'text',
      description: 'Modal title',
    },
    width: {
      control: 'text',
      description: 'Modal width (e.g., "400px", "50vw")',
    },
    closeLabel: {
      control: 'text',
      description: 'Close button aria-label',
    },
  },
  args: {
    title: 'Modal Title',
    width: '500px',
  },
}

export default meta
type Story = StoryObj

const ModalTrigger = ({
  title = 'Modal Title',
  width,
  children = <p>Modal content goes here.</p>,
}: {
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
      Open Modal
    </Button>
  )
}

export const Playground: Story = {
  render: (args: { title?: string; width?: string }) => (
    <ModalTrigger title={args.title} width={args.width}>
      <p>Click the button to open the modal.</p>
    </ModalTrigger>
  ),
  args: {
    title: 'Modal Title',
    width: '500px',
  },
}

export const Small: Story = {
  render: () => (
    <ModalTrigger title="Small Modal" width="400px">
      <p>Small modal content.</p>
    </ModalTrigger>
  ),
}

export const Medium: Story = {
  render: () => (
    <ModalTrigger title="Medium Modal" width="500px">
      <p>Medium modal content.</p>
    </ModalTrigger>
  ),
}

export const Large: Story = {
  render: () => (
    <ModalTrigger title="Large Modal" width="800px">
      <p>Large modal content.</p>
    </ModalTrigger>
  ),
}

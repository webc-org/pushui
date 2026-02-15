import type { Meta, StoryObj } from '@storybook/react'
import { Note, NoteTitle } from 'components'
import type { ColorVariant } from 'types'

const variants: ColorVariant[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Note> = {
  title: 'Base/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the note',
      table: {
        defaultValue: { summary: 'none (grey)' },
      },
    },
    children: {
      control: 'text',
      description: 'Note content',
    },
  },
  args: {
    children: 'This is a note message.',
    variant: undefined,
  },
}

export default meta
type Story = StoryObj<typeof Note>

export const Playground: Story = {
  args: {
    children: 'This is a note message.',
    variant: undefined,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {variants.map((v) => (
        <Note variant={v} key={v}>
          <NoteTitle level="h4" className="fs-5">
            {v}
          </NoteTitle>
          <p>This is a {v} note with a header.</p>
        </Note>
      ))}
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { InputFile } from './File'

const meta: Meta<typeof InputFile> = {
  title: 'Form/File',
  component: InputFile,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    multiple: { control: 'boolean' },
    dropzone: { control: 'boolean' },
    showFileNames: { control: 'boolean' },
    disabled: { control: 'boolean' },
    accept: { control: 'text' },
    chooseFileLabel: { control: 'text' },
    chooseFilesLabel: { control: 'text' },
    noFileSelectedLabel: { control: 'text' },
    dropFileLabel: { control: 'text' },
    dropFilesLabel: { control: 'text' },
  },
  args: { showFileNames: true, disabled: false },
}

export default meta
type Story = StoryObj<typeof InputFile>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <InputFile label="Single file" />
    <InputFile label="Multiple files" multiple />
    <InputFile label="Dropzone" dropzone />
    <InputFile label="Dropzone multiple" dropzone multiple />
    <InputFile label="Images only" accept="image/*" />
    <InputFile label="Disabled" disabled />
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

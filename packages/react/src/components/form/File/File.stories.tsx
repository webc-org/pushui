import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputFile } from './File'

const meta: Meta<typeof InputFile> = {
  title: 'Form/File',
  component: InputFile,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    buttonText: {
      control: 'text',
      description: 'Custom button text',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    dropzone: {
      control: 'boolean',
      description: 'Enable drag and drop zone',
    },
    showFileNames: {
      control: 'boolean',
      description: 'Show selected file names',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., ".pdf,.doc")',
    },
    chooseFileLabel: { control: 'text' },
    chooseFilesLabel: { control: 'text' },
    noFileSelectedLabel: { control: 'text' },
    dropFileLabel: { control: 'text' },
    dropFilesLabel: { control: 'text' },
  },
  args: {
    showFileNames: true,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputFile>

export const Default: Story = {
  args: {
    label: 'Upload file',
  },
}

export const Multiple: Story = {
  args: {
    label: 'Upload files',
    multiple: true,
  },
}

export const Dropzone: Story = {
  args: {
    label: 'Upload document',
    dropzone: true,
  },
}

export const DropzoneMultiple: Story = {
  args: {
    label: 'Upload documents',
    dropzone: true,
    multiple: true,
  },
}

export const AcceptImages: Story = {
  args: {
    label: 'Upload image',
    accept: 'image/*',
    buttonText: 'Choose image',
  },
}

export const AcceptPDF: Story = {
  args: {
    label: 'Upload PDF',
    accept: '.pdf',
    dropzone: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Upload file',
    disabled: true,
  },
}

export const DisabledDropzone: Story = {
  args: {
    label: 'Upload file',
    dropzone: true,
    disabled: true,
  },
}

export const CustomButtonText: Story = {
  args: {
    label: 'Profile picture',
    buttonText: 'Browse...',
  },
}

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Upload file',
  },
}

function ControlledExample() {
  const [files, setFiles] = useState<FileList | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <InputFile label="Upload documents" multiple onChange={setFiles} />
      {files && files.length > 0 && (
        <div style={{ fontSize: '1.4rem' }}>
          <strong>Selected files:</strong>
          <ul>
            {Array.from(files).map((file, i) => (
              <li key={i}>
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

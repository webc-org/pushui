import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from 'utils/Test'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { InputFile } from './File'

// Mock DataTransfer for jsdom
class MockDataTransfer {
  items: { add: (file: File) => void }[] = []
  files: File[] = []

  constructor() {
    const self = this
    this.items = {
      add(file: File) {
        self.files.push(file)
      },
    } as unknown as { add: (file: File) => void }[]
  }
}

beforeAll(() => {
  global.DataTransfer = MockDataTransfer as unknown as typeof DataTransfer
})

const createFile = (name: string, type: string) => {
  return new File(['content'], name, { type })
}

describe('InputFile', () => {
  it('renders with label', () => {
    render(<InputFile label="Upload document" />)
    expect(screen.getByText('Upload document')).toBeInTheDocument()
  })

  it('renders button mode by default', () => {
    render(<InputFile />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('shows no file selected by default', () => {
    render(<InputFile />)
    expect(screen.getByText('No file selected')).toBeInTheDocument()
  })

  it('calls onChange when file is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<InputFile onChange={handleChange} data-testid="file-input" />)

    const file = createFile('test.pdf', 'application/pdf')
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement

    await user.upload(input, file)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0][0]).toHaveLength(1)
  })

  it('displays file name when file is selected', async () => {
    const user = userEvent.setup()
    render(<InputFile />)

    const file = createFile('document.pdf', 'application/pdf')
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement

    await user.upload(input, file)

    expect(screen.getByText('document.pdf')).toBeInTheDocument()
  })

  it('displays count when multiple files selected', async () => {
    const user = userEvent.setup()
    render(<InputFile multiple />)

    const files = [
      createFile('doc1.pdf', 'application/pdf'),
      createFile('doc2.pdf', 'application/pdf'),
      createFile('doc3.pdf', 'application/pdf'),
    ]
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement

    await user.upload(input, files)

    expect(screen.getByText('3 files selected')).toBeInTheDocument()
  })

  it('renders dropzone mode', () => {
    render(<InputFile dropzone />)
    expect(
      screen.queryByRole('button', { name: /choose/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Choose a file')).toBeInTheDocument()
  })

  it('shows custom button text', () => {
    render(<InputFile buttonText="Browse..." />)
    expect(screen.getByText('Browse...')).toBeInTheDocument()
  })

  it('hides file names when showFileNames is false', () => {
    render(<InputFile showFileNames={false} />)
    expect(screen.queryByText('No file selected')).not.toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<InputFile disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('handles drag and drop in dropzone mode', () => {
    const handleChange = vi.fn()
    render(
      <InputFile dropzone onChange={handleChange} data-testid="dropzone" />
    )

    const dropzone = screen.getByRole('button')
    const file = createFile('dropped.pdf', 'application/pdf')

    const dataTransfer = {
      files: [file],
      items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
      types: ['Files'],
    }

    fireEvent.dragOver(dropzone, { dataTransfer })
    expect(dropzone.className).toMatch(/dragging/)

    fireEvent.dragLeave(dropzone, { dataTransfer })
    expect(dropzone.className).not.toMatch(/dragging/)
  })

  it('forwards ref to input element', () => {
    const ref = { current: null }
    render(<InputFile ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  describe('accept validation', () => {
    it('accepts files matching extension', () => {
      const handleChange = vi.fn()
      render(
        <InputFile dropzone accept=".jpg,.png" onChange={handleChange} />
      )

      const dropzone = screen.getByRole('button')
      const file = createFile('photo.jpg', 'image/jpeg')

      const dataTransfer = {
        files: [file],
        items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange.mock.calls[0][0]).toHaveLength(1)
    })

    it('rejects files not matching extension', () => {
      const handleChange = vi.fn()
      render(
        <InputFile dropzone accept=".jpg,.png" onChange={handleChange} />
      )

      const dropzone = screen.getByRole('button')
      const file = createFile('document.pdf', 'application/pdf')

      const dataTransfer = {
        files: [file],
        items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('accepts files matching MIME wildcard', () => {
      const handleChange = vi.fn()
      render(
        <InputFile dropzone accept="image/*" onChange={handleChange} />
      )

      const dropzone = screen.getByRole('button')
      const file = createFile('photo.png', 'image/png')

      const dataTransfer = {
        files: [file],
        items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('rejects files not matching MIME wildcard', () => {
      const handleChange = vi.fn()
      render(
        <InputFile dropzone accept="image/*" onChange={handleChange} />
      )

      const dropzone = screen.getByRole('button')
      const file = createFile('document.pdf', 'application/pdf')

      const dataTransfer = {
        files: [file],
        items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('accepts files matching exact MIME type', () => {
      const handleChange = vi.fn()
      render(
        <InputFile
          dropzone
          accept="application/pdf"
          onChange={handleChange}
        />
      )

      const dropzone = screen.getByRole('button')
      const file = createFile('document.pdf', 'application/pdf')

      const dataTransfer = {
        files: [file],
        items: [{ kind: 'file', type: file.type, getAsFile: () => file }],
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('filters multiple dropped files by accept', () => {
      const handleChange = vi.fn()
      render(
        <InputFile
          dropzone
          multiple
          accept=".jpg,.png"
          onChange={handleChange}
        />
      )

      const dropzone = screen.getByRole('button')
      const files = [
        createFile('photo1.jpg', 'image/jpeg'),
        createFile('document.pdf', 'application/pdf'),
        createFile('photo2.png', 'image/png'),
      ]

      const dataTransfer = {
        files,
        items: files.map((f) => ({
          kind: 'file',
          type: f.type,
          getAsFile: () => f,
        })),
        types: ['Files'],
      }

      fireEvent.drop(dropzone, { dataTransfer })

      expect(handleChange).toHaveBeenCalledTimes(1)
      // Only jpg and png should be accepted
      expect(handleChange.mock.calls[0][0]).toHaveLength(2)
    })

    it('sets accept attribute on input element', () => {
      render(<InputFile accept=".pdf" />)
      const input = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement
      expect(input).toHaveAttribute('accept', '.pdf')
    })
  })
})

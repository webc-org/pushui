import {
  type ChangeEvent,
  type DragEvent,
  useId,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { Upload } from 'lucide-react'
import styles from './File.module.scss'
import type { InputFileTypes } from './File.types'

const isFileAccepted = (file: File, accept?: string): boolean => {
  if (!accept) return true

  const acceptedTypes = accept
    .split(',')
    .map((t) => t.trim().toLowerCase())
  const fileName = file.name.toLowerCase()
  const mimeType = file.type.toLowerCase()

  return acceptedTypes.some((type) => {
    // Extension: .jpg, .pdf
    if (type.startsWith('.')) {
      return fileName.endsWith(type)
    }
    // Wildcard MIME: image/*, video/*
    if (type.endsWith('/*')) {
      const baseType = type.slice(0, -2)
      return mimeType.startsWith(`${baseType}/`)
    }
    // Exact MIME: image/jpeg, application/pdf
    return mimeType === type
  })
}

const filterAcceptedFiles = (
  files: FileList,
  accept?: string,
  multiple?: boolean
): FileList | null => {
  const validFiles = Array.from(files).filter((f) =>
    isFileAccepted(f, accept)
  )

  if (validFiles.length === 0) return null

  const dt = new DataTransfer()
  const filesToAdd = multiple ? validFiles : [validFiles[0]]
  filesToAdd.forEach((f) => dt.items.add(f))

  return dt.files
}

export function InputFile({
  label,
  ref,
  className,
  labelClassName,
  buttonClassName,
  onChange,
  dropzone = false,
  buttonText,
  showFileNames = true,
  multiple = false,
  disabled = false,
  accept,
  chooseFileLabel = 'Choose a file',
  chooseFilesLabel = 'Choose files',
  noFileSelectedLabel = 'No file selected',
  filesSelectedLabel = (count) => `${count} files selected`,
  dropFileLabel = 'Drop file here',
  dropFilesLabel = 'Drop files here',
  ...rest
}: InputFileTypes) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileList | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const actualRef = (ref as React.RefObject<HTMLInputElement>) || inputRef

  const handleClick = () => {
    actualRef.current?.click()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files
    setFiles(newFiles)
    onChange?.(newFiles)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (disabled) return

    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      const validFiles = filterAcceptedFiles(
        droppedFiles,
        accept,
        multiple
      )
      if (validFiles) {
        setFiles(validFiles)
        onChange?.(validFiles)
      }
    }
  }

  const getButtonText = () => {
    if (buttonText) return buttonText
    return multiple ? chooseFilesLabel : chooseFileLabel
  }

  const getFileDisplay = () => {
    if (!files || files.length === 0) {
      return noFileSelectedLabel
    }
    if (files.length === 1) {
      return files[0].name
    }
    return filesSelectedLabel(files.length)
  }

  const getDropText = () => {
    return multiple ? dropFilesLabel : dropFileLabel
  }

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <input
        ref={actualRef}
        id={id}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className={styles.hiddenInput}
        {...rest}
      />

      {dropzone ? (
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleClick()
            }
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={clsx(
            styles.dropzone,
            isDragging && styles.dragging,
            disabled && styles.disabled
          )}
        >
          <Upload size={24} aria-hidden />

          <span>{isDragging ? getDropText() : getButtonText()}</span>

          {showFileNames && files && files.length > 0 && (
            <span className={styles.fileNames}>{getFileDisplay()}</span>
          )}
        </div>
      ) : (
        <div className={styles.inline}>
          <Button
            type="button"
            disabled={disabled}
            onClick={handleClick}
            className={clsx('file', styles.button, buttonClassName)}
          >
            <Upload size={16} aria-hidden />

            {getButtonText()}
          </Button>

          {showFileNames && (
            <span className={styles.fileNames}>{getFileDisplay()}</span>
          )}
        </div>
      )}
    </div>
  )
}

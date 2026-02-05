import type { ComponentPropsWithRef } from 'react'

export type InputFileTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'onChange' | 'value'
> & {
  /** Label text */
  label?: string
  /** Custom class for the label */
  labelClassName?: string
  /** Custom class for the trigger button */
  buttonClassName?: string
  /** Callback when files change */
  onChange?: (files: FileList | null) => void
  /** Enable drag and drop zone */
  dropzone?: boolean
  /** Text for the button */
  buttonText?: string
  /** Show selected file names */
  showFileNames?: boolean
  /** Accepted file types (e.g., ".jpg,.png", "image/*", "application/pdf") */
  accept?: string
  /** Text for single file button (default: "Choose a file") */
  chooseFileLabel?: string
  /** Text for multiple files button (default: "Choose files") */
  chooseFilesLabel?: string
  /** Text when no file selected (default: "No file selected") */
  noFileSelectedLabel?: string
  /** Text showing file count (default: "{count} files selected") */
  filesSelectedLabel?: (count: number) => string
  /** Text for single file drop zone (default: "Drop file here") */
  dropFileLabel?: string
  /** Text for multiple files drop zone (default: "Drop files here") */
  dropFilesLabel?: string
}

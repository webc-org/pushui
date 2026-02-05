import type { ComponentPropsWithRef } from 'react'

export type RichTextTypes = ComponentPropsWithRef<'div'> & {
  /** HTML content string (uses dangerouslySetInnerHTML) */
  html?: string
}

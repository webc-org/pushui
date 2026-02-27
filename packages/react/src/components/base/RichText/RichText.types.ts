import type { ComponentPropsWithRef } from 'react'

export type RichTextTypes = ComponentPropsWithRef<'div'> & {
  /** HTML content string (uses dangerouslySetInnerHTML) */
  html?: string
  /** Optional syntax highlighter — called on each `pre > code` block after render (e.g. hljs.highlightElement) */
  highlighter?: (element: HTMLElement) => void
}

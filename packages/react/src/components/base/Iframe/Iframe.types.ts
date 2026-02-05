import type { ComponentPropsWithRef } from 'react'

export type IframeTypes = Omit<
  ComponentPropsWithRef<'iframe'>,
  'title'
> & {
  /** Source URL */
  src: string
  /** Title is required for accessibility */
  title: string
  /** Allow fullscreen */
  allowFullScreen?: boolean
}

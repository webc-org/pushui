import type { CSSProperties, ReactNode } from 'react'

export type SlotTypes = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

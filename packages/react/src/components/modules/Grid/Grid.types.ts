import type { ComponentPropsWithRef } from 'react'

export type GapSize = 0 | 1 | 2 | 3 | 4 | 5

export type GridTypes = ComponentPropsWithRef<'div'> & {
  col?: number
  colXS?: number
  colSM?: number
  colMD?: number
  colLG?: number
  colXL?: number
  gap?: GapSize
  gapXS?: GapSize
  gapSM?: GapSize
  gapMD?: GapSize
  gapLG?: GapSize
  gapXL?: GapSize
  /** Enable masonry layout (items flow vertically then horizontally) */
  masonry?: boolean
}

export type GridItemTypes = ComponentPropsWithRef<'div'> & {
  col?: number
  colXS?: number
  colSM?: number
  colMD?: number
  colLG?: number
  colXL?: number
  row?: number
  rowXS?: number
  rowSM?: number
  rowMD?: number
  rowLG?: number
  rowXL?: number
}

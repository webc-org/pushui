import type { ComponentPropsWithRef } from 'react'

export type TableTypes = ComponentPropsWithRef<'table'> & {
  /** Adds striped rows */
  striped?: boolean
  /** Adds hover effect on rows */
  hoverable?: boolean
  /** Makes the table more compact */
  compact?: boolean
  /** Adds border to all cells */
  bordered?: boolean
}

export type TableHeadTypes = ComponentPropsWithRef<'thead'>

export type TableBodyTypes = ComponentPropsWithRef<'tbody'>

export type TableFootTypes = ComponentPropsWithRef<'tfoot'>

export type TableRowTypes = ComponentPropsWithRef<'tr'>

export type TableHeaderCellTypes = ComponentPropsWithRef<'th'>

export type TableCellTypes = ComponentPropsWithRef<'td'>

export type TableCaptionTypes = ComponentPropsWithRef<'caption'> & {
  /** Position of the caption */
  position?: 'top' | 'bottom'
}

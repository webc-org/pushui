import clsx from 'clsx'
import styles from './Table.module.scss'
import type {
  TableBodyTypes,
  TableCaptionTypes,
  TableCellTypes,
  TableFootTypes,
  TableHeaderCellTypes,
  TableHeadTypes,
  TableRowTypes,
  TableTypes,
} from './Table.types'

export function Table({
  striped = true,
  hoverable = false,
  compact = false,
  bordered = true,
  className,
  children,
  ref,
  ...props
}: TableTypes) {
  return (
    <table
      ref={ref}
      className={clsx(
        styles.table,
        striped && styles.striped,
        hoverable && styles.hoverable,
        compact && styles.compact,
        bordered && styles.bordered,
        className
      )}
      {...props}
    >
      {children}
    </table>
  )
}

export function TableHead({
  className,
  children,
  ref,
  ...props
}: TableHeadTypes) {
  return (
    <thead ref={ref} className={clsx(styles.head, className)} {...props}>
      {children}
    </thead>
  )
}

export function TableBody({
  className,
  children,
  ref,
  ...props
}: TableBodyTypes) {
  return (
    <tbody ref={ref} className={clsx(styles.body, className)} {...props}>
      {children}
    </tbody>
  )
}

export function TableFoot({
  className,
  children,
  ref,
  ...props
}: TableFootTypes) {
  return (
    <tfoot ref={ref} className={clsx(styles.foot, className)} {...props}>
      {children}
    </tfoot>
  )
}

export function TableRow({
  className,
  children,
  ref,
  ...props
}: TableRowTypes) {
  return (
    <tr ref={ref} className={clsx(styles.row, className)} {...props}>
      {children}
    </tr>
  )
}

export function TableHeaderCell({
  className,
  children,
  ref,
  ...props
}: TableHeaderCellTypes) {
  return (
    <th
      ref={ref}
      className={clsx(styles.headerCell, className)}
      {...props}
    >
      {children}
    </th>
  )
}

export function TableCell({
  className,
  children,
  ref,
  ...props
}: TableCellTypes) {
  return (
    <td ref={ref} className={clsx(styles.cell, className)} {...props}>
      {children}
    </td>
  )
}

export function TableCaption({
  position = 'top',
  className,
  children,
  ref,
  ...props
}: TableCaptionTypes) {
  return (
    <caption
      ref={ref}
      className={clsx(styles.caption, styles[position], className)}
      {...props}
    >
      {children}
    </caption>
  )
}

import clsx from 'clsx'
import styles from './Grid.module.scss'
import type { GridItemTypes } from './Grid.types'

export function GridItem({
  children,
  col,
  colXS,
  colSM,
  colMD,
  colLG,
  colXL,
  row,
  rowXS,
  rowSM,
  rowMD,
  rowLG,
  rowXL,
  className,
  ...rest
}: GridItemTypes) {
  const colClasses = clsx(
    col && styles[`gridItem-${col}`],
    colXS && styles[`gridItem--xs-${colXS}`],
    colSM && styles[`gridItem--sm-${colSM}`],
    colMD && styles[`gridItem--md-${colMD}`],
    colLG && styles[`gridItem--lg-${colLG}`],
    colXL && styles[`gridItem--xl-${colXL}`]
  )

  const rowClasses = clsx(
    row && styles[`gridItem--row-${row}`],
    rowXS && styles[`gridItem--row-xs-${rowXS}`],
    rowSM && styles[`gridItem--row-sm-${rowSM}`],
    rowMD && styles[`gridItem--row-md-${rowMD}`],
    rowLG && styles[`gridItem--row-lg-${rowLG}`],
    rowXL && styles[`gridItem--row-xl-${rowXL}`]
  )

  const itemClasses = clsx(
    styles.gridItem,
    colClasses,
    rowClasses,
    className
  )

  return (
    <div className={itemClasses} {...rest}>
      {children}
    </div>
  )
}

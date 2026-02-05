import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react'
import clsx from 'clsx'
import styles from './Grid.module.scss'
import type { GridTypes } from './Grid.types'

export function Grid({
  ref,
  children,
  gap,
  gapXS,
  gapSM,
  gapMD,
  gapLG,
  gapXL,
  col,
  colXS,
  colSM,
  colMD,
  colLG,
  colXL,
  masonry,
  className,
  ...rest
}: GridTypes) {
  const colClasses = clsx(
    col && styles[`grid--${col}`],
    colXS && styles[`grid--xs-${colXS}`],
    colSM && styles[`grid--sm-${colSM}`],
    colMD && styles[`grid--md-${colMD}`],
    colLG && styles[`grid--lg-${colLG}`],
    colXL && styles[`grid--xl-${colXL}`]
  )

  const gapClasses = clsx(
    gap && styles[`grid--gap-${gap}`],
    gapXS && styles[`grid--gap-xs-${gapXS}`],
    gapSM && styles[`grid--gap-sm-${gapSM}`],
    gapMD && styles[`grid--gap-md-${gapMD}`],
    gapLG && styles[`grid--gap-lg-${gapLG}`],
    gapXL && styles[`grid--gap-xl-${gapXL}`]
  )

  const gridClasses = clsx(
    styles.grid,
    masonry && styles.masonry,
    gapClasses,
    colClasses,
    className
  )

  // Wrap children with masonryItem class when in masonry mode
  const wrappedChildren = masonry
    ? Children.map(children, (child) => {
        if (isValidElement(child)) {
          const element = child as ReactElement<{ className?: string }>
          return cloneElement(element, {
            className: clsx(styles.masonryItem, element.props.className),
          })
        }
        return child
      })
    : children

  return (
    <div ref={ref} className={gridClasses} {...rest}>
      {wrappedChildren}
    </div>
  )
}

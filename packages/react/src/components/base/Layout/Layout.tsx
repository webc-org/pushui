import clsx from 'clsx'
import styles from './Layout.module.scss'
import type { LayoutTypes } from './Layout.types'

export function Layout({
  ref,
  children,
  className,
  ...rest
}: LayoutTypes) {
  return (
    <div ref={ref} className={clsx(styles.layout, className)} {...rest}>
      {children}
    </div>
  )
}

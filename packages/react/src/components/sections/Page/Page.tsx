import clsx from 'clsx'
import styles from './Page.module.scss'
import type { PageRootTypes } from './Page.types'

export function PageRoot({
  ref,
  children,
  className,
  ...rest
}: PageRootTypes) {
  return (
    <div ref={ref} className={clsx(styles.page, className)} {...rest}>
      {children}
    </div>
  )
}

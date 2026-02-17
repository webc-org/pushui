import clsx from 'clsx'
import styles from './Page.module.scss'
import type { PageTypes } from './Page.types'

export function Page({ ref, children, className, ...rest }: PageTypes) {
  return (
    <div ref={ref} className={clsx(styles.page, className)} {...rest}>
      {children}
    </div>
  )
}

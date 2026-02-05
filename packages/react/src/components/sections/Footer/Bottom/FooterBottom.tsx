import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterBottomTypes } from '../Footer.types'

export function FooterBottom({
  ref,
  children,
  className,
  copyright,
  ...rest
}: FooterBottomTypes) {
  return (
    <div ref={ref} className={clsx(styles.bottom, className)} {...rest}>
      {copyright && <span className={styles.copyright}>{copyright}</span>}
      {children}
    </div>
  )
}

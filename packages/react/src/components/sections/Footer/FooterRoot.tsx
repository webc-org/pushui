import clsx from 'clsx'
import styles from './Footer.module.scss'
import type { FooterTypes } from './Footer.types'

export function FooterRoot({
  ref,
  children,
  className,
  ...rest
}: FooterTypes) {
  return (
    <footer ref={ref} className={clsx(styles.footer, className)} {...rest}>
      <div className={styles.container}>{children}</div>
    </footer>
  )
}

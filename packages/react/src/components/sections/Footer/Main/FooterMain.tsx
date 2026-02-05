import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterMainTypes } from '../Footer.types'

export function FooterMain({
  ref,
  children,
  className,
  ...rest
}: FooterMainTypes) {
  return (
    <div ref={ref} className={clsx(styles.main, className)} {...rest}>
      {children}
    </div>
  )
}

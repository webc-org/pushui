import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterMainLogoTypes } from '../Footer.types'

export function FooterMainLogo({
  ref,
  children,
  className,
  ...rest
}: FooterMainLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}

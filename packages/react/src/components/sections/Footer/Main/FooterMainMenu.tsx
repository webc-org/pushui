import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterMainMenuTypes } from '../Footer.types'

export function FooterMainMenu({
  ref,
  children,
  className,
  ...rest
}: FooterMainMenuTypes) {
  return (
    <div ref={ref} className={clsx(styles.menu, className)} {...rest}>
      {children}
    </div>
  )
}

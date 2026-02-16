import clsx from 'clsx'
import type { HeaderDesktopMainLogoTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderDesktopMainLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}

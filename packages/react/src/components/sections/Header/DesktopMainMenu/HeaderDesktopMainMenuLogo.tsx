import clsx from 'clsx'
import type { HeaderDesktopMainMenuLogoTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainMenuLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderDesktopMainMenuLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}

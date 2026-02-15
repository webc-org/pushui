import clsx from 'clsx'
import type { HeaderDesktopMainMenuLogoTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMainMenu.module.scss'

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

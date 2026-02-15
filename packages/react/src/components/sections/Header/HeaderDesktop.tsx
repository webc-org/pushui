import clsx from 'clsx'
import stylesMain from './DesktopMainMenu/headerDesktopMain.module.scss'
import stylesTop from './DesktopTopMenu/headerDesktopTop.module.scss'
import styles from './Header.module.scss'
import type { HeaderDesktopTypes } from './Header.types'

export function HeaderDesktop({
  ref,
  children,
  className,
  ...rest
}: HeaderDesktopTypes) {
  return (
    <section
      ref={ref}
      className={clsx(
        styles.headerDesktop,
        stylesTop.headerDesktop,
        stylesMain.headerDesktop,
        className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}

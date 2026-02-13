import clsx from 'clsx'
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
      className={clsx(styles.headerDesktop, className)}
      {...rest}
    >
      {children}
    </section>
  )
}

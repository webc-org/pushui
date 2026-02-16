import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderDesktopMainDropdownLinkTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderDesktopMainDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      role="menuitem"
      className={clsx(
        styles.dropdownLink,
        current && styles.current,
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}

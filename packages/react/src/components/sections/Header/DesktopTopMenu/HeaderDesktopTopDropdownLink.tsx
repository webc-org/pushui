import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderDesktopTopDropdownLinkTypes } from './HeaderDesktopTop.types'
import styles from './headerDesktopTop.module.scss'

export function HeaderDesktopTopDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderDesktopTopDropdownLinkTypes) {
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

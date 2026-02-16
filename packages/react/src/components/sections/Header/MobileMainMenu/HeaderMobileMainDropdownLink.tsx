import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileMainDropdownLinkTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileMainDropdownLinkTypes) {
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

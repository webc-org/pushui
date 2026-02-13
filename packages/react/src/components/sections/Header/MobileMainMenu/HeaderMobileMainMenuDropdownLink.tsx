import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { HeaderMobileMainMenuDropdownLinkTypes } from './HeaderMobileMainMenu.types'

export function HeaderMobileMainMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileMainMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      role="menuitem"
      className={clsx(
        styles.headerMobileMainMenuDropdownLink,
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

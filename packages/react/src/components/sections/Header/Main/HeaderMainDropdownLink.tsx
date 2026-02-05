import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { HeaderMainDropdownLinkTypes } from '../Header.types'

export function HeaderMainDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMainDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mainDropdownLink,
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

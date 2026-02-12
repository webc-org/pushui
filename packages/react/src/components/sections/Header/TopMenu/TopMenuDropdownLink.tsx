import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { TopMenuDropdownLinkTypes } from '../Header.types'

export function TopMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: TopMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.topDropdownLink,
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

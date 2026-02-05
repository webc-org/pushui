import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { HeaderTopDropdownLinkTypes } from '../Header.types'

export function HeaderTopDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderTopDropdownLinkTypes) {
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

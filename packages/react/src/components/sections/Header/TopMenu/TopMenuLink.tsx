import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { TopMenuLinkTypes } from '../Header.types'

export function TopMenuLink({
  asChild,
  children,
  className,
  current,
  ...props
}: TopMenuLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.topLink,
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

import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderDesktopTopLinkTypes } from './HeaderDesktopTop.types'
import styles from './headerDesktopTop.module.scss'

export function HeaderDesktopTopLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderDesktopTopLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(styles.link, current && styles.current, className)}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}

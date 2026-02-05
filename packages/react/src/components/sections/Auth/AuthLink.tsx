import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './Auth.module.scss'
import type { AuthLinkTypes } from './Auth.types'

export function AuthLink({
  asChild,
  children,
  className,
  ...rest
}: AuthLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={clsx(styles.link, className)} {...rest}>
      {children}
    </Comp>
  )
}

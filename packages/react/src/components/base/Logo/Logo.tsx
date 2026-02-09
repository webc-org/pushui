import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './Logo.module.scss'
import type { LogoTypes } from './Logo.types'

export function Logo({
  ref,
  asChild,
  children,
  className,
  ...rest
}: LogoTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </Comp>
  )
}

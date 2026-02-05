import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Footer.module.scss'
import type { FooterBottomLinkTypes } from '../Footer.types'

export function FooterBottomLink({
  asChild,
  children,
  className,
  current,
  ...props
}: FooterBottomLinkTypes) {
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

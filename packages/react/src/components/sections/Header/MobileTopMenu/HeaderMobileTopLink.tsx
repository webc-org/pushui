import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileTopLinkTypes } from './HeaderMobileTop.types'
import styles from './headerMobileTop.module.scss'

export function HeaderMobileTopLink({
  asChild,
  children,
  className,
  current,
  variant,
  ...props
}: HeaderMobileTopLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  const appearance = 'icon'

  return (
    <Comp
      className={clsx(
        styles.link,
        appearance && styles[`appearance-${appearance}`],
        variant && styles[`variant-${variant}`],
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

import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderMobileTopNavTypes } from './HeaderMobileTop.types'
import styles from './headerMobileTop.module.scss'

export function HeaderMobileTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileTopNavTypes) {
  const label = useHeaderNavLabel('mobileTop', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

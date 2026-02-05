import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { HeaderMobileNavTypes } from '../Header.types'

export function HeaderMobileNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileNavTypes) {
  const label = useHeaderNavLabel('mobile', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.mobileNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { HeaderTopNavTypes } from '../Header.types'

export function HeaderTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderTopNavTypes) {
  const label = useHeaderNavLabel('top', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.topNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { TopMenuNavTypes } from '../Header.types'

export function TopMenuNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: TopMenuNavTypes) {
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

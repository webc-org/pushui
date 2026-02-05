import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { HeaderMainNavTypes } from '../Header.types'

export function HeaderMainNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMainNavTypes) {
  const label = useHeaderNavLabel('main', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.mainNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { MainMenuNavTypes } from '../Header.types'

export function MainMenuNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: MainMenuNavTypes) {
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

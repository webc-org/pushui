import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { MainMenuLogoTypes } from '../Header.types'

export function MainMenuLogo({
  ref,
  children,
  className,
  ...rest
}: MainMenuLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.mainLogo, className)} {...rest}>
      {children}
    </div>
  )
}

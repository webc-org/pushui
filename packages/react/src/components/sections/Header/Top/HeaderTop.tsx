import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderTopTypes } from '../Header.types'

export function HeaderTop({
  ref,
  children,
  className,
  containerClassName,
  ...rest
}: HeaderTopTypes) {
  return (
    <div ref={ref} className={clsx(styles.topBar, className)} {...rest}>
      <div className={clsx(styles.topContainer, containerClassName)}>
        {children}
      </div>
    </div>
  )
}

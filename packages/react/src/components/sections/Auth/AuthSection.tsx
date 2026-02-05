import clsx from 'clsx'
import styles from './Auth.module.scss'
import type { AuthSectionTypes } from './Auth.types'

export function AuthSection({
  ref,
  children,
  className,
  ...rest
}: AuthSectionTypes) {
  return (
    <section
      ref={ref}
      className={clsx(styles.section, className)}
      {...rest}
    >
      {children}
    </section>
  )
}

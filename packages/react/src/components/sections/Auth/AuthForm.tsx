import clsx from 'clsx'
import styles from './Auth.module.scss'
import type { AuthFormTypes } from './Auth.types'

export function AuthForm({
  ref,
  children,
  className,
  ...rest
}: AuthFormTypes) {
  return (
    <form ref={ref} className={clsx(styles.form, className)} {...rest}>
      {children}
    </form>
  )
}

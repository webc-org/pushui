import clsx from 'clsx'
import { Card, CardBody, CardFooter, CardHeader } from 'modules/Card'
import styles from './Auth.module.scss'
import type {
  AuthCardBodyTypes,
  AuthCardFooterTypes,
  AuthCardHeaderTypes,
  AuthCardTypes,
} from './Auth.types'

export function AuthCard({
  ref,
  children,
  className,
  ...rest
}: AuthCardTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} {...rest}>
      {children}
    </Card>
  )
}

export function AuthCardHeader({
  ref,
  children,
  className,
  ...rest
}: AuthCardHeaderTypes) {
  return (
    <CardHeader
      ref={ref}
      className={clsx(styles.cardHeader, className)}
      {...rest}
    >
      {children}
    </CardHeader>
  )
}

export function AuthCardBody({
  ref,
  children,
  className,
  ...rest
}: AuthCardBodyTypes) {
  return (
    <CardBody
      ref={ref}
      className={clsx(styles.cardBody, className)}
      {...rest}
    >
      {children}
    </CardBody>
  )
}

export function AuthCardFooter({
  ref,
  children,
  className,
  ...rest
}: AuthCardFooterTypes) {
  return (
    <CardFooter
      ref={ref}
      className={clsx(styles.cardFooter, className)}
      {...rest}
    >
      {children}
    </CardFooter>
  )
}

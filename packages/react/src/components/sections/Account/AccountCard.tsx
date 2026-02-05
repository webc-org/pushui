import clsx from 'clsx'
import { Card, CardBody, CardFooter, CardHeader } from 'modules/Card'
import styles from './Account.module.scss'
import type {
  AccountCardBodyTypes,
  AccountCardFooterTypes,
  AccountCardHeaderTypes,
  AccountCardTypes,
} from './Account.types'

export function AccountCard({
  ref,
  children,
  className,
  ...rest
}: AccountCardTypes) {
  return (
    <Card ref={ref} className={clsx(styles.card, className)} {...rest}>
      {children}
    </Card>
  )
}

export function AccountCardHeader({
  ref,
  children,
  className,
  ...rest
}: AccountCardHeaderTypes) {
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

export function AccountCardBody({
  ref,
  children,
  className,
  ...rest
}: AccountCardBodyTypes) {
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

export function AccountCardFooter({
  ref,
  children,
  className,
  ...rest
}: AccountCardFooterTypes) {
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

import clsx from 'clsx'
import styles from './Card.module.scss'
import type {
  CardBodyTypes,
  CardFooterTypes,
  CardHeaderTypes,
  CardTypes,
} from './Card.types'

export function Card({ ref, className, children, ...rest }: CardTypes) {
  return (
    <div ref={ref} className={clsx(styles.card, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardHeader({
  ref,
  className,
  children,
  ...rest
}: CardHeaderTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.cardHeader, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export function CardBody({
  ref,
  className,
  children,
  ...rest
}: CardBodyTypes) {
  return (
    <div ref={ref} className={clsx(styles.cardBody, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardFooter({
  ref,
  className,
  children,
  ...rest
}: CardFooterTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.cardFooter, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

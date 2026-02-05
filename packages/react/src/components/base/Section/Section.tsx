import { Title, type TitleTypes } from 'base'
import clsx from 'clsx'
import styles from './Section.module.scss'
import type { SectionHeaderTypes, SectionTypes } from './Section.types'

export function Section({
  ref,
  className,
  children,
  ...rest
}: SectionTypes) {
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

export function SectionHeader({
  children,
  className,
  ...rest
}: SectionHeaderTypes) {
  return (
    <div className={clsx(styles.sectionHeader, className)} {...rest}>
      {children}
    </div>
  )
}

export function SectionTitle({
  children,
  level,
  className,
  ...rest
}: TitleTypes) {
  return (
    <Title
      level={level}
      className={clsx(styles.title, className)}
      {...rest}
    >
      {children}
    </Title>
  )
}

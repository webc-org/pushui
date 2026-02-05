import { Title, type TitleTypes } from 'base/Title'
import clsx from 'clsx'
import styles from './Note.module.scss'
import type { NoteTypes } from './Note.types'

export function Note({
  ref,
  variant = 'default',
  className,
  children,
  ...rest
}: NoteTypes) {
  if (!children) return null

  return (
    <div
      ref={ref}
      role="note"
      className={clsx(
        styles.note,
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export function NoteTitle({
  level,
  children,
  className,
  ...rest
}: TitleTypes) {
  if (!children) return null

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

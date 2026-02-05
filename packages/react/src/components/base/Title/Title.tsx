import clsx from 'clsx'
import styles from './Title.module.scss'
import type { TitleTypes } from './Title.types'

export function Title({
  ref,
  level = 'h1',
  children,
  className,
  ...rest
}: TitleTypes) {
  const Tag = level

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={clsx(styles.title, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

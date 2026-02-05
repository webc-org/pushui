import clsx from 'clsx'
import styles from './Skeleton.module.scss'
import type { SkeletonTypes } from './Skeleton.types'

const formatSize = (
  value: string | number | undefined
): string | undefined => {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

export function Skeleton({
  ref,
  variant = 'text',
  width,
  height,
  animation = true,
  className,
  style,
  ...rest
}: SkeletonTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.skeleton,
        styles[variant],
        animation && styles.animated,
        className
      )}
      style={{
        width: formatSize(width),
        height: formatSize(height),
        ...style,
      }}
      {...rest}
    />
  )
}

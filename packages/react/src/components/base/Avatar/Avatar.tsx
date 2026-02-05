import { useState } from 'react'
import clsx from 'clsx'
import { User } from 'lucide-react'
import styles from './Avatar.module.scss'
import type { AvatarTypes } from './Avatar.types'

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }
  return (
    parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
  ).toUpperCase()
}

export function Avatar({
  ref,
  src,
  alt = '',
  name,
  width = '6rem',
  fontSize = 5,
  variant = 'default',
  defaultLabel = 'Avatar',
  className,
  style,
  ...rest
}: AvatarTypes) {
  const [imgError, setImgError] = useState(false)

  const showImage = src && !imgError
  const initials = name ? getInitials(name) : null
  const fontSizeVar = `var(--font-size-${fontSize})`

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt || name || defaultLabel}
      className={clsx(
        styles.avatar,
        styles[`variant-${variant}`],
        className
      )}
      style={{ width, fontSize: fontSizeVar, ...style }}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className={styles.image}
        />
      ) : initials ? (
        <span className={styles.initials}>{initials}</span>
      ) : (
        <User
          style={{ width: fontSizeVar, height: fontSizeVar }}
          aria-hidden
        />
      )}
    </div>
  )
}

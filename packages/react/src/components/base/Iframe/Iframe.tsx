import clsx from 'clsx'
import styles from './Iframe.module.scss'
import type { IframeTypes } from './Iframe.types'

export function Iframe({
  ref,
  src,
  title,
  allowFullScreen = true,
  className,
  loading = 'lazy',
  ...rest
}: IframeTypes) {
  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading={loading}
      allowFullScreen={allowFullScreen}
      className={clsx(styles.iframe, className)}
      {...rest}
    />
  )
}

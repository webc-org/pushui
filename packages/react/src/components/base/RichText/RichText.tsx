import clsx from 'clsx'
import styles from './RichText.module.scss'
import type { RichTextTypes } from './RichText.types'

export function RichText({
  ref,
  html,
  className,
  children,
  ...rest
}: RichTextTypes) {
  if (html) {
    return (
      <div
        ref={ref}
        className={clsx(styles.richText, className)}
        dangerouslySetInnerHTML={{ __html: html }}
        {...rest}
      />
    )
  }

  return (
    <div ref={ref} className={clsx(styles.richText, className)} {...rest}>
      {children}
    </div>
  )
}

import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import styles from './RichText.module.scss'
import type { RichTextTypes } from './RichText.types'

export function RichText({
  ref,
  html,
  highlighter,
  className,
  children,
  ...rest
}: RichTextTypes) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!highlighter || !containerRef.current) return
    containerRef.current.querySelectorAll('pre code').forEach((block) => {
      highlighter(block as HTMLElement)
    })
  }, [highlighter])

  const mergedRef = (node: HTMLDivElement | null) => {
    containerRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }

  if (html) {
    return (
      <div
        ref={mergedRef}
        className={clsx(styles.richText, className)}
        dangerouslySetInnerHTML={{ __html: html }}
        {...rest}
      />
    )
  }

  return (
    <div
      ref={mergedRef}
      className={clsx(styles.richText, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

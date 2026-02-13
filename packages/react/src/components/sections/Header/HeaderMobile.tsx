import clsx from 'clsx'
import { useHeader } from './HeaderContext'
import styles from './Header.module.scss'
import type { HeaderMobileTypes } from './Header.types'

export function HeaderMobile({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileTypes) {
  const { isOpen, toggle } = useHeader()

  return (
    <section
      ref={ref}
      className={clsx(styles.headerMobile, className)}
      {...rest}
    >
      <div
        className={clsx(
          styles.headerMobileOverlay,
          isOpen && styles.isOpen
        )}
        onClick={toggle}
        aria-hidden="true"
      />
      {children}
    </section>
  )
}

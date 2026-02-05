import clsx from 'clsx'
import { Link } from 'components'
import { ChevronRight } from 'lucide-react'
import styles from './Breadcrumb.module.scss'
import type { BreadcrumbTypes } from './Breadcrumb.types'

export function Breadcrumb({
  ref,
  items,
  separator,
  renderLink,
  className,
  'aria-label': ariaLabel = 'Breadcrumb',
  ...rest
}: BreadcrumbTypes) {
  const separatorElement = separator ?? (
    <ChevronRight size={16} aria-hidden="true" />
  )

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      className={clsx(styles.breadcrumb, className)}
      {...rest}
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className={styles.item}>
              {isLast ? (
                <span aria-current="page" className={styles.current}>
                  {item.label}
                </span>
              ) : (
                <>
                  {renderLink ? (
                    renderLink(item, item.label)
                  ) : (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  )}
                  <span className={styles.separator} aria-hidden="true">
                    {separatorElement}
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

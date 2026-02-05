import { useMemo } from 'react'
import clsx from 'clsx'
import { Link } from 'components'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import styles from './Pagination.module.scss'
import type { PaginationTypes } from './Pagination.types'

type PageItem = number | 'ellipsis'

function generatePageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number
): PageItem[] {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2

  if (totalNumbers >= totalPages) {
    return range(1, totalPages)
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    boundaryCount + 1
  )
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - boundaryCount
  )

  const showLeftEllipsis = leftSiblingIndex > boundaryCount + 2
  const showRightEllipsis =
    rightSiblingIndex < totalPages - boundaryCount - 1

  const leftBoundary = range(1, boundaryCount)
  const rightBoundary = range(totalPages - boundaryCount + 1, totalPages)

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = siblingCount * 2 + boundaryCount + 2
    const leftRange = range(1, leftItemCount)
    return [...leftRange, 'ellipsis', ...rightBoundary]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = siblingCount * 2 + boundaryCount + 2
    const rightRange = range(totalPages - rightItemCount + 1, totalPages)
    return [...leftBoundary, 'ellipsis', ...rightRange]
  }

  const middleRange = range(leftSiblingIndex, rightSiblingIndex)
  return [
    ...leftBoundary,
    'ellipsis',
    ...middleRange,
    'ellipsis',
    ...rightBoundary,
  ]
}

export function Pagination({
  ref,
  currentPage,
  totalPages,
  onPageChange,
  getPageHref = (page) => `?page=${page}`,
  renderLink,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = false,
  showPrevNext = true,
  disabled = false,
  className,
  'aria-label': ariaLabel = 'Pagination',
  firstPageLabel = 'First page',
  previousPageLabel = 'Previous page',
  nextPageLabel = 'Next page',
  lastPageLabel = 'Last page',
  pageLabel = (page) => `Page ${page}`,
  ...rest
}: PaginationTypes) {
  const pages = useMemo(
    () =>
      generatePageRange(
        currentPage,
        totalPages,
        siblingCount,
        boundaryCount
      ),
    [currentPage, totalPages, siblingCount, boundaryCount]
  )

  const handleClick = (e: React.MouseEvent, page: number) => {
    if (onPageChange) {
      e.preventDefault()
      onPageChange(page)
    }
  }

  const renderPageLink = (
    page: number,
    children: React.ReactNode,
    ariaLabel: string,
    isCurrent = false,
    index: number
  ) => {
    const isDisabled = disabled || isCurrent

    if (isDisabled) {
      return (
        <span
          key={index}
          aria-label={ariaLabel}
          aria-current={isCurrent ? 'page' : undefined}
          aria-disabled="true"
          className={clsx(
            styles.button,
            styles.disabled,
            isCurrent && styles.current
          )}
        >
          {children}
        </span>
      )
    }

    if (renderLink) {
      return (
        <span key={index} className={styles.button}>
          {renderLink(page, children)}
        </span>
      )
    }

    return (
      <Link
        key={index}
        href={getPageHref(page)}
        aria-label={ariaLabel}
        className={styles.button}
        onClick={(e) => handleClick(e, page)}
      >
        {children}
      </Link>
    )
  }

  const renderNavLink = (
    page: number,
    children: React.ReactNode,
    ariaLabel: string,
    isDisabled: boolean
  ) => {
    const linkDisabled = disabled || isDisabled

    if (linkDisabled) {
      return (
        <span
          aria-disabled="true"
          aria-label={ariaLabel}
          className={clsx(styles.button, styles.disabled)}
        >
          {children}
        </span>
      )
    }

    if (renderLink) {
      return (
        <span className={styles.button}>{renderLink(page, children)}</span>
      )
    }

    return (
      <Link
        href={getPageHref(page)}
        aria-label={ariaLabel}
        className={styles.button}
        onClick={(e) => handleClick(e, page)}
      >
        {children}
      </Link>
    )
  }

  if (totalPages <= 1) return null

  const navClassList = clsx(
    styles.pagination,
    disabled && styles.disabled,
    className
  )

  const ellipsisClassList = clsx(styles.button, styles.ellipsis)

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      className={navClassList}
      {...rest}
    >
      {showFirstLast &&
        renderNavLink(
          1,
          <ChevronsLeft size={18} aria-hidden="true" />,
          firstPageLabel,
          currentPage === 1
        )}

      {showPrevNext &&
        renderNavLink(
          currentPage - 1,
          <ChevronLeft size={18} aria-hidden="true" />,
          previousPageLabel,
          currentPage === 1
        )}

      {pages.map((page, index) =>
        page === 'ellipsis' ? (
          <span
            key={index}
            className={ellipsisClassList}
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          renderPageLink(
            page,
            page,
            pageLabel(page),
            page === currentPage,
            index
          )
        )
      )}

      {showPrevNext &&
        renderNavLink(
          currentPage + 1,
          <ChevronRight size={18} aria-hidden="true" />,
          nextPageLabel,
          currentPage === totalPages
        )}

      {showFirstLast &&
        renderNavLink(
          totalPages,
          <ChevronsRight size={18} aria-hidden="true" />,
          lastPageLabel,
          currentPage === totalPages
        )}
    </nav>
  )
}

import { useEffect, useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import type { HeaderMobileMainMenuDropdownTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainMenuDropdown({
  ref,
  children,
  label,
  baseId,
  className,
  ...rest
}: HeaderMobileMainMenuDropdownTypes) {
  const [isExpanded, setIsExpanded] = useState(false)
  const generatedId = useId()
  const id = baseId || generatedId
  const dropdownId = `mobile-nav-content-${id}`
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.inert = !isExpanded
    }
  }, [isExpanded])

  return (
    <div
      ref={ref}
      className={clsx(styles.dropdownWrapper, className)}
      {...rest}
    >
      <Button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={dropdownId}
        className={clsx(
          styles.dropdownTrigger,
          isExpanded && styles.isOpen
        )}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {label}
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={clsx(styles.chevron, isExpanded && styles.isOpen)}
        />
      </Button>

      <div
        inert
        id={dropdownId}
        ref={dropdownRef}
        className={clsx(styles.dropdown, isExpanded && styles.isOpen)}
      >
        <div className={styles.dropdownInner}>{children}</div>
      </div>
    </div>
  )
}

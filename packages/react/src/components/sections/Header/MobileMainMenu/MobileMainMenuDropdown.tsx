import { useEffect, useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import styles from '../Header.module.scss'
import type { MobileMainMenuDropdownTypes } from '../Header.types'

export function MobileMainMenuDropdown({
  ref,
  children,
  label,
  baseId,
  className,
  ...rest
}: MobileMainMenuDropdownTypes) {
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
      className={clsx(styles.mobileMainMenuDropdownWrapper, className)}
      {...rest}
    >
      <Button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={dropdownId}
        className={clsx(
          styles.mobileMainMenuDropdownTrigger,
          isExpanded && styles.isOpen
        )}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {label}
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={clsx(
            styles.chevron,
            isExpanded && styles.chevronOpen
          )}
        />
      </Button>

      <div
        inert
        id={dropdownId}
        ref={dropdownRef}
        className={clsx(
          styles.mobileMainMenuDropdown,
          isExpanded && styles.isOpen
        )}
      >
        <div className={styles.mobileMainMenuDropdownInner}>
          {children}
        </div>
      </div>
    </div>
  )
}

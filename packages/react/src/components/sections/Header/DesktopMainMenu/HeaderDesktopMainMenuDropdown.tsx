import clsx from 'clsx'
import { Button } from 'components/form'
import { ChevronDown } from 'lucide-react'
import { useHeaderDropdown } from '../useHeaderDropdown'
import type { HeaderDesktopMainMenuDropdownTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMainMenu.module.scss'

export function HeaderDesktopMainMenuDropdown({
  children,
  label,
  href,
  as,
  mega = false,
  current = false,
  className,
  ...rest
}: HeaderDesktopMainMenuDropdownTypes) {
  const isLink = Boolean(href)
  const TriggerComp = href ? as || 'a' : Button

  const {
    isOpen,
    setIsOpen,
    itemRef,
    triggerRef,
    dropdownRef,
    handleBlur,
    handleFocus,
    handleKeyDown,
  } = useHeaderDropdown(isLink)

  return (
    <div
      ref={itemRef}
      className={clsx(
        styles.dropdownWrapper,
        mega && styles.hasMega,
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <TriggerComp
        ref={triggerRef}
        href={href}
        type={isLink ? undefined : 'button'}
        tabIndex={isLink && current ? -1 : undefined}
        className={clsx(styles.dropdownTrigger, current && styles.current)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-current={current ? 'page' : undefined}
        onClick={isLink ? undefined : () => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.isOpen)}
        />
      </TriggerComp>

      <div
        inert
        role="menu"
        ref={dropdownRef}
        className={clsx(
          mega ? styles.megaMenu : styles.mainDropdown,
          isOpen && styles.isOpen
        )}
      >
        <div
          className={mega ? styles.megaMenuInner : styles.dropdownInner}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

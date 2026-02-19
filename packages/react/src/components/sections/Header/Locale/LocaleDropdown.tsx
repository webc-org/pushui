import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useTheme } from 'utils'
import { useHeader } from '../HeaderContext'
import { useHeaderDropdown } from '../useHeaderDropdown'
import type { LocaleTypes } from './Locale.types'
import styles from './LocaleDropdown.module.scss'

export function LocaleDropdown({
  locales,
  current,
  onChange,
  triggerLabel,
  device = 'desktop',
  section = 'top',
  className,
}: LocaleTypes) {
  const {
    isOpen,
    setIsOpen,
    itemRef,
    triggerRef,
    dropdownRef,
    handleBlur,
    handleFocus,
    handleKeyDown,
  } = useHeaderDropdown(false)

  const { themeStyles } = useHeader()
  const { theme } = useTheme()
  const dropdownBg = themeStyles[device][section].bgColor

  const label = triggerLabel ?? current.toUpperCase()

  return (
    <div
      ref={itemRef}
      style={{ '--locale-dropdown-bg': dropdownBg } as CSSProperties}
      className={clsx(styles.dropdownWrapper, styles[theme], className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={handleFocus}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef as React.RefObject<HTMLButtonElement>}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={clsx(styles.chevron, isOpen && styles.isOpen)}
        />
      </button>

      <div
        inert
        role="menu"
        ref={dropdownRef}
        className={clsx(styles.dropdown, isOpen && styles.isOpen)}
      >
        <div className={styles.dropdownInner}>
          {locales.map((locale) => (
            <button
              key={locale.code}
              type="button"
              role="menuitem"
              className={clsx(
                styles.localeButton,
                locale.code === current && styles.active
              )}
              onClick={() => {
                onChange(locale.code)
                setIsOpen(false)
              }}
            >
              {locale.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

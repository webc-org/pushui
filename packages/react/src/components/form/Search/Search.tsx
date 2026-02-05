import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { Button, Spinner } from 'components'
import { Search, X } from 'lucide-react'
import styles from './Search.module.scss'
import type { InputSearchTypes, SearchResultTypes } from './Search.types'

export function InputSearch({
  ref,
  label,
  className,
  inputClassName,
  labelClassName,
  mode = 'dropdown',
  action,
  method = 'get',
  paramName = 'q',
  results = [],
  onSearch,
  onSelect,
  onLoadMore,
  hasMore,
  loading,
  searchDebounce = 300,
  minChars = 2,
  renderResult,
  noResultsText,
  flip = true,
  value: controlledValue,
  onChange,
  placeholder,
  disabled,
  clearLabel = 'Clear',
  'aria-label': ariaLabel,
  ...rest
}: InputSearchTypes) {
  const id = useId()
  const [internalValue, setInternalValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })
  const [mounted, setMounted] = useState(false)

  const value = controlledValue ?? internalValue
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const updateMenuPosition = useCallback(() => {
    if (!wrapperRef.current || !isOpen) return

    const rect = wrapperRef.current.getBoundingClientRect()
    const menuHeight =
      menuRef.current?.getBoundingClientRect().height || 300

    let shouldFlip = false
    if (flip) {
      const spaceBelow = window.innerHeight - rect.bottom
      shouldFlip = spaceBelow < menuHeight && rect.top > spaceBelow
    }

    setMenuPosition({
      top: shouldFlip ? rect.top - menuHeight - 4 : rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    })
  }, [isOpen, flip])

  useEffect(() => {
    if (!isOpen) return

    updateMenuPosition()
    window.addEventListener('scroll', updateMenuPosition, true)
    window.addEventListener('resize', updateMenuPosition)

    return () => {
      window.removeEventListener('scroll', updateMenuPosition, true)
      window.removeEventListener('resize', updateMenuPosition)
    }
  }, [isOpen, updateMenuPosition])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !wrapperRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)

      if (mode === 'dropdown' && onSearch) {
        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current)
        }

        if (newValue.length >= minChars) {
          searchTimeoutRef.current = setTimeout(() => {
            onSearch(newValue)
            setIsOpen(true)
            setFocusedIndex(-1)
          }, searchDebounce)
        } else {
          setIsOpen(false)
        }
      }
    },
    [controlledValue, onChange, mode, onSearch, minChars, searchDebounce]
  )

  const handleClear = useCallback(() => {
    if (controlledValue === undefined) {
      setInternalValue('')
    }
    onChange?.('')
    setIsOpen(false)
    inputRef.current?.focus()
  }, [controlledValue, onChange])

  const handleSelect = useCallback(
    (result: SearchResultTypes) => {
      onSelect?.(result)
      if (controlledValue === undefined) {
        setInternalValue(result.label)
      }
      onChange?.(result.label)
      setIsOpen(false)
      inputRef.current?.focus()
    },
    [controlledValue, onChange, onSelect]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (mode !== 'dropdown' || !isOpen) {
        if (e.key === 'Escape' && value) {
          e.preventDefault()
          handleClear()
        }
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setFocusedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : results.length - 1
          )
          break
        case 'Enter':
          if (focusedIndex >= 0 && results[focusedIndex]) {
            e.preventDefault()
            handleSelect(results[focusedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          setIsOpen(false)
          break
        case 'Tab':
          setIsOpen(false)
          break
      }
    },
    [mode, isOpen, value, handleClear, results, focusedIndex, handleSelect]
  )

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!onLoadMore || !hasMore || loading) return

    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    const nearBottom = scrollTop + clientHeight >= scrollHeight - 50

    if (nearBottom) onLoadMore()
  }

  const inputElement = (
    <div ref={wrapperRef} className={clsx(styles.inputWrapper, className)}>
      <Search size={18} className={styles.searchIcon} aria-hidden="true" />

      <input
        ref={(node) => {
          ;(
            inputRef as React.MutableRefObject<HTMLInputElement | null>
          ).current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        id={label ? id : undefined}
        type="search"
        role="combobox"
        value={value}
        disabled={disabled}
        placeholder={placeholder ?? 'Search'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (mode === 'dropdown' && value.length >= minChars) {
            setIsOpen(true)
          }
        }}
        aria-label={!label ? (ariaLabel ?? 'Search') : undefined}
        aria-expanded={mode === 'dropdown' ? isOpen : undefined}
        aria-haspopup={mode === 'dropdown' ? 'listbox' : undefined}
        aria-controls={
          mode === 'dropdown' && isOpen ? `${id}-listbox` : undefined
        }
        aria-activedescendant={
          mode === 'dropdown' && isOpen && focusedIndex >= 0
            ? `${id}-option-${focusedIndex}`
            : undefined
        }
        aria-autocomplete={mode === 'dropdown' ? 'list' : undefined}
        className={clsx(styles.input, inputClassName)}
        {...rest}
      />

      {(value || loading) && !disabled && (
        <div className={styles.actions}>
          {loading && <Spinner inline />}
          {value && (
            <Button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              aria-label={clearLabel}
            >
              <X size={18} aria-hidden="true" />
            </Button>
          )}
        </div>
      )}
    </div>
  )

  const dropdownElement =
    mode === 'dropdown' && isOpen && mounted
      ? createPortal(
          <div
            ref={menuRef}
            id={`${id}-listbox`}
            role="listbox"
            onScroll={handleScroll}
            aria-busy={loading || undefined}
            className={styles.dropdown}
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              width: `${menuPosition.width}px`,
            }}
          >
            {results.length > 0 ? (
              <ul className={styles.resultList}>
                {results.map((result, index) => (
                  <li
                    key={result.id}
                    id={`${id}-option-${index}`}
                    aria-selected={focusedIndex === index}
                    className={clsx(
                      styles.resultItem,
                      focusedIndex === index && styles.focused
                    )}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    {renderResult ? renderResult(result) : result.label}
                  </li>
                ))}
              </ul>
            ) : !loading ? (
              <div className={styles.noResults}>
                {noResultsText ?? 'No results found'}
              </div>
            ) : null}

            {loading && hasMore && results.length > 0 && (
              <div className={styles.dropdownLoading}>
                <Spinner inline />
              </div>
            )}
          </div>,
          document.body
        )
      : null

  if (mode === 'redirect') {
    return (
      <form action={action} method={method} className={styles.wrapper}>
        {label && (
          <label
            htmlFor={id}
            className={clsx(styles.label, labelClassName)}
          >
            {label}
          </label>
        )}
        <input type="hidden" name={paramName} value={value} />
        {inputElement}
      </form>
    )
  }

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      {inputElement}
      {dropdownElement}
    </div>
  )
}

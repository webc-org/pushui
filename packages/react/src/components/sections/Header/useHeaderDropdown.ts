import { useEffect, useEffectEvent, useRef, useState } from 'react'

export function useHeaderDropdown(isLink: boolean) {
  const [isOpen, setIsOpen] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useEffectEvent((e: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  })

  const handleEscape = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false)
      triggerRef.current?.focus()
    }
  })

  const handleBlur = (e: React.FocusEvent) => {
    const relatedTarget = e.relatedTarget as Node | null
    if (itemRef.current && !itemRef.current.contains(relatedTarget)) {
      setIsOpen(false)
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isLink && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      } else {
        const firstElement =
          dropdownRef.current?.querySelector<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        firstElement?.focus()
      }
    }

    if (e.key === 'ArrowUp' && isOpen) {
      e.preventDefault()
      const elements = dropdownRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      elements?.[elements.length - 1]?.focus()
    }
  }

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.inert = !isOpen
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return {
    isOpen,
    setIsOpen,
    itemRef,
    triggerRef,
    dropdownRef,
    handleBlur,
    handleFocus,
    handleKeyDown,
  }
}

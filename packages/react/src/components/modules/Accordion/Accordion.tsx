import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown } from 'lucide-react'
import styles from './Accordion.module.scss'
import type {
  AccordionContentTypes,
  AccordionContextValue,
  AccordionItemContextValue,
  AccordionItemTypes,
  AccordionTriggerTypes,
  AccordionTypes,
} from './Accordion.types'

const AccordionContext = createContext<AccordionContextValue | null>(null)
const AccordionItemContext =
  createContext<AccordionItemContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      'Accordion components must be used within an <Accordion> provider'
    )
  }
  return context
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)

  if (!context) {
    throw new Error(
      'AccordionTrigger/Content must be used within an <AccordionItem>'
    )
  }
  return context
}

export function Accordion({
  ref,
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
  children,
  ...props
}: AccordionTypes) {
  const accordionId = useId()

  const getInitialExpanded = (): string[] => {
    if (defaultValue === undefined) return []
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  }

  const [internalExpanded, setInternalExpanded] =
    useState<string[]>(getInitialExpanded)

  const expandedItems = useMemo(() => {
    if (value === undefined) return internalExpanded
    return Array.isArray(value) ? value : [value]
  }, [value, internalExpanded])

  const toggleItem = useCallback(
    (itemValue: string) => {
      const isExpanded = expandedItems.includes(itemValue)

      let newExpanded: string[]

      if (type === 'single') {
        if (isExpanded && collapsible) {
          newExpanded = []
        } else if (isExpanded && !collapsible) {
          return
        } else {
          newExpanded = [itemValue]
        }
      } else {
        if (isExpanded) {
          newExpanded = expandedItems.filter((v) => v !== itemValue)
        } else {
          newExpanded = [...expandedItems, itemValue]
        }
      }

      if (value === undefined) {
        setInternalExpanded(newExpanded)
      }

      if (type === 'single') {
        onValueChange?.(newExpanded[0] ?? '')
      } else {
        onValueChange?.(newExpanded)
      }
    },
    [type, collapsible, expandedItems, value, onValueChange]
  )

  const contextValue = useMemo(
    () => ({ type, expandedItems, toggleItem, accordionId }),
    [type, expandedItems, toggleItem, accordionId]
  )

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={clsx(styles.accordion, className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({
  ref,
  value,
  children,
  className,
  disabled = false,
  ...props
}: AccordionItemTypes) {
  const { expandedItems, accordionId } = useAccordionContext()
  const isExpanded = expandedItems.includes(value)

  const triggerId = `${accordionId}-trigger-${value}`
  const contentId = `${accordionId}-content-${value}`

  const itemContextValue = useMemo(
    () => ({ value, isExpanded, triggerId, contentId, disabled }),
    [value, isExpanded, triggerId, contentId, disabled]
  )

  const classList = clsx(
    styles.item,
    isExpanded && styles.expanded,
    disabled && styles.disabled,
    className
  )

  return (
    <AccordionItemContext.Provider value={itemContextValue}>
      <div
        ref={ref}
        className={classList}
        data-disabled={disabled || undefined}
        data-state={isExpanded ? 'open' : 'closed'}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({
  ref,
  children,
  className,
  headingLevel: Heading = 'h3',
  ...props
}: AccordionTriggerTypes) {
  const { toggleItem } = useAccordionContext()
  const { value, isExpanded, triggerId, contentId, disabled } =
    useAccordionItemContext()

  const handleClick = () => {
    if (!disabled) toggleItem(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const accordion = e.currentTarget.closest(`.${styles.accordion}`)
    const triggers = accordion?.querySelectorAll<HTMLButtonElement>(
      `.${styles.trigger}:not([disabled])`
    )

    if (!triggers || triggers.length === 0) return

    const currentIndex = Array.from(triggers).indexOf(e.currentTarget)

    let nextIndex: number | null = null

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        nextIndex =
          currentIndex < triggers.length - 1 ? currentIndex + 1 : 0
        break
      case 'ArrowUp':
        e.preventDefault()
        nextIndex =
          currentIndex > 0 ? currentIndex - 1 : triggers.length - 1
        break
      case 'Home':
        e.preventDefault()
        nextIndex = 0
        break
      case 'End':
        e.preventDefault()
        nextIndex = triggers.length - 1
        break
    }

    if (nextIndex !== null) {
      triggers[nextIndex].focus()
    }
  }

  return (
    <Heading>
      <Button
        ref={ref}
        type="button"
        id={triggerId}
        disabled={disabled}
        className={clsx(
          styles.trigger,
          isExpanded && styles.expanded,
          className
        )}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className={styles.triggerText}>{children}</span>

        <ChevronDown size={21} className={styles.icon} aria-hidden />
      </Button>
    </Heading>
  )
}

export function AccordionContent({
  ref,
  className,
  children,
  ...props
}: AccordionContentTypes) {
  const { isExpanded, triggerId, contentId } = useAccordionItemContext()

  return (
    <div
      ref={ref}
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={clsx(
        styles.content,
        isExpanded && styles.contentExpanded,
        className
      )}
      hidden={!isExpanded}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  )
}

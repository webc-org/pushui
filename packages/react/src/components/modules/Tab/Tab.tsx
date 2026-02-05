import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import styles from './Tab.module.scss'
import type {
  TabButtonTypes,
  TabContextValue,
  TabListTypes,
  TabPanelsTypes,
  TabPanelTypes,
  TabTypes,
} from './Tab.types'

const TabContext = createContext<TabContextValue | null>(null)

function useTabContext() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('Tab components must be used within a <Tab> provider')
  }
  return context
}

export function Tab({
  ref,
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabTypes) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const tabId = useId()

  const activeTab = value ?? internalValue

  const setActiveTab = useCallback(
    (newValue: string) => {
      setInternalValue(newValue)
      onValueChange?.(newValue)
    },
    [onValueChange]
  )

  const contextValue = useMemo(
    () => ({ activeTab, setActiveTab, tabId }),
    [activeTab, setActiveTab, tabId]
  )

  return (
    <TabContext.Provider value={contextValue}>
      <div ref={ref} className={clsx(styles.tab, className)} {...props}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export function TabList({
  ref,
  className,
  children,
  ...props
}: TabListTypes) {
  const listRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]:not([disabled])'
    )
    if (!tabs || tabs.length === 0) return

    const currentIndex = Array.from(tabs).indexOf(
      document.activeElement as HTMLButtonElement
    )
    if (currentIndex === -1) return

    let nextIndex: number | null = null

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
        break
      case 'ArrowRight':
        e.preventDefault()
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        e.preventDefault()
        nextIndex = 0
        break
      case 'End':
        e.preventDefault()
        nextIndex = tabs.length - 1
        break
    }

    if (nextIndex !== null) {
      tabs[nextIndex].focus()
      tabs[nextIndex].click()
    }
  }

  return (
    <div
      ref={(node) => {
        listRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      role="tablist"
      className={clsx(styles.tabList, className)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabButton({
  value,
  children,
  className,
  appearance,
  variant = 'default',
  ...props
}: TabButtonTypes) {
  const { activeTab, setActiveTab, tabId } = useTabContext()
  const isActive = activeTab === value

  return (
    <Button
      role="tab"
      id={`${tabId}-tab-${value}`}
      variant={variant}
      appearance={appearance}
      aria-selected={isActive}
      aria-controls={`${tabId}-panel-${value}`}
      onClick={() => setActiveTab(value)}
      className={clsx(styles.tabButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export function TabPanels({
  ref,
  className,
  children,
  ...props
}: TabPanelsTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.tabPanels, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabPanel({
  ref,
  value,
  className,
  children,
  ...props
}: TabPanelTypes) {
  const { activeTab, tabId } = useTabContext()

  if (activeTab !== value) {
    return null
  }

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={`${tabId}-panel-${value}`}
      aria-labelledby={`${tabId}-tab-${value}`}
      className={clsx(styles.tabPanel, className)}
      {...props}
    >
      {children}
    </div>
  )
}

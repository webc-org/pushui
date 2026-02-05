import type { ComponentPropsWithRef } from 'react'
import type { ButtonTypes } from 'components'

export type TabContextValue = {
  activeTab: string
  setActiveTab: (value: string) => void
  tabId: string
}

export type TabTypes = ComponentPropsWithRef<'div'> & {
  value?: string
  defaultValue: string
  onValueChange?: (value: string) => void
}

export type TabListTypes = ComponentPropsWithRef<'div'>

export type TabButtonTypes = Omit<ButtonTypes, 'value'> & {
  value: string
}

export type TabPanelsTypes = ComponentPropsWithRef<'div'>

export type TabPanelTypes = ComponentPropsWithRef<'div'> & {
  value: string
}

import { createContext, useContext } from 'react'
import type { HeaderContextTypes } from './Header.types'

export const HeaderContext = createContext<HeaderContextTypes | null>(null)

export const useHeader = () => {
  const context = useContext(HeaderContext)

  if (!context) {
    throw new Error('Header components must be used within HeaderRoot')
  }

  return context
}

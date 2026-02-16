import { createContext, useContext } from 'react'
import type { ThemeContextTypes } from './Theme.types'

export const ThemeContext = createContext<ThemeContextTypes | undefined>(
  undefined
)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}

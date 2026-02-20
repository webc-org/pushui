import { createContext, useContext } from 'react'
import type { ThemeContextTypes, ThemeTypes } from './Theme.types'

export const ThemeContext = createContext<ThemeContextTypes>({
  theme: 'light',
  setTheme: () => {},
})

export const useTheme = (overrideFn?: () => ThemeTypes | undefined) => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  const override = overrideFn?.()
  return override !== undefined ? { ...context, theme: override } : context
}

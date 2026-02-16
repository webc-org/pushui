import { type ReactNode, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { Theme } from './Theme.types'

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: {
  children: ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

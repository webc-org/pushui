import { type ReactNode, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeTypes } from './Theme.types'

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: {
  children: ReactNode
  defaultTheme?: ThemeTypes
}) {
  const [theme, setTheme] = useState<ThemeTypes>(defaultTheme)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

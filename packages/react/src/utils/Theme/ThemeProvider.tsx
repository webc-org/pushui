import { type ReactNode, useEffect, useMemo, useState } from 'react'
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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

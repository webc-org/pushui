export type ThemeTypes = 'dark' | 'light'

export type ThemeContextTypes = {
  theme: ThemeTypes
  setTheme: (theme: ThemeTypes) => void
}

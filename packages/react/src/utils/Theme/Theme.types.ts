export type Theme = 'dark' | 'light'

export type ThemeContextTypes = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

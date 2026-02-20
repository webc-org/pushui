import { useTheme } from 'utils'
import { useHeader } from './HeaderContext'

export function useHeaderTheme() {
  const { themeOverlay, isScrolled } = useHeader()
  return useTheme(() =>
    !isScrolled && themeOverlay ? themeOverlay : undefined
  )
}

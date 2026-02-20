import { useContext } from 'react'
import { useTheme } from 'utils'
import { HeaderContext } from './HeaderContext'

export function useHeaderTheme() {
  const header = useContext(HeaderContext)
  const { theme } = useTheme(() =>
    header &&
    !header.isScrolled &&
    !header.isHovered &&
    header.themeOverlay
      ? header.themeOverlay
      : undefined
  )
  return theme
}

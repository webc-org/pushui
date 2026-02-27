import { useMemo } from 'react'
import { useTheme } from 'utils'
import type { HeaderThemeStylesTypes, HeaderTypes } from './Header.types'

export function useHeaderCustomStyles(
  customStyles: HeaderTypes['customStyles'],
  themeOverlay?: HeaderTypes['themeOverlay'],
  isScrolled?: boolean,
  isActive?: boolean
): HeaderThemeStylesTypes {
  const { theme } = useTheme(() =>
    !isScrolled && !isActive && themeOverlay ? themeOverlay : undefined
  )

  return useMemo(() => {
    const desktopTopLight = customStyles?.desktop?.top?.light
    const desktopTopDark = customStyles?.desktop?.top?.dark
    const desktopMainLight = customStyles?.desktop?.main?.light
    const desktopMainDark = customStyles?.desktop?.main?.dark
    const mobileTopLight = customStyles?.mobile?.top?.light
    const mobileTopDark = customStyles?.mobile?.top?.dark
    const mobileMainLight = customStyles?.mobile?.main?.light
    const mobileMainDark = customStyles?.mobile?.main?.dark

    const styles = {
      desktop: {
        top: {
          light: {
            bgColor:
              desktopTopLight?.bgColor ??
              'var(--theme-header-desktop-top-bg)',
            bgOpacity: desktopTopLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor:
              desktopTopDark?.bgColor ??
              'var(--theme-header-desktop-top-bg)',
            bgOpacity: desktopTopDark?.bgOpacity ?? '1',
          },
        },
        main: {
          light: {
            bgColor:
              desktopMainLight?.bgColor ??
              'var(--theme-header-desktop-main-bg)',
            bgOpacity: desktopMainLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor:
              desktopMainDark?.bgColor ??
              'var(--theme-header-desktop-main-bg)',
            bgOpacity: desktopMainDark?.bgOpacity ?? '1',
          },
        },
      },
      mobile: {
        top: {
          light: {
            bgColor:
              mobileTopLight?.bgColor ??
              'var(--theme-header-mobile-top-bg)',
            bgOpacity: mobileTopLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor:
              mobileTopDark?.bgColor ??
              'var(--theme-header-mobile-top-bg)',
            bgOpacity: mobileTopDark?.bgOpacity ?? '1',
          },
        },
        main: {
          light: {
            bgColor:
              mobileMainLight?.bgColor ??
              'var(--theme-header-mobile-main-bg)',
          },
          dark: {
            bgColor:
              mobileMainDark?.bgColor ??
              'var(--theme-header-mobile-main-bg)',
          },
        },
      },
    }

    return {
      desktop: {
        top: styles.desktop.top[theme],
        main: {
          ...styles.desktop.main[theme],
          shadow: 'var(--shadow-1)',
        },
      },
      mobile: {
        top: styles.mobile.top[theme],
        main: styles.mobile.main[theme],
      },
    }
  }, [customStyles, theme])
}

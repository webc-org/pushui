import { useMemo } from 'react'
import type { ThemeTypes } from 'utils'
import type { HeaderThemeStylesTypes, HeaderTypes } from './Header.types'

export function useHeaderCustomStyles(
  customStyles: HeaderTypes['customStyles'],
  theme: ThemeTypes
): HeaderThemeStylesTypes {
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
            bgColor: desktopTopLight?.bgColor ?? 'var(--color-grey-9)',
            bgOpacity: desktopTopLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor: desktopTopDark?.bgColor ?? 'var(--color-grey-1)',
            bgOpacity: desktopTopDark?.bgOpacity ?? '1',
          },
        },
        main: {
          light: {
            bgColor: desktopMainLight?.bgColor ?? 'var(--color-white)',
            bgOpacity: desktopMainLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor: desktopMainDark?.bgColor ?? 'var(--color-grey-2)',
            bgOpacity: desktopMainDark?.bgOpacity ?? '1',
          },
        },
      },
      mobile: {
        top: {
          light: {
            bgColor: mobileTopLight?.bgColor ?? 'var(--color-white)',
            bgOpacity: mobileTopLight?.bgOpacity ?? '1',
          },
          dark: {
            bgColor: mobileTopDark?.bgColor ?? 'var(--color-grey-1)',
            bgOpacity: mobileTopDark?.bgOpacity ?? '1',
          },
        },
        main: {
          light: {
            bgColor: mobileMainLight?.bgColor ?? 'var(--color-white)',
          },
          dark: {
            bgColor: mobileMainDark?.bgColor ?? 'var(--color-grey-1)',
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

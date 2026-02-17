import { useEffect, useRef, useState } from 'react'
import { useHeader } from './HeaderContext'
import type { HeaderNavTypes } from './Header.types'

const NAV_LABELS = {
  desktopTop: 'Desktop Top Navigation',
  desktopMain: 'Desktop Main Navigation',
  mobileMain: 'Mobile Main Navigation',
}

export function useHeaderNavLabel(
  type: HeaderNavTypes,
  customLabel?: string
) {
  const { registerNav, getNavCount } = useHeader()
  const [navIndex, setNavIndex] = useState(0)
  const registered = useRef(false)

  useEffect(() => {
    if (!registered.current) {
      registered.current = true
      setNavIndex(registerNav(type))
    }
  }, [registerNav, type])

  if (customLabel) return customLabel

  const navCount = getNavCount(type)
  return navCount > 1
    ? `${NAV_LABELS[type]} ${navIndex}`
    : NAV_LABELS[type]
}

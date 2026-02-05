import { useEffect, useRef, useState } from 'react'
import { useHeader } from './HeaderContext'
import type { HeaderNavTypes } from './Header.types'

const NAV_LABELS = {
  main: 'Main navigation',
  top: 'Secondary navigation',
  mobile: 'Mobile navigation',
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

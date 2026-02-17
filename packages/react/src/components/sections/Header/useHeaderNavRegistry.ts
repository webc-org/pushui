import { useCallback, useRef, useState } from 'react'
import type { HeaderNavTypes } from './Header.types'

const INITIAL = { desktopTop: 0, desktopMain: 0, mobileMain: 0 }

export function useHeaderNavRegistry() {
  const [registeredNavs, setRegisteredNavs] = useState(INITIAL)
  const nextNavIndex = useRef({ ...INITIAL })

  const registerNav = useCallback((type: HeaderNavTypes) => {
    nextNavIndex.current[type] += 1
    const index = nextNavIndex.current[type]
    setRegisteredNavs((prev) => ({ ...prev, [type]: prev[type] + 1 }))
    return index
  }, [])

  const getNavCount = useCallback(
    (type: HeaderNavTypes) => registeredNavs[type],
    [registeredNavs]
  )

  return { registerNav, getNavCount }
}

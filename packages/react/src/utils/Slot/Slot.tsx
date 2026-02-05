import { cloneElement, isValidElement, type ReactNode } from 'react'
import clsx from 'clsx'

export interface SlotProps {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

export function Slot({ children, className, ...props }: SlotProps) {
  if (!isValidElement(children)) {
    console.warn('Slot: Expected a single React element child')
    return null
  }

  const childProps = children.props as Record<string, unknown>

  const mergedClassName = clsx(
    className,
    childProps.className as string | undefined
  )

  const mergedProps: Record<string, unknown> = { ...props }

  for (const key of Object.keys(childProps)) {
    if (key === 'className') continue

    const slotValue = props[key]

    const childValue = childProps[key]

    if (
      typeof slotValue === 'function' &&
      typeof childValue === 'function' &&
      key.startsWith('on')
    ) {
      mergedProps[key] = (...args: unknown[]) => {
        childValue(...args)
        slotValue(...args)
      }
    } else if (childValue !== undefined) {
      mergedProps[key] = childValue
    }
  }

  return cloneElement(children, {
    ...mergedProps,
    className: mergedClassName || undefined,
  } as React.HTMLAttributes<HTMLElement>)
}

export default Slot

import { createContext, useContext } from 'react'
import type { SelectContextTypes } from './Select.types'

const SelectContext = createContext<SelectContextTypes | undefined>(
  undefined
)

export const SelectContextRoot = SelectContext.Provider

export const useSelectContext = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error(
      'Select components must be used within a SelectContextRoot'
    )
  }

  return context
}

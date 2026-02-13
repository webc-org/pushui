export function getFocusableElements(element: HTMLElement | null) {
  return (
    element?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ) ?? []
  )
}

import clsx from 'clsx'
import { Button } from 'components'
import { Menu, X } from 'lucide-react'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileMainToggleTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainToggle({
  ref,
  label,
  closeLabel = 'Close',
  menuLabel = 'Menu',
  className,
  ...rest
}: HeaderMobileMainToggleTypes) {
  const { isOpen, toggle, mobileMenuId, mobileToggleId } = useHeader()

  return (
    <Button
      ref={ref}
      type="button"
      onClick={toggle}
      id={mobileToggleId}
      aria-expanded={isOpen}
      aria-controls={mobileMenuId}
      aria-label={label || (isOpen ? closeLabel : menuLabel)}
      className={clsx(styles.toggle, className)}
      {...rest}
    >
      {isOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </Button>
  )
}

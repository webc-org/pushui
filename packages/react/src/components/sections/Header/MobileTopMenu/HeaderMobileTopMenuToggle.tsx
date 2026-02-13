import clsx from 'clsx'
import { Button } from 'components'
import { Menu, X } from 'lucide-react'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileTopMenuToggleTypes } from './HeaderMobileTopMenu.types'
import styles from './headerMobileTopMenu.module.scss'

export function HeaderMobileTopMenuToggle({
  ref,
  label,
  closeLabel = 'Close',
  menuLabel = 'Menu',
  className,
  ...rest
}: HeaderMobileTopMenuToggleTypes) {
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

import { Title, type TitleTypes } from 'base/Title'
import clsx from 'clsx'
import styles from '../Footer.module.scss'

export function FooterMainNavTitle({
  children,
  className,
  level = 'h3',
}: TitleTypes) {
  return (
    <Title level={level} className={clsx(styles.mainNavTitle, className)}>
      {children}
    </Title>
  )
}

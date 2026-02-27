import type { Meta, StoryObj } from '@storybook/react'
import { useTheme } from 'utils'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Base/Logo',
  component: Logo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Logo>

const LogoContent = () => {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <img src={src} alt="Push UI" />
    </Logo>
  )
}

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <LogoContent />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <LogoContent />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, Image, Logo } from 'base'
import { LayoutDashboard, LogOut, UserCog } from 'lucide-react'
import { useTheme } from 'utils'
import {
  DashboardBrand,
  DashboardLayout,
  DashboardMain,
  DashboardMainHeader,
  DashboardMainTitle,
  DashboardNav,
  DashboardNavLink,
  DashboardNavTitle,
  DashboardSidebar,
} from './index'

const meta: Meta = {
  title: 'Sections/Dashboard',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const DashboardLogo = () => {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" width={81} height={28} />
    </Logo>
  )
}

const Variants = () => (
  <DashboardLayout>
    <DashboardSidebar>
      <DashboardBrand>
        <DashboardLogo />
      </DashboardBrand>

      <DashboardNav>
        <DashboardNavTitle>General</DashboardNavTitle>
        <DashboardNavLink href="/dashboard" current>
          <LayoutDashboard size={21} />
          Dashboard
        </DashboardNavLink>
        <DashboardNavLink href="#account">
          <UserCog size={21} />
          Account
        </DashboardNavLink>
      </DashboardNav>

      <DashboardNav>
        <DashboardNavTitle>Account</DashboardNavTitle>
        <DashboardNavLink asChild>
          <button type="button">
            <LogOut size={21} />
            Logout
          </button>
        </DashboardNavLink>
      </DashboardNav>
    </DashboardSidebar>

    <DashboardMain>
      <DashboardMainHeader>
        <DashboardMainTitle>Welcome Joe</DashboardMainTitle>
        <Avatar name="johndoe" width="6rem" fontSize={6} />
      </DashboardMainHeader>
    </DashboardMain>
  </DashboardLayout>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem, Image, Link, Logo } from 'components'
import { useTheme } from 'utils'
import {
  FooterBottom,
  FooterBottomLink,
  FooterBottomNav,
  FooterMain,
  FooterMainLink,
  FooterMainMenu,
  FooterMainNav,
  FooterMainNavTitle,
  FooterRoot,
} from './index'
import { FooterMainLogo } from './Main/FooterMainLogo'

const meta: Meta<typeof FooterRoot> = {
  title: 'Sections/Footer',
  component: FooterRoot,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof FooterRoot>

const FooterLogo = () => {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" width={81} height={28} />
    </Logo>
  )
}

const Variants = () => (
  <FooterRoot>
    <FooterMain>
      <FooterMainLogo>
        <FooterLogo />
      </FooterMainLogo>
      <FooterMainMenu>
        <Grid col={1} colSM={2} colMD={4} gap="lg">
          <GridItem>
            <FooterMainNavTitle>Company</FooterMainNavTitle>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Careers</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Press</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <FooterMainNavTitle>Products</FooterMainNavTitle>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Features</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Pricing</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Integrations</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <FooterMainNavTitle>Resources</FooterMainNavTitle>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Documentation</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Tutorials</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Blog</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
          <GridItem>
            <FooterMainNavTitle>Support</FooterMainNavTitle>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">Help Center</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Contact</Link>
              </FooterMainLink>
              <FooterMainLink asChild>
                <Link href="#">Status</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </Grid>
      </FooterMainMenu>
    </FooterMain>
    <FooterBottom>
      <span>&copy; 2026 Company. All rights reserved.</span>
      <FooterBottomNav>
        <FooterBottomLink asChild>
          <Link href="#">Privacy Policy</Link>
        </FooterBottomLink>
        <FooterBottomLink asChild>
          <Link href="#">Terms of Service</Link>
        </FooterBottomLink>
        <FooterBottomLink asChild>
          <Link href="#">Cookies</Link>
        </FooterBottomLink>
      </FooterBottomNav>
    </FooterBottom>
  </FooterRoot>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

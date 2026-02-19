import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Grid,
  GridItem,
  Image,
  Link,
  Logo,
  Section,
  SectionHeader,
  SectionTitle,
  Title,
} from 'components'
import { ThemeProvider, ThemeSwitch, ThemeToggle, useTheme } from 'utils'
import { Button } from '../../form/Button'
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from '../../modules/Banner'
import { Modals } from '../../modules/Modal'
import {
  Header,
  HeaderDesktop,
  HeaderDesktopMainDropdown,
  HeaderDesktopMainDropdownLink,
  HeaderDesktopMainLink,
  HeaderDesktopMainLogo,
  HeaderDesktopMainMenu,
  HeaderDesktopMainNav,
  HeaderDesktopTopDropdown,
  HeaderDesktopTopDropdownLink,
  HeaderDesktopTopLink,
  HeaderDesktopTopMenu,
  HeaderDesktopTopNav,
  HeaderMobile,
  HeaderMobileMainDropdown,
  HeaderMobileMainDropdownLink,
  HeaderMobileMainHead,
  HeaderMobileMainLink,
  HeaderMobileMainMenu,
  HeaderMobileMainNav,
  HeaderMobileMainToggle,
  HeaderMobileTopLogo,
  HeaderMobileTopMenu,
  HeaderMobileTopToggle,
  Locale,
} from './index'

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-8)' }],
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'ja', label: '日本語' },
]

// CONTENT

const HeaderLogoContent = () => {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" />
    </Logo>
  )
}

const HeaderButtonsContent = () => (
  <HeaderDesktopMainNav>
    <ThemeToggle />

    <HeaderDesktopMainLink asChild appearance="outline" variant="primary">
      <Link href="/">Sign In</Link>
    </HeaderDesktopMainLink>

    <HeaderDesktopMainLink asChild appearance="button" variant="primary">
      <Link href="/">Get Started</Link>
    </HeaderDesktopMainLink>
  </HeaderDesktopMainNav>
)

const HeaderIconsContent = () => {
  return (
    <HeaderDesktopMainNav>
      <ThemeToggle />

      <HeaderDesktopMainLink
        asChild
        appearance="icon"
        className="icon-github"
      >
        <Link href="/" />
      </HeaderDesktopMainLink>

      <HeaderDesktopMainLink
        asChild
        appearance="icon"
        className="icon-github"
      >
        <Link
          href="/"
          appearance="icon"
          variant="secondary"
          className="icon-circle-user"
        />
      </HeaderDesktopMainLink>
    </HeaderDesktopMainNav>
  )
}

const ProductsDropdownContent = () => (
  <>
    <HeaderDesktopMainDropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </HeaderDesktopMainDropdownLink>
    <HeaderDesktopMainDropdownLink asChild>
      <Link href="/">Services</Link>
    </HeaderDesktopMainDropdownLink>
    <HeaderDesktopMainDropdownLink asChild>
      <Link href="/">Formations</Link>
    </HeaderDesktopMainDropdownLink>
    <HeaderDesktopMainDropdownLink asChild>
      <Link href="/">Support</Link>
    </HeaderDesktopMainDropdownLink>
  </>
)

const LanguageDropdownContent = () => (
  <>
    <HeaderDesktopTopDropdownLink asChild>
      <Link href="/">Français</Link>
    </HeaderDesktopTopDropdownLink>
    <HeaderDesktopTopDropdownLink asChild>
      <Link href="/">English</Link>
    </HeaderDesktopTopDropdownLink>
    <HeaderDesktopTopDropdownLink asChild>
      <Link href="/">Español</Link>
    </HeaderDesktopTopDropdownLink>
    <HeaderDesktopTopDropdownLink asChild>
      <Link href="/">Deutsch</Link>
    </HeaderDesktopTopDropdownLink>
  </>
)

const MegaMenuContent = () => (
  <Grid col={4} gap={2}>
    <GridItem>
      <Title level="h4">Produits</Title>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </HeaderDesktopMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Consulting</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Intégration</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </HeaderDesktopMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Documentation</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">API</Link>
      </HeaderDesktopMainDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Free trial</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </HeaderDesktopMainDropdownLink>
      <HeaderDesktopMainDropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </HeaderDesktopMainDropdownLink>
    </GridItem>
  </Grid>
)

const MobileMenuContent = () => (
  <HeaderMobileMainMenu>
    <HeaderMobileMainHead>
      <Title level="h3">Menu</Title>
      <HeaderMobileMainToggle />
    </HeaderMobileMainHead>

    <HeaderMobileMainNav>
      <HeaderMobileMainLink asChild>
        <Link href="/">Accueil</Link>
      </HeaderMobileMainLink>

      <HeaderMobileMainLink asChild>
        <Link href="/">Produits</Link>
      </HeaderMobileMainLink>

      <HeaderMobileMainLink asChild>
        <Link href="/">À propos</Link>
      </HeaderMobileMainLink>

      <HeaderMobileMainDropdown label="Produits">
        <HeaderMobileMainDropdownLink asChild>
          <Link href="/">Logiciels</Link>
        </HeaderMobileMainDropdownLink>
        <HeaderMobileMainDropdownLink asChild>
          <Link href="/">Services</Link>
        </HeaderMobileMainDropdownLink>
        <HeaderMobileMainDropdownLink asChild>
          <Link href="/">Formations</Link>
        </HeaderMobileMainDropdownLink>
      </HeaderMobileMainDropdown>

      <HeaderMobileMainDropdown label="Services">
        <HeaderMobileMainDropdownLink asChild>
          <Link href="/">Consulting</Link>
        </HeaderMobileMainDropdownLink>
        <HeaderMobileMainDropdownLink asChild>
          <Link href="/">Support</Link>
        </HeaderMobileMainDropdownLink>
      </HeaderMobileMainDropdown>
    </HeaderMobileMainNav>

    <HeaderMobileMainNav>
      <HeaderMobileMainLink asChild>
        <Link href="/">Contact</Link>
      </HeaderMobileMainLink>
      <HeaderMobileMainLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderMobileMainLink>
      <HeaderMobileMainLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderMobileMainLink>
    </HeaderMobileMainNav>

    <HeaderMobileMainNav>
      <HeaderMobileMainLink asChild appearance="outline" variant="primary">
        <Link href="/">Connexion</Link>
      </HeaderMobileMainLink>
      <HeaderMobileMainLink asChild appearance="button" variant="primary">
        <Link href="/">Inscription</Link>
      </HeaderMobileMainLink>
    </HeaderMobileMainNav>

    <HeaderMobileMainNav>
      <ThemeSwitch />
    </HeaderMobileMainNav>
  </HeaderMobileMainMenu>
)

// STORIES

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild current>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderIconsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const WithActionLinks: Story = {
  render: () => (
    <Header>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild current>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const LinkAppearances: Story = {
  name: 'Link Appearances',
  render: () => (
    <Header>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Default</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild variant="primary">
              <Link href="/">Primary</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild variant="secondary">
              <Link href="/">Secondary</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink
              asChild
              appearance="button"
              variant="primary"
            >
              <Link href="/">Primary</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink
              asChild
              appearance="button"
              variant="secondary"
            >
              <Link href="/">Secondary</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink
              asChild
              appearance="button"
              variant="success"
            >
              <Link href="/">Success</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink
              asChild
              appearance="outline"
              variant="primary"
            >
              <Link href="/">Primary</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink
              asChild
              appearance="outline"
              variant="danger"
            >
              <Link href="/">Danger</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild appearance="icon">
              <Link href="/" className="icon-github" />
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink
              asChild
              appearance="icon"
              variant="secondary"
            >
              <Link href="/" className="icon-circle-user" />
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>

        <HeaderMobileMainMenu>
          <HeaderMobileMainHead>
            <Title level="h3">Link Appearances</Title>
            <HeaderMobileTopToggle />
          </HeaderMobileMainHead>

          <HeaderMobileMainNav>
            <HeaderMobileMainLink asChild>
              <Link href="/">Default Link</Link>
            </HeaderMobileMainLink>
            <HeaderMobileMainLink asChild>
              <Link href="/">Another Default</Link>
            </HeaderMobileMainLink>
          </HeaderMobileMainNav>

          <HeaderMobileMainNav>
            <HeaderMobileMainLink
              asChild
              appearance="button"
              variant="primary"
            >
              <Link href="/">Button Primary</Link>
            </HeaderMobileMainLink>
            <HeaderMobileMainLink
              asChild
              appearance="button"
              variant="secondary"
            >
              <Link href="/">Button Secondary</Link>
            </HeaderMobileMainLink>
          </HeaderMobileMainNav>

          <HeaderMobileMainNav>
            <HeaderMobileMainLink
              asChild
              appearance="outline"
              variant="primary"
            >
              <Link href="/">Outline Primary</Link>
            </HeaderMobileMainLink>
            <HeaderMobileMainLink
              asChild
              appearance="outline"
              variant="danger"
            >
              <Link href="/">Outline Danger</Link>
            </HeaderMobileMainLink>
          </HeaderMobileMainNav>
        </HeaderMobileMainMenu>
      </HeaderMobile>
    </Header>
  ),
}

export const WithTopBar: Story = {
  render: () => (
    <Header>
      <HeaderDesktop>
        <HeaderDesktopTopMenu>
          <HeaderDesktopTopNav aria-label="main-top-bar">
            <HeaderDesktopTopLink asChild>
              <Link href="/">Aide</Link>
            </HeaderDesktopTopLink>
            <HeaderDesktopTopLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopTopLink>
          </HeaderDesktopTopNav>

          <HeaderDesktopTopNav aria-label="locale-top-bar">
            <HeaderDesktopTopDropdown label="FR">
              <LanguageDropdownContent />
            </HeaderDesktopTopDropdown>
          </HeaderDesktopTopNav>
        </HeaderDesktopTopMenu>

        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild current>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const WithDropdowns: Story = {
  render: () => (
    <Header>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainDropdown label="Produits" current>
              <ProductsDropdownContent />
            </HeaderDesktopMainDropdown>
            <HeaderDesktopMainDropdown label="Services">
              <ProductsDropdownContent />
            </HeaderDesktopMainDropdown>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <Header>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainLogo>

          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainDropdown label="Solutions" mega current>
              <MegaMenuContent />
            </HeaderDesktopMainDropdown>
            <HeaderDesktopMainDropdown label="Produits">
              <ProductsDropdownContent />
            </HeaderDesktopMainDropdown>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopLogo>
            <HeaderLogoContent />
          </HeaderMobileTopLogo>
          <HeaderMobileTopToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const DarkHero: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <Header
        customStyles={{
          desktop: {
            top: {
              dark: { bgColor: 'var(--color-grey-1)', bgOpacity: '0.4' },
            },
            main: {
              dark: { bgColor: 'var(--color-grey-2)', bgOpacity: '0.2' },
            },
          },
          mobile: {
            top: {
              dark: { bgColor: 'var(--color-grey-1)', bgOpacity: '.4' },
            },
            main: {
              dark: { bgColor: 'var(--color-grey-2)' },
            },
          },
        }}
      >
        <HeaderDesktop>
          <HeaderDesktopTopMenu>
            <HeaderDesktopTopNav aria-label="main-top-bar">
              <HeaderDesktopTopLink asChild>
                <Link href="/">Help</Link>
              </HeaderDesktopTopLink>
              <HeaderDesktopTopLink asChild>
                <Link href="/">Contact</Link>
              </HeaderDesktopTopLink>
            </HeaderDesktopTopNav>

            <HeaderDesktopTopNav aria-label="locale-top-bar">
              <HeaderDesktopTopDropdown label="EN">
                <LanguageDropdownContent />
              </HeaderDesktopTopDropdown>
            </HeaderDesktopTopNav>
          </HeaderDesktopTopMenu>

          <HeaderDesktopMainMenu>
            <HeaderDesktopMainLogo>
              <HeaderLogoContent />
            </HeaderDesktopMainLogo>

            <HeaderDesktopMainNav>
              <HeaderDesktopMainLink asChild current>
                <Link href="/" aria-current="page">
                  Home
                </Link>
              </HeaderDesktopMainLink>
              <HeaderDesktopMainLink asChild>
                <Link href="/">Products</Link>
              </HeaderDesktopMainLink>
              <HeaderDesktopMainDropdown label="Solutions">
                <ProductsDropdownContent />
              </HeaderDesktopMainDropdown>
              <HeaderDesktopMainLink asChild>
                <Link href="/">About</Link>
              </HeaderDesktopMainLink>
            </HeaderDesktopMainNav>

            <HeaderButtonsContent />
          </HeaderDesktopMainMenu>
        </HeaderDesktop>

        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopLogo>
              <HeaderLogoContent />
            </HeaderMobileTopLogo>
            <HeaderMobileTopToggle />
          </HeaderMobileTopMenu>

          <MobileMenuContent />
        </HeaderMobile>
      </Header>

      <Banner
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        overlay="dark"
        horizontalAlign="center"
        verticalAlign="center"
        className="h-screen"
      >
        <BannerContent textColor="light" textAlign="center">
          <BannerTitle level="h1">Welcome to Our Platform</BannerTitle>
          <BannerSubtitle className="mt-1 fs-5">
            Experience the future of web development
          </BannerSubtitle>
          <BannerActions className="mt-5">
            <Button appearance="button" variant="primary" contrast>
              Get Started
            </Button>
            <Button appearance="outline" variant="primary" contrast>
              Learn More
            </Button>
          </BannerActions>
        </BannerContent>
      </Banner>

      <Section className="p-8">
        <SectionHeader>
          <SectionTitle level="h2">Below the Fold</SectionTitle>
        </SectionHeader>
        <p>
          Scroll up and down to see the header transition between overlay
          and solid states. The header becomes solid once you scroll past
          the hero section.
        </p>
      </Section>
    </ThemeProvider>
  ),
}

export const LightHero: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <Header
        customStyles={{
          desktop: {
            top: {
              light: { bgColor: 'var(--color-grey-9)', bgOpacity: '0.5' },
            },
            main: {
              light: { bgColor: 'var(--color-white)', bgOpacity: '0.2' },
            },
          },
          mobile: {
            top: {
              light: { bgColor: 'var(--color-white)', bgOpacity: '0.2' },
            },
            main: {
              light: { bgColor: 'var(--color-white)' },
            },
          },
        }}
      >
        <HeaderDesktop>
          <HeaderDesktopTopMenu>
            <HeaderDesktopTopNav aria-label="main-top-bar">
              <HeaderDesktopTopLink asChild>
                <Link href="/">Help</Link>
              </HeaderDesktopTopLink>
              <HeaderDesktopTopLink asChild>
                <Link href="/">Contact</Link>
              </HeaderDesktopTopLink>
            </HeaderDesktopTopNav>

            <HeaderDesktopTopNav aria-label="locale-top-bar">
              <HeaderDesktopTopDropdown label="EN">
                <LanguageDropdownContent />
              </HeaderDesktopTopDropdown>
            </HeaderDesktopTopNav>
          </HeaderDesktopTopMenu>

          <HeaderDesktopMainMenu>
            <HeaderDesktopMainLogo>
              <HeaderLogoContent />
            </HeaderDesktopMainLogo>

            <HeaderDesktopMainNav>
              <HeaderDesktopMainLink asChild current>
                <Link href="/" aria-current="page">
                  Home
                </Link>
              </HeaderDesktopMainLink>
              <HeaderDesktopMainLink asChild>
                <Link href="/">Products</Link>
              </HeaderDesktopMainLink>
              <HeaderDesktopMainDropdown label="Solutions">
                <ProductsDropdownContent />
              </HeaderDesktopMainDropdown>
              <HeaderDesktopMainLink asChild>
                <Link href="/">About</Link>
              </HeaderDesktopMainLink>
            </HeaderDesktopMainNav>

            <HeaderButtonsContent />
          </HeaderDesktopMainMenu>
        </HeaderDesktop>

        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopLogo>
              <HeaderLogoContent />
            </HeaderMobileTopLogo>
            <HeaderMobileTopToggle />
          </HeaderMobileTopMenu>
          <MobileMenuContent />
        </HeaderMobile>
      </Header>

      <Banner
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        overlay="light"
        horizontalAlign="center"
        verticalAlign="center"
        className="h-screen"
      >
        <BannerContent textColor="dark" textAlign="center">
          <BannerTitle level="h1">Welcome to Our Platform</BannerTitle>
          <BannerSubtitle className="mt-1 fs-5">
            Experience the future of web development
          </BannerSubtitle>
          <BannerActions className="mt-5">
            <Button appearance="button" variant="primary">
              Get Started
            </Button>
            <Button appearance="outline" variant="primary">
              Learn More
            </Button>
          </BannerActions>
        </BannerContent>
      </Banner>

      <Section className="p-8">
        <SectionHeader>
          <SectionTitle level="h2">Below the Fold</SectionTitle>
        </SectionHeader>
        <p>
          Scroll up and down to see the header transition between overlay
          and solid states. The header becomes solid once you scroll past
          the hero section.
        </p>
      </Section>
    </ThemeProvider>
  ),
}

export const WithLocale: Story = {
  render: () => {
    const [currentTop, setCurrentTop] = useState('en')
    const [currentMain, setCurrentMain] = useState('fr')
    return (
      <ThemeProvider>
        <Modals>
          <Header>
            <HeaderDesktop>
              <HeaderDesktopTopMenu>
                <HeaderDesktopTopNav aria-label="top-links">
                  <HeaderDesktopTopLink asChild>
                    <Link href="/">Help</Link>
                  </HeaderDesktopTopLink>
                  <HeaderDesktopTopLink asChild>
                    <Link href="/">Contact</Link>
                  </HeaderDesktopTopLink>
                </HeaderDesktopTopNav>

                <HeaderDesktopTopNav aria-label="locale-top">
                  <Locale
                    locales={locales}
                    current={currentTop}
                    onChange={setCurrentTop}
                    section="top"
                  />
                </HeaderDesktopTopNav>
              </HeaderDesktopTopMenu>

              <HeaderDesktopMainMenu>
                <HeaderDesktopMainLogo>
                  <HeaderLogoContent />
                </HeaderDesktopMainLogo>

                <HeaderDesktopMainNav>
                  <HeaderDesktopMainLink asChild current>
                    <Link href="/">Home</Link>
                  </HeaderDesktopMainLink>
                  <HeaderDesktopMainLink asChild>
                    <Link href="/">Products</Link>
                  </HeaderDesktopMainLink>
                  <HeaderDesktopMainLink asChild>
                    <Link href="/">About</Link>
                  </HeaderDesktopMainLink>
                </HeaderDesktopMainNav>

                <HeaderDesktopMainNav>
                  <Locale
                    locales={locales.slice(0, 3)}
                    current={currentMain}
                    onChange={setCurrentMain}
                    section="main"
                    mode="modal"
                  />
                  <ThemeToggle />
                </HeaderDesktopMainNav>
              </HeaderDesktopMainMenu>
            </HeaderDesktop>

            <HeaderMobile>
              <HeaderMobileTopMenu>
                <HeaderMobileTopLogo>
                  <HeaderLogoContent />
                </HeaderMobileTopLogo>
                <HeaderMobileTopToggle />
              </HeaderMobileTopMenu>
              <MobileMenuContent />
            </HeaderMobile>
          </Header>
        </Modals>
      </ThemeProvider>
    )
  },
}

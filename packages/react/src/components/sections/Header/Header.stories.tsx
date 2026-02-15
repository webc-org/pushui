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
import { Button } from '../../form/Button'
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from '../../modules/Banner'
import {
  Header,
  HeaderDesktop,
  HeaderDesktopMainMenu,
  HeaderDesktopMainMenuDropdown,
  HeaderDesktopMainMenuDropdownLink,
  HeaderDesktopMainMenuLink,
  HeaderDesktopMainMenuLogo,
  HeaderDesktopMainMenuNav,
  HeaderDesktopTopMenu,
  HeaderDesktopTopMenuDropdown,
  HeaderDesktopTopMenuDropdownLink,
  HeaderDesktopTopMenuLink,
  HeaderDesktopTopMenuNav,
  HeaderMobile,
  HeaderMobileMainMenu,
  HeaderMobileMainMenuDropdown,
  HeaderMobileMainMenuDropdownLink,
  HeaderMobileMainMenuHead,
  HeaderMobileMainMenuLink,
  HeaderMobileMainMenuNav,
  HeaderMobileTopMenu,
  HeaderMobileTopMenuLogo,
  HeaderMobileTopMenuToggle,
  useHeader,
} from './index'

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-6)' }],
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

// CONTENT

const HeaderLogoContent = () => {
  const { textColor } = useHeader()
  const src =
    textColor === 'light' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" />
    </Logo>
  )
}

const HeaderButtonsContent = ({ contrast }: { contrast?: boolean }) => (
  <HeaderDesktopMainMenuNav>
    <HeaderDesktopMainMenuLink
      asChild
      appearance="outline"
      variant="primary"
      contrast={contrast}
    >
      <Link href="/">Sign In</Link>
    </HeaderDesktopMainMenuLink>

    <HeaderDesktopMainMenuLink
      asChild
      appearance="button"
      variant="primary"
      contrast={contrast}
    >
      <Link href="/">Get Started</Link>
    </HeaderDesktopMainMenuLink>
  </HeaderDesktopMainMenuNav>
)

const HeaderIconsContent = () => {
  return (
    <HeaderDesktopMainMenuNav>
      <HeaderDesktopMainMenuLink
        asChild
        appearance="icon"
        className="icon-github"
      >
        <Link href="/" />
      </HeaderDesktopMainMenuLink>

      <HeaderDesktopMainMenuLink
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
      </HeaderDesktopMainMenuLink>
    </HeaderDesktopMainMenuNav>
  )
}

const ProductsDropdownContent = () => (
  <>
    <HeaderDesktopMainMenuDropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </HeaderDesktopMainMenuDropdownLink>
    <HeaderDesktopMainMenuDropdownLink asChild>
      <Link href="/">Services</Link>
    </HeaderDesktopMainMenuDropdownLink>
    <HeaderDesktopMainMenuDropdownLink asChild>
      <Link href="/">Formations</Link>
    </HeaderDesktopMainMenuDropdownLink>
    <HeaderDesktopMainMenuDropdownLink asChild>
      <Link href="/">Support</Link>
    </HeaderDesktopMainMenuDropdownLink>
  </>
)

const LanguageDropdownContent = () => (
  <>
    <HeaderDesktopTopMenuDropdownLink asChild>
      <Link href="/">Français</Link>
    </HeaderDesktopTopMenuDropdownLink>
    <HeaderDesktopTopMenuDropdownLink asChild>
      <Link href="/">English</Link>
    </HeaderDesktopTopMenuDropdownLink>
    <HeaderDesktopTopMenuDropdownLink asChild>
      <Link href="/">Español</Link>
    </HeaderDesktopTopMenuDropdownLink>
    <HeaderDesktopTopMenuDropdownLink asChild>
      <Link href="/">Deutsch</Link>
    </HeaderDesktopTopMenuDropdownLink>
  </>
)

const MegaMenuContent = () => (
  <Grid col={4} gap={2}>
    <GridItem>
      <Title level="h4">Produits</Title>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </HeaderDesktopMainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Consulting</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Intégration</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </HeaderDesktopMainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Documentation</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">API</Link>
      </HeaderDesktopMainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Free trial</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </HeaderDesktopMainMenuDropdownLink>
      <HeaderDesktopMainMenuDropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </HeaderDesktopMainMenuDropdownLink>
    </GridItem>
  </Grid>
)

const MobileMenuContent = () => (
  <HeaderMobileMainMenu>
    <HeaderMobileMainMenuHead>
      <Title level="h3">Menu</Title>
      <HeaderMobileTopMenuToggle />
    </HeaderMobileMainMenuHead>

    <HeaderMobileMainMenuNav>
      <HeaderMobileMainMenuLink asChild>
        <Link href="/">Accueil</Link>
      </HeaderMobileMainMenuLink>

      <HeaderMobileMainMenuLink asChild>
        <Link href="/">Produits</Link>
      </HeaderMobileMainMenuLink>

      <HeaderMobileMainMenuLink asChild>
        <Link href="/">À propos</Link>
      </HeaderMobileMainMenuLink>

      <HeaderMobileMainMenuDropdown label="Produits">
        <HeaderMobileMainMenuDropdownLink asChild>
          <Link href="/">Logiciels</Link>
        </HeaderMobileMainMenuDropdownLink>
        <HeaderMobileMainMenuDropdownLink asChild>
          <Link href="/">Services</Link>
        </HeaderMobileMainMenuDropdownLink>
        <HeaderMobileMainMenuDropdownLink asChild>
          <Link href="/">Formations</Link>
        </HeaderMobileMainMenuDropdownLink>
      </HeaderMobileMainMenuDropdown>

      <HeaderMobileMainMenuDropdown label="Services">
        <HeaderMobileMainMenuDropdownLink asChild>
          <Link href="/">Consulting</Link>
        </HeaderMobileMainMenuDropdownLink>
        <HeaderMobileMainMenuDropdownLink asChild>
          <Link href="/">Support</Link>
        </HeaderMobileMainMenuDropdownLink>
      </HeaderMobileMainMenuDropdown>
    </HeaderMobileMainMenuNav>

    <HeaderMobileMainMenuNav>
      <HeaderMobileMainMenuLink asChild>
        <Link href="/">Contact</Link>
      </HeaderMobileMainMenuLink>
      <HeaderMobileMainMenuLink asChild>
        <Link href="/">Logiciel A</Link>
      </HeaderMobileMainMenuLink>
      <HeaderMobileMainMenuLink asChild>
        <Link href="/">Logiciel B</Link>
      </HeaderMobileMainMenuLink>
    </HeaderMobileMainMenuNav>

    <HeaderMobileMainMenuNav>
      <HeaderMobileMainMenuLink
        asChild
        appearance="outline"
        variant="primary"
      >
        <Link href="/">Connexion</Link>
      </HeaderMobileMainMenuLink>
      <HeaderMobileMainMenuLink
        asChild
        appearance="button"
        variant="primary"
      >
        <Link href="/">Inscription</Link>
      </HeaderMobileMainMenuLink>
    </HeaderMobileMainMenuNav>
  </HeaderMobileMainMenu>
)

// STORIES

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderDesktop>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild current>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderIconsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
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
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild current>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
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
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Default</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild variant="primary">
              <Link href="/">Primary</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild variant="secondary">
              <Link href="/">Secondary</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="button"
              variant="primary"
            >
              <Link href="/">Primary</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="button"
              variant="secondary"
            >
              <Link href="/">Secondary</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="button"
              variant="success"
            >
              <Link href="/">Success</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="outline"
              variant="primary"
            >
              <Link href="/">Primary</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="outline"
              variant="danger"
            >
              <Link href="/">Danger</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild appearance="icon">
              <Link href="/" className="icon-github" />
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink
              asChild
              appearance="icon"
              variant="secondary"
            >
              <Link href="/" className="icon-circle-user" />
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
        </HeaderMobileTopMenu>

        <HeaderMobileMainMenu>
          <HeaderMobileMainMenuHead>
            <Title level="h3">Link Appearances</Title>
            <HeaderMobileTopMenuToggle />
          </HeaderMobileMainMenuHead>

          <HeaderMobileMainMenuNav>
            <HeaderMobileMainMenuLink asChild>
              <Link href="/">Default Link</Link>
            </HeaderMobileMainMenuLink>
            <HeaderMobileMainMenuLink asChild>
              <Link href="/">Another Default</Link>
            </HeaderMobileMainMenuLink>
          </HeaderMobileMainMenuNav>

          <HeaderMobileMainMenuNav>
            <HeaderMobileMainMenuLink
              asChild
              appearance="button"
              variant="primary"
            >
              <Link href="/">Button Primary</Link>
            </HeaderMobileMainMenuLink>
            <HeaderMobileMainMenuLink
              asChild
              appearance="button"
              variant="secondary"
            >
              <Link href="/">Button Secondary</Link>
            </HeaderMobileMainMenuLink>
          </HeaderMobileMainMenuNav>

          <HeaderMobileMainMenuNav>
            <HeaderMobileMainMenuLink
              asChild
              appearance="outline"
              variant="primary"
            >
              <Link href="/">Outline Primary</Link>
            </HeaderMobileMainMenuLink>
            <HeaderMobileMainMenuLink
              asChild
              appearance="outline"
              variant="danger"
            >
              <Link href="/">Outline Danger</Link>
            </HeaderMobileMainMenuLink>
          </HeaderMobileMainMenuNav>
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
          <HeaderDesktopTopMenuNav aria-label="main-top-bar">
            <HeaderDesktopTopMenuLink asChild>
              <Link href="/">Aide</Link>
            </HeaderDesktopTopMenuLink>
            <HeaderDesktopTopMenuLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopTopMenuLink>
          </HeaderDesktopTopMenuNav>

          <HeaderDesktopTopMenuNav aria-label="locale-top-bar">
            <HeaderDesktopTopMenuDropdown label="FR">
              <LanguageDropdownContent />
            </HeaderDesktopTopMenuDropdown>
          </HeaderDesktopTopMenuNav>
        </HeaderDesktopTopMenu>

        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild current>
              <Link href="/" aria-current="page">
                Accueil
              </Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Produits</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">À propos</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
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
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuDropdown label="Produits" current>
              <ProductsDropdownContent />
            </HeaderDesktopMainMenuDropdown>
            <HeaderDesktopMainMenuDropdown label="Services">
              <ProductsDropdownContent />
            </HeaderDesktopMainMenuDropdown>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
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
          <HeaderDesktopMainMenuLogo>
            <HeaderLogoContent />
          </HeaderDesktopMainMenuLogo>

          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Accueil</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuDropdown label="Solutions" mega current>
              <MegaMenuContent />
            </HeaderDesktopMainMenuDropdown>
            <HeaderDesktopMainMenuDropdown label="Produits">
              <ProductsDropdownContent />
            </HeaderDesktopMainMenuDropdown>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Contact</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>

          <HeaderButtonsContent />
        </HeaderDesktopMainMenu>
      </HeaderDesktop>

      <HeaderMobile>
        <HeaderMobileTopMenu>
          <HeaderMobileTopMenuLogo>
            <HeaderLogoContent />
          </HeaderMobileTopMenuLogo>
          <HeaderMobileTopMenuToggle />
        </HeaderMobileTopMenu>
        <MobileMenuContent />
      </HeaderMobile>
    </Header>
  ),
}

export const DarkHero: Story = {
  render: () => (
    <>
      <Header
        isOverlay
        textColor="light"
        desktop={{
          top: { bgColor: '#111', bgOpacity: '0.4' },
          main: { bgColor: '#222', bgOpacity: '0.2' },
        }}
        mobile={{
          top: { bgColor: '#222', bgOpacity: '1' },
        }}
      >
        <HeaderDesktop>
          <HeaderDesktopTopMenu>
            <HeaderDesktopTopMenuNav aria-label="main-top-bar">
              <HeaderDesktopTopMenuLink asChild>
                <Link href="/">Help</Link>
              </HeaderDesktopTopMenuLink>
              <HeaderDesktopTopMenuLink asChild>
                <Link href="/">Contact</Link>
              </HeaderDesktopTopMenuLink>
            </HeaderDesktopTopMenuNav>

            <HeaderDesktopTopMenuNav aria-label="locale-top-bar">
              <HeaderDesktopTopMenuDropdown label="EN">
                <LanguageDropdownContent />
              </HeaderDesktopTopMenuDropdown>
            </HeaderDesktopTopMenuNav>
          </HeaderDesktopTopMenu>

          <HeaderDesktopMainMenu>
            <HeaderDesktopMainMenuLogo>
              <HeaderLogoContent />
            </HeaderDesktopMainMenuLogo>

            <HeaderDesktopMainMenuNav>
              <HeaderDesktopMainMenuLink asChild current>
                <Link href="/" aria-current="page">
                  Home
                </Link>
              </HeaderDesktopMainMenuLink>
              <HeaderDesktopMainMenuLink asChild>
                <Link href="/">Products</Link>
              </HeaderDesktopMainMenuLink>
              <HeaderDesktopMainMenuDropdown label="Solutions">
                <ProductsDropdownContent />
              </HeaderDesktopMainMenuDropdown>
              <HeaderDesktopMainMenuLink asChild>
                <Link href="/">About</Link>
              </HeaderDesktopMainMenuLink>
            </HeaderDesktopMainMenuNav>

            <HeaderButtonsContent contrast />
          </HeaderDesktopMainMenu>
        </HeaderDesktop>

        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuLogo>
              <HeaderLogoContent />
            </HeaderMobileTopMenuLogo>
            <HeaderMobileTopMenuToggle />
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
    </>
  ),
}

export const LightHero: Story = {
  render: () => (
    <>
      <Header
        isOverlay
        textColor="dark"
        desktop={{
          top: { bgColor: 'var(--color-grey-7)', bgOpacity: '0.5' },
          main: { bgColor: 'var(--color-white)', bgOpacity: '0.2' },
        }}
        mobile={{
          top: { bgColor: 'var(--color-white)', bgOpacity: '1' },
        }}
      >
        <HeaderDesktop>
          <HeaderDesktopTopMenu>
            <HeaderDesktopTopMenuNav aria-label="main-top-bar">
              <HeaderDesktopTopMenuLink asChild>
                <Link href="/">Help</Link>
              </HeaderDesktopTopMenuLink>
              <HeaderDesktopTopMenuLink asChild>
                <Link href="/">Contact</Link>
              </HeaderDesktopTopMenuLink>
            </HeaderDesktopTopMenuNav>

            <HeaderDesktopTopMenuNav aria-label="locale-top-bar">
              <HeaderDesktopTopMenuDropdown label="EN">
                <LanguageDropdownContent />
              </HeaderDesktopTopMenuDropdown>
            </HeaderDesktopTopMenuNav>
          </HeaderDesktopTopMenu>

          <HeaderDesktopMainMenu>
            <HeaderDesktopMainMenuLogo>
              <HeaderLogoContent />
            </HeaderDesktopMainMenuLogo>

            <HeaderDesktopMainMenuNav>
              <HeaderDesktopMainMenuLink asChild current>
                <Link href="/" aria-current="page">
                  Home
                </Link>
              </HeaderDesktopMainMenuLink>
              <HeaderDesktopMainMenuLink asChild>
                <Link href="/">Products</Link>
              </HeaderDesktopMainMenuLink>
              <HeaderDesktopMainMenuDropdown label="Solutions">
                <ProductsDropdownContent />
              </HeaderDesktopMainMenuDropdown>
              <HeaderDesktopMainMenuLink asChild>
                <Link href="/">About</Link>
              </HeaderDesktopMainMenuLink>
            </HeaderDesktopMainMenuNav>

            <HeaderButtonsContent />
          </HeaderDesktopMainMenu>
        </HeaderDesktop>

        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuLogo>
              <HeaderLogoContent />
            </HeaderMobileTopMenuLogo>
            <HeaderMobileTopMenuToggle />
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
    </>
  ),
}

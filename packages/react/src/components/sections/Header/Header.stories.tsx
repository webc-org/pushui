import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
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
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from '../../modules/Banner'
import {
  HeaderMobileRoot,
  HeaderRoot,
  MainMenu,
  MainMenuDropdown,
  MainMenuDropdownLink,
  MainMenuLink,
  MainMenuLogo,
  MainMenuNav,
  MobileMainMenu,
  MobileMainMenuDropdown,
  MobileMainMenuDropdownLink,
  MobileMainMenuLink,
  MobileMainMenuNav,
  MobileMainMenuTop,
  MobileTopMenu,
  MobileTopMenuLogo,
  MobileTopMenuToggle,
  TopMenu,
  TopMenuDropdown,
  TopMenuDropdownLink,
  TopMenuLink,
  TopMenuNav,
  useHeader,
} from './index'

function HeaderLogo() {
  const { textColor } = useHeader()
  const src =
    textColor === 'light' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" />
    </Logo>
  )
}

function HeaderActions({ button }: { button?: boolean }) {
  const { textColor } = useHeader()
  const contrast = textColor === 'light'

  return button ? (
    <MainMenuNav>
      <Button appearance="outline" variant="primary" contrast={contrast}>
        Sign In
      </Button>

      <Button appearance="button" variant="primary" contrast={contrast}>
        Get Started
      </Button>
    </MainMenuNav>
  ) : (
    <MainMenuNav>
      <MainMenuLink asChild icon>
        <Link href="/" appearance="icon" className="icon-github" />
      </MainMenuLink>

      <MainMenuLink asChild icon>
        <Link
          href="/"
          appearance="icon"
          variant="secondary"
          className="icon-circle-user"
        />
      </MainMenuLink>
    </MainMenuNav>
  )
}

const meta: Meta<typeof HeaderRoot> = {
  title: 'Sections/Header',
  component: HeaderRoot,
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
type Story = StoryObj<typeof HeaderRoot>

const ProductsDropdown = () => (
  <div>
    <MainMenuDropdownLink asChild>
      <Link href="/">Logiciels</Link>
    </MainMenuDropdownLink>
    <MainMenuDropdownLink asChild>
      <Link href="/">Services</Link>
    </MainMenuDropdownLink>
    <MainMenuDropdownLink asChild>
      <Link href="/">Formations</Link>
    </MainMenuDropdownLink>
    <MainMenuDropdownLink asChild>
      <Link href="/">Support</Link>
    </MainMenuDropdownLink>
  </div>
)

const LanguageDropdownContent = () => (
  <>
    <TopMenuDropdownLink asChild>
      <Link href="/">Français</Link>
    </TopMenuDropdownLink>
    <TopMenuDropdownLink asChild>
      <Link href="/">English</Link>
    </TopMenuDropdownLink>
    <TopMenuDropdownLink asChild>
      <Link href="/">Español</Link>
    </TopMenuDropdownLink>
    <TopMenuDropdownLink asChild>
      <Link href="/">Deutsch</Link>
    </TopMenuDropdownLink>
  </>
)

const MegaMenuContent = () => (
  <Grid col={4} gap={2}>
    <GridItem>
      <Title level="h4">Produits</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/">Logiciel A</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Logiciel B</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Application Mobile</Link>
      </MainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Services</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/">Consulting</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Intégration</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Maintenance</Link>
      </MainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Ressources</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/">Documentation</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Tutoriels</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">API</Link>
      </MainMenuDropdownLink>
    </GridItem>
    <GridItem>
      <Title level="h4">Get started</Title>
      <MainMenuDropdownLink asChild>
        <Link href="/">Free trial</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Book a demo</Link>
      </MainMenuDropdownLink>
      <MainMenuDropdownLink asChild>
        <Link href="/">Contact sales</Link>
      </MainMenuDropdownLink>
    </GridItem>
  </Grid>
)

const MobileMenuContent = () => (
  <MobileMainMenu>
    <MobileMainMenuTop>
      <Title level="h3">Menu</Title>
      <MobileTopMenuToggle />
    </MobileMainMenuTop>

    <MobileMainMenuNav>
      <MobileMainMenuLink asChild>
        <Link href="/">Accueil</Link>
      </MobileMainMenuLink>

      <MobileMainMenuLink asChild>
        <Link href="/">Produits</Link>
      </MobileMainMenuLink>

      <MobileMainMenuLink asChild>
        <Link href="/">À propos</Link>
      </MobileMainMenuLink>

      <MobileMainMenuDropdown label="Produits">
        <MobileMainMenuDropdownLink asChild>
          <Link href="/">Logiciels</Link>
        </MobileMainMenuDropdownLink>
        <MobileMainMenuDropdownLink asChild>
          <Link href="/">Services</Link>
        </MobileMainMenuDropdownLink>
        <MobileMainMenuDropdownLink asChild>
          <Link href="/">Formations</Link>
        </MobileMainMenuDropdownLink>
      </MobileMainMenuDropdown>

      <MobileMainMenuDropdown label="Services">
        <MobileMainMenuDropdownLink asChild>
          <Link href="/">Consulting</Link>
        </MobileMainMenuDropdownLink>
        <MobileMainMenuDropdownLink asChild>
          <Link href="/">Support</Link>
        </MobileMainMenuDropdownLink>
      </MobileMainMenuDropdown>
    </MobileMainMenuNav>

    <MobileMainMenuNav>
      <MobileMainMenuLink asChild>
        <Link href="/">Contact</Link>
      </MobileMainMenuLink>
      <MobileMainMenuLink asChild>
        <Link href="/">Logiciel A</Link>
      </MobileMainMenuLink>
      <MobileMainMenuLink asChild>
        <Link href="/">Logiciel B</Link>
      </MobileMainMenuLink>
    </MobileMainMenuNav>

    <MobileMainMenuNav>
      <Link appearance="outline" variant="primary">
        Connexion
      </Link>
      <Link appearance="button" variant="primary">
        Inscription
      </Link>
    </MobileMainMenuNav>
  </MobileMainMenu>
)

export const Default: Story = {
  render: (args) => (
    <HeaderRoot {...args}>
      <MainMenu>
        <MainMenuLogo>
          <HeaderLogo />
        </MainMenuLogo>

        <MainMenuNav>
          <MainMenuLink asChild current>
            <Link href="/" aria-current="page">
              Accueil
            </Link>
          </MainMenuLink>
          <MainMenuLink asChild>
            <Link href="/">Produits</Link>
          </MainMenuLink>
          <MainMenuLink asChild>
            <Link href="/">À propos</Link>
          </MainMenuLink>
          <MainMenuLink asChild>
            <Link href="/">Contact</Link>
          </MainMenuLink>
        </MainMenuNav>

        <HeaderActions />
      </MainMenu>

      <HeaderMobileRoot>
        <MobileTopMenu>
          <MobileTopMenuLogo>
            <HeaderLogo />
          </MobileTopMenuLogo>
          <MobileTopMenuToggle />
        </MobileTopMenu>
        <MobileMenuContent />
      </HeaderMobileRoot>
    </HeaderRoot>
  ),
}

export const WithTopBar: Story = {
  render: () => (
    <HeaderRoot>
      <TopMenu>
        <TopMenuNav aria-label="main-top-bar">
          <TopMenuLink asChild>
            <Link href="/">Aide</Link>
          </TopMenuLink>
          <TopMenuLink asChild>
            <Link href="/">Contact</Link>
          </TopMenuLink>
        </TopMenuNav>

        <TopMenuNav aria-label="locale-top-bar">
          <TopMenuDropdown label="FR">
            <LanguageDropdownContent />
          </TopMenuDropdown>
        </TopMenuNav>
      </TopMenu>

      <MainMenu>
        <MainMenuLogo>
          <HeaderLogo />
        </MainMenuLogo>

        <MainMenuNav>
          <MainMenuLink asChild current>
            <Link href="/" aria-current="page">
              Accueil
            </Link>
          </MainMenuLink>
          <MainMenuLink asChild>
            <Link href="/">Produits</Link>
          </MainMenuLink>
          <MainMenuLink asChild>
            <Link href="/">À propos</Link>
          </MainMenuLink>
        </MainMenuNav>

        <HeaderActions />
      </MainMenu>

      <HeaderMobileRoot>
        <MobileTopMenu>
          <MobileTopMenuLogo>
            <HeaderLogo />
          </MobileTopMenuLogo>
          <MobileTopMenuToggle />
        </MobileTopMenu>
        <MobileMenuContent />
      </HeaderMobileRoot>
    </HeaderRoot>
  ),
}

export const WithDropdowns: Story = {
  render: () => (
    <HeaderRoot>
      <MainMenu>
        <MainMenuLogo>
          <HeaderLogo />
        </MainMenuLogo>

        <MainMenuNav>
          <MainMenuLink asChild>
            <Link href="/">Accueil</Link>
          </MainMenuLink>
          <MainMenuDropdown label="Produits" current>
            <ProductsDropdown />
          </MainMenuDropdown>
          <MainMenuDropdown label="Services">
            <ProductsDropdown />
          </MainMenuDropdown>
          <MainMenuLink asChild>
            <Link href="/">Contact</Link>
          </MainMenuLink>
        </MainMenuNav>

        <HeaderActions />
      </MainMenu>

      <HeaderMobileRoot>
        <MobileTopMenu>
          <MobileTopMenuLogo>
            <HeaderLogo />
          </MobileTopMenuLogo>
          <MobileTopMenuToggle />
        </MobileTopMenu>
        <MobileMenuContent />
      </HeaderMobileRoot>
    </HeaderRoot>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <HeaderRoot>
      <MainMenu>
        <MainMenuLogo>
          <HeaderLogo />
        </MainMenuLogo>

        <MainMenuNav>
          <MainMenuLink asChild>
            <Link href="/">Accueil</Link>
          </MainMenuLink>
          <MainMenuDropdown label="Solutions" mega current>
            <MegaMenuContent />
          </MainMenuDropdown>
          <MainMenuDropdown label="Produits">
            <ProductsDropdown />
          </MainMenuDropdown>
          <MainMenuLink asChild>
            <Link href="/">Contact</Link>
          </MainMenuLink>
        </MainMenuNav>

        <HeaderActions />
      </MainMenu>

      <HeaderMobileRoot>
        <MobileTopMenu>
          <MobileTopMenuLogo>
            <HeaderLogo />
          </MobileTopMenuLogo>
          <MobileTopMenuToggle />
        </MobileTopMenu>
        <MobileMenuContent />
      </HeaderMobileRoot>
    </HeaderRoot>
  ),
}

export const DarkHero: Story = {
  render: () => (
    <>
      <HeaderRoot isOverlay textColor="light">
        <TopMenu bgColor="#111" bgOpacity="0.2" textColor="light">
          <TopMenuNav aria-label="main-top-bar">
            <TopMenuLink asChild>
              <Link href="/">Help</Link>
            </TopMenuLink>
            <TopMenuLink asChild>
              <Link href="/">Contact</Link>
            </TopMenuLink>
          </TopMenuNav>

          <TopMenuNav aria-label="locale-top-bar">
            <TopMenuDropdown label="EN">
              <LanguageDropdownContent />
            </TopMenuDropdown>
          </TopMenuNav>
        </TopMenu>

        <MainMenu bgColor="#222" bgOpacity="0.2" textColor="light">
          <MainMenuLogo>
            <HeaderLogo />
          </MainMenuLogo>

          <MainMenuNav>
            <MainMenuLink asChild current>
              <Link href="/" aria-current="page">
                Home
              </Link>
            </MainMenuLink>
            <MainMenuLink asChild>
              <Link href="/">Products</Link>
            </MainMenuLink>
            <MainMenuDropdown label="Solutions">
              <ProductsDropdown />
            </MainMenuDropdown>
            <MainMenuLink asChild>
              <Link href="/">About</Link>
            </MainMenuLink>
          </MainMenuNav>

          <HeaderActions />
        </MainMenu>

        <HeaderMobileRoot>
          <MobileTopMenu bgColor="#222" bgOpacity="1" textColor="light">
            <MobileTopMenuLogo>
              <HeaderLogo />
            </MobileTopMenuLogo>
            <MobileTopMenuToggle />
          </MobileTopMenu>
          <MobileMenuContent />
        </HeaderMobileRoot>
      </HeaderRoot>

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
            <Button appearance="outline" variant="default" contrast>
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
  parameters: {
    layout: 'fullscreen',
  },
}

export const LightHero: Story = {
  render: () => (
    <>
      <HeaderRoot isOverlay textColor="dark">
        <TopMenu
          bgColor="var(--color-grey-7)"
          bgOpacity="0.5"
          textColor="dark"
        >
          <TopMenuNav aria-label="main-top-bar">
            <TopMenuLink asChild>
              <Link href="/">Help</Link>
            </TopMenuLink>
            <TopMenuLink asChild>
              <Link href="/">Contact</Link>
            </TopMenuLink>
          </TopMenuNav>

          <TopMenuNav aria-label="locale-top-bar">
            <TopMenuDropdown label="EN">
              <LanguageDropdownContent />
            </TopMenuDropdown>
          </TopMenuNav>
        </TopMenu>

        <MainMenu
          bgColor="var(--color-white)"
          bgOpacity="0.2"
          textColor="dark"
        >
          <MainMenuLogo>
            <HeaderLogo />
          </MainMenuLogo>

          <MainMenuNav>
            <MainMenuLink asChild current>
              <Link href="/" aria-current="page">
                Home
              </Link>
            </MainMenuLink>
            <MainMenuLink asChild>
              <Link href="/">Products</Link>
            </MainMenuLink>
            <MainMenuDropdown label="Solutions">
              <ProductsDropdown />
            </MainMenuDropdown>
            <MainMenuLink asChild>
              <Link href="/">About</Link>
            </MainMenuLink>
          </MainMenuNav>

          <HeaderActions />
        </MainMenu>

        <HeaderMobileRoot>
          <MobileTopMenu
            bgColor="var(--color-white)"
            bgOpacity="1"
            textColor="dark"
          >
            <MobileTopMenuLogo>
              <HeaderLogo />
            </MobileTopMenuLogo>
            <MobileTopMenuToggle />
          </MobileTopMenu>
          <MobileMenuContent />
        </HeaderMobileRoot>
      </HeaderRoot>

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
  parameters: {
    layout: 'fullscreen',
  },
}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem, Image, Link, Logo, Title } from 'components'
import { useTheme } from 'utils'
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
  HeaderSearch,
  Locale,
  ThemeSwitch,
  ThemeToggle,
} from './index'
import type { SearchResultTypes } from '../../form/Search/Search.types'

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--theme-bg-2)' }],
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

const HeaderLogoContent = () => {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/pushui_white.svg' : '/pushui_black.svg'
  return (
    <Logo href="/">
      <Image src={src} alt="Push UI" />
    </Logo>
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

const Variants = () => {
  const [currentLocale, setCurrentLocale] = useState('en')
  const [results, setResults] = useState<SearchResultTypes[]>([])
  const mockResults: SearchResultTypes[] = [
    { id: 1, label: 'Getting started' },
    { id: 2, label: 'Installation guide' },
    { id: 3, label: 'API reference' },
    { id: 4, label: 'Component library' },
  ]
  const handleSearch = (query: string) => {
    setResults(
      mockResults.filter((r) =>
        r.label.toLowerCase().includes(query.toLowerCase())
      )
    )
  }
  return (
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
            <HeaderDesktopTopNav aria-label="top-locale">
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
            <HeaderDesktopMainNav>
              <HeaderSearch onSearch={handleSearch} results={results} />
              <Locale
                locales={locales}
                current={currentLocale}
                onChange={setCurrentLocale}
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
  )
}

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

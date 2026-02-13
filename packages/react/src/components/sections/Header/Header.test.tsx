import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { Link } from 'base/Link'
import { Button } from 'form/Button'
import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  Header,
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
  HeaderMobileMainMenuLink,
  HeaderMobileTopMenu,
  HeaderMobileTopMenuToggle,
} from './index'

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders top bar', () => {
    render(
      <Header>
        <HeaderDesktopTopMenu>
          <HeaderDesktopTopMenuNav>
            <HeaderDesktopTopMenuLink asChild>
              <Link href="#">Help</Link>
            </HeaderDesktopTopMenuLink>
          </HeaderDesktopTopMenuNav>
        </HeaderDesktopTopMenu>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders top bar item with dropdown', () => {
    render(
      <Header>
        <HeaderDesktopTopMenu>
          <HeaderDesktopTopMenuNav>
            <HeaderDesktopTopMenuDropdown label="Language">
              <HeaderDesktopTopMenuDropdownLink asChild>
                <Link href="#">Option 1</Link>
              </HeaderDesktopTopMenuDropdownLink>
              <HeaderDesktopTopMenuDropdownLink asChild>
                <Link href="#">Option 2</Link>
              </HeaderDesktopTopMenuDropdownLink>
            </HeaderDesktopTopMenuDropdown>
          </HeaderDesktopTopMenuNav>
        </HeaderDesktopTopMenu>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )

    const trigger = screen.getByText('Language').closest('button')!
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Use fireEvent to avoid mouseenter triggering first
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders nav with aria-label', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuNav aria-label="Main menu">
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Home</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>
        </HeaderDesktopMainMenu>
      </Header>
    )
    const nav = document.querySelector('nav[aria-label="Main menu"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/">Home</Link>
            </HeaderDesktopMainMenuLink>
            <HeaderDesktopMainMenuLink asChild>
              <Link href="/about">About</Link>
            </HeaderDesktopMainMenuLink>
          </HeaderDesktopMainMenuNav>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders actions', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuNav>
            <Button>Login</Button>
          </HeaderDesktopMainMenuNav>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainMenuLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileMainMenuLink>
          </HeaderMobileMainMenu>
        </HeaderMobile>
      </Header>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile toggle has aria-controls', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>Menu</HeaderMobileMainMenu>
        </HeaderMobile>
      </Header>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    const menuId = toggle.getAttribute('aria-controls')
    expect(menuId).toBeTruthy()
    expect(document.getElementById(menuId!)).toBeInTheDocument()
  })

  it('dropdown has aria-haspopup and aria-expanded', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuNav>
            <HeaderDesktopMainMenuDropdown label="Products">
              <HeaderDesktopMainMenuDropdownLink asChild>
                <Link href="#">Option</Link>
              </HeaderDesktopMainMenuDropdownLink>
            </HeaderDesktopMainMenuDropdown>
          </HeaderDesktopMainMenuNav>
        </HeaderDesktopMainMenu>
      </Header>
    )

    const trigger = screen.getByText('Products').closest('button')!
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Use fireEvent to avoid mouseenter triggering first
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands mobile nav item', async () => {
    const user = userEvent.setup()
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainMenuDropdown label="Products">
              <div>
                <HeaderMobileMainMenuDropdownLink asChild>
                  <Link href="#">Software</Link>
                </HeaderMobileMainMenuDropdownLink>
              </div>
            </HeaderMobileMainMenuDropdown>
          </HeaderMobileMainMenu>
        </HeaderMobile>
      </Header>
    )

    await user.click(screen.getByTestId('mobile-toggle'))

    const expandButton = screen.getByText('Products').closest('button')!
    expect(expandButton).toHaveAttribute('aria-expanded', 'false')
    expect(expandButton).toHaveAttribute('aria-controls')

    await user.click(expandButton)
    expect(expandButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu on Escape', async () => {
    const user = userEvent.setup()
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopMenuToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainMenuLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileMainMenuLink>
          </HeaderMobileMainMenu>
        </HeaderMobile>
      </Header>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(
      <Header ref={ref}>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainMenuLogo>Logo</HeaderDesktopMainMenuLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

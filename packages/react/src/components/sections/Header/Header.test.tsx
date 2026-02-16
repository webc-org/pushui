import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { Link } from 'base/Link'
import { Button } from 'form/Button'
import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  Header,
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
  HeaderMobileMainLink,
  HeaderMobileMainMenu,
  HeaderMobileTopMenu,
  HeaderMobileTopToggle,
} from './index'

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <Header>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders top bar', () => {
    render(
      <Header>
        <HeaderDesktopTopMenu>
          <HeaderDesktopTopNav>
            <HeaderDesktopTopLink asChild>
              <Link href="#">Help</Link>
            </HeaderDesktopTopLink>
          </HeaderDesktopTopNav>
        </HeaderDesktopTopMenu>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders top bar item with dropdown', () => {
    render(
      <Header>
        <HeaderDesktopTopMenu>
          <HeaderDesktopTopNav>
            <HeaderDesktopTopDropdown label="Language">
              <HeaderDesktopTopDropdownLink asChild>
                <Link href="#">Option 1</Link>
              </HeaderDesktopTopDropdownLink>
              <HeaderDesktopTopDropdownLink asChild>
                <Link href="#">Option 2</Link>
              </HeaderDesktopTopDropdownLink>
            </HeaderDesktopTopDropdown>
          </HeaderDesktopTopNav>
        </HeaderDesktopTopMenu>
        <HeaderDesktopMainMenu>
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
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
          <HeaderDesktopMainNav aria-label="Main menu">
            <HeaderDesktopMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>
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
          <HeaderDesktopMainNav>
            <HeaderDesktopMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderDesktopMainLink>
            <HeaderDesktopMainLink asChild>
              <Link href="/about">About</Link>
            </HeaderDesktopMainLink>
          </HeaderDesktopMainNav>
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
          <HeaderDesktopMainNav>
            <Button>Login</Button>
          </HeaderDesktopMainNav>
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
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileMainLink>
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
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopToggle data-testid="mobile-toggle" />
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
          <HeaderDesktopMainNav>
            <HeaderDesktopMainDropdown label="Products">
              <HeaderDesktopMainDropdownLink asChild>
                <Link href="#">Option</Link>
              </HeaderDesktopMainDropdownLink>
            </HeaderDesktopMainDropdown>
          </HeaderDesktopMainNav>
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
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainDropdown label="Products">
              <div>
                <HeaderMobileMainDropdownLink asChild>
                  <Link href="#">Software</Link>
                </HeaderMobileMainDropdownLink>
              </div>
            </HeaderMobileMainDropdown>
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
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
        <HeaderMobile>
          <HeaderMobileTopMenu>
            <HeaderMobileTopToggle data-testid="mobile-toggle" />
          </HeaderMobileTopMenu>
          <HeaderMobileMainMenu>
            <HeaderMobileMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileMainLink>
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
          <HeaderDesktopMainLogo>Logo</HeaderDesktopMainLogo>
        </HeaderDesktopMainMenu>
      </Header>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

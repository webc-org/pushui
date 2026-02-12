import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { Link } from 'base/Link'
import { Button } from 'form/Button'
import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
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
  MobileTopMenu,
  MobileTopMenuToggle,
  TopMenu,
  TopMenuDropdown,
  TopMenuDropdownLink,
  TopMenuLink,
  TopMenuNav,
} from './index'

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
      </HeaderRoot>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders top bar', () => {
    render(
      <HeaderRoot>
        <TopMenu>
          <TopMenuNav>
            <TopMenuLink asChild>
              <Link href="#">Help</Link>
            </TopMenuLink>
          </TopMenuNav>
        </TopMenu>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
      </HeaderRoot>
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders top bar item with dropdown', () => {
    render(
      <HeaderRoot>
        <TopMenu>
          <TopMenuNav>
            <TopMenuDropdown label="Language">
              <TopMenuDropdownLink asChild>
                <Link href="#">Option 1</Link>
              </TopMenuDropdownLink>
              <TopMenuDropdownLink asChild>
                <Link href="#">Option 2</Link>
              </TopMenuDropdownLink>
            </TopMenuDropdown>
          </TopMenuNav>
        </TopMenu>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
      </HeaderRoot>
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
      <HeaderRoot>
        <MainMenu>
          <MainMenuNav aria-label="Main menu">
            <MainMenuLink asChild>
              <Link href="/">Home</Link>
            </MainMenuLink>
          </MainMenuNav>
        </MainMenu>
      </HeaderRoot>
    )
    const nav = document.querySelector('nav[aria-label="Main menu"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuNav>
            <MainMenuLink asChild>
              <Link href="/">Home</Link>
            </MainMenuLink>
            <MainMenuLink asChild>
              <Link href="/about">About</Link>
            </MainMenuLink>
          </MainMenuNav>
        </MainMenu>
      </HeaderRoot>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders actions', () => {
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuNav>
            <Button>Login</Button>
          </MainMenuNav>
        </MainMenu>
      </HeaderRoot>
    )
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
        <HeaderMobileRoot>
          <MobileTopMenu>
            <MobileTopMenuToggle data-testid="mobile-toggle" />
          </MobileTopMenu>
          <MobileMainMenu>
            <MobileMainMenuLink asChild>
              <Link href="/">Home</Link>
            </MobileMainMenuLink>
          </MobileMainMenu>
        </HeaderMobileRoot>
      </HeaderRoot>
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
      <HeaderRoot>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
        <HeaderMobileRoot>
          <MobileTopMenu>
            <MobileTopMenuToggle data-testid="mobile-toggle" />
          </MobileTopMenu>
          <MobileMainMenu>Menu</MobileMainMenu>
        </HeaderMobileRoot>
      </HeaderRoot>
    )

    const toggle = screen.getByTestId('mobile-toggle')
    const menuId = toggle.getAttribute('aria-controls')
    expect(menuId).toBeTruthy()
    expect(document.getElementById(menuId!)).toBeInTheDocument()
  })

  it('dropdown has aria-haspopup and aria-expanded', () => {
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuNav>
            <MainMenuDropdown label="Products">
              <MainMenuDropdownLink asChild>
                <Link href="#">Option</Link>
              </MainMenuDropdownLink>
            </MainMenuDropdown>
          </MainMenuNav>
        </MainMenu>
      </HeaderRoot>
    )

    const trigger = screen.getByText('Products').closest('button')!
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Use fireEvent to avoid mouseenter triggering first
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands mobile nav item', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
        <HeaderMobileRoot>
          <MobileTopMenu>
            <MobileTopMenuToggle data-testid="mobile-toggle" />
          </MobileTopMenu>
          <MobileMainMenu>
            <MobileMainMenuDropdown label="Products">
              <div>
                <MobileMainMenuDropdownLink asChild>
                  <Link href="#">Software</Link>
                </MobileMainMenuDropdownLink>
              </div>
            </MobileMainMenuDropdown>
          </MobileMainMenu>
        </HeaderMobileRoot>
      </HeaderRoot>
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
      <HeaderRoot>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
        <HeaderMobileRoot>
          <MobileTopMenu>
            <MobileTopMenuToggle data-testid="mobile-toggle" />
          </MobileTopMenu>
          <MobileMainMenu>
            <MobileMainMenuLink asChild>
              <Link href="/">Home</Link>
            </MobileMainMenuLink>
          </MobileMainMenu>
        </HeaderMobileRoot>
      </HeaderRoot>
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
      <HeaderRoot ref={ref}>
        <MainMenu>
          <MainMenuLogo>Logo</MainMenuLogo>
        </MainMenu>
      </HeaderRoot>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

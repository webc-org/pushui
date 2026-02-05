import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { Link } from 'base/Link'
import { Button } from 'form/Button'
import { fireEvent, render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  HeaderMain,
  HeaderMainDropdown,
  HeaderMainDropdownLink,
  HeaderMainLink,
  HeaderMainLogo,
  HeaderMainNav,
  HeaderMobile,
  HeaderMobileBar,
  HeaderMobileDropdown,
  HeaderMobileDropdownLink,
  HeaderMobileLink,
  HeaderMobileMenu,
  HeaderMobileToggle,
  HeaderRoot,
  HeaderTop,
  HeaderTopDropdown,
  HeaderTopDropdownLink,
  HeaderTopLink,
  HeaderTopNav,
} from './index'

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders top bar', () => {
    render(
      <HeaderRoot>
        <HeaderTop>
          <HeaderTopNav>
            <HeaderTopLink asChild>
              <Link href="#">Help</Link>
            </HeaderTopLink>
          </HeaderTopNav>
        </HeaderTop>
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders top bar item with dropdown', () => {
    render(
      <HeaderRoot>
        <HeaderTop>
          <HeaderTopNav>
            <HeaderTopDropdown label="Language">
              <HeaderTopDropdownLink asChild>
                <Link href="#">Option 1</Link>
              </HeaderTopDropdownLink>
              <HeaderTopDropdownLink asChild>
                <Link href="#">Option 2</Link>
              </HeaderTopDropdownLink>
            </HeaderTopDropdown>
          </HeaderTopNav>
        </HeaderTop>
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
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
        <HeaderMain>
          <HeaderMainNav aria-label="Main menu">
            <HeaderMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderMainLink>
          </HeaderMainNav>
        </HeaderMain>
      </HeaderRoot>
    )
    const nav = document.querySelector('nav[aria-label="Main menu"]')
    expect(nav).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMainNav>
            <HeaderMainLink asChild>
              <Link href="/">Home</Link>
            </HeaderMainLink>
            <HeaderMainLink asChild>
              <Link href="/about">About</Link>
            </HeaderMainLink>
          </HeaderMainNav>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders actions', () => {
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMainNav>
            <Button>Login</Button>
          </HeaderMainNav>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(
      <HeaderRoot>
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
        <HeaderMobile>
          <HeaderMobileBar>
            <HeaderMobileToggle data-testid="mobile-toggle" />
          </HeaderMobileBar>
          <HeaderMobileMenu>
            <HeaderMobileLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileLink>
          </HeaderMobileMenu>
        </HeaderMobile>
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
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
        <HeaderMobile>
          <HeaderMobileBar>
            <HeaderMobileToggle data-testid="mobile-toggle" />
          </HeaderMobileBar>
          <HeaderMobileMenu>Menu</HeaderMobileMenu>
        </HeaderMobile>
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
        <HeaderMain>
          <HeaderMainNav>
            <HeaderMainDropdown label="Products">
              <HeaderMainDropdownLink asChild>
                <Link href="#">Option</Link>
              </HeaderMainDropdownLink>
            </HeaderMainDropdown>
          </HeaderMainNav>
        </HeaderMain>
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
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
        <HeaderMobile>
          <HeaderMobileBar>
            <HeaderMobileToggle data-testid="mobile-toggle" />
          </HeaderMobileBar>
          <HeaderMobileMenu>
            <HeaderMobileDropdown label="Products">
              <div>
                <HeaderMobileDropdownLink asChild>
                  <Link href="#">Software</Link>
                </HeaderMobileDropdownLink>
              </div>
            </HeaderMobileDropdown>
          </HeaderMobileMenu>
        </HeaderMobile>
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
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
        <HeaderMobile>
          <HeaderMobileBar>
            <HeaderMobileToggle data-testid="mobile-toggle" />
          </HeaderMobileBar>
          <HeaderMobileMenu>
            <HeaderMobileLink asChild>
              <Link href="/">Home</Link>
            </HeaderMobileLink>
          </HeaderMobileMenu>
        </HeaderMobile>
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
        <HeaderMain>
          <HeaderMainLogo>Logo</HeaderMainLogo>
        </HeaderMain>
      </HeaderRoot>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

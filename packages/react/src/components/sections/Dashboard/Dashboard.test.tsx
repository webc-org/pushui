import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
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

describe('DashboardHeader', () => {
  it('renders with title and avatar', () => {
    render(
      <DashboardMainHeader>
        <DashboardMainTitle>Welcome</DashboardMainTitle>
        <span data-testid="avatar">Avatar</span>
      </DashboardMainHeader>
    )
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })
})

describe('DashboardNav', () => {
  it('renders with title', () => {
    render(
      <DashboardNav>
        <DashboardNavTitle>Navigation</DashboardNavTitle>
        Links
      </DashboardNav>
    )
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })
})

describe('DashboardNavLink', () => {
  it('renders with current state', () => {
    render(
      <DashboardNavLink href="/test" current>
        Current Link
      </DashboardNavLink>
    )
    expect(screen.getByText('Current Link')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('supports asChild pattern', () => {
    render(
      <DashboardNavLink asChild>
        <button type="button">Button Link</button>
      </DashboardNavLink>
    )
    expect(
      screen.getByRole('button', { name: 'Button Link' })
    ).toBeInTheDocument()
  })
})

describe('Dashboard integration', () => {
  it('renders complete dashboard layout', () => {
    render(
      <DashboardLayout>
        <DashboardSidebar>
          <DashboardBrand>Logo</DashboardBrand>
          <DashboardNav>
            <DashboardNavTitle>Menu</DashboardNavTitle>
            <DashboardNavLink href="#" current>
              Dashboard
            </DashboardNavLink>
            <DashboardNavLink href="#">Settings</DashboardNavLink>
          </DashboardNav>
        </DashboardSidebar>
        <DashboardMain>
          <DashboardMainHeader>
            <DashboardMainTitle>Welcome</DashboardMainTitle>
          </DashboardMainHeader>
        </DashboardMain>
      </DashboardLayout>
    )

    expect(screen.getByText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })
})

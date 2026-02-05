import '@testing-library/jest-dom/vitest'

import { Link } from 'base/Link'
import { Title } from 'base/Title'
import { GridItem } from 'modules/Grid'
import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  FooterBottom,
  FooterBottomLink,
  FooterBottomNav,
  FooterMain,
  FooterMainLink,
  FooterMainNav,
  FooterRoot,
} from './index'

describe('Footer', () => {
  it('renders nav with aria-label', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <FooterMainNav aria-label="Company links">
            <FooterMainLink asChild>
              <Link href="#">Link</Link>
            </FooterMainLink>
          </FooterMainNav>
        </FooterMain>
      </FooterRoot>
    )
    expect(
      screen.getByRole('navigation', { name: 'Company links' })
    ).toBeInTheDocument()
  })

  it('renders link with current state', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <FooterMainNav>
            <FooterMainLink asChild current>
              <Link href="#">Current Link</Link>
            </FooterMainLink>
          </FooterMainNav>
        </FooterMain>
      </FooterRoot>
    )
    expect(screen.getByText('Current Link')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('renders complete footer structure', () => {
    render(
      <FooterRoot>
        <FooterMain>
          <GridItem>
            <Title level="h3">Company</Title>
            <FooterMainNav>
              <FooterMainLink asChild>
                <Link href="#">About</Link>
              </FooterMainLink>
            </FooterMainNav>
          </GridItem>
        </FooterMain>
        <FooterBottom>
          <span>&copy; 2026</span>
          <FooterBottomNav>
            <FooterBottomLink asChild>
              <Link href="#">Privacy</Link>
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>
      </FooterRoot>
    )

    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText(/2026/)).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })
})

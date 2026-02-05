import '@testing-library/jest-dom/vitest'

import { Button } from 'components'
import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  Banner,
  BannerActions,
  BannerBody,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from './Banner'

describe('Banner', () => {
  it('renders children correctly', () => {
    render(
      <Banner data-testid="banner">
        <BannerContent>
          <BannerTitle>Test Title</BannerTitle>
        </BannerContent>
      </Banner>
    )

    expect(screen.getByTestId('banner')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders all content elements', () => {
    render(
      <Banner>
        <BannerContent>
          <BannerTitle>Title</BannerTitle>
          <BannerSubtitle>Subtitle</BannerSubtitle>
          <BannerBody>Body text</BannerBody>
          <BannerActions>
            <Button>Action</Button>
          </BannerActions>
        </BannerContent>
      </Banner>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('renders correct heading level', () => {
    const { rerender } = render(
      <Banner>
        <BannerContent>
          <BannerTitle level="h1">Heading</BannerTitle>
        </BannerContent>
      </Banner>
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    rerender(
      <Banner>
        <BannerContent>
          <BannerTitle level="h2">Heading</BannerTitle>
        </BannerContent>
      </Banner>
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Banner className="custom-banner" data-testid="banner">
        <BannerContent className="custom-content" data-testid="content">
          <BannerTitle>Title</BannerTitle>
        </BannerContent>
      </Banner>
    )

    expect(screen.getByTestId('banner')).toHaveClass('custom-banner')
    expect(screen.getByTestId('content')).toHaveClass('custom-content')
  })
})

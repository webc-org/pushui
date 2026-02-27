import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'form/Button'
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from './Banner'
import type {
  BannerOverlayTypes,
  HorizontalAlignTypes,
  VerticalAlignTypes,
} from './Banner.types'

const meta: Meta<typeof Banner> = {
  title: 'Modules/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: { control: 'text' },
    backgroundColor: { control: 'color' },
    overlay: {
      control: 'select',
      options: ['none', 'light', 'dark'] as BannerOverlayTypes[],
    },
    minHeight: { control: 'text' },
    horizontalAlign: {
      control: 'select',
      options: ['left', 'center', 'right'] as HorizontalAlignTypes[],
    },
    verticalAlign: {
      control: 'select',
      options: ['start', 'center', 'end'] as VerticalAlignTypes[],
    },
  },
  args: {
    overlay: 'none',
    minHeight: '40rem',
    horizontalAlign: 'left',
    verticalAlign: 'center',
  },
}

export default meta
type Story = StoryObj<typeof Banner>

const sampleImage =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80'

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Banner
      backgroundImage={sampleImage}
      overlay="dark"
      horizontalAlign="center"
    >
      <BannerContent theme="dark" textAlign="center">
        <BannerTitle>Dark Overlay — Center</BannerTitle>
        <BannerSubtitle>
          Adventure awaits beyond the horizon
        </BannerSubtitle>
        <BannerActions className="mt-4">
          <Button variant="primary" appearance="button">
            Book Now
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
    <Banner
      backgroundImage={sampleImage}
      overlay="light"
      horizontalAlign="left"
    >
      <BannerContent theme="light">
        <BannerTitle>Light Overlay — Left</BannerTitle>
        <BannerSubtitle>Find your peace</BannerSubtitle>
        <BannerActions className="mt-4">
          <Button variant="primary" appearance="button">
            Explore
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
    <Banner
      backgroundImage={sampleImage}
      overlay="dark"
      horizontalAlign="right"
      minHeight="50rem"
      verticalAlign="end"
    >
      <BannerContent theme="dark" maxWidth="50rem">
        <BannerTitle level="h2">Right Aligned — Bottom</BannerTitle>
        <BannerSubtitle>Exclusive designs for you</BannerSubtitle>
        <BannerActions className="mt-4">
          <Button variant="secondary" appearance="button">
            Shop Now
          </Button>
        </BannerActions>
      </BannerContent>
    </Banner>
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}

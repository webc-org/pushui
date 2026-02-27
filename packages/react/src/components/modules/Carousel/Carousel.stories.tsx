import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../../base/Badge'
import { Note } from '../../base/Note'
import { Title } from '../../base/Title'
import {
  Banner,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from '../Banner'
import { Card, CardBody } from '../Card'
import {
  Carousel,
  CarouselContainer,
  CarouselControls,
  CarouselDots,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
} from './Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Modules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    slidesPerView: { control: { type: 'number', min: 1, max: 6 } },
    gap: { control: { type: 'number', min: 0, max: 5 } },
    loop: { control: 'boolean' },
    align: { control: 'select', options: ['start', 'center', 'end'] },
    dragFree: { control: 'boolean' },
    duration: { control: { type: 'number', min: 10, max: 50 } },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const banners = [
  {
    title: 'Welcome',
    subtitle: 'Get started',
    bg: 'bg-primary-1',
    text: 'light' as const,
  },
  {
    title: 'Features',
    subtitle: 'Discover what we offer',
    bg: 'bg-secondary-2',
    text: 'light' as const,
  },
  {
    title: 'Pricing',
    subtitle: 'Plans for every team',
    bg: 'bg-success-1',
    text: 'light' as const,
  },
  {
    title: 'Support',
    subtitle: 'We are here to help',
    bg: 'bg-info-2',
    text: 'light' as const,
  },
  {
    title: 'Updates',
    subtitle: 'Latest news',
    bg: 'bg-warning-3',
    text: 'dark' as const,
  },
  {
    title: 'Contact',
    subtitle: 'Get in touch',
    bg: 'bg-danger-1',
    text: 'light' as const,
  },
]

const cards = [
  {
    title: 'Getting Started',
    variant: 'primary' as const,
    bg: 'bg-primary-3',
  },
  { title: 'Components', variant: 'secondary' as const, bg: 'bg-grey-6' },
  { title: 'Theming', variant: 'success' as const, bg: 'bg-success-3' },
  { title: 'Accessibility', variant: 'info' as const, bg: 'bg-grey-7' },
  {
    title: 'Performance',
    variant: 'warning' as const,
    bg: 'bg-warning-3',
  },
  { title: 'Support', variant: 'danger' as const, bg: 'bg-danger-3' },
]

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div>
      <p style={{ marginBottom: '1rem' }}>Loop with overlay controls</p>
      <Carousel loop>
        <CarouselContainer>
          {banners.map((banner, i) => (
            <CarouselSlide key={i}>
              <Banner
                className={banner.bg}
                minHeight="24rem"
                horizontalAlign="center"
              >
                <BannerContent textColor={banner.text} textAlign="center">
                  <BannerTitle>{banner.title}</BannerTitle>
                  <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
                </BannerContent>
              </Banner>
            </CarouselSlide>
          ))}
        </CarouselContainer>
        <CarouselControls overlay>
          <CarouselPrev />
          <CarouselDots />
          <CarouselNext />
        </CarouselControls>
      </Carousel>
    </div>
    <div>
      <p style={{ marginBottom: '1rem' }}>3 slides per view, drag free</p>
      <Carousel slidesPerView={3} gap={2} loop dragFree>
        <CarouselContainer>
          {cards.map((card, i) => (
            <CarouselSlide key={i}>
              <Card className={card.bg}>
                <CardBody
                  style={{ textAlign: 'center', padding: '2rem 1rem' }}
                >
                  <Badge variant={card.variant}>{card.variant}</Badge>
                  <Title level="h5" className="mt0">
                    {card.title}
                  </Title>
                </CardBody>
              </Card>
            </CarouselSlide>
          ))}
        </CarouselContainer>
        <CarouselControls>
          <CarouselPrev />
          <CarouselNext />
        </CarouselControls>
      </Carousel>
    </div>
    <div>
      <p style={{ marginBottom: '1rem' }}>Notes, 2 per view</p>
      <Carousel slidesPerView={2} gap={2} loop>
        <CarouselContainer>
          {cards.map((card, i) => (
            <CarouselSlide key={i}>
              <Note variant={card.variant}>
                <Title level="h5">{card.title}</Title>
                <p>Important information about this topic.</p>
              </Note>
            </CarouselSlide>
          ))}
        </CarouselContainer>
        <CarouselControls>
          <CarouselPrev />
          <CarouselDots />
          <CarouselNext />
        </CarouselControls>
      </Carousel>
    </div>
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

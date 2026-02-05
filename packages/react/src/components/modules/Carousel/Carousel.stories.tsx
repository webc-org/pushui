import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'
import { Badge } from '../../base/Badge'
import { Note } from '../../base/Note'
import { Title } from '../../base/Title'
import {
  Banner,
  BannerContent,
  BannerSubtitle,
  BannerTitle,
} from '../Banner'
import { Card, CardBody, CardFooter } from '../Card'
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
    direction: { control: 'select', options: ['ltr', 'rtl'] },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const banners = [
  {
    title: 'Welcome',
    subtitle: 'Get started with our platform',
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
    subtitle: 'Latest news and releases',
    bg: 'bg-warning-3',
    text: 'dark' as const,
  },
  {
    title: 'Contact',
    subtitle: 'Get in touch with us',
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

const greyBanners = [
  {
    title: 'Dark',
    subtitle: 'Grey level 1',
    bg: 'bg-grey-1',
    text: 'light' as const,
  },
  {
    title: 'Medium',
    subtitle: 'Grey level 3',
    bg: 'bg-grey-3',
    text: 'light' as const,
  },
  {
    title: 'Light',
    subtitle: 'Grey level 5',
    bg: 'bg-grey-5',
    text: 'dark' as const,
  },
  {
    title: 'Lighter',
    subtitle: 'Grey level 7',
    bg: 'bg-grey-7',
    text: 'dark' as const,
  },
]

export const Default: Story = {
  render: () => (
    <Carousel>
      <CarouselContainer>
        {banners.slice(0, 3).map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner
              className={banner.bg}
              minHeight="20rem"
              horizontalAlign="center"
            >
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h2">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const WithLoop: Story = {
  render: () => (
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
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const MultipleSlides: Story = {
  render: () => (
    <Carousel slidesPerView={3} gap={1} align="start">
      <CarouselContainer>
        {banners.map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner className={banner.bg} minHeight="16rem">
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h3">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const CenterAligned: Story = {
  render: () => (
    <Carousel slidesPerView={2} gap={2} align="center" loop>
      <CarouselContainer>
        {banners.map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner className={banner.bg} minHeight="18rem">
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h3">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const DragFree: Story = {
  render: () => (
    <Carousel slidesPerView={4} gap={1} dragFree>
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
  ),
}

export const WithCards: Story = {
  render: () => (
    <Carousel slidesPerView={3} gap={2} loop>
      <CarouselContainer>
        {cards.map((card, i) => (
          <CarouselSlide key={i}>
            <Card className={clsx(card.bg, 'p-3', 'g-3', 'r-3', 'b')}>
              <CardBody className="g-1">
                <Title level="h3">{card.title}</Title>
                <p>Explore this feature in detail.</p>
              </CardBody>
              <CardFooter>
                <Badge variant={card.variant}>{card.variant}</Badge>
              </CardFooter>
            </Card>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const DotsOnly: Story = {
  render: () => (
    <Carousel loop>
      <CarouselContainer>
        {banners.slice(0, 3).map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner
              className={banner.bg}
              minHeight="20rem"
              horizontalAlign="center"
            >
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h2">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselDots />
      </CarouselControls>
    </Carousel>
  ),
}

export const ArrowsOnly: Story = {
  render: () => (
    <Carousel slidesPerView={2} gap={2}>
      <CarouselContainer>
        {banners.map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner className={banner.bg} minHeight="16rem">
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h3">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const SlowTransition: Story = {
  render: () => (
    <Carousel duration={40} loop>
      <CarouselContainer>
        {banners.slice(0, 3).map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner className={banner.bg} minHeight="20rem">
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle>{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const WithNotes: Story = {
  render: () => (
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
  ),
}

export const GreyScale: Story = {
  render: () => (
    <Carousel slidesPerView={2} gap={1} loop>
      <CarouselContainer>
        {greyBanners.map((banner, i) => (
          <CarouselSlide key={i}>
            <Banner className={banner.bg} minHeight="16rem">
              <BannerContent textColor={banner.text} textAlign="center">
                <BannerTitle level="h3">{banner.title}</BannerTitle>
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              </BannerContent>
            </Banner>
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const BlackAndWhite: Story = {
  render: () => (
    <Carousel loop>
      <CarouselContainer>
        <CarouselSlide>
          <Banner className="bg-black" minHeight="20rem">
            <BannerContent textColor="light" textAlign="center">
              <BannerTitle>Dark Mode</BannerTitle>
              <BannerSubtitle>Sleek and modern design</BannerSubtitle>
            </BannerContent>
          </Banner>
        </CarouselSlide>
        <CarouselSlide>
          <Banner className="bg-white" minHeight="20rem">
            <BannerContent textColor="dark" textAlign="center">
              <BannerTitle>Light Mode</BannerTitle>
              <BannerSubtitle>Clean and minimal aesthetic</BannerSubtitle>
            </BannerContent>
          </Banner>
        </CarouselSlide>
        <CarouselSlide>
          <Banner className="bg-grey-2" minHeight="20rem">
            <BannerContent textColor="light" textAlign="center">
              <BannerTitle>Neutral</BannerTitle>
              <BannerSubtitle>Balanced and versatile</BannerSubtitle>
            </BannerContent>
          </Banner>
        </CarouselSlide>
      </CarouselContainer>
      <CarouselControls>
        <CarouselPrev />
        <CarouselDots />
        <CarouselNext />
      </CarouselControls>
    </Carousel>
  ),
}

export const OverlayControls: Story = {
  render: () => (
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
  ),
}

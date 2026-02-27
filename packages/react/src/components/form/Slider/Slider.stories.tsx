import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
    track: { control: 'select', options: ['normal', 'inverted', false] },
    valueLabelDisplay: {
      control: 'select',
      options: ['auto', 'on', 'off'],
    },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    orientation: 'horizontal',
    size: 'md',
    track: 'normal',
    valueLabelDisplay: 'off',
  },
}

export default meta
type Story = StoryObj<typeof Slider>

const RangeSliderExample = () => {
  const [value, setValue] = useState<[number, number]>([20, 70])
  return (
    <div style={{ maxWidth: '400px', padding: '3rem 2rem' }}>
      <Slider
        range
        value={value}
        onChange={setValue}
        valueLabelDisplay="auto"
        aria-label="Range"
      />
      <p style={{ marginTop: '1rem' }}>
        Range: {value[0]} – {value[1]}
      </p>
    </div>
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div style={{ maxWidth: '400px', padding: '2rem 2rem 1rem' }}>
      <p style={{ marginBottom: '1.5rem' }}>Sizes</p>
      <Slider
        size="sm"
        defaultValue={70}
        valueLabelDisplay="auto"
        aria-label="Small"
      />
      <br />
      <Slider
        size="md"
        defaultValue={50}
        valueLabelDisplay="auto"
        aria-label="Medium"
      />
    </div>
    <div style={{ maxWidth: '400px', padding: '3rem 2rem 4rem' }}>
      <p style={{ marginBottom: '1.5rem' }}>Custom marks</p>
      <Slider
        defaultValue={20}
        step={10}
        marks={[
          { value: 0, label: '0°C' },
          { value: 20, label: '20°C' },
          { value: 37, label: '37°C' },
          { value: 100, label: '100°C' },
        ]}
        valueLabelDisplay="auto"
        aria-label="Temperature"
      />
    </div>
    <RangeSliderExample />
    <div style={{ height: '200px', padding: '2rem' }}>
      <p style={{ marginBottom: '1rem' }}>Vertical</p>
      <Slider
        orientation="vertical"
        defaultValue={60}
        valueLabelDisplay="auto"
        aria-label="Vertical"
      />
    </div>
    <div style={{ maxWidth: '400px', padding: '2rem' }}>
      <Slider defaultValue={40} disabled aria-label="Disabled" />
      <p style={{ marginTop: '0.5rem' }}>Disabled</p>
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

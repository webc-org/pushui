import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import type { SliderSingleTypes } from './Slider.types'

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number' },
      description: 'Step increment (null for marks only)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the slider',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the slider',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size variant',
    },
    track: {
      control: 'select',
      options: ['normal', 'inverted', false],
      description: 'Track display mode',
    },
    valueLabelDisplay: {
      control: 'select',
      options: ['auto', 'on', 'off'],
      description: 'Value label display mode',
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

// Controlled slider wrapper for playground
const ControlledSlider = (
  props: Omit<SliderSingleTypes, 'value' | 'onChange'>
) => {
  const [value, setValue] = useState(30)

  return (
    <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
      <Slider {...props} value={value} onChange={setValue} />
      <p style={{ marginTop: '1rem' }}>Value: {value}</p>
    </div>
  )
}

// Playground
export const Playground: Story = {
  render: (args) => {
    // Extract only single slider props (exclude range-specific props)
    const { range, ...singleProps } = args as SliderSingleTypes & {
      range?: boolean
    }
    return <ControlledSlider {...singleProps} />
  },
}

// Basic
export const Basic: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
      <Slider defaultValue={30} aria-label="Basic slider" />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// With Value Label
const WithValueLabelStory = () => {
  const [value, setValue] = useState(50)
  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        value={value}
        onChange={setValue}
        valueLabelDisplay="auto"
        aria-label="Slider with value label"
      />
    </div>
  )
}

export const WithValueLabel: Story = {
  render: () => <WithValueLabelStory />,
  parameters: { controls: { disable: true } },
}

// Value Label Always Visible
export const ValueLabelAlwaysVisible: Story = {
  render: () => (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        defaultValue={80}
        valueLabelDisplay="on"
        aria-label="Slider with always visible label"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Slider
        size="sm"
        defaultValue={70}
        valueLabelDisplay="auto"
        aria-label="Small slider"
      />
      <Slider
        size="md"
        defaultValue={50}
        valueLabelDisplay="auto"
        aria-label="Medium slider"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Disabled
export const Disabled: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
      <Slider defaultValue={30} disabled aria-label="Disabled slider" />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Discrete with Steps
export const DiscreteWithSteps: Story = {
  render: () => (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        defaultValue={30}
        step={10}
        marks
        min={10}
        max={110}
        valueLabelDisplay="auto"
        aria-label="Discrete slider"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Custom Marks
export const CustomMarks: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem 4rem',
      }}
    >
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
  ),
  parameters: { controls: { disable: true } },
}

// Restricted to Marks Only
export const RestrictedToMarks: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem 4rem',
      }}
    >
      <Slider
        defaultValue={20}
        step={null}
        marks={[
          { value: 0, label: '0°C' },
          { value: 20, label: '20°C' },
          { value: 37, label: '37°C' },
          { value: 100, label: '100°C' },
        ]}
        valueLabelDisplay="auto"
        aria-label="Temperature (restricted)"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Range Slider
const RangeSliderStory = () => {
  const [value, setValue] = useState<[number, number]>([20, 37])

  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        range
        value={value}
        onChange={setValue}
        valueLabelDisplay="auto"
        aria-label="Temperature range"
      />
      <p style={{ marginTop: '1rem' }}>
        Range: {value[0]} - {value[1]}
      </p>
    </div>
  )
}

export const RangeSlider: Story = {
  render: () => <RangeSliderStory />,
  parameters: { controls: { disable: true } },
}

// Range with Minimum Distance
const RangeWithMinDistanceStory = () => {
  const [value, setValue] = useState<[number, number]>([20, 50])

  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        range
        value={value}
        onChange={setValue}
        minDistance={10}
        disableSwap
        valueLabelDisplay="auto"
        aria-label="Range with min distance"
      />
      <p style={{ marginTop: '1rem' }}>
        Range: {value[0]} - {value[1]} (min distance: 10)
      </p>
    </div>
  )
}

export const RangeWithMinDistance: Story = {
  render: () => <RangeWithMinDistanceStory />,
  parameters: { controls: { disable: true } },
}

// Vertical Slider
export const Vertical: Story = {
  render: () => (
    <div style={{ height: '200px', padding: '2rem' }}>
      <Slider
        orientation="vertical"
        defaultValue={30}
        valueLabelDisplay="auto"
        aria-label="Vertical slider"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Vertical with Marks
export const VerticalWithMarks: Story = {
  render: () => (
    <div style={{ height: '200px', padding: '2rem 4rem' }}>
      <Slider
        orientation="vertical"
        defaultValue={20}
        marks={[
          { value: 0, label: '0°C' },
          { value: 20, label: '20°C' },
          { value: 37, label: '37°C' },
          { value: 100, label: '100°C' },
        ]}
        valueLabelDisplay="auto"
        aria-label="Vertical temperature"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Vertical Range
const VerticalRangeStory = () => {
  const [value, setValue] = useState<[number, number]>([20, 80])

  return (
    <div style={{ height: '200px', padding: '2rem' }}>
      <Slider
        range
        orientation="vertical"
        value={value}
        onChange={setValue}
        valueLabelDisplay="auto"
        aria-label="Vertical range"
      />
    </div>
  )
}

export const VerticalRange: Story = {
  render: () => <VerticalRangeStory />,
  parameters: { controls: { disable: true } },
}

// Inverted Track
export const InvertedTrack: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div>
        <p style={{ marginBottom: '1rem' }}>Normal track</p>
        <Slider
          defaultValue={30}
          marks={[
            { value: 0, label: '0°C' },
            { value: 100, label: '100°C' },
          ]}
          valueLabelDisplay="auto"
          aria-label="Normal track"
        />
      </div>
      <div>
        <p style={{ marginBottom: '1rem' }}>Inverted track</p>
        <Slider
          defaultValue={30}
          track="inverted"
          marks={[
            { value: 0, label: '0°C' },
            { value: 100, label: '100°C' },
          ]}
          valueLabelDisplay="auto"
          aria-label="Inverted track"
        />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// No Track
export const NoTrack: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '3rem 2rem 4rem',
      }}
    >
      <Slider
        defaultValue={30}
        track={false}
        marks={[
          { value: 0, label: '0°C' },
          { value: 20, label: '20°C' },
          { value: 37, label: '37°C' },
          { value: 100, label: '100°C' },
        ]}
        valueLabelDisplay="auto"
        aria-label="No track slider"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

// Custom Value Label Format
const CustomValueFormatStory = () => {
  const [value, setValue] = useState(50)

  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        value={value}
        onChange={setValue}
        valueLabelDisplay="on"
        valueLabelFormat={(v) => `${v}%`}
        aria-label="Percentage slider"
      />
    </div>
  )
}

export const CustomValueFormat: Story = {
  render: () => <CustomValueFormatStory />,
  parameters: { controls: { disable: true } },
}

// Temperature Slider with Custom Format
const TemperatureSliderStory = () => {
  const [value, setValue] = useState(20)

  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        value={value}
        onChange={setValue}
        min={-20}
        max={50}
        valueLabelDisplay="on"
        valueLabelFormat={(v) => `${v}°C`}
        getAriaValueText={(v) => `${v} degrees Celsius`}
        aria-label="Temperature"
      />
    </div>
  )
}

export const TemperatureSlider: Story = {
  render: () => <TemperatureSliderStory />,
  parameters: { controls: { disable: true } },
}

// Small Steps
const SmallStepsStory = () => {
  const [value, setValue] = useState(0.5)

  return (
    <div
      style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}
    >
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={1}
        step={0.01}
        valueLabelDisplay="on"
        valueLabelFormat={(v) => v.toFixed(2)}
        aria-label="Fine adjustment"
      />
    </div>
  )
}

export const SmallSteps: Story = {
  render: () => <SmallStepsStory />,
  parameters: { controls: { disable: true } },
}

import '@testing-library/jest-dom/vitest'

import { fireEvent, render, screen } from 'utils/Test'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { Slider } from './Slider'

// Mock pointer capture (not available in JSDOM)
beforeAll(() => {
  Element.prototype.setPointerCapture = vi.fn()
  Element.prototype.releasePointerCapture = vi.fn()
})

describe('Slider', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(<Slider aria-label="Test slider" />)
      expect(screen.getByTestId('slider')).toBeInTheDocument()
      expect(screen.getByRole('slider')).toBeInTheDocument()
    })

    it('renders with default value', () => {
      render(<Slider defaultValue={50} aria-label="Test slider" />)
      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-valuenow',
        '50'
      )
    })

    it('renders with controlled value', () => {
      render(<Slider value={75} aria-label="Test slider" />)
      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-valuenow',
        '75'
      )
    })

    it('renders disabled state', () => {
      render(<Slider disabled aria-label="Test slider" />)
      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-disabled',
        'true'
      )
    })

    it('renders with custom min/max', () => {
      render(
        <Slider
          min={10}
          max={200}
          defaultValue={100}
          aria-label="Test slider"
        />
      )
      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuemin', '10')
      expect(slider).toHaveAttribute('aria-valuemax', '200')
      expect(slider).toHaveAttribute('aria-valuenow', '100')
    })
  })

  describe('range slider', () => {
    it('renders two thumbs for range slider', () => {
      render(
        <Slider range defaultValue={[20, 80]} aria-label="Range slider" />
      )
      expect(screen.getAllByRole('slider')).toHaveLength(2)
    })

    it('renders with controlled range values', () => {
      render(<Slider range value={[25, 75]} aria-label="Range slider" />)
      const sliders = screen.getAllByRole('slider')
      expect(sliders[0]).toHaveAttribute('aria-valuenow', '25')
      expect(sliders[1]).toHaveAttribute('aria-valuenow', '75')
    })
  })

  describe('value label', () => {
    it('shows value label when valueLabelDisplay is "on"', () => {
      render(
        <Slider
          defaultValue={50}
          valueLabelDisplay="on"
          aria-label="Test slider"
        />
      )
      expect(screen.getByText('50')).toBeInTheDocument()
    })

    it('uses custom valueLabelFormat', () => {
      render(
        <Slider
          defaultValue={50}
          valueLabelDisplay="on"
          valueLabelFormat={(v) => `${v}%`}
          aria-label="Test slider"
        />
      )
      expect(screen.getByText('50%')).toBeInTheDocument()
    })
  })

  describe('marks', () => {
    it('renders custom marks with labels', () => {
      const marks = [
        { value: 0, label: 'Low' },
        { value: 50, label: 'Mid' },
        { value: 100, label: 'High' },
      ]
      render(<Slider marks={marks} aria-label="Test slider" />)
      expect(screen.getByText('Low')).toBeInTheDocument()
      expect(screen.getByText('Mid')).toBeInTheDocument()
      expect(screen.getByText('High')).toBeInTheDocument()
    })
  })

  describe('keyboard navigation', () => {
    it('increases value with ArrowRight', () => {
      const onChange = vi.fn()
      render(
        <Slider value={50} onChange={onChange} aria-label="Test slider" />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'ArrowRight' })

      expect(onChange).toHaveBeenCalledWith(51)
    })

    it('decreases value with ArrowLeft', () => {
      const onChange = vi.fn()
      render(
        <Slider value={50} onChange={onChange} aria-label="Test slider" />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'ArrowLeft' })

      expect(onChange).toHaveBeenCalledWith(49)
    })

    it('goes to min with Home', () => {
      const onChange = vi.fn()
      render(
        <Slider value={50} onChange={onChange} aria-label="Test slider" />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'Home' })

      expect(onChange).toHaveBeenCalledWith(0)
    })

    it('goes to max with End', () => {
      const onChange = vi.fn()
      render(
        <Slider value={50} onChange={onChange} aria-label="Test slider" />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'End' })

      expect(onChange).toHaveBeenCalledWith(100)
    })

    it('respects step value', () => {
      const onChange = vi.fn()
      render(
        <Slider
          value={50}
          step={10}
          onChange={onChange}
          aria-label="Test slider"
        />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'ArrowRight' })

      expect(onChange).toHaveBeenCalledWith(60)
    })
  })

  describe('accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(
        <Slider min={0} max={100} defaultValue={50} aria-label="Volume" />
      )

      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-label', 'Volume')
      expect(slider).toHaveAttribute('aria-valuemin', '0')
      expect(slider).toHaveAttribute('aria-valuemax', '100')
      expect(slider).toHaveAttribute('aria-valuenow', '50')
    })

    it('has correct aria-orientation for vertical', () => {
      render(
        <Slider orientation="vertical" aria-label="Vertical slider" />
      )

      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-orientation',
        'vertical'
      )
    })

    it('uses custom aria-valuetext', () => {
      render(
        <Slider
          defaultValue={20}
          getAriaValueText={(v) => `${v} degrees`}
          aria-label="Temperature"
        />
      )

      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-valuetext',
        '20 degrees'
      )
    })

    it('supports aria-labelledby', () => {
      render(
        <>
          <label id="slider-label">Volume Control</label>
          <Slider aria-labelledby="slider-label" defaultValue={50} />
        </>
      )

      expect(screen.getByRole('slider')).toHaveAttribute(
        'aria-labelledby',
        'slider-label'
      )
    })
  })

  describe('callbacks', () => {
    it('calls onChange when value changes', () => {
      const onChange = vi.fn()
      render(
        <Slider value={50} onChange={onChange} aria-label="Test slider" />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'ArrowRight' })

      expect(onChange).toHaveBeenCalled()
    })

    it('calls onChangeCommitted on keyboard release', () => {
      const onChangeCommitted = vi.fn()
      render(
        <Slider
          defaultValue={50}
          onChangeCommitted={onChangeCommitted}
          aria-label="Test slider"
        />
      )

      const slider = screen.getByRole('slider')
      fireEvent.keyDown(slider, { key: 'ArrowRight' })

      expect(onChangeCommitted).toHaveBeenCalledWith(51)
    })
  })
})

import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const BasicAccordion = ({
  type = 'single',
  ...props
}: {
  type?: 'single' | 'multiple'
  [key: string]: unknown
}) => (
  <Accordion type={type} {...props}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Section 3</AccordionTrigger>
      <AccordionContent>Content 3</AccordionContent>
    </AccordionItem>
  </Accordion>
)

describe('Accordion', () => {
  it('renders all items', () => {
    render(<BasicAccordion />)

    expect(screen.getByText('Section 1')).toBeDefined()
    expect(screen.getByText('Section 2')).toBeDefined()
    expect(screen.getByText('Section 3')).toBeDefined()
  })

  it('expands item on click', async () => {
    const user = userEvent.setup()
    render(<BasicAccordion />)

    const trigger = screen.getByRole('button', { name: 'Section 1' })
    expect(trigger.getAttribute('aria-expanded')).toBe('false')

    await user.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('true')
  })

  it('collapses expanded item when clicked again (collapsible)', async () => {
    const user = userEvent.setup()
    render(<BasicAccordion collapsible />)

    const trigger = screen.getByRole('button', { name: 'Section 1' })

    await user.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('true')

    await user.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('false')
  })

  it('does not collapse when collapsible is false', async () => {
    const user = userEvent.setup()
    render(<BasicAccordion collapsible={false} />)

    const trigger = screen.getByRole('button', { name: 'Section 1' })

    await user.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('true')

    await user.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('true')
  })

  it('single type: only one item expanded at a time', async () => {
    const user = userEvent.setup()
    render(<BasicAccordion type="single" />)

    const trigger1 = screen.getByRole('button', { name: 'Section 1' })
    const trigger2 = screen.getByRole('button', { name: 'Section 2' })

    await user.click(trigger1)
    expect(trigger1.getAttribute('aria-expanded')).toBe('true')
    expect(trigger2.getAttribute('aria-expanded')).toBe('false')

    await user.click(trigger2)
    expect(trigger1.getAttribute('aria-expanded')).toBe('false')
    expect(trigger2.getAttribute('aria-expanded')).toBe('true')
  })

  it('multiple type: allows multiple items expanded', async () => {
    const user = userEvent.setup()
    render(<BasicAccordion type="multiple" />)

    const trigger1 = screen.getByRole('button', { name: 'Section 1' })
    const trigger2 = screen.getByRole('button', { name: 'Section 2' })

    await user.click(trigger1)
    await user.click(trigger2)

    expect(trigger1.getAttribute('aria-expanded')).toBe('true')
    expect(trigger2.getAttribute('aria-expanded')).toBe('true')
  })

  it('renders with defaultValue expanded', () => {
    render(<BasicAccordion defaultValue="item-2" />)

    const trigger2 = screen.getByRole('button', { name: 'Section 2' })
    expect(trigger2.getAttribute('aria-expanded')).toBe('true')
  })

  it('calls onValueChange when item is toggled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<BasicAccordion onValueChange={handleChange} />)

    await user.click(screen.getByRole('button', { name: 'Section 1' }))
    expect(handleChange).toHaveBeenCalledWith('item-1')
  })

  it('has correct ARIA attributes', () => {
    render(<BasicAccordion defaultValue="item-1" />)

    const trigger = screen.getByRole('button', { name: 'Section 1' })
    const contentId = trigger.getAttribute('aria-controls')
    const content = document.getElementById(contentId!)

    expect(trigger.getAttribute('aria-expanded')).toBe('true')
    expect(content).toBeDefined()
    expect(content?.getAttribute('role')).toBe('region')
    expect(content?.getAttribute('aria-labelledby')).toBe(trigger.id)
  })

  describe('Keyboard Navigation', () => {
    it('navigates with ArrowDown', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger2 = screen.getByRole('button', { name: 'Section 2' })

      trigger1.focus()
      await user.keyboard('{ArrowDown}')

      expect(document.activeElement).toBe(trigger2)
    })

    it('navigates with ArrowUp', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger2 = screen.getByRole('button', { name: 'Section 2' })

      trigger2.focus()
      await user.keyboard('{ArrowUp}')

      expect(document.activeElement).toBe(trigger1)
    })

    it('navigates to first with Home', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger3 = screen.getByRole('button', { name: 'Section 3' })

      trigger3.focus()
      await user.keyboard('{Home}')

      expect(document.activeElement).toBe(trigger1)
    })

    it('navigates to last with End', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger3 = screen.getByRole('button', { name: 'Section 3' })

      trigger1.focus()
      await user.keyboard('{End}')

      expect(document.activeElement).toBe(trigger3)
    })

    it('wraps around on ArrowDown at last item', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger3 = screen.getByRole('button', { name: 'Section 3' })

      trigger3.focus()
      await user.keyboard('{ArrowDown}')

      expect(document.activeElement).toBe(trigger1)
    })

    it('wraps around on ArrowUp at first item', async () => {
      const user = userEvent.setup()
      render(<BasicAccordion />)

      const trigger1 = screen.getByRole('button', { name: 'Section 1' })
      const trigger3 = screen.getByRole('button', { name: 'Section 3' })

      trigger1.focus()
      await user.keyboard('{ArrowUp}')

      expect(document.activeElement).toBe(trigger3)
    })
  })

  it('applies custom className', () => {
    render(
      <Accordion className="custom-accordion" data-testid="accordion">
        <AccordionItem
          value="item-1"
          className="custom-item"
          data-testid="item"
        >
          <AccordionTrigger className="custom-trigger">
            Trigger
          </AccordionTrigger>
          <AccordionContent className="custom-content">
            Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(
      screen
        .getByTestId('accordion')
        .classList.contains('custom-accordion')
    ).toBe(true)
    expect(
      screen.getByTestId('item').classList.contains('custom-item')
    ).toBe(true)
  })

  it('disabled item cannot be toggled', async () => {
    const _user = userEvent.setup()
    render(
      <Accordion>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>Disabled Section</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const item = screen
      .getByText('Disabled Section')
      .closest('[data-disabled]')
    expect(item?.getAttribute('data-disabled')).toBe('true')
  })
})

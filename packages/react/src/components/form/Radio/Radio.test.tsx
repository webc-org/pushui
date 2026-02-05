import '@testing-library/jest-dom/vitest'

import { fireEvent, render } from 'utils/Test'
import { describe, expect, it, vi } from 'vitest'
import { InputRadio } from './Radio'

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

describe('InputRadio', () => {
  it('renders with label', () => {
    const { container } = render(
      <InputRadio
        name="test"
        value=""
        onChange={() => {}}
        options={mockOptions}
        label="Choose"
      />
    )
    const wrapper = container.querySelector('[role="radiogroup"]')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('Choose')
  })

  it('renders all options', () => {
    const { container } = render(
      <InputRadio
        name="test"
        value=""
        onChange={() => {}}
        options={mockOptions}
      />
    )
    const inputs = container.querySelectorAll('input[type="radio"]')
    expect(inputs).toHaveLength(3)
  })

  it('shows selected value', () => {
    const { container } = render(
      <InputRadio
        name="test"
        value="option2"
        onChange={() => {}}
        options={mockOptions}
      />
    )
    const inputs = container.querySelectorAll(
      'input[type="radio"]'
    ) as NodeListOf<HTMLInputElement>
    expect(inputs[0].checked).toBe(false)
    expect(inputs[1].checked).toBe(true)
    expect(inputs[2].checked).toBe(false)
  })

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <InputRadio
        name="test"
        value=""
        onChange={handleChange}
        options={mockOptions}
      />
    )
    const inputs = container.querySelectorAll('input[type="radio"]')
    fireEvent.click(inputs[1])
    expect(handleChange).toHaveBeenCalledWith('option2')
  })

  it('applies disabled state to all options', () => {
    const { container } = render(
      <InputRadio
        name="test"
        value=""
        onChange={() => {}}
        options={mockOptions}
        disabled
      />
    )
    const inputs = container.querySelectorAll('input[type="radio"]')
    inputs.forEach((input) => expect(input).toBeDisabled())
  })

  it('applies disabled state to individual option', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ]
    const { container } = render(
      <InputRadio
        name="test"
        value=""
        onChange={() => {}}
        options={optionsWithDisabled}
      />
    )
    const inputs = container.querySelectorAll('input[type="radio"]')
    expect(inputs[0]).not.toBeDisabled()
    expect(inputs[1]).toBeDisabled()
    expect(inputs[2]).not.toBeDisabled()
  })
})

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ChoiceClear,
  ChoiceList,
  ChoiceListItem,
  OptionList,
  OptionListItem,
  SelectActions,
  SelectModal,
  SelectPlaceholder,
  SelectRoot,
  SelectSearch,
  SelectTrigger,
} from './Select'
import { useSelectContext } from './SelectContext'
import type { OptionTypes } from './Select.types'

const options: OptionTypes[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
]

const meta: Meta<typeof SelectRoot> = {
  title: 'Form/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    searchable: { control: 'boolean' },
    flip: { control: 'boolean' },
    loading: { control: 'boolean' },
    clearAllLabel: { control: 'text' },
    selectedOptionsLabel: { control: 'text' },
    removeLabel: { control: 'text' },
    searchLabel: { control: 'text' },
  },
  args: {
    disabled: false,
    multiple: false,
    searchable: false,
    flip: true,
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof SelectRoot>

const OptionListWithContext = ({ controlId }: { controlId: string }) => {
  const { filteredOptions } = useSelectContext()
  return (
    <OptionList controlId={controlId}>
      {filteredOptions.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  )
}

type SelectStoryProps = {
  label?: string
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  searchable?: boolean
  flip?: boolean
  loading?: boolean
  showClearAll?: boolean
  controlId?: string
}

const SelectStory = ({
  label,
  placeholder,
  disabled,
  multiple,
  searchable,
  flip,
  loading,
  showClearAll,
  controlId = 'select',
}: SelectStoryProps) => {
  const [value, setValue] = useState<OptionTypes[]>([])
  return (
    <SelectRoot
      options={options}
      value={value}
      onChange={setValue}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      multiple={multiple}
      searchable={searchable}
      flip={flip}
      loading={loading}
    >
      {multiple && (
        <ChoiceList selectedOptions={value}>
          {value.map((opt) => (
            <ChoiceListItem
              key={opt.value}
              option={opt}
              onRemove={(o) =>
                setValue(value.filter((v) => v.value !== o.value))
              }
            />
          ))}
        </ChoiceList>
      )}
      <SelectSearch />
      <SelectPlaceholder />
      <SelectActions>
        {multiple && showClearAll && <ChoiceClear />}
        <SelectTrigger />
      </SelectActions>
      <SelectModal>
        <OptionListWithContext controlId={controlId} />
      </SelectModal>
    </SelectRoot>
  )
}

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <SelectStory
      label="Single"
      placeholder="Select a fruit"
      controlId="single"
    />
    <SelectStory
      label="Searchable"
      searchable
      placeholder="Search fruits"
      controlId="searchable"
    />
    <SelectStory
      label="Multiple"
      multiple
      placeholder="Select fruits"
      showClearAll
      controlId="multiple"
    />
    <SelectStory
      label="Multiple searchable"
      multiple
      searchable
      placeholder="Search fruits"
      controlId="multi-search"
    />
    <SelectStory
      label="Disabled"
      disabled
      placeholder="Disabled"
      controlId="disabled"
    />
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

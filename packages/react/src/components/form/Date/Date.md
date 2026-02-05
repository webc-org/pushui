# InputDate

Date picker with modal calendar, keyboard navigation, and full i18n support.

## Import

```tsx
import { InputDate } from '@ui'
```

## Usage

### Basic

```tsx
const [date, setDate] = useState<Date | null>(null)

<InputDate
  label="Birth Date"
  selected={date}
  onChange={setDate}
/>
```

### With Min/Max Dates

```tsx
<InputDate
  label="Appointment"
  selected={date}
  onChange={setDate}
  minDate={new Date()}  // No past dates
  maxDate={new Date(2025, 11, 31)}  // Before end of 2025
/>
```

### Custom Date Format

```tsx
<InputDate
  label="Date"
  selected={date}
  onChange={setDate}
  dateFormat="dd/MM/yyyy"  // European format
/>
```

### Translated Labels

```tsx
<InputDate
  label={t('form.date')}
  selected={date}
  onChange={setDate}
  months={[
    t('months.january'),
    t('months.february'),
    // ... all 12 months
  ]}
  daysShort={[
    t('days.sun'),
    t('days.mon'),
    // ... all 7 days
  ]}
  selectDateLabel={t('datepicker.select')}
  previousMonthLabel={t('datepicker.previous')}
  nextMonthLabel={t('datepicker.next')}
  cancelLabel={t('datepicker.cancel')}
  applyLabel={t('datepicker.apply')}
/>
```

### Disabled

```tsx
<InputDate
  label="Date"
  selected={date}
  onChange={setDate}
  disabled
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `Date \| null` | **required** | Selected date |
| `onChange` | `(date: Date \| null) => void` | **required** | Change handler |
| `label` | `string` | - | Field label |
| `placeholder` | `string` | `selectDateLabel` | Input placeholder |
| `dateFormat` | `string` | `'yyyy-MM-dd'` | Display format |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `disabled` | `boolean` | `false` | Disable input |
| `onBlur` | `() => void` | - | Blur handler |

### i18n Props

| Prop | Type | Default |
|------|------|---------|
| `months` | `string[]` | English month names |
| `daysShort` | `string[]` | `['Sun', 'Mon', ...]` |
| `selectDateLabel` | `string` | `'Select date'` |
| `previousMonthLabel` | `string` | `'Previous month'` |
| `nextMonthLabel` | `string` | `'Next month'` |
| `cancelLabel` | `string` | `'Cancel'` |
| `applyLabel` | `string` | `'Apply'` |

## Keyboard Navigation

- **Arrow keys**: Navigate between days
- **Enter/Space**: Select focused day
- **Tab**: Move between controls
- Navigation automatically crosses month boundaries

## Accessibility

- Calendar opens in modal with focus trap
- Grid uses proper ARIA roles
- Month/year announced on change via `aria-live`
- All buttons have descriptive labels

## Common Patterns

### Date Range

```tsx
<InputDate
  label="Start Date"
  selected={startDate}
  onChange={setStartDate}
  maxDate={endDate || undefined}
/>
<InputDate
  label="End Date"
  selected={endDate}
  onChange={setEndDate}
  minDate={startDate || undefined}
/>
```

### Form Integration

```tsx
<InputDate
  label="Date of Birth"
  selected={formState.dob}
  onChange={(date) => setFormState({ ...formState, dob: date })}
  maxDate={new Date()}  // No future dates
/>
```

## Strapi Integration

```tsx
<InputDate
  label={field.label}
  selected={formData[field.name] ? new Date(formData[field.name]) : null}
  onChange={(date) => updateField(field.name, date?.toISOString())}
/>
```

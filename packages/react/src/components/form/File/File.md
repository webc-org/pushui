# InputFile

File upload with button or drag-and-drop zone, file type validation, and i18n support.

## Import

```tsx
import { InputFile } from '@ui'
```

## Usage

### Basic Button

```tsx
<InputFile
  label="Upload Document"
  onChange={(files) => console.log(files)}
/>
```

### Dropzone Mode

```tsx
<InputFile
  label="Upload Files"
  dropzone
  onChange={handleFiles}
/>
```

### Multiple Files

```tsx
<InputFile
  label="Photos"
  multiple
  dropzone
  onChange={handleFiles}
/>
```

### Accept Specific Types

```tsx
{/* By extension */}
<InputFile accept=".jpg,.png,.pdf" />

{/* By MIME type */}
<InputFile accept="image/*" />

{/* Combination */}
<InputFile accept="image/*,.pdf,application/msword" />
```

### Translated Labels

```tsx
<InputFile
  label={t('form.upload')}
  dropzone
  multiple
  chooseFileLabel={t('file.choose')}
  chooseFilesLabel={t('file.chooseMultiple')}
  noFileSelectedLabel={t('file.none')}
  filesSelectedLabel={(count) => t('file.selected', { count })}
  dropFileLabel={t('file.drop')}
  dropFilesLabel={t('file.dropMultiple')}
  onChange={handleFiles}
/>
```

### Hide File Names

```tsx
<InputFile
  label="Upload"
  showFileNames={false}
  onChange={handleFiles}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label |
| `dropzone` | `boolean` | `false` | Enable drag-and-drop zone |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `accept` | `string` | - | Accepted file types |
| `disabled` | `boolean` | `false` | Disable input |
| `showFileNames` | `boolean` | `true` | Show selected file names |
| `onChange` | `(files: FileList \| null) => void` | - | Change handler |
| `buttonText` | `string` | - | Custom button text |
| `buttonClassName` | `string` | - | Class for button |
| `labelClassName` | `string` | - | Class for label |
| `className` | `string` | - | Class for wrapper |

### i18n Props

| Prop | Type | Default |
|------|------|---------|
| `chooseFileLabel` | `string` | `'Choose a file'` |
| `chooseFilesLabel` | `string` | `'Choose files'` |
| `noFileSelectedLabel` | `string` | `'No file selected'` |
| `filesSelectedLabel` | `(count: number) => string` | `'${count} files selected'` |
| `dropFileLabel` | `string` | `'Drop file here'` |
| `dropFilesLabel` | `string` | `'Drop files here'` |

## Accept Patterns

| Pattern | Description |
|---------|-------------|
| `.jpg,.png` | Specific extensions |
| `image/*` | All images |
| `video/*` | All videos |
| `audio/*` | All audio |
| `application/pdf` | PDF files |
| `image/*,.pdf` | Images and PDFs |

## Accessibility

- Hidden native input with visible trigger
- Dropzone is keyboard accessible
- Proper label association
- Drag state feedback

## Common Patterns

### Image Upload

```tsx
<InputFile
  label="Profile Photo"
  accept="image/*"
  onChange={(files) => {
    if (files?.[0]) {
      uploadImage(files[0])
    }
  }}
/>
```

### Document Upload with Dropzone

```tsx
<InputFile
  label="Upload Documents"
  dropzone
  multiple
  accept=".pdf,.doc,.docx"
  onChange={handleDocuments}
/>
```

## Strapi Integration

```tsx
<InputFile
  label={field.label}
  accept={field.allowedTypes}
  multiple={field.multiple}
  onChange={async (files) => {
    if (files) {
      const uploaded = await uploadMedia(files)
      updateField(field.name, uploaded)
    }
  }}
/>
```

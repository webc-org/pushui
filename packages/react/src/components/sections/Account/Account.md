# Account

Account settings page layout with card-based forms for user profile and preferences.

## Import

```tsx
import {
  AccountSection,
  AccountCard,
  AccountCardHeader,
  AccountCardBody,
  AccountCardFooter,
  AccountForm,
  AccountTitle,
} from '@ui'
```

## Usage

### Profile Settings

```tsx
<AccountSection>
  <AccountCard>
    <AccountCardHeader>
      <AccountTitle>Profile Settings</AccountTitle>
    </AccountCardHeader>

    <AccountCardBody>
      <AccountForm onSubmit={handleSave}>
        <InputText
          label="Full Name"
          value={name}
          onChange={setName}
        />
        <InputText
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputTextarea
          label="Bio"
          value={bio}
          onChange={setBio}
          maxLength={280}
          showCount
        />
      </AccountForm>
    </AccountCardBody>

    <AccountCardFooter>
      <Button appearance="ghost">Cancel</Button>
      <Button variant="primary" onClick={handleSave}>Save Changes</Button>
    </AccountCardFooter>
  </AccountCard>
</AccountSection>
```

### Change Password

```tsx
<AccountSection>
  <AccountCard>
    <AccountCardHeader>
      <AccountTitle>Change Password</AccountTitle>
    </AccountCardHeader>

    <AccountCardBody>
      <AccountForm onSubmit={handleChangePassword}>
        <InputPassword
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <InputPassword
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <InputPassword
          label="Confirm New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </AccountForm>
    </AccountCardBody>

    <AccountCardFooter>
      <Button variant="primary" onClick={handleChangePassword}>
        Update Password
      </Button>
    </AccountCardFooter>
  </AccountCard>
</AccountSection>
```

### Multiple Cards

```tsx
<AccountSection>
  <AccountCard>
    <AccountCardHeader>
      <AccountTitle>Profile</AccountTitle>
    </AccountCardHeader>
    <AccountCardBody>
      {/* profile fields */}
    </AccountCardBody>
    <AccountCardFooter>
      <Button variant="primary">Save</Button>
    </AccountCardFooter>
  </AccountCard>

  <AccountCard>
    <AccountCardHeader>
      <AccountTitle>Notifications</AccountTitle>
    </AccountCardHeader>
    <AccountCardBody>
      <InputSwitch
        label="Email notifications"
        checked={emailNotifs}
        onChange={setEmailNotifs}
      />
      <InputSwitch
        label="Push notifications"
        checked={pushNotifs}
        onChange={setPushNotifs}
      />
    </AccountCardBody>
    <AccountCardFooter>
      <Button variant="primary">Save Preferences</Button>
    </AccountCardFooter>
  </AccountCard>

  <AccountCard>
    <AccountCardHeader>
      <AccountTitle level="h3">Danger Zone</AccountTitle>
    </AccountCardHeader>
    <AccountCardBody>
      <p>Once you delete your account, there is no going back.</p>
    </AccountCardBody>
    <AccountCardFooter>
      <Button variant="danger">Delete Account</Button>
    </AccountCardFooter>
  </AccountCard>
</AccountSection>
```

## Components

### AccountSection

Container for account settings cards.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | AccountCard components |
| `className` | `string` | - | Additional CSS class |

### AccountCard

Card container for settings group.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `className` | `string` | - | Additional CSS class |

### AccountCardHeader

Top section with title.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title content |
| `className` | `string` | - | Additional CSS class |

### AccountCardBody

Main content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Form content |
| `className` | `string` | - | Additional CSS class |

### AccountCardFooter

Bottom section for actions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Buttons |
| `className` | `string` | - | Additional CSS class |

### AccountForm

Form wrapper with proper spacing.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Form fields |
| `onSubmit` | `FormEventHandler` | - | Submit handler |
| `className` | `string` | - | Additional CSS class |

### AccountTitle

Section heading.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title text |
| `level` | `HeadingLevel` | `'h2'` | Heading level |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Semantic structure with proper heading hierarchy
- Form labels associated with inputs
- Clear action buttons

## Common Patterns

### Avatar Upload

```tsx
<AccountCardBody>
  <div className="flex items-center g-4">
    <Avatar src={avatarUrl} name={userName} width="6rem" fontSize={6} />
    <div>
      <InputFile
        label="Upload new photo"
        accept="image/*"
        onChange={handleAvatarChange}
      />
      <p className="text-sm text-muted">JPG, PNG. Max 2MB.</p>
    </div>
  </div>
</AccountCardBody>
```

### Two-Factor Authentication

```tsx
<AccountCard>
  <AccountCardHeader>
    <AccountTitle>Two-Factor Authentication</AccountTitle>
  </AccountCardHeader>
  <AccountCardBody>
    {is2FAEnabled ? (
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="success">Enabled</Badge>
          <p className="text-sm">Your account is protected with 2FA.</p>
        </div>
        <Button appearance="outline" onClick={handleDisable2FA}>
          Disable
        </Button>
      </div>
    ) : (
      <div>
        <p>Add an extra layer of security to your account.</p>
        <Button variant="primary" onClick={handleEnable2FA}>
          Enable 2FA
        </Button>
      </div>
    )}
  </AccountCardBody>
</AccountCard>
```

## Strapi Integration

```tsx
<AccountSection>
  {data.sections.map(section => (
    <AccountCard key={section.id}>
      <AccountCardHeader>
        <AccountTitle>{section.title}</AccountTitle>
      </AccountCardHeader>

      <AccountCardBody>
        {section.description && <p className="mb-4">{section.description}</p>}
        <AccountForm>
          {section.fields.map(field => (
            <DynamicField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={(v) => updateField(field.name, v)}
            />
          ))}
        </AccountForm>
      </AccountCardBody>

      <AccountCardFooter>
        {section.actions.map(action => (
          <Button
            key={action.id}
            variant={action.variant}
            onClick={() => handleAction(action)}
          >
            {action.label}
          </Button>
        ))}
      </AccountCardFooter>
    </AccountCard>
  ))}
</AccountSection>
```

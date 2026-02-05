# Auth

Authentication page layout with centered card for login, register, and password reset forms.

## Import

```tsx
import {
  AuthSection,
  AuthCard,
  AuthCardHeader,
  AuthCardBody,
  AuthCardFooter,
  AuthForm,
  AuthTitle,
  AuthLink,
} from '@ui'
```

## Usage

### Login Page

```tsx
<AuthSection>
  <AuthCard>
    <AuthCardHeader>
      <Logo href="/">
        <Image src="/logo.svg" alt="Logo" />
      </Logo>
    </AuthCardHeader>

    <AuthCardBody>
      <AuthTitle>Sign In</AuthTitle>

      <AuthForm onSubmit={handleLogin}>
        <InputText
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputPassword
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <Button type="submit" variant="primary" className="w-full">
          Sign In
        </Button>
      </AuthForm>
    </AuthCardBody>

    <AuthCardFooter>
      <AuthLink asChild>
        <Link href="/forgot-password">Forgot password?</Link>
      </AuthLink>
      <p>
        Don't have an account?{' '}
        <AuthLink asChild>
          <Link href="/register">Sign up</Link>
        </AuthLink>
      </p>
    </AuthCardFooter>
  </AuthCard>
</AuthSection>
```

### Register Page

```tsx
<AuthSection>
  <AuthCard>
    <AuthCardHeader>
      <Logo href="/">
        <Image src="/logo.svg" alt="Logo" />
      </Logo>
    </AuthCardHeader>

    <AuthCardBody>
      <AuthTitle>Create Account</AuthTitle>

      <AuthForm onSubmit={handleRegister}>
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
        <InputPassword
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <InputPassword
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <InputCheckbox
          label="I agree to the Terms of Service"
          checked={agreed}
          onChange={setAgreed}
        />
        <Button type="submit" variant="primary" className="w-full">
          Create Account
        </Button>
      </AuthForm>
    </AuthCardBody>

    <AuthCardFooter>
      <p>
        Already have an account?{' '}
        <AuthLink asChild>
          <Link href="/login">Sign in</Link>
        </AuthLink>
      </p>
    </AuthCardFooter>
  </AuthCard>
</AuthSection>
```

### Forgot Password Page

```tsx
<AuthSection>
  <AuthCard>
    <AuthCardHeader>
      <Logo href="/">
        <Image src="/logo.svg" alt="Logo" />
      </Logo>
    </AuthCardHeader>

    <AuthCardBody>
      <AuthTitle>Reset Password</AuthTitle>
      <p className="text-center mb-4">
        Enter your email and we'll send you a reset link.
      </p>

      <AuthForm onSubmit={handleReset}>
        <InputText
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <Button type="submit" variant="primary" className="w-full">
          Send Reset Link
        </Button>
      </AuthForm>
    </AuthCardBody>

    <AuthCardFooter>
      <AuthLink asChild>
        <Link href="/login">Back to sign in</Link>
      </AuthLink>
    </AuthCardFooter>
  </AuthCard>
</AuthSection>
```

### Two-Factor Authentication

```tsx
<AuthSection>
  <AuthCard>
    <AuthCardBody>
      <AuthTitle>Two-Factor Authentication</AuthTitle>
      <p className="text-center mb-4">
        Enter the 6-digit code from your authenticator app.
      </p>

      <AuthForm onSubmit={handleVerify2FA}>
        <InputText
          label="Verification Code"
          value={code}
          onChange={setCode}
          maxLength={6}
        />
        <Button type="submit" variant="primary" className="w-full">
          Verify
        </Button>
      </AuthForm>
    </AuthCardBody>

    <AuthCardFooter>
      <AuthLink asChild>
        <Link href="/login">Use a different method</Link>
      </AuthLink>
    </AuthCardFooter>
  </AuthCard>
</AuthSection>
```

## Components

### AuthSection

Full-page centered container for auth cards.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | AuthCard content |
| `className` | `string` | - | Additional CSS class |

### AuthCard

Card container for auth form.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `className` | `string` | - | Additional CSS class |

### AuthCardHeader

Top section for logo/branding.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo content |
| `className` | `string` | - | Additional CSS class |

### AuthCardBody

Main content area with form.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Form content |
| `className` | `string` | - | Additional CSS class |

### AuthCardFooter

Bottom section for links.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Links content |
| `className` | `string` | - | Additional CSS class |

### AuthForm

Form wrapper with proper spacing.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Form fields |
| `onSubmit` | `FormEventHandler` | - | Submit handler |
| `className` | `string` | - | Additional CSS class |

### AuthTitle

Page heading.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Title text |
| `level` | `HeadingLevel` | `'h1'` | Heading level |
| `className` | `string` | - | Additional CSS class |

### AuthLink

Styled link for auth pages.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Link content |
| `asChild` | `boolean` | `false` | Render as child element |
| `href` | `string` | - | Link destination |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Semantic `<section>` container
- Form with proper label associations
- Focusable form elements
- Clear visual hierarchy

## Common Patterns

### Social Login

```tsx
<AuthCardBody>
  <AuthTitle>Sign In</AuthTitle>

  <div className="flex flex-col g-2 mb-4">
    <Button appearance="outline" className="w-full">
      <Icon name="google" /> Continue with Google
    </Button>
    <Button appearance="outline" className="w-full">
      <Icon name="github" /> Continue with GitHub
    </Button>
  </div>

  <Divider>or</Divider>

  <AuthForm onSubmit={handleLogin}>
    {/* email/password fields */}
  </AuthForm>
</AuthCardBody>
```

## Strapi Integration

```tsx
<AuthSection>
  <AuthCard>
    {data.logo && (
      <AuthCardHeader>
        <Logo href="/">
          <Image
            src={getMediaUrl(data.logo.url)}
            alt={data.logo.alternativeText}
          />
        </Logo>
      </AuthCardHeader>
    )}

    <AuthCardBody>
      <AuthTitle>{data.title}</AuthTitle>
      {data.description && <p className="text-center mb-4">{data.description}</p>}

      <AuthForm onSubmit={handleSubmit}>
        {data.fields.map(field => (
          <DynamicField key={field.name} field={field} />
        ))}
        <Button type="submit" variant="primary" className="w-full">
          {data.submitLabel}
        </Button>
      </AuthForm>
    </AuthCardBody>

    {data.links && (
      <AuthCardFooter>
        {data.links.map(link => (
          <AuthLink key={link.id} asChild>
            <Link href={link.url}>{link.label}</Link>
          </AuthLink>
        ))}
      </AuthCardFooter>
    )}
  </AuthCard>
</AuthSection>
```

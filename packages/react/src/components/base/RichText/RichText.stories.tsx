import type { Meta, StoryObj } from '@storybook/react'
import hljs from 'highlight.js'
import { RichText } from './RichText'

const meta: Meta<typeof RichText> = {
  title: 'Base/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
    html: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof RichText>

const sampleHtml = `
<h1>Heading 1</h1>
<p>Paragraph with <strong>bold</strong>, <em>italic</em>, <a href="#">link</a>, <code>inline code</code>, <mark>highlight</mark>, <sub>sub</sub> and <sup>sup</sup>.</p>

<h2>Lists</h2>
<ul>
  <li>Item one</li>
  <li>Item two
    <ul><li>Nested item</li></ul>
  </li>
</ul>
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<h2>Blockquote</h2>
<blockquote>
  <p>The only way to do great work is to love what you do.</p>
  <cite>Steve Jobs</cite>
</blockquote>

<h2>Code Block</h2>
<pre><code>function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');</code></pre>

<h2>Table</h2>
<table>
  <thead>
    <tr><th>Name</th><th>Role</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice Martin</td><td>Developer</td><td>Active</td></tr>
    <tr><td>Bob Johnson</td><td>Designer</td><td>Active</td></tr>
    <tr><td>Charlie Brown</td><td>Manager</td><td>On Leave</td></tr>
  </tbody>
</table>

<h2>Image</h2>
<figure>
  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Mountain landscape">
  <figcaption>A beautiful mountain landscape at sunset</figcaption>
</figure>
`

const Variants = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem',
      maxWidth: '800px',
    }}
  >
    <div>
      <p style={{ marginBottom: '1rem', fontWeight: 600 }}>HTML prop</p>
      <RichText html={sampleHtml} highlighter={hljs.highlightElement} />
    </div>
    <div>
      <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
        React children
      </p>
      <RichText>
        <h2>Children Mode</h2>
        <p>
          Pass React elements directly instead of the <code>html</code>{' '}
          prop.
        </p>
        <blockquote>
          <p>This blockquote was rendered as a React element.</p>
          <cite>Anonymous</cite>
        </blockquote>
        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      </RichText>
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

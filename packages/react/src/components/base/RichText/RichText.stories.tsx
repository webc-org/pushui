import type { Meta, StoryObj } from '@storybook/react'
import { RichText } from './RichText'

const meta: Meta<typeof RichText> = {
  title: 'Base/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
    html: {
      control: 'text',
      description: 'HTML content string',
    },
  },
}

export default meta
type Story = StoryObj<typeof RichText>

const sampleHtml = `
<h1>Heading 1</h1>
<p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <a href="#">a link</a>. You can also use <u>underline</u>, <s>strikethrough</s>, and <mark>highlighted text</mark>.</p>

<h2>Heading 2</h2>
<p>Here's some text with <code>inline code</code> and a <kbd>keyboard shortcut</kbd> like <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>

<h3>Heading 3</h3>
<p>Text with <sub>subscript</sub> and <sup>superscript</sup> for chemical formulas like H<sub>2</sub>O or math like x<sup>2</sup>.</p>

<h4>Heading 4</h4>
<p>This paragraph contains an <abbr title="Hypertext Markup Language">HTML</abbr> abbreviation.</p>

<h5>Heading 5</h5>
<p><small>This is small text for fine print or disclaimers.</small></p>

<h6>Heading 6</h6>
<p>The smallest heading level.</p>

<hr>

<h2>Lists</h2>

<h3>Unordered List</h3>
<ul>
  <li>First item</li>
  <li>Second item
    <ul>
      <li>Nested item 1</li>
      <li>Nested item 2
        <ul>
          <li>Deep nested item</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Third item</li>
</ul>

<h3>Ordered List</h3>
<ol>
  <li>First step</li>
  <li>Second step
    <ol>
      <li>Sub-step A</li>
      <li>Sub-step B</li>
    </ol>
  </li>
  <li>Third step</li>
</ol>

<h3>Definition List</h3>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML.</dd>
</dl>

<h2>Blockquote</h2>
<blockquote>
  <p>The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.</p>
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
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Martin</td>
      <td>Developer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>Designer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Charlie Brown</td>
      <td>Manager</td>
      <td>On Leave</td>
    </tr>
  </tbody>
</table>

<h2>Image with Figure</h2>
<figure>
  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Mountain landscape">
  <figcaption>A beautiful mountain landscape at sunset</figcaption>
</figure>

<h2>Address</h2>
<address>
  123 Main Street<br>
  Paris, France 75001<br>
  contact@example.com
</address>
`

export const Default: Story = {
  args: {
    html: sampleHtml,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithChildren: Story = {
  render: () => (
    <RichText style={{ maxWidth: '800px' }}>
      <h2>Using Children Instead of HTML</h2>
      <p>
        You can also pass React children directly instead of using the{' '}
        <code>html</code> prop. This is useful when you want to use React
        components inside the rich text content.
      </p>
      <blockquote>
        <p>This blockquote was rendered as a React element.</p>
      </blockquote>
      <ul>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item three</li>
      </ul>
    </RichText>
  ),
}

export const ArticleExample: Story = {
  args: {
    html: `
      <h1>Introduction to Web Development</h1>
      <p>Web development is the work involved in developing a website for the Internet or an intranet. It can range from developing a simple single static page to complex web applications.</p>
      
      <h2>Frontend Development</h2>
      <p>Frontend development focuses on the <strong>user interface</strong> and <strong>user experience</strong>. The main technologies include:</p>
      <ul>
        <li><strong>HTML</strong> - Structure of web pages</li>
        <li><strong>CSS</strong> - Styling and layout</li>
        <li><strong>JavaScript</strong> - Interactivity and dynamic content</li>
      </ul>
      
      <h2>Backend Development</h2>
      <p>Backend development handles the <em>server-side</em> logic, databases, and application architecture. Popular technologies include:</p>
      <ol>
        <li>Node.js</li>
        <li>Python (Django, Flask)</li>
        <li>PHP</li>
        <li>Ruby on Rails</li>
      </ol>
      
      <blockquote>
        <p>Any application that can be written in JavaScript, will eventually be written in JavaScript.</p>
        <cite>Jeff Atwood</cite>
      </blockquote>
      
      <h2>Code Example</h2>
      <p>Here's a simple <code>Hello World</code> example in JavaScript:</p>
      <pre><code>const greeting = 'Hello, World!';
console.log(greeting);</code></pre>
      
      <hr>
      
      <p><small>Last updated: January 2026</small></p>
    `,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
}

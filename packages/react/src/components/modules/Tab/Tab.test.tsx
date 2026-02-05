import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Tab, TabButton, TabList, TabPanel, TabPanels } from './Tab'

describe('Tab', () => {
  it('renders tabs correctly', () => {
    render(
      <Tab defaultValue="tab1">
        <TabList>
          <TabButton value="tab1">Tab 1</TabButton>
          <TabButton value="tab2">Tab 2</TabButton>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </TabPanels>
      </Tab>
    )

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')
  })

  it('shows default tab content', () => {
    render(
      <Tab defaultValue="tab2">
        <TabList>
          <TabButton value="tab1">Tab 1</TabButton>
          <TabButton value="tab2">Tab 2</TabButton>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </TabPanels>
      </Tab>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()

    render(
      <Tab defaultValue="tab1">
        <TabList>
          <TabButton value="tab1">Tab 1</TabButton>
          <TabButton value="tab2">Tab 2</TabButton>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </TabPanels>
      </Tab>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('sets aria-selected on active tab', async () => {
    const user = userEvent.setup()

    render(
      <Tab defaultValue="tab1">
        <TabList>
          <TabButton value="tab1">Tab 1</TabButton>
          <TabButton value="tab2">Tab 2</TabButton>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </TabPanels>
      </Tab>
    )

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute(
      'aria-selected',
      'false'
    )

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute(
      'aria-selected',
      'false'
    )
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })
})

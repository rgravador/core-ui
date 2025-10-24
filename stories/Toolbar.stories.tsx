import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem } from '../src/components/Toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toolbar style={{ width: '500px' }}>
      <ToolbarButton>New</ToolbarButton>
      <ToolbarButton>Open</ToolbarButton>
      <ToolbarButton>Save</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>Cut</ToolbarButton>
      <ToolbarButton>Copy</ToolbarButton>
      <ToolbarButton>Paste</ToolbarButton>
    </Toolbar>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Toolbar style={{ width: '600px' }}>
      <ToolbarButton>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
          <path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5Z" stroke="currentColor" fill="none"/>
        </svg>
        New
      </ToolbarButton>
      <ToolbarButton>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
          <path d="M5 2V13H10V2H5Z" stroke="currentColor" fill="none"/>
        </svg>
        Open
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77509 3.50251 8.89229L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10768 11.4975C6.22488 11.4474 6.33165 11.3754 6.42161 11.2854L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645Z" fill="currentColor"/>
        </svg>
      </ToolbarButton>
      <ToolbarButton>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M5 3C4.44772 3 4 3.44772 4 4V11C4 11.5523 4.44772 12 5 12H10C10.5523 12 11 11.5523 11 11V4C11 3.44772 10.5523 3 10 3H5Z" stroke="currentColor" fill="none"/>
        </svg>
      </ToolbarButton>
    </Toolbar>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <Toolbar style={{ width: '600px' }}>
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5 8.62787 11.5 9.48128C11.5 10.9137 10.0796 12 8.64627 12H5.10505ZM8.5 8.5C9.70948 8.5 10 9.5 10 10C10 10.5 9.70948 11 8.5 11H6.5V8.5H8.5ZM6.5 4V7H8.5C9.70948 7 10 6 10 5.5C10 5 9.70948 4 8.5 4H6.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5 2V7C5 8.65685 6.34315 10 8 10C9.65685 10 11 8.65685 11 7V2H10V7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7V2H5ZM4 13H12V12H4V13Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single" defaultValue="left">
        <ToolbarToggleItem value="left">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  ),
};

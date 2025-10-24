import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator } from '../src/components/ContextMenu';

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          style={{
            width: '300px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            cursor: 'context-menu',
          }}
        >
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          style={{
            width: '300px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            cursor: 'context-menu',
            backgroundColor: '#f5f5f5',
          }}
        >
          Right click for options
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent style={{ minWidth: '200px' }}>
        <ContextMenuLabel>Navigation</ContextMenuLabel>
        <ContextMenuItem>Home</ContextMenuItem>
        <ContextMenuItem>About</ContextMenuItem>
        <ContextMenuItem>Contact</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Settings</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const FileOperations: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          style={{
            width: '250px',
            padding: '24px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            cursor: 'context-menu',
          }}
        >
          <svg width="48" height="48" viewBox="0 0 15 15" fill="none" style={{ marginBottom: '8px' }}>
            <path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5Z" stroke="currentColor" fill="none"/>
          </svg>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>Document.pdf</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Right click for actions</div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent style={{ minWidth: '180px' }}>
        <ContextMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11Z" stroke="currentColor" fill="none"/>
          </svg>
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77509 3.50251 8.89229L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10768 11.4975C6.22488 11.4474 6.33165 11.3754 6.42161 11.2854L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645Z" fill="currentColor"/>
          </svg>
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M5 3C4.44772 3 4 3.44772 4 4V11C4 11.5523 4.44772 12 5 12H10C10.5523 12 11 11.5523 11 11V4C11 3.44772 10.5523 3 10 3H5Z" stroke="currentColor" fill="none"/>
          </svg>
          Duplicate
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem style={{ color: '#ef4444' }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5Z" fill="currentColor"/>
          </svg>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

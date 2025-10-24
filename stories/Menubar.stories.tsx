import type { Meta, StoryObj } from '@storybook/react';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '../src/components/Menubar';

const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarItem>Reset Zoom</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Full Screen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const Application: Story = {
  render: () => (
    <Menubar style={{ width: '100%' }}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘T</span>
          </MenubarItem>
          <MenubarItem>
            New Window
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘N</span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Open File...
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘O</span>
          </MenubarItem>
          <MenubarItem>
            Open Folder...
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘K ⌘O</span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘S</span>
          </MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘Z</span>
          </MenubarItem>
          <MenubarItem>
            Redo
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⇧⌘Z</span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘X</span>
          </MenubarItem>
          <MenubarItem>
            Copy
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘C</span>
          </MenubarItem>
          <MenubarItem>
            Paste
            <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>⌘V</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Command Palette...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Appearance</MenubarItem>
          <MenubarItem>Editor Layout</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Explorer</MenubarItem>
          <MenubarItem>Search</MenubarItem>
          <MenubarItem>Source Control</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Release Notes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Report Issue</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem disabled>Save (No changes)</MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>Undo (Nothing to undo)</MenubarItem>
          <MenubarItem disabled>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Select All</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

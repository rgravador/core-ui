import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '../src/components/NavigationMenu';

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ padding: '16px', minWidth: '400px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a href="#" style={{ padding: '12px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Product A</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Description for product A</div>
                </a>
                <a href="#" style={{ padding: '12px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Product B</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Description for product B</div>
                </a>
                <a href="#" style={{ padding: '12px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Product C</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Description for product C</div>
                </a>
                <a href="#" style={{ padding: '12px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Product D</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Description for product D</div>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ padding: '16px', minWidth: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" style={{ padding: '8px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  Documentation
                </a>
                <a href="#" style={{ padding: '8px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  Tutorials
                </a>
                <a href="#" style={{ padding: '8px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  Blog
                </a>
                <a href="#" style={{ padding: '8px', textDecoration: 'none', display: 'block', borderRadius: '4px' }}>
                  Community
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const FullFeatured: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ padding: '24px', width: '500px' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
                  Get started with Foundy UI
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  A modern, lightweight UI component library
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a href="#" style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', textDecoration: 'none' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Installation</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    How to install Foundy UI in your project
                  </div>
                </a>
                <a href="#" style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', textDecoration: 'none' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Introduction</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Learn about the core concepts
                  </div>
                </a>
                <a href="#" style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', textDecoration: 'none' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>TypeScript</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Full TypeScript support included
                  </div>
                </a>
                <a href="#" style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', textDecoration: 'none' }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Styling</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Customize components to match your design
                  </div>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: '8px 16px', textDecoration: 'none', display: 'block' }}>
            Examples
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

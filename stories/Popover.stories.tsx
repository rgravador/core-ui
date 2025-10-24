import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from '../src/components/Popover';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';
import { Label } from '../src/components/Label';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ padding: '12px' }}>
          <p style={{ margin: 0 }}>This is a popover component.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Dimensions</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '300px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
              Dimensions
            </h4>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#666' }}>
              Set the dimensions for the layer.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" placeholder="e.g., 100%" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" placeholder="e.g., 25px" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <div style={{ padding: '12px' }}>Popover on top</div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <div style={{ padding: '12px' }}>Popover on right</div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <div style={{ padding: '12px' }}>Popover on bottom</div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <div style={{ padding: '12px' }}>Popover on left</div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const ColorPicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Pick Color</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '250px' }}>
        <div style={{ padding: '16px' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
            Choose Color
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
            {['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788'].map((color) => (
              <button
                key={color}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  backgroundColor: color,
                  border: '2px solid transparent',
                  cursor: 'pointer',
                }}
                onClick={() => console.log(`Selected: ${color}`)}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">View Profile</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '300px' }}>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
              }}
            >
              JD
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>John Doe</div>
              <div style={{ fontSize: '12px', color: '#666' }}>john.doe@example.com</div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
              <strong>Member since:</strong> January 2024
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>
              <strong>Role:</strong> Developer
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

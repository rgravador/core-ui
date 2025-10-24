import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../src/components/Slider';
import { Label } from '../src/components/Label';
import { useState } from 'react';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const WithMinAndMax: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const CustomStep: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div style={{ width: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Label>Volume</Label>
          <span style={{ fontSize: '14px', color: '#666' }}>{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);

    return (
      <div style={{ width: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Label>Price Range</Label>
          <span style={{ fontSize: '14px', color: '#666' }}>
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} min={0} max={100} step={5} />
      </div>
    );
  },
};

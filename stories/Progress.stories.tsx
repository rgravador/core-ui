import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../src/components/Progress';
import { useState, useEffect } from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
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
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Quarter: Story = {
  args: {
    value: 25,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div style={{ width: '300px' }}>
        <Progress value={progress} />
        <p style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center' }}>
          {progress}%
        </p>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', fontWeight: 500 }}>Uploading...</span>
        <span style={{ fontSize: '14px', color: '#666' }}>65%</span>
      </div>
      <Progress value={65} />
    </div>
  ),
};

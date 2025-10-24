import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../src/components/ScrollArea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea style={{ width: '300px', height: '200px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 12px 0' }}>Scroll Area</h3>
        <p style={{ margin: '0 0 12px 0' }}>
          This is a scrollable area component. It provides custom styled scrollbars
          that work across different browsers.
        </p>
        <p style={{ margin: '0 0 12px 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ margin: '0 0 12px 0' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
        <p style={{ margin: 0 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </ScrollArea>
  ),
};

export const LongList: Story = {
  render: () => (
    <ScrollArea style={{ width: '250px', height: '300px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ padding: '16px' }}>
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '8px',
              marginBottom: '4px',
              backgroundColor: i % 2 === 0 ? '#f5f5f5' : 'white',
              borderRadius: '4px',
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea style={{ width: '300px', height: '150px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ width: '600px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              style={{
                minWidth: '100px',
                height: '100px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const Tags: Story = {
  render: () => (
    <ScrollArea style={{ width: '300px', height: '200px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
      <div style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Tags</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            'React', 'TypeScript', 'JavaScript', 'Node.js', 'CSS', 'HTML',
            'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust', 'Swift',
            'Kotlin', 'PHP', 'C#', 'Scala', 'Haskell', 'Elixir', 'Clojure',
          ].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 12px',
                backgroundColor: '#e0e0e0',
                borderRadius: '16px',
                fontSize: '12px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../src/components/Collapsible';
import { Button } from '../src/components/Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
          Show Details
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderTop: 'none', borderRadius: '0 0 4px 4px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This is the collapsible content. It can contain any elements you want.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
          Details (Open by default)
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderTop: 'none', borderRadius: '0 0 4px 4px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This collapsible is open by default using the defaultOpen prop.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Status: {isOpen ? 'Open' : 'Closed'}
          </p>
        </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
              {isOpen ? 'Hide' : 'Show'} Details
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderTop: 'none', borderRadius: '0 0 4px 4px' }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                This is a controlled collapsible. The parent component manages the open state.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <button
            style={{
              width: '100%',
              padding: '12px 16px',
              textAlign: 'left',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            What is Foundy UI?
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div style={{ padding: '12px 16px', fontSize: '14px', color: '#666' }}>
            Foundy UI is a modern, lightweight, and customizable UI component library built on Radix UI.
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <button
            style={{
              width: '100%',
              padding: '12px 16px',
              textAlign: 'left',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Is it free to use?
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div style={{ padding: '12px 16px', fontSize: '14px', color: '#666' }}>
            Yes, Foundy UI is open source and free to use in both personal and commercial projects.
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <button
            style={{
              width: '100%',
              padding: '12px 16px',
              textAlign: 'left',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Does it support TypeScript?
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div style={{ padding: '12px 16px', fontSize: '14px', color: '#666' }}>
            Yes! Foundy UI is built with TypeScript and includes full type definitions.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

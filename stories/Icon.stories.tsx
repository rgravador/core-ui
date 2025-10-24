import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Icon } from '../src/components/Icon';
import * as RadixIcons from '@radix-ui/react-icons';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(RadixIcons),
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 1 },
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'HomeIcon',
    size: 24,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Icon name="StarIcon" size={16} />
      <Icon name="StarIcon" size={24} />
      <Icon name="StarIcon" size={32} />
      <Icon name="StarIcon" size={48} />
      <Icon name="StarIcon" size={64} />
    </div>
  ),
};

export const WithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Icon name="HeartIcon" size={32} color="#ef4444" />
      <Icon name="HeartIcon" size={32} color="#3b82f6" />
      <Icon name="HeartIcon" size={32} color="#22c55e" />
      <Icon name="HeartIcon" size={32} color="#f59e0b" />
      <Icon name="HeartIcon" size={32} color="#a855f7" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    const iconNames = Object.keys(RadixIcons) as Array<keyof typeof RadixIcons>;
    const filteredIcons = iconNames.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const copyIconName = (name: string) => {
      navigator.clipboard.writeText(name);
      setCopiedIcon(name);
      setTimeout(() => setCopiedIcon(null), 2000);
    };

    return (
      <div style={{ width: '800px', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '14px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              outline: 'none',
            }}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
          maxHeight: '600px',
          overflowY: 'auto',
          padding: '8px',
        }}>
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              onClick={() => copyIconName(iconName)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: copiedIcon === iconName ? '#dbeafe' : 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.backgroundColor = '#f0f9ff';
              }}
              onMouseLeave={(e) => {
                if (copiedIcon !== iconName) {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}
            >
              <Icon name={iconName} size={24} />
              <span style={{
                fontSize: '11px',
                color: '#6b7280',
                textAlign: 'center',
                wordBreak: 'break-word',
                lineHeight: '1.3',
              }}>
                {iconName}
              </span>
              {copiedIcon === iconName && (
                <span style={{ fontSize: '10px', color: '#3b82f6' }}>
                  Copied!
                </span>
              )}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#f9fafb',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Total: {filteredIcons.length} icons. Click any icon to copy its name.
        </div>
      </div>
    );
  },
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}>
        <Icon name="PlusIcon" size={16} />
        Add Item
      </button>
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: '#ef4444',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}>
        <Icon name="TrashIcon" size={16} />
        Delete
      </button>
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: '#22c55e',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}>
        <Icon name="CheckIcon" size={16} />
        Save
      </button>
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => {
    const commonIcons = [
      'HomeIcon', 'PersonIcon', 'EnvelopeClosedIcon', 'GearIcon', 'MagnifyingGlassIcon',
      'BellIcon', 'HeartIcon', 'StarIcon', 'ChatBubbleIcon', 'CalendarIcon',
      'FileIcon', 'DownloadIcon', 'UploadIcon', 'Share1Icon', 'LockClosedIcon',
      'LockOpen1Icon', 'EyeOpenIcon', 'EyeNoneIcon', 'PlusIcon', 'MinusIcon',
      'Cross1Icon', 'CheckIcon', 'ChevronLeftIcon', 'ChevronRightIcon', 'ChevronUpIcon',
      'ChevronDownIcon', 'ArrowLeftIcon', 'ArrowRightIcon', 'ArrowUpIcon', 'ArrowDownIcon',
    ];

    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '800px',
      }}>
        {commonIcons.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
            }}
          >
            <Icon name={iconName as keyof typeof RadixIcons} size={28} />
            <span style={{
              fontSize: '11px',
              color: '#6b7280',
              textAlign: 'center',
            }}>
              {iconName.replace('Icon', '')}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

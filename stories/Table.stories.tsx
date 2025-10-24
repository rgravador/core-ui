import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components/Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'active' },
  { id: 7, name: 'Eve Davis', email: 'eve@example.com', role: 'User', status: 'inactive' },
  { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'Editor', status: 'active' },
  { id: 9, name: 'Grace Lee', email: 'grace@example.com', role: 'User', status: 'active' },
  { id: 10, name: 'Henry Zhang', email: 'henry@example.com', role: 'User', status: 'active' },
  { id: 11, name: 'Iris Chen', email: 'iris@example.com', role: 'Editor', status: 'inactive' },
  { id: 12, name: 'Jack Wilson', email: 'jack@example.com', role: 'User', status: 'active' },
];

const columns = [
  { header: 'ID', accessor: 'id' as const, sortable: true, width: '80px' },
  { header: 'Name', accessor: 'name' as const, sortable: true },
  {
    header: 'Email',
    accessor: 'email' as const,
    renderCell: (value: string) => (
      <a href={`mailto:${value}`} style={{ color: 'var(--cui-primary)' }}>
        {value}
      </a>
    ),
  },
  { header: 'Role', accessor: 'role' as const, sortable: true },
  {
    header: 'Status',
    accessor: 'status' as const,
    sortable: true,
    renderCell: (value: string) => (
      <span
        style={{
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: value === 'active' ? 'var(--cui-success)' : 'var(--cui-secondary)',
          color: 'white',
        }}
      >
        {value}
      </span>
    ),
  },
];

const meta = {
  title: 'Components/Table',
  component: Table<User>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    sortable: { control: 'boolean' },
    paginate: { control: 'boolean' },
    selectable: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleData.slice(0, 5),
    columns,
  },
};

export const Sortable: Story = {
  args: {
    data: sampleData.slice(0, 5),
    columns,
    sortable: true,
  },
};

export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns,
    paginate: true,
    pageSize: 5,
  },
};

export const SortableAndPaginated: Story = {
  args: {
    data: sampleData,
    columns,
    sortable: true,
    paginate: true,
    pageSize: 5,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData.slice(0, 5),
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log('Selected rows:', rows),
  },
};

export const AllFeatures: Story = {
  args: {
    data: sampleData,
    columns,
    sortable: true,
    paginate: true,
    pageSize: 5,
    selectable: true,
    onRowSelect: (rows) => console.log('Selected rows:', rows),
    onRowClick: (row) => console.log('Clicked row:', row),
  },
};

export const Loading: Story = {
  args: {
    data: sampleData,
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    emptyMessage: 'No users found',
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    data: [],
    columns,
    emptyMessage: (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
        <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
          No data available
        </div>
        <div style={{ fontSize: '14px', color: 'var(--cui-text-secondary)' }}>
          Try adjusting your filters or adding new items
        </div>
      </div>
    ),
  },
};

export const WithDefaultSort: Story = {
  args: {
    data: sampleData.slice(0, 5),
    columns,
    sortable: true,
    defaultSort: { key: 'name', direction: 'asc' },
  },
};

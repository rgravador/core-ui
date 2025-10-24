import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from './Table';

interface TestData {
  id: number;
  name: string;
  email: string;
}

const mockData: TestData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const columns = [
  { header: 'ID', accessor: 'id' as const },
  { header: 'Name', accessor: 'name' as const },
  { header: 'Email', accessor: 'email' as const },
];

describe('Table', () => {
  it('renders table with data', () => {
    render(<Table data={mockData} columns={columns} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<Table data={mockData} columns={columns} />);

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<Table data={mockData} columns={columns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty message when no data', () => {
    render(<Table data={[]} columns={columns} emptyMessage="No users found" />);
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('handles custom cell rendering', () => {
    const customColumns = [
      {
        header: 'Name',
        accessor: 'name' as const,
        renderCell: (value: string) => <strong data-testid="custom-cell">{value}</strong>,
      },
    ];

    render(<Table data={mockData} columns={customColumns} />);
    expect(screen.getAllByTestId('custom-cell')).toHaveLength(3);
  });

  it('handles row click', async () => {
    const handleRowClick = vi.fn();
    render(<Table data={mockData} columns={columns} onRowClick={handleRowClick} />);

    const row = screen.getByText('John Doe').closest('tr');
    await userEvent.click(row!);

    expect(handleRowClick).toHaveBeenCalledWith(mockData[0], 0);
  });

  it('renders pagination controls when paginate is true', () => {
    render(<Table data={mockData} columns={columns} paginate pageSize={2} />);

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
  });

  it('renders selection checkboxes when selectable is true', () => {
    render(<Table data={mockData} columns={columns} selectable />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(4); // 1 header + 3 rows
  });

  it('handles row selection', async () => {
    const handleRowSelect = vi.fn();
    render(<Table data={mockData} columns={columns} selectable onRowSelect={handleRowSelect} />);

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1]); // Click first row checkbox

    expect(handleRowSelect).toHaveBeenCalledWith([mockData[0]]);
  });
});

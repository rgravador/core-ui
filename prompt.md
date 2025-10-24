# Radix Reusables

## Vibe Coding Prompt: Reusable UI Component Library with Radix UI

**Project Name**: Foundy UI
**Description**: Create a modern, lightweight, and customizable npm package called `foundy-ui` that provides a set of reusable UI components (buttons, inputs, tables, etc.) built on top of Radix UI. The package prioritizes accessibility, composability, and a delightful developer experience (DX), with TypeScript support, theming, and easy integration into React projects. Documentation must be built using **Storybook** to showcase components interactively.

---

## Core Requirements

### 1. Base Framework
- Use **Radix UI** (`@radix-ui/react-*`) as the foundation for all components to ensure accessibility and unstyled, composable primitives.
- Build components with **React** and **TypeScript** for type safety and scalability.
- Support **ES Modules** and **CommonJS** for broad compatibility.
- Bundle the package using **Vite** or **Tsup** for fast builds and tree-shaking.

### 2. Components
The package should include at least the following components:
- **Button**: A customizable button with variants (primary, secondary, danger), sizes (sm, md, lg), and support for icons, loading states, and disabled states.
- **Input**: A flexible text input with support for types (text, password, email), placeholders, error states, and optional icons or labels.
- **Table**: A responsive, feature-rich table with sorting, pagination, row selection, and customizable cell rendering (see detailed specs below).
- (Optional) Add components like **Select**, **Modal**, or **Card** for extensibility.

### 3. Features
- **Theming**: Implement a theming system using CSS variables or a `theme` prop for colors, spacing, and typography customization.
- **Accessibility**: Leverage Radix UI’s ARIA support for full accessibility (keyboard navigation, screen reader compatibility).
- **Customization**: Allow style overrides via `className`, `style`, or an `sx` prop for inline styles (inspired by Theme UI or Emotion).
- **TypeScript**: Provide complete type definitions for components, props, and utilities.
- **Documentation**: Use **Storybook** to create an interactive documentation site showcasing components, their props, and usage examples.

### 4. Technical Details
- **Styling**: Use **CSS-in-JS** (e.g., Emotion or Stitches) or plain CSS with CSS variables. Avoid heavy dependencies like Tailwind unless requested.
- **Testing**: Include unit tests with **Vitest** or **Jest** for core components, focusing on rendering and accessibility.
- **Package Structure**:
foundy-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Table/
│   ├── theme/
│   ├── index.ts
├── tests/
├── stories/
├── package.json
├── README.md
- **Exports**: Support individual component imports (e.g., `foundy-ui/button`) and a single entry point (`foundy-ui`).

### 5. Vibe
- The package should feel **modern**, **minimal**, and **developer-friendly**.
- Prioritize **simplicity**: Components should integrate seamlessly into React projects.
- Ensure a **polished DX**: Strong TypeScript support, clear error messages, intuitive props.
- Draw inspiration from **Chakra UI** or **Mantine**, but keep it lean and built on Radix UI primitives.

### 6. Example Usage
```tsx
import { Button, Input, Table } from 'foundy-ui';
import 'foundy-ui/style.css';

const MyApp = () => (
<div>
  <Button variant="primary" size="lg" isLoading>
    Click Me
  </Button>
  <Input type="email" placeholder="Enter your email" error="Invalid email" />
  <Table
    data={[{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]}
    columns={[
      { header: 'ID', accessor: 'id' },
      { header: 'Name', accessor: 'name' },
    ]}
    sortable
  />
</div>
);
```
7. Deliverables

A functional npm package ready to publish to npm.
A README.md with installation, usage, and API documentation.
A Storybook site for interactive component demos, hosted locally or deployed (e.g., via Vercel).
A package.json with scripts for building, testing, linting, and running Storybook.
Optional: A GitHub Actions workflow for CI/CD (testing and publishing).

8. Stretch Goals

Add dark mode support using CSS variables or a useTheme hook.
Provide a CLI tool to scaffold components or customize themes.
Support React Server Components for Next.js compatibility.
Include utility hooks (e.g., useTableSort) for advanced functionality.


Expanded Table Component
Overview
The Table component is a responsive, accessible, and feature-rich table built on Radix UI primitives (e.g., @radix-ui/react-table or composed from @radix-ui/react-primitive). It supports sorting, pagination, row selection, and custom cell rendering, with a focus on accessibility, TypeScript, and theming.
Core Features

Data Rendering:

Accepts a data prop (array of objects) to render rows.
Uses a columns prop to define headers, accessors, and optional cell renderers.


Sorting:

Supports single- or multi-column sorting (asc/desc).
Displays visual indicators (e.g., arrows) for sortable columns and sort state.


Pagination:

Optional pagination with configurable page sizes (e.g., 10, 25, 50).
Includes navigation controls (Previous/Next buttons, page selector).


Row Selection:

Optional single or multi-row selection via checkboxes or row clicks.
Exposes selected rows via a callback or state.


Accessibility:

Uses Radix UI’s ARIA support for screen-reader compatibility and keyboard navigation.
Ensures headers, cells, and controls are accessible (e.g., Tab for navigation, Enter for sorting).


Customization:

Supports custom cell rendering via a renderCell function.
Allows style overrides via className, style, or sx prop.
Integrates with the package’s theming system (CSS variables or theme object).


Responsiveness:

Supports sticky headers/columns and mobile-friendly layouts (e.g., collapsible columns or card views).


Interactivity:

Adds hover effects on rows.
Supports row click handlers for custom actions.
Includes loading and empty states with customizable UI.



Props
```tsx
tsximport { CSSProperties, ReactNode } from 'react';

export type Column<T> = {
  header: string | ReactNode; // Column header
  accessor: keyof T | string; // Data key or path (e.g., 'name' or 'user.name')
  sortable?: boolean; // Enable sorting
  renderCell?: (value: any, row: T, index: number) => ReactNode; // Custom cell renderer
  width?: string | number; // Column width
  align?: 'left' | 'center' | 'right'; // Text alignment
};

export type TableProps<T> = {
  data: T[]; // Data array
  columns: Column<T>[]; // Column definitions
  sortable?: boolean; // Enable sorting
  paginate?: boolean; // Enable pagination
  pageSize?: number; // Rows per page (default: 10)
  defaultSort?: { key: keyof T | string; direction: 'asc' | 'desc' }; // Initial sort
  selectable?: boolean; // Enable row selection
  onRowSelect?: (selectedRows: T[]) => void; // Selection callback
  onRowClick?: (row: T, index: number) => void; // Row click callback
  loading?: boolean; // Show loading state
  emptyMessage?: string | ReactNode; // Empty state message
  className?: string; // Custom classes
  style?: CSSProperties; // Inline styles
  sx?: Record<string, any>; // Inline style overrides
};
```
Implementation Approach

Radix UI Foundation:

Use @radix-ui/react-table (if available) or build from @radix-ui/react-primitive.
Apply ARIA roles (e.g., role="table", role="row", role="cell").
Use @radix-ui/react-checkbox for row selection and @radix-ui/react-button for pagination controls.


State Management:

Use useState and useMemo for sorting, pagination, and selection state.
Example: Track sortState as { key: string, direction: 'asc' | 'desc' } and selectedRows as a Set or array.


Sorting:

Implement a generic sorting function for strings, numbers, or custom comparators.
Toggle between asc and desc on header clicks for sortable columns.


Pagination:

Track currentPage and pageSize with useState.
Slice data based on pagination state for rendering.
Provide a Pagination sub-component for controls.


Styling:
```css
Use CSS variables for theming (e.g., --table-border-color, --table-hover-bg).
Support Emotion or Stitches for scoped styles, with plain CSS fallback.
Example CSS:
css:root {
  --table-border-color: #e5e7eb;
  --table-hover-bg: #f3f4f6;
  --table-header-bg: #f9fafb;
}
.table {
  border-collapse: collapse;
  width: 100%;
}
.table th {
  background: var(--table-header-bg);
  text-align: left;
  padding: 0.75rem;
}
.table tr:hover {
  background: var(--table-hover-bg);
}
```


TypeScript:

Use generics (<T>) for type-safe data and columns props.
Include JSDoc comments for IDE support.


Sub-Components:

Create composable sub-components: Table.Header, Table.Body, Table.Pagination.
Example:
```tsx
<Table.Root>
  <Table.Header />
  <Table.Body />
  <Table.Pagination />
</Table.Root>



Example Implementation (Simplified)
tsximport { useState, useMemo } from 'react';
import { Button } from '@radix-ui/react-button';
import { Checkbox } from '@radix-ui/react-checkbox';
import './Table.css';

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortable?: boolean;
  paginate?: boolean;
  pageSize?: number;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  header: string;
  accessor: keyof T | string;
  sortable?: boolean;
  renderCell?: (value: any, row: T, index: number) => React.ReactNode;
}

export function Table<T>({ data, columns, sortable, paginate, pageSize = 10, selectable, onRowSelect }: TableProps<T>) {
  const [sortState, setSortState] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const sortedData = useMemo(() => {
    if (!sortState || !sortable) return data;
    return [...data].sort((a, b) => {
      const aValue = getValueByAccessor(a, sortState.key);
      const bValue = getValueByAccessor(b, sortState.key);
      return sortState.direction === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
  }, [data, sortState, sortable]);

  const paginatedData = paginate
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  const getValueByAccessor = (row: T, accessor: string) =>
    accessor.includes('.')
      ? accessor.split('.').reduce((obj, key) => obj[key], row as any)
      : row[accessor as keyof T];

  const handleSort = (key: string) => {
    if (!sortable) return;
    setSortState((prev) => ({
      key,
      direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleRowSelect = (row: T) => {
    if (!selectable) return;
    const newSelected = selectedRows.includes(row)
      ? selectedRows.filter((r) => r !== row)
      : [...selectedRows, row];
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {selectable && (
              <th style={{ width: '50px' }}>
                <Checkbox />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                onClick={() => col.sortable && handleSort(String(col.accessor))}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
              >
                {col.header}
                {col.sortable && sortState?.key === col.accessor && (
                  <span>{sortState.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {selectable && (
                <td>
                  <Checkbox
                    checked={selectedRows.includes(row)}
                    onCheckedChange={() => handleRowSelect(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={String(col.accessor)}>
                  {col.renderCell
                    ? col.renderCell(getValueByAccessor(row, col.accessor), row, rowIndex)
                    : getValueByAccessor(row, col.accessor)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginate && (
        <div className="pagination">
          <Button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>Previous</Button>
          <span>Page {currentPage}</span>
          <Button
            onClick={() => setCurrentPage((p) => (p * pageSize < data.length ? p + 1 : p))}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
```
Storybook Documentation

Create a Storybook setup in the stories/ directory to document all components, with a focus on the Table component.
Include stories for different configurations (e.g., sortable, paginated, selectable, custom cell rendering).

Example Storybook file (stories/Table.stories.tsx):
```tsx
import { Table } from '../src/components/Table';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const columns = [
  { header: 'ID', accessor: 'id', sortable: true },
  { header: 'Name', accessor: 'name', sortable: true },
  {
    header: 'Email',
    accessor: 'email',
    renderCell: (value: string) => <a href={`mailto:${value}`}>{value}</a>,
  },
];

export const Default = () => <Table data={data} columns={columns} />;
export const Sortable = () => <Table data={data} columns={columns} sortable />;
export const Paginated = () => <Table data={data} columns={columns} paginate pageSize={1} />;
export const Selectable = () => (
  <Table data={data} columns={columns} selectable onRowSelect={(rows) => console.log(rows)} />
);
```
Run Storybook with npm run storybook and deploy it (e.g., via Vercel) for public access.
Include controls in Storybook to let developers toggle props (e.g., sortable, paginate) interactively.

Table-Specific Stretch Goals

Sticky Headers/Columns:

Add stickyHeader and stickyColumn props using position: sticky.


Column Resizing:

Support column resizing with drag handles (e.g., using react-resizable).


Virtualization:

Add support for large datasets with @tanstack/react-virtual.


Export Functionality:

Include a button to export table data as CSV or JSON.


Mobile Optimization:

Support a responsiveMode prop for card-based layouts on mobile.



Example Usage
```tsx
import { Table } from 'foundy-ui';
import 'foundy-ui/style.css';

interface User {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const columns = [
  { header: 'ID', accessor: 'id', sortable: true },
  { header: 'Name', accessor: 'name', sortable: true },
  {
    header: 'Email',
    accessor: 'email',
    renderCell: (value: string) => <a href={`mailto:${value}`}>{value}</a>,
  },
];

const App = () => (
  <Table
    data={data}
    columns={columns}
    sortable
    paginate
    pageSize={2}
    selectable
    onRowSelect={(selected) => console.log('Selected:', selected)}
    sx={{ border: '1px solid var(--table-border-color)' }}
  />
);
```
Styling
```css
.table-container {
  font-family: system-ui, sans-serif;
  max-width: 100%;
  overflow-x: auto;
}

.table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid var(--table-border-color, #e5e7eb);
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--table-border-color, #e5e7eb);
}

.table th {
  background: var(--table-header-bg, #f9fafb);
  font-weight: 600;
}

.table tr:hover {
  background: var(--table-hover-bg, #f3f4f6);
}

.pagination {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
}
```
Getting Started

Initialize the project: pnpm init or npm init.
Install dependencies: @radix-ui/react-*, react, typescript, vite or tsup, @emotion/react (or similar).
Set up Storybook: npx storybook init.
Implement components, starting with Table, using Radix UI primitives.
Test locally with a sample React app.
Document in Storybook and publish to npm.

Inspiration

Radix UI docs: https://www.radix-ui.com/
Chakra UI and Mantine for DX and component patterns.
Keep the vibe clean, modern, and accessible—Radix UI with a touch of magic.
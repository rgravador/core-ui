# Core UI

A modern, lightweight, and customizable UI component library built on top of Radix UI. Core UI provides accessible, composable components with TypeScript support and a delightful developer experience.

## Features

- **Accessible**: Built on Radix UI primitives with full ARIA support
- **TypeScript**: Complete type definitions for all components
- **Customizable**: Theme system with CSS variables and easy style overrides
- **Modern**: Clean, minimal design with dark mode support
- **Developer-Friendly**: Intuitive API, comprehensive documentation, and Storybook demos
- **Tree-Shakeable**: Import only what you need for optimal bundle size

## Installation

```bash
npm install core-ui
# or
yarn add core-ui
# or
pnpm add core-ui
```

## Usage

Import the components and styles:

```tsx
import { Button, Input, Table } from 'core-ui';
import 'core-ui/style.css';

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      <Input type="email" placeholder="Enter your email" />
    </div>
  );
}
```

### Individual Component Imports

You can also import components individually to reduce bundle size:

```tsx
import { Button } from 'core-ui/button';
import { Input } from 'core-ui/input';
import { Table } from 'core-ui/table';
```

## Components

### Button

A customizable button component with multiple variants, sizes, and states.

```tsx
import { Button } from 'core-ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>

// With Icons
<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<Icon />}>With Right Icon</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'danger'` - Button style variant (default: 'primary')
- `size?: 'sm' | 'md' | 'lg'` - Button size (default: 'md')
- `isLoading?: boolean` - Show loading spinner (default: false)
- `leftIcon?: ReactNode` - Icon to display on the left
- `rightIcon?: ReactNode` - Icon to display on the right
- `className?: string` - Additional CSS classes
- `style?: CSSProperties` - Inline styles
- `sx?: Record<string, any>` - Style overrides
- All standard HTML button attributes

### Input

A flexible input component with support for labels, helper text, error states, and icons.

```tsx
import { Input } from 'core-ui';

// Basic
<Input placeholder="Enter text..." />

// With Label and Helper Text
<Input
  label="Email Address"
  helperText="We'll never share your email"
  type="email"
/>

// With Error
<Input
  label="Username"
  error="Username is required"
/>

// With Icons
<Input leftIcon={<SearchIcon />} placeholder="Search..." />
<Input rightIcon={<EyeIcon />} type="password" />

// Sizes
<Input size="sm" />
<Input size="md" />
<Input size="lg" />
```

**Props:**
- `size?: 'sm' | 'md' | 'lg'` - Input size (default: 'md')
- `error?: string | boolean` - Error message or error state
- `label?: string` - Input label
- `helperText?: string` - Helper text below input
- `leftIcon?: ReactNode` - Icon on the left side
- `rightIcon?: ReactNode` - Icon on the right side
- `className?: string` - Additional CSS classes
- `wrapperClassName?: string` - CSS classes for wrapper
- `style?: CSSProperties` - Inline styles
- `sx?: Record<string, any>` - Style overrides
- All standard HTML input attributes

### Table

A feature-rich table component with sorting, pagination, row selection, and custom rendering.

```tsx
import { Table } from 'core-ui';

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
    renderCell: (value: string) => (
      <a href={`mailto:${value}`}>{value}</a>
    ),
  },
];

// Basic Table
<Table data={data} columns={columns} />

// With All Features
<Table
  data={data}
  columns={columns}
  sortable
  paginate
  pageSize={10}
  selectable
  onRowSelect={(rows) => console.log(rows)}
  onRowClick={(row) => console.log(row)}
/>
```

**Props:**
- `data: T[]` - Array of data objects
- `columns: Column<T>[]` - Column definitions
- `sortable?: boolean` - Enable sorting (default: false)
- `paginate?: boolean` - Enable pagination (default: false)
- `pageSize?: number` - Rows per page (default: 10)
- `defaultSort?: { key: string, direction: 'asc' | 'desc' }` - Initial sort state
- `selectable?: boolean` - Enable row selection (default: false)
- `onRowSelect?: (rows: T[]) => void` - Selection callback
- `onRowClick?: (row: T, index: number) => void` - Row click callback
- `loading?: boolean` - Show loading state (default: false)
- `emptyMessage?: string | ReactNode` - Message when no data
- `className?: string` - Additional CSS classes
- `style?: CSSProperties` - Inline styles
- `sx?: Record<string, any>` - Style overrides

**Column Definition:**
```tsx
interface Column<T> {
  header: string | ReactNode;
  accessor: keyof T | string;
  sortable?: boolean;
  renderCell?: (value: any, row: T, index: number) => ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}
```

## Theming

Core UI uses CSS variables for theming. You can customize the theme by overriding these variables:

```css
:root {
  --cui-primary: #3b82f6;
  --cui-secondary: #6b7280;
  --cui-danger: #ef4444;
  --cui-success: #10b981;

  --cui-text-primary: #111827;
  --cui-text-secondary: #6b7280;

  --cui-bg-primary: #ffffff;
  --cui-bg-secondary: #f9fafb;

  --cui-border-primary: #e5e7eb;
  --cui-border-focus: #3b82f6;

  /* And many more... */
}
```

### Dark Mode

Enable dark mode by setting the `data-theme` attribute:

```tsx
import { applyTheme } from 'core-ui';

// Apply dark theme
applyTheme('dark');

// Or manually
document.documentElement.setAttribute('data-theme', 'dark');
```

## Storybook

View interactive component demos and documentation:

```bash
npm run storybook
```

## Development

```bash
# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Build the library
npm run build

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Lint
npm run lint
```

## Browser Support

Core UI supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

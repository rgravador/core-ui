import { useState } from 'react';
import { Button, Input, Table } from '../../src';
import '../../src/style.css';
import './App.css';

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
];

function App() {
  const [email, setEmail] = useState('');
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Button clicked!');
    }, 2000);
  };

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

  return (
    <div className="app">
      <header className="app-header">
        <h1>Core UI - Component Library</h1>
        <p>A modern, accessible UI component library built on Radix UI</p>
      </header>

      <main className="app-main">
        <section className="section">
          <h2>Buttons</h2>
          <div className="button-grid">
            <Button variant="primary" onClick={handleButtonClick} isLoading={isLoading}>
              Primary Button
            </Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
            <Button leftIcon={<span>👈</span>}>With Icon</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>

        <section className="section">
          <h2>Inputs</h2>
          <div className="input-grid">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="We'll never share your email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              helperText="Must be at least 8 characters"
            />
            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<span>🔍</span>}
            />
            <Input
              label="With Error"
              error="This field is required"
              placeholder="Required field"
            />
          </div>
        </section>

        <section className="section">
          <h2>Table</h2>
          <div className="table-container">
            <Table
              data={sampleData}
              columns={columns}
              sortable
              paginate
              pageSize={5}
              selectable
              onRowSelect={(rows) => setSelectedRows(rows)}
              onRowClick={(row) => console.log('Clicked row:', row)}
            />
            {selectedRows.length > 0 && (
              <div className="selected-info">
                Selected {selectedRows.length} row(s)
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with Core UI - Modern, Accessible, Customizable</p>
      </footer>
    </div>
  );
}

export default App;

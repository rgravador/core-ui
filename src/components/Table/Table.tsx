import React, { useState, useMemo, CSSProperties } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import './Table.css';

export interface Column<T> {
  header: string | React.ReactNode;
  accessor: keyof T | string;
  sortable?: boolean;
  renderCell?: (value: any, row: T, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortable?: boolean;
  paginate?: boolean;
  pageSize?: number;
  defaultSort?: { key: keyof T | string; direction: 'asc' | 'desc' };
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onRowClick?: (row: T, index: number) => void;
  loading?: boolean;
  emptyMessage?: string | React.ReactNode;
  className?: string;
  style?: CSSProperties;
  sx?: Record<string, any>;
}

const getValueByAccessor = <T,>(row: T, accessor: string): any => {
  if (accessor.includes('.')) {
    return accessor.split('.').reduce((obj: any, key) => obj?.[key], row);
  }
  return row[accessor as keyof T];
};

export function Table<T extends Record<string, any>>({
  data,
  columns,
  sortable = false,
  paginate = false,
  pageSize = 10,
  defaultSort,
  selectable = false,
  onRowSelect,
  onRowClick,
  loading = false,
  emptyMessage = 'No data available',
  className = '',
  style,
  sx,
}: TableProps<T>) {
  const [sortState, setSortState] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    defaultSort ? { key: String(defaultSort.key), direction: defaultSort.direction } : null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortState || !sortable) return data;

    return [...data].sort((a, b) => {
      const aValue = getValueByAccessor(a, sortState.key);
      const bValue = getValueByAccessor(b, sortState.key);

      if (aValue === bValue) return 0;

      const comparison = aValue > bValue ? 1 : -1;
      return sortState.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortState, sortable]);

  // Pagination
  const paginatedData = paginate
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  const totalPages = Math.ceil(sortedData.length / pageSize);

  // Handle sort
  const handleSort = (key: string) => {
    if (!sortable) return;
    setSortState((prev) => ({
      key,
      direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Handle row selection
  const handleRowSelect = (index: number) => {
    if (!selectable) return;

    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);

    const selectedData = Array.from(newSelected).map((i) => sortedData[i]);
    onRowSelect?.(selectedData);
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (!selectable) return;

    if (checked) {
      const allIndices = new Set(paginatedData.map((_, i) => (currentPage - 1) * pageSize + i));
      setSelectedRows(allIndices);
      const selectedData = Array.from(allIndices).map((i) => sortedData[i]);
      onRowSelect?.(selectedData);
    } else {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    }
  };

  const allSelected = paginatedData.length > 0 &&
    paginatedData.every((_, i) => selectedRows.has((currentPage - 1) * pageSize + i));

  const someSelected = paginatedData.some((_, i) => selectedRows.has((currentPage - 1) * pageSize + i)) && !allSelected;

  const classes = ['cui-table-container', className].filter(Boolean).join(' ');
  const mergedStyle = { ...style, ...sx };

  if (loading) {
    return (
      <div className={classes} style={mergedStyle}>
        <div className="cui-table-loading">
          <div className="cui-table-spinner" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={classes} style={mergedStyle}>
        <div className="cui-table-empty">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={classes} style={mergedStyle}>
      <div className="cui-table-scroll">
        <table className="cui-table">
          <thead>
            <tr>
              {selectable && (
                <th className="cui-table-th cui-table-th--checkbox">
                  <Checkbox.Root
                    className="cui-checkbox"
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all rows"
                  >
                    <Checkbox.Indicator className="cui-checkbox-indicator">
                      {someSelected ? '−' : '✓'}
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                </th>
              )}
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`cui-table-th ${col.sortable !== false && sortable ? 'cui-table-th--sortable' : ''}`}
                  onClick={() => col.sortable !== false && handleSort(String(col.accessor))}
                  style={{
                    width: col.width,
                    textAlign: col.align || 'left',
                    cursor: col.sortable !== false && sortable ? 'pointer' : 'default',
                  }}
                >
                  <div className="cui-table-th-content">
                    {col.header}
                    {col.sortable !== false && sortable && sortState?.key === col.accessor && (
                      <span className="cui-table-sort-icon">
                        {sortState.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => {
              const globalIndex = (currentPage - 1) * pageSize + rowIndex;
              const isSelected = selectedRows.has(globalIndex);

              return (
                <tr
                  key={rowIndex}
                  className={`cui-table-tr ${isSelected ? 'cui-table-tr--selected' : ''}`}
                  onClick={() => onRowClick?.(row, globalIndex)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {selectable && (
                    <td className="cui-table-td cui-table-td--checkbox">
                      <Checkbox.Root
                        className="cui-checkbox"
                        checked={isSelected}
                        onCheckedChange={() => handleRowSelect(globalIndex)}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Select row ${globalIndex + 1}`}
                      >
                        <Checkbox.Indicator className="cui-checkbox-indicator">
                          ✓
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </td>
                  )}
                  {columns.map((col, colIndex) => {
                    const value = getValueByAccessor(row, String(col.accessor));
                    return (
                      <td
                        key={colIndex}
                        className="cui-table-td"
                        style={{ textAlign: col.align || 'left' }}
                      >
                        {col.renderCell ? col.renderCell(value, row, globalIndex) : value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {paginate && totalPages > 1 && (
        <div className="cui-table-pagination">
          <button
            className="cui-table-pagination-button"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="cui-table-pagination-info">
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <span className="cui-table-pagination-count">
              ({sortedData.length} total rows)
            </span>
          </div>
          <button
            className="cui-table-pagination-button"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

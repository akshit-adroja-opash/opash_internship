import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';

import { useState } from 'react';
import data from './assets/data.json';
import './App.css';

const columns = [
  {
    accessorKey: 'id',
    header: 'Id',
    enableSorting: true,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    enableColumnFilter: true,  // Added column filter here
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "salary",
    header: "Salary",
    enableSorting: true,
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
    cell: ({ getValue }: { getValue: () => string }) => {
      const value = getValue();
      if (!value) return "-";
      return new Date(value).toLocaleDateString("en-IN");
    },
  },
];


const App = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,

    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  });

  return (

    
    <div className="container">
            <h1>Welcome to the Tables & Pagination App</h1>

            <div className='search-table'>
        <input
          type="text"
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          
        />
        <button onClick={() => setGlobalFilter('')}>Clear</button> 
      </div>
      <table>
        
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                  
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No results.</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className="pagination">
        <button onClick={()=> table.setPageIndex(0)}>First</button>
        <button onClick={() => table.previousPage()}  disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
        <button onClick={()=> table.setPageIndex(table.getPageCount() - 1)}>Last</button>
      </div>

    </div>
  );
};

export default App;

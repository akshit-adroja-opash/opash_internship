import React from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
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
  cell: ({ getValue }) => {
    const value = getValue();
    if (!value) return "-";
    return new Date(value).toLocaleDateString("en-IN");
  },
}

];

const App = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),

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
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
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

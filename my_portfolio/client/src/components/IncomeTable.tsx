import React from 'react';
import type { Income } from '../types/finance';
import './IncomeTable.css';

interface Props {
  incomes: Income[];
  onEdit: (income: Income) => void;
  onDelete: (id: string) => void;
}

const IncomeTable: React.FC<Props> = React.memo(({ incomes, onEdit, onDelete }) => {
  return (
    <div className="income-table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income) => (
            <tr key={income._id}>
              <td>{income.title}</td>
              <td>₹{income.amount}</td>
              <td>{income.category}</td>
              <td>{new Date(income.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEdit(income)}>Edit</button>
                <button onClick={() => onDelete(income._id!)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default IncomeTable;

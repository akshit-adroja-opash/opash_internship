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
    <div className="w-full overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#aaabaf] text-xs uppercase tracking-widest border-b border-[#46484b]/10">
            <th className="pb-4 font-semibold">Date & Source</th>
            <th className="pb-4 font-semibold">Amount</th>
            <th className="pb-4 font-semibold text-center">Trend</th>
            <th className="pb-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#46484b]/5">
          {incomes.map((income) => (
            <tr key={income._id} className="hover:bg-[#111417] transition-colors group">
              <td className="py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#23262a] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#5bff49]">
                      {income.category === 'salary' ? 'work' : 'database'}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#f9f9fd]">{new Date(income.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                    <p className="text-xs text-[#aaabaf]">{income.title}</p>
                  </div>
                </div>
              </td>
              <td className="py-6">
                <p className="font-['Manrope'] font-bold text-lg text-[#f9f9fd]">
$
                </p>
                <span className="text-[10px] text-[#5bff49] flex items-center gap-1 capitalize">
                  <span className="material-symbols-outlined text-[10px]">expand_less</span>
                  {income.category}
                </span>
              </td>
              <td className="py-6">
                <div className="flex justify-center">
                  <div className="flex gap-1 items-end h-6">
                    <div className="w-1 h-3 bg-[#5bff49]/20"></div>
                    <div className="w-1 h-2 bg-[#5bff49]/20"></div>
                    <div className="w-1 h-4 bg-[#5bff49]/20"></div>
                    <div className="w-1 h-6 bg-[#5bff49]"></div>
                  </div>
                </div>
              </td>
              <td className="py-6">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(income)}
                    className="p-2 hover:bg-[#23262a] rounded-lg text-[#aaabaf] hover:text-[#5bff49] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                  <button 
                    onClick={() => onDelete(income._id!)}
                    className="p-2 hover:bg-[#23262a] rounded-lg text-[#aaabaf] hover:text-[#ff7351] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default IncomeTable;

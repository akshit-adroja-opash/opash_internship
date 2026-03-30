/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeChart from '../components/IncomeChart';
import IncomeTable from '../components/IncomeTable';
import { useAuth } from '../context/AuthContext';
import type { Income } from '../types/finance';
import { getIncomes } from '../services/api';

const Dashboard: React.FC = () => {
  const { token  } = useAuth();
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [selectedIncome, setSelectedIncome] = useState<Income | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate Stats
  const totalValue = incomes.reduce((sum, i) => sum + i.amount, 0);
  const highestSalary = incomes.length > 0 
    ? Math.max(...incomes.map(i => i.amount)) 
    : 0;

  useEffect(() => {
    if (!token) return;

    const fetchIncomes = async () => {
      try {
        setLoading(true);
        const data = await getIncomes(token);
        setIncomes(data.incomes || data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch incomes');
      } finally {
        setLoading(false);
      }
    };

    fetchIncomes();
  }, [token]);

  const handleAddSuccess = () => {
    setSelectedIncome(null);
    setIsModalOpen(false);
    // Refetch incomes
    if (token) {
      getIncomes(token).then(data => setIncomes(data.incomes || data));
    }
  };

  const handleEdit = (income: Income) => {
    setSelectedIncome(income);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this income?')) return;
    
    try {
      await fetch(`/api/income/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setIncomes(prev => prev.filter(i => i._id !== id));
      if (selectedIncome?._id === id) setSelectedIncome(null);
    } catch (err) {
      alert('Delete failed');
    }
  };
  
  if (!token) {
    return <div className="flex items-center justify-center min-h-[400px] text-white">Please log in to view dashboard.</div>;
  }

  return (
    <div className="font-body text-[#f9f9fd]">
      {/* Modal Overlay */}
      {(isModalOpen || selectedIncome) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="bg-[#171a1d] border border-[#46484b]/30 w-full max-w-lg rounded-2xl shadow-2xl shadow-black/50 overflow-hidden font-['Manrope']">
            <div className="flex items-center justify-between px-8 py-6 border-b border-[#46484b]/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-6 bg-[#5bff49] rounded-full"></div>
                <h2 className="text-xl font-extrabold tracking-tight text-[#f9f9fd]">
                  {selectedIncome ? 'Edit Salary Entry' : 'Add Salary Entry'}
                </h2>
              </div>
              <button 
                onClick={() => { setIsModalOpen(false); setSelectedIncome(null); }}
                className="p-2 text-[#aaabaf] hover:text-[#f9f9fd] hover:bg-[#23262a] rounded-lg transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <IncomeForm 
              token={token} 
              selectedIncome={selectedIncome} 
              onSuccess={handleAddSuccess} 
              onCancel={() => { setIsModalOpen(false); setSelectedIncome(null); }}
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h4 className="text-[#aaabaf] font-medium mb-1 flex items-center gap-2">
              Total Portfolio Value
              <span className="material-symbols-outlined text-sm">info</span>
            </h4>
            <h1 className="text-6xl font-extrabold tracking-tighter text-[#f9f9fd] font-['Manrope'] leading-tight">
              $${totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h1>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="bg-[#006d32] text-[#e4ffe3] px-4 py-2 rounded-full flex items-center gap-2 font-bold text-lg">
              <span className="material-symbols-outlined font-bold">arrow_upward</span>
              +12.5% Improvement
            </div>
            <p className="text-[#aaabaf] text-sm">Last updated: Today, 09:41 AM</p>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart Section */}
        <div className="col-span-12 lg:col-span-8 bg-[#171a1d] rounded-2xl p-8 border border-[#23262a]/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5bff49]/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
            <h3 className="text-xl font-bold text-[#f9f9fd] font-['Manrope']">Salary Projection & Trends</h3>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#5bff49] text-[#003700] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
               <span className="material-symbols-outlined text-sm">add</span> Add New
            </button>
          </div>
          <IncomeChart incomes={incomes} />
        </div>

        {/* Stats Side Grid */}
        <div className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-6">
          <div className="bg-[#1d2024] rounded-2xl p-6 border-l-4 border-[#5bff49]/40 hover:bg-[#292c31] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#aaabaf] text-xs font-bold uppercase tracking-widest">Highest Salary</span>
              <span className="material-symbols-outlined text-[#5bff49] text-xl">trophy</span>
            </div>
            <h3 className="text-2xl font-bold font-['Manrope']">$${highestSalary.toLocaleString('en-IN')}</h3>
            <p className="text-xs text-[#aaabaf] mt-1">Achieved recently • Senior Engineer</p>
          </div>
          <div className="bg-[#1d2024] rounded-2xl p-6 border-l-4 border-[#5bff49]/40 hover:bg-[#292c31] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#aaabaf] text-xs font-bold uppercase tracking-widest">Growth Rate</span>
              <span className="material-symbols-outlined text-[#5bff49] text-xl">auto_graph</span>
            </div>
            <h3 className="text-2xl font-bold font-['Manrope']">4.2% / mo</h3>
          </div>
          <div className="bg-[#1d2024] rounded-2xl p-6 border-l-4 border-[#00e1ef]/40 hover:bg-[#292c31] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#aaabaf] text-xs font-bold uppercase tracking-widest">Next Appraisal</span>
              <span className="material-symbols-outlined text-[#00e1ef] text-xl">event_repeat</span>
            </div>
            <h3 className="text-2xl font-bold font-['Manrope']">Mar 15, 2024</h3>
          </div>
        </div>

        {/* Management Table Section */}
        <div className="col-span-12 bg-[#171a1d] rounded-2xl p-8 border border-[#23262a]/30 overflow-hidden">
          <h3 className="text-xl font-bold text-[#f9f9fd] mb-8 font-['Manrope']">Recent Remunerations</h3>
          {loading ? (
            <div className="flex items-center justify-center py-12 text-[#aaabaf]">
              <span className="material-symbols-outlined animate-spin mr-2">refresh</span>
              Syncing Terminal...
            </div>
          ) : error ? (
            <div className="text-[#ff7351] text-center py-12 bg-[#ff7351]/5 rounded-xl border border-[#ff7351]/20">
              {error}
            </div>
          ) : (
            <IncomeTable 
              incomes={incomes.slice(0, 10)} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

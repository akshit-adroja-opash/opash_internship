import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Transactions: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Mock data reflecting your new UI requirements
  const transactionData = [
    { id: 992831, status: 'completed', date: 'Oct 24, 2023', time: '14:32 PM', desc: 'Salary Deposit - Google Cloud', subDesc: 'ACH Transfer', category: 'Income', amount: '+$12,450.00', type: 'positive' },
    { id: 992832, status: 'pending', date: 'Oct 23, 2023', time: '09:15 AM', desc: 'Stock Purchase - NVDA', subDesc: 'Market Order • 12 Shares', category: 'Trade', amount: '-$5,210.45', type: 'negative' },
    { id: 992833, status: 'completed', date: 'Oct 22, 2023', time: '18:45 PM', desc: 'Dividend Yield - AAPL', subDesc: 'Quarterly Payout', category: 'Income', amount: '+$42.18', type: 'positive' },
    { id: 992834, status: 'failed', date: 'Oct 21, 2023', time: '11:02 AM', desc: 'Withdrawal to Chase Bank', subDesc: 'Rejected by Provider • Ref: 8820', category: 'Transfer', amount: '$1,000.00', type: 'neutral', struck: true },
    { id: 992835, status: 'completed', date: 'Oct 20, 2023', time: '08:00 AM', desc: 'Internal Transfer', subDesc: 'From Savings to Trade Account', category: 'Transfer', amount: '$0.00', type: 'neutral' },
  ];

  const content = (
    <div className="pt-24 pb-32 md:pb-12 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col gap-10 bg-surface text-on-surface">
      {/* Hero Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface">Transaction History</h1>
          <p className="text-on-surface-variant font-body">Review your institutional-grade flow of capital.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2.5 rounded-xl border border-outline-variant/15 hover:bg-surface-bright transition-all active:scale-95">
            <span className="material-symbols-outlined text-primary text-xl">file_download</span>
            <span className="text-sm font-semibold uppercase tracking-wider">Export CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container px-6 py-2.5 rounded-xl text-on-primary font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span>
            <span className="text-sm uppercase tracking-widest">New Entry</span>
          </button>
        </div>
      </section>

      {/* Filters & Controls Bento */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 bg-surface-container rounded-2xl p-4 flex flex-wrap items-center gap-2 border border-outline-variant/10">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2">Filter By</span>
          <button className="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-sm transition-all">All</button>
          {['Deposits', 'Withdrawals', 'Trades', 'Salary'].map((filter) => (
            <button key={filter} className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface hover:text-primary transition-all text-sm font-medium">
              {filter}
            </button>
          ))}
        </div>
        <div className="bg-surface-container rounded-2xl p-4 flex items-center justify-between border border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">calendar_month</span>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Timeframe</p>
              <p className="text-sm font-bold">Last 30 Days</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
        </div>
      </section>

      {/* Transaction Table Canvas */}
      <section className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                {['Status', 'Date & Time', 'Description', 'Category', 'Amount', 'Actions'].map((head, i) => (
                  <th key={head} className={`py-5 px-6 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ${i > 3 ? 'text-right' : ''}`}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {transactionData.map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-container-highest/50 transition-colors group cursor-pointer">
                  <td className="py-6 px-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tx.status === 'completed' ? 'bg-secondary-container/20 text-primary' : 
                      tx.status === 'failed' ? 'bg-error-container/20 text-error' : 'bg-surface-container-highest text-on-surface-variant'
                    }`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {tx.status === 'completed' ? 'check_circle' : tx.status === 'failed' ? 'cancel' : 'schedule'}
                      </span>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="text-sm font-bold text-on-surface">{tx.date}</p>
                    <p className="text-xs text-on-surface-variant">{tx.time}</p>
                  </td>
                  <td className="py-6 px-6">
                    <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{tx.desc}</p>
                    <p className="text-xs text-on-surface-variant">{tx.subDesc} • ID: {tx.id}</p>
                  </td>
                  <td className="py-6 px-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      tx.category === 'Income' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-highest text-on-surface-variant'
                    }`}>
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <p className={`text-lg font-bold font-headline ${
                      tx.type === 'positive' ? 'text-primary' : tx.struck ? 'text-on-surface-variant line-through' : 'text-on-surface'
                    }`}>
                      {tx.amount}
                    </p>
                  </td>
                  <td className="py-6 px-6 text-right whitespace-nowrap">
                    <div className="flex justify-end gap-3">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="p-6 bg-surface-container-low/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Showing 1-5 of 482 transactions</p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary border border-outline-variant/10">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold text-sm">1</button>
            <button className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary border border-outline-variant/10">2</button>
            <button className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary border border-outline-variant/10">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10">
          <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Net Inflow (30d)</h3>
          <p className="text-3xl font-black font-headline text-primary">+$24,812.20</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-on-secondary-container bg-secondary-container px-2 py-1 rounded-md w-fit">
            <span className="material-symbols-outlined text-sm">trending_up</span> 12% increase
          </div>
        </div>
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10">
          <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Taxable Events</h3>
          <p className="text-3xl font-black font-headline text-on-surface">142</p>
          <p className="mt-2 text-xs text-on-surface-variant">Estimated liability: $1,420.00</p>
        </div>
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Audit Health</h3>
            <p className="text-3xl font-black font-headline text-secondary">Verified</p>
            <p className="mt-2 text-xs text-on-surface-variant">Last verified: 2h ago</p>
          </div>
          <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-primary/5 group-hover:text-primary/10 transition-colors">verified_user</span>
        </div>
      </section>
    </div>
  );

  return <Layout>{content}</Layout>;
};

export default Transactions;
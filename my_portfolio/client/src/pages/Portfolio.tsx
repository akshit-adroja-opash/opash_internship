import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container min-h-screen">
      {/* Hero Section */}
      <header className="mb-16 flex flex-col lg:flex-row justify-between items-end gap-8">
        <div className="w-full lg:w-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#5bff49] animate-pulse"></span>
            <h2 className="text-[#aaabaf] font-medium text-sm tracking-widest uppercase">Total Portfolio Value</h2>
          </div>
          <h1 className="font-bold text-[3.5rem] leading-none tracking-tighter text-white mb-2">$1,18,27,500</h1>
          <div className="flex items-center gap-3">
            <span className="bg-[#5bff49]/20 text-[#5bff49] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              12.5%
            </span>
            <span className="text-[#aaabaf] text-sm">+$13,13,475 this month</span>
          </div>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <button className="px-8 py-3.5 bg-gradient-to-r from-[#5bff49] to-[#4ad13e] text-black font-bold rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-[#5bff49]/30">
            <span className="material-symbols-outlined text-xl">add_circle</span>
            Buy Asset
          </button>
          <button className="px-8 py-3.5 bg-[#171a1d] text-[#5bff49] font-bold rounded-xl active:scale-95 transition-transform border border-[#23262a] hover:border-[#5bff49]/50">
            Sell Asset
          </button>
        </div>
      </header>

      {/* Performance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Performance Chart */}
        <section className="lg:col-span-8 bg-[#171a1d]/80 backdrop-blur-lg border border-[#23262a]/50 rounded-2xl p-8 overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-bold text-white">Performance History</h3>
            <div className="flex gap-1 bg-[#23262a] p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-bold rounded-md text-[#aaabaf] hover:text-white transition-colors">1W</button>
              <button className="px-3 py-1 text-xs font-bold rounded-md bg-[#5bff49] text-black">1M</button>
              <button className="px-3 py-1 text-xs font-bold rounded-md text-[#aaabaf] hover:text-white transition-colors">3M</button>
              <button className="px-3 py-1 text-xs font-bold rounded-md text-[#aaabaf] hover:text-white transition-colors">1Y</button>
              <button className="px-3 py-1 text-xs font-bold rounded-md text-[#aaabaf] hover:text-white transition-colors">ALL</button>
            </div>
          </div>
          <div className="h-[300px] relative">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="perf-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#5bff49" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#5bff49" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,250 Q100,220 200,240 T400,150 T600,180 T800,50" fill="none" stroke="#5bff49" strokeLinecap="round" strokeWidth="3"/>
              <path d="M0,250 Q100,220 200,240 T400,150 T600,180 T800,50 V300 H0 Z" fill="url(#perf-gradient)"/>
              <circle cx="800" cy="50" fill="#5bff49" r="6"/>
            </svg>
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-[#aaabaf] uppercase tracking-widest font-bold pt-4 px-4">
              <span>May 01</span><span>May 08</span><span>May 15</span><span>May 22</span><span>May 29</span>
            </div>
          </div>
        </section>

        {/* Allocation */}
        <section className="lg:col-span-4 bg-[#171a1d]/80 backdrop-blur-lg border border-[#23262a]/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white self-start mb-8">Allocation</h3>
          <div className="relative h-56 w-56 flex items-center justify-center mb-8 mx-auto">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#23262a" strokeWidth="12"/>
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#5bff49" strokeDasharray="100.5 150.8" strokeWidth="12"/>
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#00e1ef" strokeDasharray="88 163.3" strokeDashoffset="-100.5" strokeWidth="12"/>
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#8ef9a5" strokeDasharray="37.7 213.6" strokeDashoffset="-188.5" strokeWidth="12"/>
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="#46484b" strokeDasharray="25.1 226.2" strokeDashoffset="-226.2" strokeWidth="12"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-[#aaabaf] font-bold">Diverse</p>
              <p className="text-2xl font-black text-white">94/100</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#5bff49]"></span><div><span className="text-[10px] uppercase font-bold text-[#aaabaf]">Cash</span><span className="text-sm font-bold block text-white">40%</span></div></div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#00e1ef]"></span><div><span className="text-[10px] uppercase font-bold text-[#aaabaf]">Stocks</span><span className="text-sm font-bold block text-white">35%</span></div></div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8ef9a5]"></span><div><span className="text-[10px] uppercase font-bold text-[#aaabaf]">Crypto</span><span className="text-sm font-bold block text-white">15%</span></div></div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#46484b]"></span><div><span className="text-[10px] uppercase font-bold text-[#aaabaf]">Others</span><span className="text-sm font-bold block text-white">10%</span></div></div>
          </div>
        </section>
      </div>

      {/* Holdings Table */}
      <section className="bg-[#171a1d]/80 backdrop-blur-lg border border-[#23262a]/50 rounded-2xl overflow-hidden">
        <div className="p-8 border-b border-[#23262a]/30 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">Individual Holdings</h3>
          <button className="text-[#5bff49] text-sm font-bold flex items-center gap-2 hover:opacity-80">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#23262a]/50 text-[10px] uppercase tracking-widest text-[#aaabaf] font-bold">
                <th className="py-5 px-8">Asset</th><th className="py-5 px-8">Price</th><th className="py-5 px-8">24h</th><th className="py-5 px-8">Value</th><th className="py-5 px-8">Trend</th><th className="py-5 px-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#23262a]/30">
              <tr className="hover:bg-[#23262a]/50 transition-colors cursor-pointer">
                <td className="py-6 px-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#23262a] flex items-center justify-center font-black text-xs border border-[#46484b]/50">NVDA</div>
                    <div><p className="font-bold text-white">NVIDIA Corp</p><p className="text-xs text-[#aaabaf]">Technology</p></div>
                  </div>
                </td>
                <td className="py-6 px-8 font-mono font-medium text-white">$78,250</td>
                <td className="py-6 px-8">
                  <span className="text-[#5bff49] font-bold text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span> +4.12%
                  </span>
                </td>
                <td className="py-6 px-8">
<p className="font-bold text-white">$35,00,450</p><p className="text-xs text-[#aaabaf]">44.73 shares</p>
                </td>
                <td className="py-6 px-8">
                  <svg className="w-20 h-8" viewBox="0 0 80 30">
                    <path d="M0,25 L15,20 L30,22 L45,10 L60,12 L80,5" fill="none" stroke="#5bff49" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="py-6 px-8 text-right">
                  <button className="h-8 w-8 rounded-lg hover:bg-[#23262a] transition-colors p-1">
                    <span className="material-symbols-outlined text-[#aaabaf] hover:text-[#5bff49]">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#23262a]/50 transition-colors cursor-pointer">
                <td className="py-6 px-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#23262a] flex items-center justify-center font-black text-xs border border-[#46484b]/50">BTC</div>
                    <div><p className="font-bold text-white">Bitcoin</p><p className="text-xs text-[#aaabaf]">Digital Asset</p></div>
                  </div>
                </td>
                <td className="py-6 px-8 font-mono font-medium text-white">$56,82,196</td>
                <td className="py-6 px-8">
                  <span className="text-red-400 font-bold text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_down</span> -1.45%
                  </span>
                </td>
                <td className="py-6 px-8">
<p className="font-bold text-white">$17,75,125</p><p className="text-xs text-[#aaabaf]">0.312 BTC</p>
                </td>
                <td className="py-6 px-8">
                  <svg className="w-20 h-8" viewBox="0 0 80 30">
                    <path d="M0,10 L20,15 L40,12 L60,25 L80,22" fill="none" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="py-6 px-8 text-right">
                  <button className="h-8 w-8 rounded-lg hover:bg-[#23262a] transition-colors p-1">
                    <span className="material-symbols-outlined text-[#aaabaf] hover:text-[#5bff49]">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;



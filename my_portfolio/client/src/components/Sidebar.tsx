import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  summaryTitle: string;
  summaryValue: string;
  summaryType: 'networth' | 'portfolio';
  ctaText?: string;
  pageNav: Array<{ icon: string; label: string; active: boolean; href?: string; to?: string }>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  summaryValue, 
  ctaText = 'Add Salary',
  pageNav 
}) => {
  // Props used via hardcoded values for now; extend later
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-6 z-40 bg-[#0c0e11] border-r border-[#23262a]/50 w-72 pt-24 font-['Manrope'] font-medium">
      {/* Summary Card */}
      <div className="mb-10">
        <p className="text-[#aaabaf] text-xs uppercase tracking-widest mb-2 px-4">Net Worth</p>
        <h2 className="text-xl font-bold text-[#f9f9fd] px-4">{summaryValue}</h2>
        <div className="mt-2 mx-4 inline-flex items-center gap-1 bg-[#171a1d]/50 text-[#5bff49] text-[10px] px-2 py-0.5 rounded-full font-bold">
          <span className="material-symbols-outlined text-xs">trending_up</span>
          +12.5%
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {pageNav.map((item, index) => {
          const navClass = `flex items-center gap-4 ${item.active 
            ? 'bg-[#171a1d] text-[#5bff49] rounded-xl px-4 py-3 border-l-4 border-[#5bff49] hover:translate-x-1' 
            : 'text-[#aaabaf] hover:text-[#f9f9fd] hover:bg-[#111417] px-4 py-3 rounded-xl transition-all hover:translate-x-1'
          }`;

          if (item.to) {
            return (
              <Link key={index} to={item.to} className={navClass}>
                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          }

          return (
            <a key={index} href={item.href} className={navClass}>
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* CTA Button */}
      <button className="mt-auto bg-gradient-to-br from-[#5bff49] to-[#4ad13e] text-[#0c0e11] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-[#5bff49]/20 hover:shadow-[#5bff49]/30">
        <span className="material-symbols-outlined text-sm">add</span>
        {ctaText}
      </button>
    </aside>
  );
};

export default Sidebar;

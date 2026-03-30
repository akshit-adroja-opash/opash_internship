import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC<{children?: React.ReactNode}> = ({children}: {children?: React.ReactNode}) => {
  const sidebarProps = {
    summaryTitle: 'Net Worth',
    summaryValue: '$12,45,000',
    summaryType: 'networth' as const,
    ctaText: 'Add Income',
    pageNav: [
      { icon: 'dashboard', label: 'Dashboard', active: true },
      { icon: 'account_balance_wallet', label: 'Portfolio', active: false },
      { icon: 'query_stats', label: 'Analytics', active: false },
{ icon: 'swap_horiz', label: 'Transactions', active: false, to: '/transactions' },
    ]
  };

  return (
    <div className="flex min-h-screen bg-[#0c0e11]">
      {/* Sidebar */}
      <Sidebar {...sidebarProps} />
      
      {/* Main content */}
      <main className="flex-1 ml-72 pt-28 px-10 pb-20 overflow-x-hidden">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;

'use client';

import { useState } from 'react';
import AdminSidebar from './AdminSidebar';

export default function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white flex [&_a]:cursor-pointer [&_button]:cursor-pointer [&_[role=button]]:cursor-pointer [&_input[type=submit]]:cursor-pointer [&_input[type=button]]:cursor-pointer [&_label[for]]:cursor-pointer [&_select]:cursor-pointer">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-20' : 'ml-64'} flex flex-col min-h-screen`}>
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-900 font-serif">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900">Admin</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Super Admin</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#332885] flex items-center justify-center text-white font-bold border-2 border-[#332885]/10">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

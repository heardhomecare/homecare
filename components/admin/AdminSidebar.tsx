'use client'

import Link from 'next/link'
import { LayoutDashboard, FileText, Briefcase, Users, LogOut, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'
import { signOut } from 'next-auth/react'

interface AdminSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function AdminSidebar({ isCollapsed, setIsCollapsed }: AdminSidebarProps) {
  const menuItems = [
    { href: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { href: '/admin/blogs', icon: <FileText size={20} />, label: 'Blogs' },
    { href: '/admin/careers', icon: <Briefcase size={20} />, label: 'Careers' },
    { href: '/admin/contacts', icon: <MessageSquare size={20} />, label: 'Contact Leads' },
    { href: '/admin/careers/applications', icon: <Users size={20} />, label: 'Job Applications' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-[#332885] text-white flex flex-col fixed h-full z-20 transition-all duration-300 ease-in-out shadow-2xl`}>
      {/* Toggle Button - Now Black to contrast with the Purple sidebar */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-24 bg-black border border-white/20 rounded-full p-1.5 text-white hover:bg-gray-800 transition-all shadow-xl z-30"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className={`p-6 border-b border-white/10 flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
        <div className="bg-white rounded-full p-0.5 h-10 w-10 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <img src="/logo-circular-purple.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        {!isCollapsed && (
          <div className="transition-opacity duration-300">
            <h2 className="font-bold text-lg leading-tight tracking-tight text-white">HEARD</h2>
            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Admin Portal</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium ${isCollapsed ? 'justify-center px-0' : ''}`}
            title={isCollapsed ? item.label : ''}
          >
            {item.icon}
            {!isCollapsed && <span className="transition-opacity duration-300">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className={`p-4 border-t border-white/10 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <button 
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all font-medium ${isCollapsed ? 'justify-center px-0' : ''}`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

'use client'

import Link from 'next/link'
import { LayoutDashboard, FileText, Briefcase, Users, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-[#332885] text-white flex flex-col fixed h-full z-20">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="bg-white rounded-full p-0.5 h-10 w-10 flex items-center justify-center overflow-hidden">
          <img src="/logo-circular-purple.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-bold text-lg leading-tight tracking-tight">HEARD</h2>
          <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Admin Portal</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium">
          <FileText size={20} />
          Blogs
        </Link>
        <Link href="/admin/careers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium">
          <Briefcase size={20} />
          Careers
        </Link>
        {/* <Link href="/admin/team" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium">
          <Users size={20} />
          Team
        </Link> */}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-all font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  )
}

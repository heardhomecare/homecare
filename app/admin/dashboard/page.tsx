'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Briefcase, Users, MessageSquare, Loader2 } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogs: 0,
    jobs: 0,
    staff: 0,
    testimonials: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [blogRes, jobRes] = await Promise.all([
          fetch('/api/blogs'),
          fetch('/api/careers')
        ])
        const blogs = await blogRes.json()
        const jobs = await jobRes.json()
        setStats(prev => ({
          ...prev,
          blogs: blogs.length || 0,
          jobs: jobs.length || 0
        }))
      } catch (error) {
        console.error('Failed to fetch stats')
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  const sections = [
    {
      title: 'Blog & Updates',
      description: 'Manage blog posts and company updates',
      icon: <FileText size={32} />,
      href: '/admin/blogs',
    },
    {
      title: 'Careers',
      description: 'Manage job postings and applications',
      icon: <Briefcase size={32} />,
      href: '/admin/careers',
    },
    {
      title: 'Staff Management',
      description: 'Manage staff profiles and credentials',
      icon: <Users size={32} />,
      href: '/admin/staff',
    },
    {
      title: 'Team Invites',
      description: 'Manage admin access and invites',
      icon: <Users size={32} />,
      href: '/admin/team',
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
        {/* Quick Stats at the Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Total Posts', value: stats.blogs, icon: <FileText size={18} /> },
            { label: 'Job Openings', value: stats.jobs, icon: <Briefcase size={18} /> },
            { label: 'Staff Members', value: stats.staff, icon: <Users size={18} /> },
            { label: 'Testimonials', value: stats.testimonials, icon: <MessageSquare size={18} /> },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6 text-[#332885]/40 group-hover:text-[#332885] transition-colors">
                <div className="p-2 rounded-lg bg-[#332885]/5">
                  {stat.icon}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
              {isLoading ? (
                <div className="h-10 w-20 bg-gray-50 animate-pulse rounded-lg"></div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-serif font-bold text-gray-900">{stat.value}</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#332885] opacity-20"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-2 bg-[#332885] rounded-full"></div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Management Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 flex items-start gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-[#332885]/5 flex items-center justify-center text-[#332885] group-hover:bg-[#332885] group-hover:text-white transition-all duration-500">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#332885] transition-colors">{section.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{section.description}</p>
                  </div>
                </div>
                <div className="px-8 py-5 bg-gray-50/50 border-t border-gray-50 flex justify-between items-center group-hover:bg-[#332885]/5 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#332885]/60 group-hover:text-[#332885]">Manage section</span>
                  <span className="text-[#332885] transition-transform duration-500 group-hover:translate-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

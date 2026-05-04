'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, ArrowLeft, AlertCircle } from 'lucide-react'

export default function AdminStaff() {
  const [staff] = useState([
    { id: 1, name: 'Sarah Johnson', role: 'Certified Nursing Assistant', certifications: 'CNA, CPR', status: 'Active' },
    { id: 2, name: 'Michael Chen', role: 'Home Health Aide', certifications: 'CPR, First Aid', status: 'Active' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    certifications: '',
    bio: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Staff form submitted:', formData)
    alert('Staff profile will be saved when backend integration is complete')
    setFormData({ name: '', role: '', email: '', phone: '', certifications: '', bio: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add Staff
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alert */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-1">Development Mode</h3>
            <p className="text-sm text-yellow-800">
              Staff management interface is scaffolded. Full profile management and credential tracking will be implemented with backend integration.
            </p>
          </div>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Add New Staff Member</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-900 mb-2">
                    Role/Title *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="e.g., Certified Nursing Assistant"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="john@heard.care"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="certifications" className="block text-sm font-medium text-slate-900 mb-2">
                  Certifications *
                </label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                  placeholder="e.g., CNA, CPR, BLS"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-slate-900 mb-2">
                  Bio / About
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none resize-none"
                  placeholder="Staff member bio and experience"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Add Staff Member
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border border-gray-300 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Staff List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">Staff Directory ({staff.length})</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Certifications</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staff.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.certifications}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-purple-700 hover:text-purple-800 font-medium" disabled>
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-medium" disabled>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

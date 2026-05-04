'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, ArrowLeft, AlertCircle } from 'lucide-react'

export default function AdminPosts() {
  const [posts] = useState([
    { id: 1, title: 'Sample Post Title', author: 'Admin', date: '2024-01-15', status: 'Draft' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    excerpt: ''
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
    console.log('Post form submitted:', formData)
    alert('Post functionality will be implemented with backend integration')
    setFormData({ title: '', content: '', author: '', excerpt: '' })
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
            <h1 className="text-2xl font-bold text-slate-900">Blog & Updates</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            New Post
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
              This is a placeholder interface. Full CRUD operations and database integration will be added in the next phase.
            </p>
          </div>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Create New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-900 mb-2">
                  Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-slate-900 mb-2">
                  Excerpt
                </label>
                <input
                  type="text"
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                  placeholder="Brief summary of the post"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-slate-900 mb-2">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none resize-none"
                  placeholder="Enter post content"
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-slate-900 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                  placeholder="Author name"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Post
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

        {/* Posts List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">All Posts ({posts.length})</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Author</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-purple-700 hover:text-purple-800 font-medium" disabled>
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-medium" disabled>
                        Delete
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

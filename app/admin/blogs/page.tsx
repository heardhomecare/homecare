'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Loader2, Search, X, FileText } from 'lucide-react'
import { toast } from 'sonner'
import { format } from 'date-fns'
import BlogModal from '@/components/admin/BlogModal'

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<any>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs')
      const data = await res.json()
      setBlogs(data)
    } catch (error) {
      toast.error('Failed to fetch blogs')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreate = () => {
    setSelectedBlog(null)
    setIsModalOpen(true)
  }

  const handleEdit = (blog: any) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    setIsDeleting(id)
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Blog deleted successfully')
        setBlogs(blogs.filter(b => b._id !== id))
      } else {
        toast.error('Failed to delete blog')
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-500 mt-1">Manage your website's insights and stories.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="bg-[#332885] hover:bg-black text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <Plus size={18} />
          Create New Post
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center text-gray-400 gap-4">
            <Loader2 className="animate-spin" size={40} />
            <p className="font-medium animate-pulse">Loading articles...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-[#332885] text-xs uppercase tracking-widest font-bold">
                  <th className="px-8 py-5">Title</th>
                  <th className="px-8 py-5">Author</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5">Date</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-[#332885]/[0.02] transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 group-hover:text-[#332885] transition-colors">{blog.title}</span>
                        <span className="text-xs text-gray-400 mt-1">/{blog.slug}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-gray-600 text-sm font-medium">{blog.author}</td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                        blog.status === 'published' 
                          ? 'bg-purple-100 text-[#332885]' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-gray-500 text-sm">{format(new Date(blog.createdAt), 'MMM d, yyyy')}</td>
                    <td className="px-8 py-5">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(blog)}
                          className="p-2.5 text-gray-400 hover:text-[#332885] hover:bg-[#332885]/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(blog._id)}
                          disabled={isDeleting === blog._id}
                          className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all disabled:opacity-50"
                          title="Delete"
                        >
                          {isDeleting === blog._id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {blogs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-4 text-gray-400">
                        <FileText size={48} strokeWidth={1} />
                        <p className="font-serif italic text-lg">No blog posts found yet.</p>
                        <button 
                          onClick={handleCreate}
                          className="text-[#332885] text-sm font-bold uppercase tracking-widest hover:underline"
                        >
                          Create your first post
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <BlogModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchBlogs}
        blog={selectedBlog}
      />
    </div>
  )
}


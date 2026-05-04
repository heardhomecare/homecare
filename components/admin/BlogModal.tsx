'use client'

import { useState, useEffect } from 'react'
import { X, Loader2, Image as ImageIcon, Edit, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { CldUploadWidget } from 'next-cloudinary'

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  blog?: any
}

export default function BlogModal({ isOpen, onClose, onSuccess, blog }: BlogModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    writer: '',
    slug: '',
    category: 'Care Planning',
    author: 'Kala Omeiza',
    content: '',
    image: '',
    status: 'draft',
    excerpt: ''
  })

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        writer: blog.writer || '',
        slug: blog.slug || '',
        category: blog.category || 'Care Planning',
        author: blog.author || 'Kala Omeiza',
        content: blog.content || '',
        image: blog.image || '',
        status: blog.status || 'draft',
        excerpt: blog.excerpt || ''
      })
    } else {
      setFormData({
        title: '',
        writer: '',
        slug: '',
        category: 'Care Planning',
        author: 'Kala Omeiza',
        content: '',
        image: '',
        status: 'draft',
        excerpt: ''
      })
    }
  }, [blog, isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = blog ? `/api/blogs/${blog._id}` : '/api/blogs'
      const method = blog ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast.success(`Blog ${blog ? 'updated' : 'created'} successfully`)
        onSuccess()
        onClose()
      } else {
        const errorData = await res.json()
        let errorMessage = errorData.message || 'Something went wrong'
        
        // If it's a validation error, clean it up
        if (errorMessage.includes('validation failed')) {
          errorMessage = errorMessage.split(':').slice(2).join(':').trim()
        }
        
        toast.error(errorMessage, {
          description: 'Please check your inputs and try again.',
          duration: 5000
        })
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">{blog ? 'Edit' : 'Create'} Blog Post</h2>
            <p className="text-sm text-gray-500 mt-1">Fill in the details for your article.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] focus:ring-1 focus:ring-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="Enter post title..."
              />
            </div>

            {/* Writer */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Writer</label>
              <input
                type="text"
                value={formData.writer}
                onChange={(e) => setFormData({...formData, writer: e.target.value})}
                className="w-full px-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] focus:ring-1 focus:ring-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="e.g. Kala Omeiza"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
              >
                <option>Care Planning</option>
                <option>Wellness</option>
                <option>Safety</option>
                <option>Companionship</option>
                <option>Specialized Care</option>
                <option>Family Support</option>
              </select>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Featured Image</label>
              <div className="flex flex-col gap-4">
                {formData.image ? (
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                      <CldUploadWidget 
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                        onSuccess={(result: any) => {
                          if (result?.info?.secure_url) {
                            setFormData(prev => ({...prev, image: result.info.secure_url}));
                          }
                        }}
                      >
                        {({ open }) => (
                          <button 
                            type="button"
                            onClick={() => open()}
                            className="p-3 bg-white text-[#332885] rounded-full hover:scale-110 transition-all shadow-lg"
                            title="Edit Image"
                          >
                            <Edit size={20} />
                          </button>
                        )}
                      </CldUploadWidget>

                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({...prev, image: ''}))}
                        className="p-3 bg-white text-red-600 rounded-full hover:scale-110 transition-all shadow-lg"
                        title="Delete Image"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <CldUploadWidget 
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    onSuccess={(result: any) => {
                      if (result?.info?.secure_url) {
                        setFormData(prev => ({...prev, image: result.info.secure_url}));
                      }
                    }}
                    options={{
                      maxFiles: 1,
                      resourceType: 'image',
                      clientAllowedFormats: ['jpg', 'png', 'webp', 'jpeg'],
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={() => open()}
                        className="w-full py-12 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500 hover:border-[#332885] hover:bg-white transition-all flex flex-col items-center justify-center gap-2"
                      >
                        <ImageIcon size={32} />
                        <span className="text-xs font-bold uppercase tracking-widest">Upload Featured Image</span>
                      </button>
                    )}
                  </CldUploadWidget>
                )}
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Status</label>
              <div className="flex gap-4">
                {['draft', 'published'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({...formData, status: s})}
                    className={`flex-1 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${
                      formData.status === s 
                        ? 'bg-[#332885] text-white border-[#332885]' 
                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Excerpt</label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full px-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50 resize-none"
              placeholder="Short summary of the post..."
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Content</label>
            <textarea
              required
              rows={8}
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
              placeholder="Write your article content here..."
            />
          </div>
        </form>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-gray-50/30 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-[#332885] hover:bg-black text-white px-10 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : (blog ? 'Update Post' : 'Create Post')}
          </button>
        </div>
      </div>
    </div>
  )
}

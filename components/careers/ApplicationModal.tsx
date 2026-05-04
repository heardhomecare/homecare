'use client'

import { useState } from 'react'
import { X, Loader2, Send } from 'lucide-react'
import { toast } from 'sonner'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, we might have /api/careers/apply
      // For now, we can use a generic notification or just log it
      // I'll create a simple API route for this below
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, jobTitle })
      })

      if (res.ok) {
        toast.success('Application submitted successfully! We will be in touch.')
        onClose()
      } else {
        toast.error('Failed to submit application. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-gray-100 flex items-center justify-between bg-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Apply for Position</h2>
            <p className="text-[#332885] font-bold mt-1 uppercase tracking-widest text-xs">{jobTitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="(919) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of Experience</label>
              <input
                type="number"
                required
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
                placeholder="e.g. 5"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Why are you a good fit?</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50 resize-none"
              placeholder="Tell us about your background and passion for caregiving..."
            />
          </div>
        </form>

        {/* Footer */}
        <div className="p-8 md:p-10 border-t border-gray-100 bg-gray-50/30 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-[#332885] hover:bg-black text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : (
              <>
                Submit Application
                <Send size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

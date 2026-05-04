'use client'

import { useState, useEffect } from 'react'
import { X, Loader2, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'

interface JobModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  job?: any
}

export default function JobModal({ isOpen, onClose, onSuccess, job }: JobModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full-Time',
    location: 'Raleigh, NC',
    description: '',
    status: 'active'
  })

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || '',
        type: job.type || 'Full-Time',
        location: job.location || 'Raleigh, NC',
        description: job.description || '',
        status: job.status || 'active'
      })
    } else {
      setFormData({
        title: '',
        type: 'Full-Time',
        location: 'Raleigh, NC',
        description: '',
        status: 'active'
      })
    }
  }, [job, isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = job ? `/api/careers/${job._id}` : '/api/careers'
      const method = job ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast.success(`Job ${job ? 'updated' : 'posted'} successfully`)
        onSuccess()
        onClose()
      } else {
        const errorData = await res.json()
        let errorMessage = errorData.message || 'Something went wrong'
        
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
      <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">{job ? 'Edit' : 'Post'} Job Opportunity</h2>
            <p className="text-sm text-gray-500 mt-1">Details for the career listing.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Job Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] focus:ring-1 focus:ring-[#332885] outline-none transition-all bg-gray-50/50"
              placeholder="e.g. Registered Nurse (RN)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Employment Type</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50 appearance-none"
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>PRN / As Needed</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
                  placeholder="e.g. Raleigh, NC"
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Status</label>
            <div className="flex gap-4">
              {['active', 'inactive'].map((s) => (
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

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#332885]">Job Description</label>
            <textarea
              required
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-[#332885] outline-none transition-all bg-gray-50/50"
              placeholder="Key responsibilities and requirements..."
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
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : (job ? 'Update Listing' : 'Post Job')}
          </button>
        </div>
      </div>
    </div>
  )
}

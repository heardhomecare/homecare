'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Loader2, Briefcase } from 'lucide-react'
import { toast } from 'sonner'
import { format } from 'date-fns'
import JobModal from '@/components/admin/JobModal'

export default function CareersManagement() {
  const [jobs, setJobs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/careers')
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      toast.error('Failed to fetch job listings')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreate = () => {
    setSelectedJob(null)
    setIsModalOpen(true)
  }

  const handleEdit = (job: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job listing?')) return
    
    setIsDeleting(id)
    try {
      const res = await fetch(`/api/careers/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Job listing deleted successfully')
        setJobs(jobs.filter(j => j._id !== id))
      } else {
        toast.error('Failed to delete job')
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
          <h1 className="text-3xl font-serif font-bold text-gray-900">Careers Management</h1>
          <p className="text-gray-500 mt-1">Manage job postings and career opportunities.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="bg-[#332885] hover:bg-black text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <Plus size={18} />
          Post New Job
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center text-gray-400 gap-4">
            <Loader2 className="animate-spin" size={40} />
            <p className="font-medium animate-pulse">Loading opportunities...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-[#332885] text-xs uppercase tracking-widest font-bold">
                  <th className="px-8 py-5">Job Title</th>
                  <th className="px-8 py-5">Type</th>
                  <th className="px-8 py-5">Location</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {jobs.map((job) => (
                  <tr key={job._id} className="hover:bg-[#332885]/[0.02] transition-colors group">
                    <td className="px-8 py-5">
                      <span className="font-bold text-gray-900 group-hover:text-[#332885] transition-colors">{job.title}</span>
                    </td>
                    <td className="px-8 py-5 text-gray-600 text-sm font-medium">{job.type}</td>
                    <td className="px-8 py-5 text-gray-600 text-sm">{job.location}</td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                        job.status === 'active' 
                          ? 'bg-purple-100 text-[#332885]' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-gray-500 text-sm">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(job)}
                          className="p-2.5 text-gray-400 hover:text-[#332885] hover:bg-[#332885]/10 rounded-xl transition-all"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(job._id)}
                          disabled={isDeleting === job._id}
                          className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all disabled:opacity-50"
                          title="Delete"
                        >
                          {isDeleting === job._id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {jobs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-4 text-gray-400">
                        <Briefcase size={48} strokeWidth={1} />
                        <p className="font-serif italic text-lg">No job listings found yet.</p>
                        <button 
                          onClick={handleCreate}
                          className="text-[#332885] text-sm font-bold uppercase tracking-widest hover:underline"
                        >
                          Post your first opening
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

      <JobModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchJobs}
        job={selectedJob}
      />
    </div>
  )
}

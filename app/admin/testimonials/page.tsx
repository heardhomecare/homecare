'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, ArrowLeft, AlertCircle, Star } from 'lucide-react'

export default function AdminTestimonials() {
  const [testimonials] = useState([
    { id: 1, author: 'Margaret Chen', role: 'Daughter', rating: 5, quote: 'Excellent care provided', status: 'Published' },
    { id: 2, author: 'James Rodriguez', role: 'Son', rating: 5, quote: 'Very professional team', status: 'Pending' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    author: '',
    role: '',
    quote: '',
    rating: '5'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Testimonial form submitted:', formData)
    alert('Testimonial will be saved when backend integration is complete')
    setFormData({ author: '', role: '', quote: '', rating: '5' })
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
            <h1 className="text-2xl font-bold text-slate-900">Testimonials</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add Testimonial
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
              Testimonial management is scaffolded. Full submission, approval workflow, and display on website will be implemented with backend integration.
            </p>
          </div>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Add New Testimonial</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-slate-900 mb-2">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-900 mb-2">
                    Relationship *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                    placeholder="e.g., Son, Daughter, Family Member"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote" className="block text-sm font-medium text-slate-900 mb-2">
                  Testimonial *
                </label>
                <textarea
                  id="quote"
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none resize-none"
                  placeholder="What would you like to share about your experience with HEARD?"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-slate-900 mb-2">
                  Rating *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Submit Testimonial
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

        {/* Testimonials List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">All Testimonials ({testimonials.length})</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                    {testimonial.status}
                  </span>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-700 text-purple-700" />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex gap-3">
                  <button className="text-purple-700 hover:text-purple-800 font-medium text-sm" disabled>
                    Edit
                  </button>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm" disabled>
                    Approve
                  </button>
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm" disabled>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

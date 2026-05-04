'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Search, Loader2 } from 'lucide-react'
import { BlogCard } from './blog-card'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

export function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const postsPerPage = 6

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogs?status=published')
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch blogs')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const formatDate = (date: any) => {
    if (!date) return format(new Date(), 'MMMM d, yyyy');
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) return format(new Date(), 'MMMM d, yyyy');
      return format(d, 'MMMM d, yyyy');
    } catch (e) {
      return format(new Date(), 'MMMM d, yyyy');
    }
  };

  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map(b => b.category)))], [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [posts, searchQuery, selectedCategory])

  const featured = filteredPosts[0]
  const allPosts = filteredPosts

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 700, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {isLoading ? (
        <div className="pt-56 pb-20 flex flex-col items-center justify-center text-gray-400 gap-4">
          <Loader2 className="animate-spin text-[#332885]" size={48} />
          <p className="font-serif italic text-lg">Gathering thoughtful insights...</p>
        </div>
      ) : featured ? (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
          {/* Full Width Image Container */}
          <div className="absolute inset-0">
            <img 
              src={featured.image} 
              alt={featured.title} 
              className="h-full w-full object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </section>
      ) : (
        <section className="pt-56 pb-20 text-center">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="inline-block p-6 rounded-full bg-gray-50 mb-4">
                        <Search className="w-12 h-12 text-gray-300" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">No Articles Yet</h1>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        We're currently preparing some thoughtful insights for you. Please check back soon for our latest stories and guidance.
                    </p>
                    <div className="pt-8">
                        <Link 
                            href="/" 
                            className="inline-block bg-[#332885] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-black"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="py-6 border-b border-[var(--brand-black)]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all border-2 ${
                    selectedCategory === cat
                      ? 'bg-[#332885] text-white border-[#332885] shadow-lg'
                      : 'bg-white text-[var(--brand-black)] hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-100 rounded-full focus:outline-none focus:border-[#332885] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              {searchQuery || selectedCategory !== 'All' ? 'Search Results' : 'Latest Blogs'}
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#332885]"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-12 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 rounded-full border border-gray-100 text-sm font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                Previous
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      currentPage === page
                        ? 'bg-[#332885] text-white shadow-lg'
                        : 'bg-white text-gray-900 border border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 rounded-full border border-gray-100 text-sm font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                Next
              </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
                <p className="text-2xl font-serif text-gray-300 italic">Nothing found matching your criteria...</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-24 rounded-3xl bg-[#332885] p-12 text-center text-white md:p-20 shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                Have questions about caring for a loved one?
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-white/80">
                Our team is here to provide practical guidance and the kind of support that makes home feel like home.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#332885] border-2 border-white px-12 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#332885] hover:border-white hover:shadow-xl"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

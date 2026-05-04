'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Loader2 } from 'lucide-react'
import { BlogCard } from './blog-card'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

interface BlogDetailProps {
  slug: string
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blogs`)
        const allBlogs = await res.json()
        const currentPost = allBlogs.find((b: any) => b.slug === slug && b.status === 'published')
        setPost(currentPost)
        
        if (currentPost) {
          const related = allBlogs
            .filter((b: any) => b.category === currentPost.category && b.slug !== slug && b.status === 'published')
            .slice(0, 2)
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error('Failed to fetch blog post')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-56 pb-20 flex flex-col items-center justify-center text-gray-400 gap-4">
          <Loader2 className="animate-spin text-[#332885]" size={48} />
          <p className="font-serif italic text-lg">Loading your story...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-32">
          <div className="container mx-auto px-6 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <h1 className="text-4xl font-serif font-bold text-gray-900">Post not found</h1>
              <p className="text-lg text-gray-500">
                The article you are looking for is not available right now.
              </p>
              <Link
                href="/blogs"
                className="inline-block bg-[#332885] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-black"
              >
                Back to Blogs
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article>
        {/* Article Hero */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          {/* Full Width Image Container */}
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="h-full w-full object-cover"
            />
            {/* Darker Overlay for better readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container relative mx-auto flex h-full items-center justify-center px-6 text-center">
            <div className="max-w-4xl space-y-6 pt-32">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-white/90">
                <span className="bg-[#332885] px-3 py-1 text-white">
                  {post.category}
                </span>
                <span>{post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : ''}</span>
                <span className="h-1 w-1 rounded-full bg-white/40"></span>
                <span>{post.readTime || '5 min read'}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white tracking-tight">
                {post.title}
              </h1>
              {post.writer && (
                <p className="text-lg md:text-xl font-serif italic text-white/80 max-w-3xl mx-auto">
                  By {post.writer}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Article Content Area */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 relative">
            <div className="lg:flex lg:gap-16 xl:gap-24">
              
              {/* Social Share Sidebar (Desktop Only) */}
              <div className="hidden lg:block w-12 pt-12">
                <div className="sticky top-32 flex flex-col items-center space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 rotate-180 [writing-mode:vertical-lr] mb-4">
                    Share Story
                  </span>
                  <button className="p-3 rounded-full bg-white text-gray-400 shadow-sm transition-all hover:bg-[#332885] hover:text-white hover:shadow-lg hover:-translate-y-1">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-3 rounded-full bg-white text-gray-400 shadow-sm transition-all hover:bg-[#332885] hover:text-white hover:shadow-lg hover:-translate-y-1">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-3 rounded-full bg-white text-gray-400 shadow-sm transition-all hover:bg-[#332885] hover:text-white hover:shadow-lg hover:-translate-y-1">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-3 rounded-full bg-white text-gray-400 shadow-sm transition-all hover:bg-[#332885] hover:text-white hover:shadow-lg hover:-translate-y-1">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Column */}
              <div className="flex-1">
                <div className="max-w-5xl">
                  {/* Author Header */}
                  <div className="mb-12 flex items-center gap-6 border-b border-[#332885]/10 pb-10">
                    <div className="h-16 w-16 rounded-full bg-[#332885] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {post.author?.charAt(0) || 'H'}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Written by
                      </p>
                      <p className="text-xl md:text-2xl font-serif font-bold text-[#332885]">
                        {post.author}
                      </p>
                    </div>
                  </div>

                  {/* Main Write-up */}
                  <div className="space-y-8 text-base md:text-xl leading-[1.7] text-gray-800">
                    {(typeof post.content === 'string' ? post.content.split('\n') : post.content).map((paragraph: string, idx: number) => {
                      const trimmed = paragraph.trim();
                      if (!trimmed) return null;
                      
                      // Heading
                      if (trimmed.startsWith('###')) {
                        return <h3 key={idx} className="text-xl md:text-3xl font-serif font-bold text-[#332885] pt-6">{trimmed.replace('###', '').trim()}</h3>;
                      }
                      
                      // List Item
                      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
                        return (
                          <div key={idx} className="flex gap-4 items-start ml-4">
                            <div className="h-2 w-2 rounded-full bg-[#332885] mt-2.5 shrink-0" />
                            <p className="flex-1">{trimmed.substring(1).trim()}</p>
                          </div>
                        );
                      }

                      // First Paragraph with drop-cap
                      if (idx === 0) {
                        return (
                          <p key={idx} className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#332885] first-letter:mr-4 first-letter:float-left">
                            {trimmed}
                          </p>
                        );
                      }

                      return <p key={idx}>{trimmed}</p>;
                    })}
                  </div>

                  {/* Social Share (Mobile Only) */}
                  <div className="flex lg:hidden items-center justify-between gap-4 mt-12 pt-8 border-t border-[#332885]/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      Share Story
                    </span>
                    <div className="flex gap-2">
                      <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-[#332885] hover:text-white transition-all">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-[#332885] hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-[#332885] hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-[#332885] hover:text-white transition-all">
                        <LinkIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Related Blogs Section */}
                  {relatedPosts.length > 0 && (
                    <div className="mt-24 pt-20 border-t border-[#332885]/10">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-10">
                        Related Stories
                      </h3>
                      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
                        {relatedPosts.map(related => (
                          <BlogCard 
                            key={related._id} 
                            post={{...related, publishedAt: related.createdAt, readTime: '5 min read'}} 
                            horizontal 
                            className="flex-1" 
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-16 pt-16 border-t border-[#332885]/10">
                    <Link
                      href="/blogs"
                      className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#332885] transition-all hover:gap-5"
                    >
                      <span className="text-lg">←</span> Back to All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}

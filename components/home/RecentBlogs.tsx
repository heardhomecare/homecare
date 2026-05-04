'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BlogCard } from '@/components/public/blogs/blog-card'

export default function RecentBlogs() {
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blogs?status=published&limit=3')
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch recent blogs')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (isLoading) return null
  if (!posts || posts.length === 0) return null

  return (
    <section className="bg-[#332885] py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              The HEARD Blog
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-white">
              Thoughtful insights for the journey of care
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              Practical guidance and stories from the kind of home care experience families actually want.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/blogs"
              className="inline-block border-2 border-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#332885] hover:shadow-xl"
            >
              Explore Our Blog
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <BlogCard
              key={post._id}
              post={{
                ...post,
                publishedAt: post.createdAt,
                readTime: '5 min read' // Default for now
              }}
              className={idx === 0 ? 'md:col-span-2 lg:col-span-1' : 'col-span-1'}
              compact={idx !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

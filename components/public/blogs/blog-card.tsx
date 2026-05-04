import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/lib/data/blogs'

interface BlogCardProps {
  post: BlogPost
  compact?: boolean
  horizontal?: boolean
  className?: string
}

export function BlogCard({ post, compact = false, horizontal = false, className = '' }: BlogCardProps) {
  if (horizontal) {
    return (
      <Link
        href={`/blogs/${post.slug}`}
        className={`group flex overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all hover:shadow-xl hover:-translate-y-1 ${className}`.trim()}
      >
        <div className="relative w-1/3 min-w-[120px] md:min-w-[180px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-4 md:p-6 gap-2">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#332885]">
            {post.category}
          </div>
          <h3 className="text-sm md:text-xl font-serif font-bold text-[var(--brand-black)] line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <div className="flex items-center gap-3 text-[10px] md:text-xs text-[var(--brand-black)]/40 font-semibold uppercase tracking-wider">
             <span>{post.publishedAt ? format(new Date(post.publishedAt), 'MMM d, yyyy') : format(new Date(post.createdAt || Date.now()), 'MMM d, yyyy')}</span>
             <span>•</span>
             <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 ${className}`.trim()}
    >
      <div className={`relative overflow-hidden ${compact ? 'aspect-[16/9]' : 'aspect-[16/9]'}`}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 md:p-6">
          <div className="flex flex-wrap items-center gap-2 text-[9px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#332885]">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#332885]/50"></span>
            <span>{post.publishedAt ? format(new Date(post.publishedAt), 'MMM d, yyyy') : format(new Date(post.createdAt || Date.now()), 'MMM d, yyyy')}</span>
          </div>
        <div className="space-y-1 md:space-y-2">
          <h3 className={`${compact ? 'text-xs md:text-xl' : 'text-lg md:text-xl'} font-serif font-bold leading-tight text-[var(--brand-black)] line-clamp-2`}>
            {post.title}
          </h3>
          <p className={`${compact ? 'text-[10px] md:text-sm' : 'text-sm'} leading-relaxed text-[var(--brand-black)]/75 line-clamp-2`}>
            {post.excerpt}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-1 text-[9px] md:text-sm font-semibold text-[var(--brand-black)]">
          <span>{post.readTime}</span>
          <span className={`${compact ? 'hidden md:block' : ''} text-[#332885] transition-transform duration-300 group-hover:translate-x-1`}>
            Read Article
          </span>
        </div>
      </div>
    </Link>
  )
}

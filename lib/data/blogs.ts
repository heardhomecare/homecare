export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  content: string | string[]
  status?: string
}

export const blogs: BlogPost[] = []

export function sortBlogsNewestFirst(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getRecentBlogs(limit = 3) {
  return sortBlogsNewestFirst(blogs).slice(0, limit)
}

export function getBlogPostBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug)
}

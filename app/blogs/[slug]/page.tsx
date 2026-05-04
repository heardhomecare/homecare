import { BlogDetail } from '@/components/public/blogs/detail'
import { getBlogPostBySlug, blogs } from '@/lib/data/blogs'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Post Not Found | HEARD Home Care',
    }
  }

  return {
    title: `${post.title} | HEARD Home Care Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      authors: [post.author],
    },
  }
}

// Generate static params for build time optimization
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  return <BlogDetail slug={resolvedParams.slug} />
}

import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating?: number
}

export default function TestimonialCard({ quote, author, role, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-[#332885] text-[#332885]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
        &quot;{quote}&quot;
      </blockquote>

      {/* Author */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-slate-900">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  )
}

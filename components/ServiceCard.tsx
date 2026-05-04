'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="text-[#332885] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

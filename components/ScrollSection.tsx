'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  delay?: number
}

export default function ScrollSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
}: ScrollSectionProps) {
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClasses = {
    fadeUp: 'translate-y-12 opacity-0',
    fadeIn: 'opacity-0',
    slideInLeft: '-translate-x-12 opacity-0',
    slideInRight: 'translate-x-12 opacity-0',
    scaleIn: 'scale-95 opacity-0',
  }

  const visibleClasses = 'translate-x-0 translate-y-0 scale-100 opacity-100'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}

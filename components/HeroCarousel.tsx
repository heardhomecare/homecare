'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/hero-senior-care-1.jpg',
    title: 'Compassionate Care for Seniors',
    description: 'Professional in-home care services that prioritize dignity, independence, and quality of life for your loved ones.',
    cta: 'Get Started'
  },
  {
    image: '/hero-senior-care-2.jpg',
    title: 'Support for People with Disabilities',
    description: 'Empowering individuals with disabilities through personalized care, accessibility support, and community connection.',
    cta: 'Learn More'
  },
  {
    image: '/hero-senior-care-3.jpg',
    title: 'Professional Health Services at Home',
    description: 'Trained caregivers providing medical support, mobility assistance, and daily living help in the comfort of home.',
    cta: 'Explore Services'
  },
  {
    image: '/hero-caring-hands.jpg',
    title: '24/7 Dedicated Caregivers',
    description: 'Round-the-clock support ensuring your loved ones are never alone, with trained professionals always at hand.',
    cta: 'Our Team'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative h-screen md:h-[600px] overflow-hidden group">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-content {
          animation: slideInUp 0.8s ease-out;
        }
      `}</style>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image - shifted down so heads aren't cut off */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          
          {/* Dark Overlay - Intentional for Content Visibility */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content - Positioned over slides */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side Content */}
            <div className="slide-content py-12 md:py-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30">
                <div className="flex -space-x-2">
                  <img src="/profile-family-1.jpg" alt="Family" className="w-7 h-7 rounded-full border-2 border-purple-400 object-cover" />
                  <img src="/profile-family-2.jpg" alt="Family" className="w-7 h-7 rounded-full border-2 border-purple-400 object-cover" />
                  <img src="/profile-family-3.jpg" alt="Family" className="w-7 h-7 rounded-full border-2 border-purple-400 object-cover" />
                </div>
                <span className="text-sm font-medium">Trusted by 1000+ families</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                {slides[currentSlide].title}
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed text-balance max-w-lg">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#332885] hover:bg-[#2a2375] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group/btn"
                >
                  {slides[currentSlide].cta}
                  <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-8 py-3.5 rounded-full font-semibold transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Side - Logo (Desktop Only) */}
            <div className="hidden md:flex justify-end items-center">
              <div className="relative">
                {/* Shiny edge glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#332885]/20 via-[#4a3aa8]/30 to-[#332885]/20 blur-2xl rounded-full" />
                <img
                  src="/logo-vertical-purple.png"
                  alt="HEARD Home Care"
                  className="h-80 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(51,40,133,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60 w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

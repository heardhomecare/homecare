'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mobileMenuSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes mobileItemSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes logoSlideIn {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .mobile-menu-open {
          animation: mobileMenuSlide 0.35s ease-out;
        }
        
        .mobile-logo-slide {
          animation: logoSlideIn 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .mobile-nav-item {
          animation: mobileItemSlide 0.4s ease-out forwards;
          opacity: 0;
        }
        
        .mobile-nav-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.25s; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity">
            <img 
              src="/logo-circular-purple.png" 
              alt="HEARD Home Care Logo" 
              className="h-12 w-12"
            />
          </Link>

          {/* Desktop Navigation - Centered Container */}
          <nav className="hidden md:flex items-center gap-1 bg-gradient-to-r from-[#f3f0ff] via-[#f3f0ff] to-[#f3f0ff] px-6 py-2 rounded-full border border-[#332885]/20 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-900 hover:text-[#332885] hover:bg-white font-medium transition-all duration-200 text-sm px-3 py-2 rounded-full flex items-center gap-1 group"
              >
                {item.label}
                <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#332885]" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#332885] hover:bg-[#2a2375] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Care
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-slate-900 hover:bg-[#f3f0ff] rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isOpen && (
          <nav className="mobile-menu-open md:hidden fixed inset-0 top-[60px] bottom-0 bg-white z-40">
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col pt-8 px-6 gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-nav-item text-slate-900 hover:text-[#332885] font-semibold text-xl py-4 px-6 rounded-xl hover:bg-[#f3f0ff] transition-all duration-200 border-l-4 border-transparent hover:border-[#332885] flex items-center justify-between group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ChevronRight size={24} className="text-gray-400 group-hover:text-[#332885] group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
              
              {/* Logo at bottom right */}
              <div className="mobile-logo-slide p-6 flex justify-end">
                <img 
                  src="/logo-circular-purple.png" 
                  alt="HEARD Home Care" 
                  className="h-24 w-24 opacity-30 grayscale"
                />
              </div>
              
              <div className="p-6 border-t border-[#332885]/10">
                <Link
                  href="/contact"
                  className="block w-full bg-[#332885] hover:bg-[#2a2375] text-white font-semibold text-center py-3 rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Care
                </Link>
              </div>
            </div>
          </nav>
        )}

        {/* Mobile menu overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 top-[60px] bg-black/20 md:hidden z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

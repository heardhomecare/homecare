'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#e2e4f5] via-[#eef0fb] to-[#d9def4] shadow-[0_10px_30px_rgba(51,40,133,0.12)] border-b border-[#332885]/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img 
                src="/Asset5.png" 
                alt="HEARD Home Care logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`text-xs lg:text-sm font-bold uppercase tracking-[0.12em] lg:tracking-[0.2em] transition-colors hover:text-[var(--brand-green)] ${
                      isActive(link.href) 
                        ? 'text-[var(--brand-green)] border-b-2 border-[var(--brand-green)] pb-1' 
                        : 'text-[var(--brand-black)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a 
              href="tel:919-659-5991" 
              className="bg-[var(--brand-green)] text-white px-4 lg:px-8 py-3 lg:py-4 text-xs lg:text-sm font-bold uppercase tracking-[0.15em] lg:tracking-widest transition-all hover:bg-black hover:shadow-lg"
            >
              Call: (919) 659-5991
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--brand-black)] relative z-[110]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 md:hidden bg-[#F0F4F8] z-[105] flex flex-col transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Mobile Menu Header - Logo in Top Left */}
        <div className="flex items-center justify-between px-6 h-20 md:h-32">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/Asset5.png" 
              alt="HEARD Home Care logo" 
              className="h-12 md:h-24 w-auto object-contain"
            />
          </Link>
          {/* Close button is handled by the fixed button in the main header div */}
        </div>

        <div className="flex flex-col h-full pb-12 px-8 overflow-y-auto">
          <ul className="space-y-8 flex-grow flex flex-col justify-center items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-3xl font-serif font-bold uppercase tracking-widest transition-colors ${
                    isActive(link.href) 
                      ? 'text-[var(--brand-green)]' 
                      : 'text-[var(--brand-black)]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 space-y-6">
            <a 
              href="tel:919-659-5991" 
              className="block w-full text-center bg-[var(--brand-green)] text-white px-8 py-6 text-lg font-bold uppercase tracking-widest shadow-xl"
            >
              Call: (919) 659-5991
            </a>
            
            <div className="text-center space-y-2 opacity-60">
              <p className="text-xs uppercase tracking-widest font-bold">HEARD Home Care</p>
              <p className="text-[10px] uppercase tracking-widest">Walnut Creek, CA</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

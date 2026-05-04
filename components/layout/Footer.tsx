'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1B3A] pt-12 pb-8 relative overflow-hidden">
      {/* 
        Official Logo Watermark: Updated to HEARD Asset5.png as requested.
        'Reduced size and Increased Visibility' as requested.
      */}
      <div className="absolute bottom-[-15px] right-[-15px] opacity-[0.12] pointer-events-none select-none invert brightness-0">
        <img
          src="/Asset5.png"
          alt=""
          className="w-[180px] md:w-[280px] lg:w-[350px] h-auto"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Column 1: Office Location & Hours */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Office Location</h2>
              <div className="text-white/90 space-y-0.5 text-base">
                <p className="font-bold uppercase tracking-wider mb-2 text-white">HEARD HOME CARE</p>
                <p>Raleigh, North Carolina</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Office Hours</h2>
              <div className="text-white/90 space-y-2 text-base">
                <p className="uppercase">MONDAY – FRIDAY: 9:00 am to 5:00 pm</p>
                <p className="font-bold text-white">Phones calls are received 24 hours a day.</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Us & Socials */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Contact Us</h2>
            <div className="text-white/90 space-y-3 text-base">
              <p>EMAIL: <a href="mailto:team@heardhome.com" className="underline hover:text-[var(--brand-green)] transition-colors">team@heardhome.com</a></p>
              <p>PHONE: (919) 659-5991</p>
            </div>

            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61567054131455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3D3D6B] p-2.5 rounded-none hover:bg-white hover:text-[#332885] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/heard_homecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3D3D6B] p-2.5 rounded-none hover:bg-white hover:text-[#332885] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/heard-home-care-walnut-creek/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3D3D6B] p-2.5 rounded-none hover:bg-white hover:text-[#332885] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 3: Site Map */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Site Map</h2>
            <nav>
              <ul className="space-y-2.5">
                {[
                  { name: 'HOME', href: '/' },
                  { name: 'SERVICES', href: '/services' },
                  { name: 'ABOUT', href: '/about' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'CAREERS', href: '/careers' },
                  { name: 'CONTACT', href: '/contact' },
                  { name: 'PRIVACY POLICY', href: '/privacy-policy' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base font-bold text-white/80 hover:text-white transition-colors tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    href="/auth/login"
                    className="inline-block bg-white/10 hover:bg-white text-white hover:text-[#1B1B3A] border border-white/20 px-6 py-2 text-sm font-bold tracking-wider transition-all"
                  >
                    LOGIN
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Minimal copyright bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
            Copyright © {currentYear} HEARD Home Care · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

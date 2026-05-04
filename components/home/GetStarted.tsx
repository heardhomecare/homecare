'use client';

import React from 'react';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* 
        Specific Background Image - Fixed (Non-scrollable)
        User requested: "use this image public\image4.webp"
      */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/image4.webp)',
        }}
      />
      
      {/* 
        Visual Fidelity Overlay 
        Reduced opacity to 0.75 to make the image more visible while keeping 
        the light/white aesthetic and absolute black text legibility.
      */}
      <div 
        className="absolute inset-0 z-10 bg-white pointer-events-none" 
        style={{ opacity: 0.75, mixBlendMode: 'screen' }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-12">
          Get{' '}
          <span className="font-['Girl_Boss_Script'] text-5xl md:text-6xl lg:text-7xl font-normal lowercase tracking-normal text-black">
            Started
          </span>{' '}
          with HEARD Home Care!
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-10 py-4 bg-[#332885] text-white font-bold text-sm tracking-widest uppercase transition-all hover:bg-black text-center"
          >
            Get Started With Home Care
          </Link>
          <Link 
            href="/careers" 
            className="w-full sm:w-auto px-10 py-4 bg-[#332885] text-white font-bold text-sm tracking-widest uppercase transition-all hover:bg-black text-center"
          >
            Join Our HEARD Family
          </Link>
        </div>
      </div>
    </section>
  );
}

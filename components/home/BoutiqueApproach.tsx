'use client';

import React from 'react';
import Link from 'next/link';

export default function BoutiqueApproach() {
  const videoId = 'SlfCxOc5zfI';
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section 
      className="relative bg-[var(--brand-tan)] border-t border-transparent pb-20 md:pb-32 bg-fixed bg-no-repeat z-20"
      style={{ 
        backgroundImage: 'url(/wp-content/uploads/2024/10/bg-graphic-circle-cream.png)',
        backgroundPosition: 'calc(100% + 150px) calc(100% + 150px)',
        backgroundSize: '450px auto'
      }}
    >
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 relative">
        {/* Overlapping White Card - MAXIMUM WIDTH */}
        <div className="max-w-[1720px] mx-auto bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative -mt-10 md:-mt-16 z-50 p-8 md:p-20">
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Headline - LIGHTER THICKNESS */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[var(--brand-black)] leading-tight tracking-tight md:whitespace-nowrap">
              Elevating Care Through a <mark className="kt-highlight text-[var(--brand-black)] !text-inherit text-4xl md:text-6xl lg:text-8xl">Boutique</mark> Approach
            </h2>

            {/* Direct Video Embed */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <div className="relative h-[220px] sm:h-[320px] md:aspect-video md:h-auto w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`${videoUrl}?rel=0&cc_load_policy=1&cc_lang_pref=en`}
                    title="HEARD Home Care Boutique Approach"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-[var(--brand-green)] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-black hover:shadow-2xl hover:-translate-y-1"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

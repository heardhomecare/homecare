import React from 'react';
import Link from 'next/link';

export default function ProcessIntro() {
  const cities = [
    "Walnut Creek", "Alamo", "Clayton", "Concord", "Danville", "Diablo",
    "Lafayette", "Martinez", "Moraga", "Orinda", "Pleasant Hill", "Rossmoor"
  ];

  return (
    <section className="bg-[var(--brand-cream)] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Map Image */}
          <div className="w-full lg:w-1/2 animate-in slide-in-from-left duration-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--brand-green)] opacity-5 rounded-full blur-3xl transform -translate-x-10 scale-110"></div>
              <img 
                src="/wp-content/uploads/2026/04/graphic-service-area-map-2026-894x1024.webp" 
                alt="Heard Home Care Service Area Map" 
                className="relative w-full h-auto object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
              <mark className="kt-highlight">Service</mark> Area
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed italic">
              Attending to those in Walnut Creek, California and throughout central Contra Costa County:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-4">
              {cities.map((city) => (
                <div key={city} className="flex items-center space-x-2 group">
                  <span className="text-[var(--brand-green)] transform group-hover:translate-x-1 transition-transform">
                    <svg viewBox="0 0 320 512" className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-black)] group-hover:text-[var(--brand-green)] transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link 
                href="/contact" 
                className="inline-block bg-[var(--brand-green)] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1"
              >
                contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


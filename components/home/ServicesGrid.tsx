import React from 'react';

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--brand-tan)] py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/20 shadow-2xl">
            {/* Left Quote Icon */}
            <div className="absolute -top-10 -left-10 w-24 md:w-32 opacity-20">
              <img src="/wp-content/uploads/2024/10/icon-left-quote-big.png" alt="Quote Icon" className="w-full h-auto brightness-0 invert" />
            </div>

            <blockquote className="relative z-10 space-y-8 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white leading-relaxed italic">
                “We watched our parents endure the stress of caring for loved ones. The peace of mind and genuine connection that came when they embraced a trusted caregiver made a lasting impression. This experience has inspired our family to dedicate our careers to serving others through Heard Home Care.”
              </p>
              
              <footer className="pt-8">
                <div className="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30">
                  <span className="text-white font-bold uppercase tracking-widest text-sm">– Marlene and Adam</span>
                </div>
              </footer>
            </blockquote>

            {/* Right Quote Icon */}
            <div className="absolute -bottom-6 -right-6 w-16 md:w-20 opacity-20">
              <img src="/wp-content/uploads/2024/10/icon-right-quote-small.png" alt="Quote Icon" className="w-full h-auto brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[40px] border-white/5 rounded-full pointer-events-none"></div>
    </section>
  );
}


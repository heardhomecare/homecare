import React from 'react';
import Link from 'next/link';

export default function Features() {
  const serviceList = [
    'Companion Care',
    'Personal Care',
    'Memory Care',
    'Specialized Care'
  ];

  return (
    <section className="bg-[#E9ECEF] py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left Column: Image (Smaller, Squared) */}
          <div className="w-full md:w-4/12 flex justify-center">
            <div className="shadow-2xl max-w-[387px]">
              <img
                src="/wp-content/uploads/2024/10/img-care-services.jpg"
                alt="Care Services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content (Wider, Fully Centralized) */}
          <div className="w-full md:w-8/12 flex flex-col items-center text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight tracking-tight md:whitespace-nowrap">
              Care Services To Provide <mark className="kt-highlight text-[var(--brand-black)] !text-inherit text-4xl md:text-5xl lg:text-6xl font-normal">Peace</mark> of Mind
            </h2>

            <p className="text-lg text-[var(--brand-black)] leading-relaxed max-w-4xl">
              With personalized care and meaningful companionship, we proudly serve the Triangle and communities across Central and Eastern North Carolina. <strong className="text-[var(--brand-black)] font-bold">Our approach centers on building personal connections, prioritizing each client’s safety and individual wishes.</strong>We tailor every care plan to meet specific needs, addressing not just physical health but also emotional and spiritual well-being.
            </p>

            {/* Centralized Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-4 w-full max-w-2xl">
              {serviceList.map((service) => (
                <div key={service} className="flex items-center justify-center space-x-4 group">
                  <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-[var(--brand-green)] transition-colors shrink-0">
                    <img
                      src="/wp-content/uploads/2024/10/icon-checkmark.png"
                      alt="Checkmark"
                      className="w-6 h-6 object-contain brightness-0 group-hover:brightness-100 group-hover:invert"
                    />
                  </div>
                  <span className="text-lg font-bold text-[var(--brand-black)] whitespace-nowrap">{service}</span>
                </div>
              ))}
            </div>

            {/* Centralized Button */}
            <div className="pt-8 w-full flex justify-center">
              <Link
                href="/services"
                className="inline-block bg-[var(--brand-green)] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

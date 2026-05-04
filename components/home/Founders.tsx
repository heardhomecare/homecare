import React from 'react';
import Link from 'next/link';

export default function Founders() {
  return (
    <>
      <section
        className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(/wp-content/uploads/2024/11/bg-home-about-us.jpg)',
          backgroundPosition: '100% 50%',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Visual Fidelity Overlay */}
        <div
          className="absolute inset-0 bg-[var(--brand-cream)] pointer-events-none"
          style={{ opacity: 0.90, mixBlendMode: 'screen' }}
        ></div>

        {/* Tan Column Background */}
        <div className="absolute top-10 bottom-10 right-0 w-full lg:w-[32%] xl:w-[28%] bg-[var(--brand-tan)] hidden lg:block shadow-xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
            {/* Left Column: Content */}
            <div className="space-y-8 lg:pr-20 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight tracking-tight whitespace-nowrap">
                We’re <mark className="kt-highlight text-[var(--brand-black)] !text-inherit text-4xl md:text-6xl lg:text-7xl font-normal">Glad</mark> You Found Us
              </h2>

              <div className="space-y-6">
                <p className="text-xl font-bold uppercase tracking-widest text-[var(--brand-tan)]">
                  Hi, I’m Kala Omeiza!
                </p>

                <p className="text-lg text-[var(--brand-black)] leading-relaxed">
                  As my husband and I raise our family in Raleigh, we witness the unique challenges faced by the sandwich generation, balancing the needs of both children and aging family members. Juggling the care needs of multiple generations can be demanding. Many in our community share this experience, and we’re here to provide the support that makes this journey more manageable.
                </p>

                <p className="text-lg text-[var(--brand-black)] leading-relaxed">
                  We’ve seen firsthand how transformative compassionate home care can be. When my grandmother needed support, caregivers brought comfort and reassurance to our family, inspiring us to serve our community in the same meaningful way.
                </p>

                <p className="text-lg text-[var(--brand-black)] leading-relaxed">
                  Our commitment is to deliver exceptional home care support for our clients while fostering a supportive and enriching environment for our team. For us, it’s all about creating an elevated experience every step of the way—for those we care for and those who make that care possible.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-block bg-[var(--brand-green)] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1"
                >
                  Learn more about Kala
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="p-0 lg:p-8 flex items-center justify-center min-h-[350px] lg:min-h-full w-full">
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                <img
                  src="/keila_and_family.webp"
                  alt="Kala Omeiza and Family"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with Overlap and #9ab6ba Background */}
      <section className="bg-[#2A9D8F] pt-0 pb-10 md:pb-12 relative z-20 border-t border-transparent">
        <div className="container mx-auto px-6">
          {/* Overlapping White Quote Card - WIDER, REDUCED BOTTOM PADDING */}
          <div className="max-w-6xl mx-auto bg-white pt-10 pb-8 md:pt-16 md:pb-6 px-10 md:px-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative -mt-24 md:-mt-32 z-30 flex flex-col items-center text-center">
            {/* BIG QUOTES POSITIONED PERFECTLY - MUCH BRIGHTER */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 opacity-80">
              <img src="/wp-content/uploads/2024/10/icon-left-quote-big.png" alt="" className="w-16 md:w-20 h-auto" />
            </div>

            <div className="space-y-6 relative z-10">
              <blockquote className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-[var(--brand-black)] leading-relaxed italic">
                “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace.”
              </blockquote>

              <cite className="block text-xl md:text-2xl font-black text-[var(--brand-black)] not-italic">
                — 1 Peter 4:10
              </cite>
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-80">
              <img src="/wp-content/uploads/2024/10/icon-right-quote-small.png" alt="" className="w-12 md:w-16 h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

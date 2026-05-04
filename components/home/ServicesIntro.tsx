import React from 'react';
import Link from 'next/link';

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
              We’re <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Glad</mark> You Found Us
            </h2>

            <p className="text-2xl font-serif text-[var(--brand-green)] italic">
              Hi, we’re Adam & Marlene Bartlett!
            </p>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As we raise our family in Walnut Creek, we witness the unique challenges faced by the sandwich generation, balancing the needs of both children and aging family members. <strong className="text-[var(--brand-green)]">Juggling the care needs of multiple generations can be demanding</strong>. Many in our community share this experience, and we’re here to provide the support that makes this journey more manageable.
              </p>

              <p>
                We’ve seen firsthand how transformative compassionate home care can be. When our own {' '}
                <a href="https://www.instagram.com/p/DDiNyjUSKdX/" target="_blank" rel="noreferrer noopener" className="text-[var(--brand-tan)] font-bold hover:underline">
                  grandmothers needed support
                </a>, caregivers brought comfort and reassurance to our family, inspiring us to serve our community in the same meaningful way.
              </p>

              <p>
                Our commitment is to deliver exceptional home care support for our clients while fostering a supportive and enriching environment for our team. <strong className="text-[var(--brand-green)]">For us, it’s all about creating an elevated experience every step of the way—for those we care for and those who make that care possible</strong>.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-block bg-[var(--brand-green)] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1"
              >
                Learn More About The Bartletts
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              <img 
                src="/wp-content/uploads/2024/11/img-about-adam-marlene.png" 
                alt="Adam & Marlene Bartlett" 
                className="relative rounded-[3rem] w-full h-auto object-cover shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

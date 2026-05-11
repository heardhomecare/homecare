'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
              We’re <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Glad</mark> You Found Us
            </h2>

            <p className="text-2xl font-serif text-[var(--brand-green)] italic">
              I’m Kala Omeiza
            </p>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As my husband and I raise our family in Raleigh, we’ve seen firsthand the unique challenges faced by the sandwich generation—balancing the needs of both children and aging loved ones. We’re here to provide compassionate support that helps make the journey more manageable.
              </p>

              <p>
                We’ve seen firsthand how transformative compassionate home care can be. When our own loved ones transitioned from independence to needing daily assistance, it inspired us to serve our community in the same meaningful way.
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
                Learn More About Kala
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative group space-y-4">
              <img 
                src="/keila_and_family.webp" 
                alt="Kala Omeiza and her family" 
                className="relative rounded-[3rem] w-full h-auto object-cover shadow-2xl transition-all duration-500"
              />
              <p className="text-sm text-center text-gray-500 italic font-medium">
                Kala Omeiza and her family in RDU
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

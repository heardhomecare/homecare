'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const images = ['/image4.webp', '/hero_2.webp', '/hero_3.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-[#e9e4dc] min-h-screen flex flex-col md:block">
      {/* Mobile/Desktop Hero Image Section */}
      <div className="relative h-96 sm:h-[30rem] md:h-auto md:absolute md:inset-0 overflow-hidden bg-[#e9e4dc]">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`HEARD Home Care background ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-[center_20%] md:object-top transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Whitish overlay for better mobile visibility */}
        <div className="absolute inset-0 bg-white/70 md:hidden"></div>
        
        {/* Mobile Logo - Centered exactly like Contact Hero */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:hidden">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <img
              src="/Asset5.png"
              alt="HEARD Home Care logo"
              className="w-32 h-auto drop-shadow-xl"
            />
          </Link>
        </div>
      </div>

      {/* Whitish Desktop Gradients */}
      <div className="absolute inset-0 hidden md:block bg-linear-to-b from-white/60 via-white/70 to-white/90 pointer-events-none"></div>

      {/* Content Container */}
      <div className="container mx-auto px-2 sm:px-6 relative z-10 md:pt-32 md:pb-24 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center w-full max-w-5xl mx-auto space-y-8 md:space-y-12 py-8 md:py-0"
        >
          
          {/* Desktop Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block pb-4"
          >
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <img
                src="/Asset5.png"
                alt="HEARD Home Care logo"
                className="w-40 h-auto"
              />
            </Link>
          </motion.div>

          <div className="space-y-6 md:space-y-8 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-(--brand-black) leading-tight tracking-tight px-2 md:px-0"
            >
              Exceptional care begins with caregivers who feel valued and supported in their calling.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-(--brand-black) leading-relaxed w-full max-w-5xl mx-auto font-medium px-1 md:px-0"
            >
              Heard Home Care is the premier home care agency because our care team is the heart of everything we do. As a people-centered organization, we empower our caregivers to deliver exceptional care to clients and families across the Triangle.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-(--brand-green) text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-black hover:shadow-xl hover:-translate-y-1"
            >
              Contact us
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-(--brand-green) text-(--brand-green) px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-(--brand-green) hover:text-white hover:shadow-xl hover:-translate-y-1"
            >
              Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-(--brand-tan) opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-(--brand-green) opacity-5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}

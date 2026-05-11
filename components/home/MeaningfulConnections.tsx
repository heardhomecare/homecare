'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function MeaningfulConnections() {
  const items = [
    { name: 'Maintaining independence', icon: '/wp-content/uploads/2024/10/icon-maintaining-independence.png' },
    { name: 'Responsive communication', icon: '/wp-content/uploads/2024/10/icon-responsive-communication.png' },
    { name: 'Dignified care', icon: '/wp-content/uploads/2024/10/icon-dignified-care.png' },
    { name: 'Personal relationships', icon: '/wp-content/uploads/2024/10/icon-personal-relationships.png' },
    { name: 'Valued care professionals', icon: '/wp-content/uploads/2024/10/icon-valued-care-professionals.png' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-(--brand-green) py-20 md:py-32 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-20"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
            It’s Not Just Care. It’s Making <mark className="kt-highlight text-(--brand-black) text-inherit! text-4xl md:text-6xl lg:text-7xl">Personal</mark> Connections.
          </h2>

          <p className="text-lg opacity-90 leading-relaxed max-w-4xl mx-auto">
            We believe true care goes beyond everyday tasks—it’s about building meaningful relationships. We address each client’s unique needs by providing elevated care centered on:
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {items.map((item) => (
            <motion.div 
              key={item.name} 
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <div className="transform transition-transform duration-500 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] leading-snug max-w-[180px]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

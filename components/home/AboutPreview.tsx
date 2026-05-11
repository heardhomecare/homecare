'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function AboutPreview() {
  const steps = [
    {
      title: 'Inquire',
      desc: 'Fill out our simple contact form to tell us how we can best come alongside you.',
      img: '/wp-content/uploads/2024/10/graphic-number-1.png'
    },
    {
      title: 'Schedule',
      desc: 'One of our friendly team members will reach out to listen and learn how we can successfully work together. We will then set up an in-home assessment.',
      img: '/wp-content/uploads/2024/10/graphic-number-2.png'
    },
    {
      title: 'Home Consultation',
      desc: 'We will send a member of our client care team to conduct a comprehensive evaluation of all needs. This assessment will determine the full scope of care so we can create a tailored care plan that meets your physical and emotional needs. It also gives you a chance to get to know us and feel more comfortable with home care services.',
      img: '/wp-content/uploads/2024/10/graphic-number-3.png'
    },
    {
      title: 'Confirm',
      desc: 'Following the in-home consultation, you will receive a customized care plan based on the assessment to confirm that our plan matches your specific needs.',
      img: '/wp-content/uploads/2024/10/graphic-number-4.png'
    },
    {
      title: 'Start Services',
      desc: 'A personalized care plan is crafted and you or your loved one is matched with a care professional for the best experience possible.',
      img: '/wp-content/uploads/2024/10/graphic-number-5.png'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#2A9D8F] pt-10 pb-12 md:pt-12 md:pb-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mx-auto space-y-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-(--brand-black) leading-tight tracking-tight md:whitespace-nowrap">
              Elevated Care. <mark className="kt-highlight text-(--brand-black) text-inherit! text-4xl md:text-6xl lg:text-7xl">Trusted</mark> Process.
            </h2>

            <p className="text-lg md:text-xl text-(--brand-black) leading-relaxed max-w-4xl mx-auto font-medium opacity-90">
              Our team is here to support you, whether you need occasional assistance or a full-time companion by your side. We’ll create a personalized care plan tailored to your unique needs. From help with daily routines to meaningful social engagement, we’re dedicated to helping you or your loved one live life with dignity, comfort, and as much independence as possible.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 max-w-5xl mx-auto mt-16"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.title} 
                variants={stepVariants}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-center md:text-left"
              >
                <div className="w-full md:w-auto flex justify-center md:justify-start md:pt-1 shrink-0">
                  <div className="relative">
                    <img 
                      src={step.img} 
                      alt={`Step ${index + 1}`} 
                      className="relative w-20 md:w-28 h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="w-full max-w-3xl space-y-2 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase tracking-wider">{step.title}</h3>
                  <p className="text-lg md:text-xl text-(--brand-black) leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center pt-16 space-y-8"
          >
            <p className="text-xl font-bold text-(--brand-black) italic max-w-4xl mx-auto leading-relaxed">
              “Ready to learn more about our boutique approach to home care? We’d be honored to be a part of your story.”
            </p>

            <Link 
              href="/contact" 
              className="inline-block bg-(--brand-green) text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-(--brand-green) hover:shadow-xl hover:-translate-y-1"
            >
              Get Started and Be Heard
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

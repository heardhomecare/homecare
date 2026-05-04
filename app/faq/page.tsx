import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqHero from '@/components/faq/FaqHero';
import FaqContent from '@/components/faq/FaqContent';
import FaqBottomCta from '@/components/faq/FaqBottomCta';

export const metadata = {
  title: 'Frequently Asked Questions • Heard Home Care',
  description: 'Find answers to common questions about our senior home care services, pricing, and more.',
};

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <FaqHero />
        <FaqContent />
        <FaqBottomCta />
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;

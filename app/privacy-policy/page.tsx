import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PrivacyHero from '@/components/privacy/PrivacyHero';
import PrivacyContent from '@/components/privacy/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy • Heard Home Care',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main className="pt-20 md:pt-32">
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

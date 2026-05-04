import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CareersTopLogo from '@/components/careers/CareersTopLogo';
import CareersHeroContent from '@/components/careers/CareersHeroContent';

export const metadata = {
  title: 'Join Our Team • Careers at Heard Home Care',
  description: 'Apply today to join our team of compassionate caregivers and make a difference in the lives of seniors.',
};

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <CareersTopLogo />
        <CareersHeroContent />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;

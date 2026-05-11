import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CareersTopLogo from '@/components/careers/CareersTopLogo';
import CareersHeroContent from '@/components/careers/CareersHeroContent';

export const metadata = {
  title: 'Join Our Caregiving Team',
  description: 'Make a meaningful difference. Explore career opportunities at Heard Home Care and join a team that values and empowers its caregivers as the heart of our mission.',
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

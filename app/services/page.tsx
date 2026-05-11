import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CommitmentSection from '@/components/services/CommitmentSection';
import CareDetails from '@/components/services/CareDetails';
import GetStartedSection from '@/components/services/GetStartedSection';

export const metadata = {
  title: 'Personalized Senior Care Services',
  description: 'Explore our range of boutique home care services including companion care, personal assistance, and specialized support tailored to your unique needs in North Carolina.',
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <ServicesHero />
        <CommitmentSection />
        <CareDetails />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

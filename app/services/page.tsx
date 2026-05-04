import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CommitmentSection from '@/components/services/CommitmentSection';
import CareDetails from '@/components/services/CareDetails';
import GetStartedSection from '@/components/services/GetStartedSection';

export const metadata = {
  title: 'Senior Home Care Services • Heard Home Care',
  description: 'Our personalized senior home care services are designed to enhance the well-being & comfort of you or your loved one.',
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

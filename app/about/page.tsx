import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import AboutGetStartedSection from '@/components/about/AboutGetStartedSection';

export const metadata = {
  title: 'About Heard Home Care • Senior Home Care Services',
  description: 'Learn more about Heard Home Care and our dedication to providing compassionate, personalized care for seniors in Raleigh, North Carolina.',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <AboutGetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

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
  title: 'About Our Mission and Team',
  description: 'Discover the heart behind Heard Home Care. Led by Kala Omeiza, we are dedicated to providing boutique, relationship-based senior care in Raleigh and the surrounding Triangle area.',
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

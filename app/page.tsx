import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heard Home Care • Boutique Senior Care in Raleigh, NC',
  description: 'Experience elevated senior home care. We build meaningful relationships while providing dignified, personalized support for families in Raleigh and across North Carolina.',
};

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BoutiqueApproach from '@/components/home/BoutiqueApproach';
import MeaningfulConnections from '@/components/home/MeaningfulConnections';
import Features from '@/components/home/Features';
import RecentBlogs from '@/components/home/RecentBlogs';
import Founders from '@/components/home/Founders';
import AboutPreview from '@/components/home/AboutPreview';
import KeepInTouch from '@/components/home/KeepInTouch';
import ServiceArea from '@/components/home/ServiceArea';
import Reviews from '@/components/home/Reviews';
import GetStarted from '@/components/home/GetStarted';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <Hero />
        <BoutiqueApproach />
        <MeaningfulConnections />
        <Features />
        <RecentBlogs />
        <Founders />
        <AboutPreview />
        <KeepInTouch />
        <ServiceArea />
        <Reviews />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

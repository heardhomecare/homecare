import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata = {
  title: 'Contact Us for a Consultation',
  description: 'Ready to start your journey with boutique home care? Contact the Heard Home Care team today for a personalized consultation in the Raleigh area.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Header />
      <main>
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

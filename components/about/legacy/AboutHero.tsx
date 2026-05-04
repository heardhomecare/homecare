import React from 'react';
import Link from 'next/link';

const AboutHero: React.FC = () => {
    return (
        <section className="bg-[var(--brand-cream)] py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-center">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <img 
                            src="/wp-content/uploads/2024/10/logo-with-name.png" 
                            alt="Heard Home Care logo" 
                            className="w-[200px] md:w-[250px] h-auto"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;


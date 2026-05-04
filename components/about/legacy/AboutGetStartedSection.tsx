import React from 'react';
import Link from 'next/link';

const AboutGetStartedSection: React.FC = () => {
    return (
        <section className="bg-[var(--brand-green)] py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                        Get <mark className="bg-transparent text-white underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Started</mark> with Heard Home Care!
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/contact" 
                            className="w-full sm:w-auto bg-white text-[var(--brand-green)] px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:text-white hover:shadow-2xl hover:-translate-y-1"
                        >
                            Get Started With Home Care
                        </Link>

                        <Link 
                            href="/careers" 
                            className="w-full sm:w-auto border-2 border-white text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-[var(--brand-green)] hover:shadow-2xl hover:-translate-y-1"
                        >
                            Join Our Heard Family
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-tan)] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default AboutGetStartedSection;


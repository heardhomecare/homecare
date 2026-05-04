import React from 'react';

const PrivacyHero: React.FC = () => {
    return (
        <section className="bg-[var(--brand-green)] py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                        Privacy <mark className="bg-transparent text-white underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Policy</mark>
                    </h1>
                </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-tan)] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default PrivacyHero;

import React from 'react';
import Link from 'next/link';

const ServicesHero: React.FC = () => {
    return (
        <section 
            className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-no-repeat bg-cover bg-top"
            style={{ backgroundImage: 'url(/service_hero.webp)' }}
        >
            {/* Whitish overlay to ensure logo visibility */}
            <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center space-y-10 animate-in fade-in zoom-in duration-1000">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <img 
                            src="/Asset5.png" 
                            alt="Heard Home Care logo" 
                            className="w-24 md:w-32 lg:w-40 h-auto drop-shadow-xl"
                        />
                    </Link>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--brand-black)] leading-tight text-center max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        Home Care Support <span className="font-['Girl_Boss_Script'] text-5xl md:text-7xl lg:text-8xl font-normal lowercase tracking-normal text-[var(--brand-black)] -mt-2 md:-mt-4">tailored</span> for Every Client
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;


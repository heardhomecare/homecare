import React from 'react';

const ValuesSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="flex justify-center">
                        <img 
                            src="/wp-content/uploads/2024/10/logo-tan.png" 
                            alt="Heard Home Care Tan Logo" 
                            className="w-32 md:w-48 h-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
                            Our <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Mission</mark> Statement
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic max-w-3xl mx-auto">
                            "We are on a mission to be the leading provider of premium home care, where our dedicated care professionals are celebrated and empowered, fostering an environment of service excellence for our clients. Together, we Heard lives—those we serve and those we employ—creating a community anchored in respect, empathy, and unwavering commitment to outstanding care. Our purpose is to elevate caregiving, transforming challenges into cherished moments of connection and joy."
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[60px] border-[var(--brand-tan)]/5 rounded-full pointer-events-none"></div>
        </section>
    );
};

export default ValuesSection;


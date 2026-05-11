import React from 'react';

const ValuesSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <div className="flex justify-center">
                        <img 
                            src="/Asset5.png" 
                            alt="Heard Home Care Logo" 
                            className="w-32 md:w-48 h-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 drop-shadow-xl"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
                            Our <span className="text-[#332885]">Mission</span> Statement
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic max-w-5xl mx-auto">
                            "We are committed to becoming a leading provider of premium home care, where care professionals are valued, supported, and empowered to deliver exceptional service. Together, we hear the needs of both those we serve and those we employ, building a community rooted in respect, empathy, and a deep commitment to quality care. Our mission is to elevate the caregiving experience by turning everyday challenges into meaningful moments of connection, dignity, and joy."
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


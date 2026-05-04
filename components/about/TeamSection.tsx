'use client';

import React from 'react';

const TeamSection: React.FC = () => {
    const points = [
        {
            num: "1",
            title: "Matched to each client",
            text: "We thoughtfully match caregivers based on experience, skill set, location, and personality. We take a holistic approach and want to be sure it’s a good match for everyone.",
            image: "/wp-content/uploads/2024/10/graphic-number-1.png"
        },
        {
            num: "2",
            title: "Collaborative",
            text: "Our caregivers are communicative, working closely with your care manager to provide a comprehensive, personalized care plan and keep your family informed of any updates.",
            image: "/wp-content/uploads/2024/10/graphic-number-2.png"
        },
        {
            num: "3",
            title: "Trained professionals",
            text: "Through extensive ongoing training and background checks, our caregivers are qualified to protect your well-being.",
            image: "/wp-content/uploads/2024/10/graphic-number-3.png"
        },
        {
            num: "4",
            title: "A dedicated companion",
            text: "Consistency is key. We strive to provide you with a familiar face you’ve grown to trust and find comfort in.",
            image: "/wp-content/uploads/2024/10/graphic-number-4.png"
        },
        {
            num: "5",
            title: "The heart of our business",
            text: "We understand that a supportive work environment is essential for our care professionals to thrive. By fostering a culture of respect, empathy, and encouragement, we ensure that our team feels valued and appreciated. This, in turn, enables our care professionals to provide compassionate care to those they serve.",
            image: "/wp-content/uploads/2024/10/graphic-number-5.png"
        }
    ];

    return (
        <section className="bg-[#332885] py-20 md:py-32 relative overflow-hidden">
            {/* Custom Shiny Animation */}
            <style jsx>{`
                @keyframes shiny {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .shiny-text {
                    background: linear-gradient(90deg, #fff 0%, #a5b4fc 25%, #fff 50%, #a5b4fc 75%, #fff 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shiny 3s linear infinite;
                }
            `}</style>

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center leading-tight">
                        Each of our carefully chosen <span className="shiny-text">caregivers</span> are:
                    </h2>

                    <div className="space-y-12">
                        {points.map((point, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 group">
                                <div className="flex-shrink-0 w-24 md:w-32 bg-white/20 rounded-full p-4 border border-white/10 shadow-inner">
                                    <img 
                                        src={point.image} 
                                        alt={`Step ${point.num}`} 
                                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 brightness-0 invert opacity-90"
                                    />
                                </div>
                                <div className="flex-grow space-y-4 text-center md:text-left pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F2E8DF]">
                                        Step {point.num}: {point.title}
                                    </h3>
                                    <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                                        {point.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative bg elements to soften the purple */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
};

export default TeamSection;

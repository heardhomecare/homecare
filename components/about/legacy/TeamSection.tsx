import React from 'react';
import Link from 'next/link';

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
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] text-center leading-tight">
                        Each of our carefully chosen <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">caregivers</mark> are:
                    </h2>

                    <div className="space-y-12">
                        {points.map((point, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 group">
                                <div className="flex-shrink-0 w-24 md:w-32">
                                    <img 
                                        src={point.image} 
                                        alt={`Step ${point.num}`} 
                                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-grow space-y-4 text-center md:text-left pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--brand-green)]">
                                        {point.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                        {point.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 text-center space-y-8 bg-[var(--brand-cream)] p-12 rounded-[3rem] shadow-xl">
                        <p className="text-2xl font-serif font-bold text-[var(--brand-green)]">
                            Are you interested in learning more about becoming part of the Heard family?
                        </p>
                        <Link 
                            href="/careers" 
                            className="inline-block bg-[var(--brand-green)] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1"
                        >
                            Tell Me More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;


import React from 'react';

const OurStory: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-10 text-center">
                    <div className="space-y-4">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                            Our Story
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-black)]">
                            Rooted in Love and Dedication
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed italic">
                        <p>
                            In 2018, Kala Omeiza founded the national nonprofit I’m Heard to combat mental health stigma in underserved communities. Since then, she has authored three books and spoken internationally on mental health, culture, and the importance of breaking silence around emotional wellbeing. Her advocacy continues to shape her broader mission of dignity, access, and compassionate support.
                        </p>
                        <p>
                            After surviving a postpartum condition that is often fatal for mothers, Kala experienced firsthand how difficult it can be to accept care—and how life-changing the right support can be when it finally arrives. That experience, along with years of witnessing loved ones transition from independence to needing daily assistance, became the foundation for her work in home care.
                        </p>
                        <p>
                            Building on this journey, she launched Heard Home Care to provide high-quality, compassionate support for older adults and individuals with disabilities. Her work is rooted in the belief that care should preserve dignity, foster trust, and ensure every person feels seen and heard.
                        </p>
                        <p>
                            Based in Raleigh, North Carolina, Kala and her family are committed to embedding values of compassion and understanding into the care they provide to the community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;

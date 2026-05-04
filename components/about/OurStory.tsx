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
                            I&apos;m Kala Allen Omeiza, and my journey into home care is deeply personal. It did not come from a boardroom; it came from a hospital bed. After giving birth, I experienced an amniotic fluid embolism—a condition that is mostly fatal. I survived, and then had to relearn how to walk and communicate.
                        </p>
                        <p>
                            In doing so, I discovered firsthand how difficult it is to accept care—and how transformative the right care can be when it finally arrives. <strong className="text-[#332885] font-bold">&quot;It wasn&apos;t easy to accept friendly care, but it was worth it.&quot;</strong>
                        </p>
                        <p>
                            That experience, layered with years of watching my own relatives navigate the transition from independence to needing daily support, became the emotional backbone of Heard Home Care. We understand the vulnerability and the need to feel seen that comes with accepting support in the home.
                        </p>
                        <p>
                            As we grow our family in Raleigh, North Carolina, we prioritize instilling values of compassion, understanding, and dignity. These principles shape our approach to serving our clients and ensuring that every family we touch feels genuinely heard.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;

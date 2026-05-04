import React from 'react';

const OurStory: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto space-y-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--brand-black)] leading-tight">
                        Your Family. Our <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Commitment</mark>.
                    </h1>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed italic">
                        <p>
                            We&apos;re Adam and Marlene Bartlett, and our journey into home care is deeply personal. Having witnessed the positive impact of home care when our grandmothers needed support, the caregivers who made a difference in our family&apos;s life left a lasting impression on us. This experience motivated us to serve our community with the same dedication and compassion we would want for our own loved ones.
                        </p>
                        <p>
                            We understand the challenges families face when caring for a loved one adjusting to different life circumstances. <strong className="text-[var(--brand-green)] font-bold">Our goal is to provide home care support that helps individuals live safely, enjoy their independence, and maintain meaningful connections in the comfort of their own homes</strong>.
                        </p>
                        <p>
                            As we raise our three daughters in Walnut Creek, California, we prioritize instilling values of compassion, kindness, and respect. These principles not only guide our family life but also shape our approach to serving our clients and supporting our team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;


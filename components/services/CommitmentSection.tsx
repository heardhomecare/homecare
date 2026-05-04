import React from 'react';
import ServiceCategories from './ServiceCategories';

const CommitmentSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <p className="text-xl md:text-2xl text-[var(--brand-black)] leading-relaxed max-w-4xl mx-auto font-medium">
                        Our personalized senior home care services are designed to enhance the well-being and comfort of you or your loved one in the familiar surroundings of home.
                    </p>
                </div>

                <ServiceCategories />
            </div>
        </section>
    );
};

export default CommitmentSection;



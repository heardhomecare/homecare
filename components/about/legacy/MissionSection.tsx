import React from 'react';

const MissionSection: React.FC = () => {
    const team = [
        {
            name: "Adam Bartlett, CDP",
            role: "Co-owner & CEO",
            image: "/wp-content/uploads/2024/10/photo-adam-bartlett-768x1024.jpg",
            bio: [
                "Adam brings over 20 years of experience in the corporate world, having worked with iconic Bay Area brands like Gap Inc., Visa, and Levi’s. Driven by personal experiences within his own family and a strong dedication to serve, he recognized a growing need for high-quality home care services, which inspired him to create Heard Home Care.",
                "With a naturally calm and confident leadership style, Adam embodies the principles of servant leadership, fostering an environment where both clients and caregivers feel valued and supported. His strong organizational and operational skills streamline our processes, ensuring that care delivery is efficient and effective, directly enhancing the client experience. Through his vision, Heard Home Care aims to deliver care that not only meets but exceeds the expectations of those we serve.",
                "Adam is also a Certified Dementia Practitioner (CDP), by the National Council of Certified Dementia Practitioners (NCCDP)."
            ]
        },
        {
            name: "Marlene Bartlett",
            role: "Co-owner & Chief People Officer",
            image: "/wp-content/uploads/2024/10/photo-marlene-bartlett-729x1024.jpg",
            bio: [
                "After a rewarding career in marketing at Ghirardelli Chocolate, Marlene’s life took a transformative turn when she became a mother. Focusing on her daughters’ early development made her realize the profound impact that attentive care can have on families. This inspired her to open her home and heart to serving families with young children through her in-home childcare program. Creating lasting bonds with the families she served was a deeply rewarding experience. Additionally, witnessing her grandmother receive exceptional care in her final years reinforced her belief that high-quality care is essential at every stage of life.",
                "Now, Marlene channels her passion for understanding consumer needs and the importance of delivering outstanding care into Heard Home Care, where she nurtures both clients and caregivers, ensuring everyone receives the support they need to thrive."
            ]
        },
        {
            name: "Kirsten Sawyer, RN, BSN",
            role: "Client Care Manager",
            image: "/wp-content/uploads/2024/10/photo-kristin-sawyer-883x1024.jpg",
            bio: [
                "Kirsten is a warm, caring and highly skilled RN with extensive experience in both hospital and home settings. In her role as a Critical Care Nurse at John Muir Medical Center, she mastered the art of managing complex treatments and coordinating personalized care plans, always prioritizing exemplary support for patients and their families, including those in end-of-life situations. Recently, she has served as the Volunteer Coordinator at her daughters’ school, further showcasing her commitment to community service. With her nursing expertise and exceptional organizational skills, Kirsten is instrumental in helping Heard Home Care deliver exceptional, tailored care to our clients."
            ]
        }
    ];

    return (
        <section className="bg-[var(--brand-cream)] py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
                        Meet Our <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Dedicated</mark> Leadership Team
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Each leader brings a diverse set of skills and personal experiences that advance our mission to support clients, their families, and our care professionals.
                    </p>
                </div>

                <div className="space-y-20 lg:space-y-32">
                    {team.map((member, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                            {/* Image Column */}
                            <div className="w-full lg:w-2/5">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-[var(--brand-tan)] opacity-10 rounded-[3rem] ${idx % 2 === 1 ? '-rotate-3' : 'rotate-3'} transform group-hover:rotate-0 transition-transform duration-500`}></div>
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="relative rounded-[3rem] w-full h-auto object-cover shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-3/5 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-green)]">{member.name}</h3>
                                    <p className="text-lg font-bold text-[var(--brand-tan)] uppercase tracking-widest">{member.role}</p>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                    {member.bio.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;


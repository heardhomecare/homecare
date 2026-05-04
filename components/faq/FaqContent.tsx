'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqContent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "Do you have minimum shift lengths?",
            a: ["To ensure continuity of care and to attract the highest-caliber caregivers for our families, we focus on consistent weekly schedules with a minimum of 4 hours per shift. This structure allows our team to build the deep, meaningful relationships that define the boutique, Heard experience."]
        },
        {
            q: "Will we have the same caregiver every time?",
            a: ["Our model is built on continuity of care. We don’t believe in sending a different person every shift. Some clients may have different caregivers for weekdays vs weekends, but our model is built on having the same caregiver working the same day and time each week."]
        },
        {
            q: "What if I don’t like my caregiver?",
            a: ["Part of our boutique approach is to make a client and caregiver match based on both personality and skills. During our assessment, we do our best to understand the type of caregiver that would be a good fit. However, if a caregiver is not the right fit, we will work closely with you to identify a new match who better aligns with your needs."]
        },
        {
            q: "What happens if our caregiver is sick or unavailable?",
            a: ["When you start care, you can choose to have a substitute (or not) should your primary caregiver be unavailable. Our ‘on-call’ team is highly experienced, and our detailed Care Plans ensure a seamless transition if your primary caregiver is away."]
        },
        {
            q: "How quickly can care begin?",
            a: ["Typically, we can begin care within 48 to 72 hours following an in-home assessment. This time allows us to select the right caregiver match and create a customized Plan of Care that aligns with your family’s specific goals. For unique care needs or specific scheduling requirements, it may take slightly longer to find the perfect match. We prioritize the quality of the match over speed, as we will never send a caregiver unless we are confident they can provide the level of care required."]
        },
        {
            q: "How do you select and vet your caregivers?",
            a: [
                "Because continuity of care is the focus of our agency, we look to hire experienced, career-oriented caregivers who value stability, rather than “gig” work. Most of our caregivers have 5-10+ years of experience. Many have worked as Certified Nursing Assistants (CNAs) in the past or as caregivers in Assisted Living Communities.",
                "Our leadership team interviews each caregiver in-person. Following the interview, caregivers attend an orientation for a hands-on skills check using our on-site equipment. These in-person touchpoints are vital; we only send caregivers into your home whom we would trust with our own family."
            ]
        },
        {
            q: "What are your hourly rates?",
            a: ["We utilize service tiers tailored to individual needs to ensure families only pay for the level of care and expertise that best fits their situation."]
        }
    ];

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between py-6 text-left group focus:outline-none cursor-pointer"
                                >
                                    <div className="flex items-start">
                                        <span className="text-[var(--brand-tan)] mr-4 md:mr-6 font-serif font-bold text-xl md:text-2xl opacity-40 mt-1 shrink-0">
                                            Q{idx + 1}.
                                        </span>
                                        <h3 className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${openIndex === idx ? 'text-[#332885]' : 'text-gray-800 group-hover:text-[#332885]'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <ChevronDown 
                                        className={`w-6 h-6 text-[#332885] transition-transform duration-500 shrink-0 ml-4 ${openIndex === idx ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pl-8 md:pl-12 border-l-2 border-[var(--brand-tan)]/40 ml-4 md:ml-6">
                                        <div className="bg-[#332885] p-8 md:p-12 rounded-[2rem] shadow-2xl transition-all duration-700 transform translate-x-0">
                                            <div className="space-y-4">
                                                {faq.a.map((p, i) => (
                                                    <p key={i} className="text-lg text-white leading-relaxed opacity-90">
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqContent;

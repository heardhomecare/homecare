import React from 'react';

const CHECK_ICON = (
    <span className="kb-svg-icon-wrap kb-svg-icon-fas_check-circle kt-svg-icon-list-single">
        <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
    </span>
);

const CARE_PLANNING = [
    { title: "Comprehensive Assessment", text: "Initial in-depth evaluation, including emotional and lifestyle needs." },
    { title: "Customized Care Plans", text: "Tailored care plans that evolve with the client’s changing needs and preferences." },
    { title: "Family Consultation", text: "Regular family meetings to discuss care plan and adjustments." }
];

const WELLNESS_PROGRAMS = [
    { title: "Nutrition and Meals", text: "Personalized meal plans that cater to dietary restrictions and preferences." },
    { title: "Exercise and Mobility", text: "Reminders and encouragement to stay active and follow any exercise or physical therapy routine prescribed by a healthcare professional." },
    { title: "Church & Spiritual Life Transportation", text: "Support with arranging and providing reliable transportation to church services, faith-based gatherings, and spiritual activities to help find or maintain connection and participation in your faith community." },
    { title: "Mental Health Support", text: "Gentle reminders and assistance in accessing counseling or wellness activities, along with encouragement to support emotional well-being and daily mental health routines." }
];

const DAILY_LIVING = [
    { title: "Personal Care", text: "Assistance with bathing, dressing, grooming, hygiene needs, and anything you or your loved one needs to stay safe in their home." },
    { title: "Mobility Support", text: "Help with transferring, walking, and use of mobility aids." },
    { title: "Household Management", text: "Light housekeeping, laundry, and home organization." }
];

const COMPANIONSHIP = [
    { title: "Social Activities", text: "Planning and participation in social outings, hobby activities, and community events." },
    { title: "Cognitive Stimulation", text: "Games, puzzles, and activities to keep the mind sharp." },
    { title: "Technology Assistance", text: "Helping clients stay connected with loved ones through technology." }
];

const ServiceCategories: React.FC = () => {
    const categories = [
        { title: "Personalized & Detailed Care Planning", items: CARE_PLANNING },
        { title: "Wellness Support Programs", items: WELLNESS_PROGRAMS },
        { title: "Daily Living Assistance", items: DAILY_LIVING },
        { title: "Companionship and Social Engagement", items: COMPANIONSHIP }
    ];

    return (
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 gap-8">
            {categories.map((cat, idx) => (
                <div key={idx} className="space-y-4 group bg-[#eef0fb] p-6 md:p-8 border-t-[12px] border-[#332885] shadow-lg">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#332885] border-b border-[#332885]/20 pb-3 transition-colors">
                        {cat.title}
                    </h3>
                    <ul className="space-y-4">
                        {cat.items.map((item, i) => (
                            <li key={i} className="flex items-start space-x-6">
                                <span className="text-[var(--brand-tan)] mt-1 flex-shrink-0">
                                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                    </svg>
                                </span>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-[var(--brand-black)] uppercase tracking-wider">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ServiceCategories;


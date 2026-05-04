import React from 'react';

const CHECK_ICON = (
    <span className="kb-svg-icon-wrap kb-svg-icon-fas_check-circle kt-svg-icon-list-single">
        <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
    </span>
);

const SPECIALIZED_SERVICES = [
    {
        category: "Alzheimer’s and Dementia",
        items: [
            { title: "Memory Care Programs", text: "Providing structured activities and routines that encourage memory and cognitive function." },
            { title: "Safety and Supervision", text: "Ensuring a safe environment with reminders and assistance to prevent accidents and wandering." },
            { title: "Behavioral Support", text: "Offering supportive strategies for managing behavioral changes and agitation." }
        ]
    },
    {
        category: "Surgery Recovery Care",
        items: [
            { title: "Mobility Assistance", text: "Support with getting in and out of bed and assistance moving safely around their living space." },
            { title: "Nutrition and Hydration", text: "Ensuring adequate intake of fluids and nutritious foods that support healing and recovery." },
            { title: "Personal Hygiene Assistance", text: "Helping with bathing, grooming, and other personal care tasks to maintain hygiene and comfort during recovery." }
        ]
    },
    {
        category: "Stroke Recovery Care",
        items: [
            { title: "Physical Therapy Reminders", text: "Encouraging and reminding clients to follow prescribed exercises to promote recovery. Log the exercises completed during each visit." },
            { title: "Speech Therapy Reminders", text: "Providing support and reminders to engage in speech exercises as directed by therapists. Log the exercises completed during each visit." },
            { title: "Occupational Therapy Reminders", text: "Supporting clients with reminders to follow their therapy routines aimed at daily living activities. Log the therapy routines completed during each visit." },
            { title: "Emotional Support", text: "Offering non-clinical emotional support to help cope with the challenges of recovery." },
            { title: "Cognitive Stimulation", text: "Providing activities and reminders that promote cognitive engagement and memory exercises." }
        ]
    },
    {
        category: "Multiple Sclerosis (MS)",
        items: [
            { title: "Symptom Support", text: "Offering non-clinical support and reminders to help clients manage symptoms as advised by their healthcare provider." },
            { title: "Mobility Assistance", text: "Supporting safe movement with reminders to use mobility aids and follow prescribed exercises." },
            { title: "Energy Conservation Reminders", text: "Providing reminders for rest and energy-saving strategies." }
        ]
    },
    {
        category: "Parkinson’s Disease",
        items: [
            { title: "Medication Reminders", text: "Offering reminders to take medications as prescribed." },
            { title: "Mobility and Fall Prevention Support", text: "Assisting with safe movement and fall prevention strategies in line with care instructions." },
            { title: "Cognitive and Emotional Support", text: "Providing activities to maintain cognitive function and emotional support to cope with daily challenges." }
        ]
    },
    {
        category: "Chronic Obstructive Pulmonary Disease (COPD)",
        items: [
            { title: "Respiratory Reminders", text: "Offering reminders to follow prescribed breathing exercises and inhaler use as directed by healthcare providers." },
            { title: "Energy Conservation", text: "Providing reminders and guidance on pacing activities to manage energy levels." },
            { title: "Nutritional Support Reminders", text: "Encouraging adherence to nutritional guidelines that help maintain strength and respiratory health." }
        ]
    },
    {
        category: "Heart Disease",
        items: [
            { title: "Cardiac Reminders", text: "Providing reminders to monitor heart rate and follow prescribed exercises or rehabilitation programs." },
            { title: "Medication Reminders", text: "Offering support with reminders for medication adherence." },
            { title: "Diet and Nutrition Guidance", text: "Supporting heart-healthy dietary choices and meal planning according to the care plan." }
        ]
    },
    {
        category: "Palliative and Hospice Support",
        items: [
            { title: "Comfort Support", text: "Creating a peaceful and supportive environment, with reminders to follow the care plan provided by healthcare professionals." },
            { title: "Emotional and Spiritual Support", text: "Offering non-clinical emotional and spiritual support to both clients and their families." },
            { title: "Coordination with Hospice Providers", text: "Assisting with communication and coordination of care between the family and hospice teams." }
        ]
    },
    {
        category: "Respite Care",
        items: [
            { title: "Short-Term Relief", text: "Temporary care for clients to give primary caregivers a break, whether for a few hours, days, or weeks." },
            { title: "Flexible Scheduling", text: "Customizable respite care plans to fit the needs and schedules of caregivers and families." }
        ]
    }
];

const CareDetails: React.FC = () => {
    return (
        <section className="bg-[#332885] py-20 md:py-32">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8 mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight flex flex-wrap items-center justify-center gap-3">
                        Specialized <span className="font-['Girl_Boss_Script'] text-6xl md:text-7xl lg:text-8xl font-normal lowercase tracking-normal text-white -mt-2">care</span> Services
                    </h2>
                </div>

                <div className="w-full mx-auto grid grid-cols-1 gap-8">
                    {SPECIALIZED_SERVICES.map((service, index) => (
                        <div key={index} className="space-y-4 group bg-white p-6 md:p-8 border border-[#1b1b1b] shadow-2xl rounded-xl">
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#332885] flex items-center space-x-4 border-b border-gray-200 pb-3">
                                <span>{service.category}</span>
                            </h3>
                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-4 group/item">
                                        <span className="text-[var(--brand-tan)] mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                            </svg>
                                        </span>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-[var(--brand-black)] uppercase tracking-widest text-sm">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareDetails;


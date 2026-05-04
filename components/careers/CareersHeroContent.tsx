'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, Loader2, Briefcase } from 'lucide-react';
import ApplicationModal from './ApplicationModal';

const CareersHeroContent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [jobs, setJobs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');

    const handleApply = (title: string) => {
        setSelectedJobTitle(title);
        setIsModalOpen(true);
    };

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await fetch('/api/careers');
                const data = await res.json();
                setJobs(data.filter((j: any) => j.status === 'active'));
            } catch (error) {
                console.error('Failed to fetch jobs');
            } finally {
                setIsLoading(false);
            }
        }
        fetchJobs();
    }, []);

    const benefits = [
        "Competitive pay and benefits",
        "Thoughtful and balanced scheduling",
        "Growth and advancement opportunities",
        "Rewards and recognition",
        "Unlimited online and hands-on training"
    ];

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Caregiving <span className="text-[#332885]">Careers</span>
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed italic">
                        <p>At Heard Home Care, we believe caregiving is more than a job—it’s a high calling that deserves to be celebrated. Our dedicated care professionals are at the heart of what we do, transforming lives through their compassion, understanding, and steadfast commitment.</p>
                        <p>We’re looking for individuals who embody the qualities essential to caregiving: compassion, dependability, and a genuine desire to help others. If you’re ready to make a meaningful impact as a home care professional, alongside a supportive team in Raleigh and throughout the surrounding areas, you’re in the right place.</p>
                        <p><strong className="text-[#332885]">At Heard Home Care, we consider our team an extension of our family. Here, you’ll find a culture rooted in respect, kindness, and understanding</strong>. We believe that exceptional care starts with empowering our care professionals to thrive both at work and at home. That’s why we offer:</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#332885] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold text-gray-900 group-hover:text-[#332885] transition-colors duration-300">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8 pt-12 border-t border-gray-100">
                        <div className="space-y-4 text-center">
                            <h3 className="text-3xl font-serif font-bold text-[#332885]">Available Jobs</h3>
                            <p className="text-lg text-gray-600 italic">Explore our current opportunities and take the next step in your caregiving journey.</p>
                        </div>
                        
                        {isLoading ? (
                            <div className="py-20 flex flex-col items-center justify-center text-gray-400 gap-4">
                                <Loader2 className="animate-spin text-[#332885]" size={48} />
                                <p className="font-serif italic text-lg text-gray-400">Finding your next opportunity...</p>
                            </div>
                        ) : jobs.length > 0 ? (
                            <div className="space-y-6">
                                {jobs.map((job, idx) => (
                                    <div key={job._id} className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-serif font-bold text-[#332885]">{job.title}</h4>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4 text-[#332885]/40" />
                                                        {job.location}
                                                    </div>
                                                    <div className="hidden md:block text-gray-200">|</div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4 text-[#332885]/40" />
                                                        {job.type}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button 
                                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                                    className="px-6 py-3 border-2 border-[#332885] text-[#332885] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#332885]/5 transition-all flex items-center justify-center gap-2"
                                                >
                                                    {openIndex === idx ? 'Hide Details' : 'View Details'}
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                                                </button>
                                                <button 
                                                    onClick={() => handleApply(job.title)}
                                                    className="px-8 py-4 bg-[#332885] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="pt-8 border-t border-gray-50">
                                                <p className="text-gray-600 leading-relaxed italic">
                                                    {job.description}
                                                </p>
                                                <div className="mt-6 flex justify-end">
                                                    <button className="text-[#332885] text-xs font-bold uppercase tracking-widest underline underline-offset-8 hover:text-black transition-colors">
                                                        Schedule Interview
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center space-y-6">
                                <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                    <Briefcase size={40} strokeWidth={1} />
                                </div>
                                <h4 className="text-2xl font-serif text-gray-400 italic">We don't have any openings at the moment.</h4>
                                <p className="text-gray-500 max-w-md mx-auto">Please check back soon or send your resume to team@heardhome.com for future consideration.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ApplicationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJobTitle}
            />
        </section>
    );
};

export default CareersHeroContent;


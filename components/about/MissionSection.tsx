import React from 'react';
import { Award, Briefcase, GraduationCap, Linkedin, Mail, Globe, ExternalLink } from 'lucide-react';

const MissionSection: React.FC = () => {
    return (
        <section className="bg-[#F4F3FA] py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight uppercase tracking-wide">
                        More About <span className="text-[var(--brand-green)]">Kala Omeiza</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                        {/* Image Column */}
                        <div className="w-full lg:w-2/5">
                            <div className="sticky top-32 space-y-8">
                                <div className="relative">
                                    {/* Decorative elements */}
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--brand-green)] opacity-10 rounded-full blur-3xl"></div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--brand-tan)] opacity-20 rounded-full blur-3xl"></div>

                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
                                        <img
                                            src="/kala.webp"
                                            alt="Kala Omeiza"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Contact Info Card */}
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                                    <div className="space-y-1 text-center lg:text-left">
                                        <h3 className="text-2xl font-serif font-bold text-[var(--brand-black)]">Kala</h3>
                                        <p className="text-sm font-bold text-[var(--brand-green)] uppercase tracking-widest">Founder, Heard Home Care</p>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-gray-50">
                                        <a href="https://kalaomeiza.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[var(--brand-green)] transition-colors group">
                                            <Globe className="w-5 h-5 shrink-0" />
                                            <span className="text-sm font-medium">kalaomeiza.com</span>
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <a href="https://linkedin.com/in/KalaOmeiza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[var(--brand-green)] transition-colors group">
                                            <Linkedin className="w-5 h-5 shrink-0" />
                                            <span className="text-sm font-medium">linkedin.com/KalaOmeiza</span>
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <a href="mailto:Kala@kalaomeiza.com" className="flex items-center gap-3 text-gray-600 hover:text-[var(--brand-green)] transition-colors">
                                            <Mail className="w-5 h-5 shrink-0" />
                                            <span className="text-sm font-medium">Kala@kalaomeiza.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full lg:w-3/5 space-y-16">
                            {/* About Me */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-8 bg-[var(--brand-green)]"></div>
                                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--brand-green)]">About Me</h4>
                                </div>
                                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                    <p>
                                        Prior to founding Heard Home Care, Kala Omeiza spent over a decade working directly with older adults and individuals living with dementia, developmental disabilities, and mental health challenges, including clinical roles at <strong className="text-gray-900">Duke University Hospital</strong>, a <strong className="text-gray-900">Harvard Medical School–affiliated hospital</strong>, and the <strong className="text-gray-900">International Fellowship of Evangelical Students</strong>.
                                    </p>
                                    <p>
                                        She is dedicated to serving the Raleigh community with a focus on compassion, understanding, and the belief that people who are often overlooked deserve not just services, but to be genuinely seen and heard.
                                    </p>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-8 bg-[var(--brand-green)]"></div>
                                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--brand-green)]">Education</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <GraduationCap className="w-8 h-8 text-[var(--brand-tan)] shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-xl font-bold text-[var(--brand-black)]">University of Oxford</p>
                                            <p className="text-gray-600 font-medium">Masters in Psychology</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <GraduationCap className="w-8 h-8 text-[var(--brand-tan)] shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-xl font-bold text-[var(--brand-black)]">Miami University</p>
                                            <p className="text-gray-600 font-medium">Bachelor&apos;s in Psychology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-8 bg-[#332885]"></div>
                                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#332885]">Experience</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#332885] mt-2.5 shrink-0"></div>
                                        <p className="text-gray-700 font-bold">Duke University Hospital</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#332885] mt-2.5 shrink-0"></div>
                                        <p className="text-gray-700 font-bold">Harvard Medical School Affiliate Hospital</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#332885] mt-2.5 shrink-0"></div>
                                        <p className="text-gray-700 font-bold leading-tight">International Fellowship of Evangelical Students</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#332885] mt-2.5 shrink-0"></div>
                                        <p className="text-gray-700 font-bold">US Fulbright Scholar</p>
                                    </div>
                                </div>
                            </div>

                            {/* Awards */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-8 bg-[#332885]"></div>
                                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#332885]">Awards</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#332885] transition-all">
                                        <Award className="w-8 h-8 text-gray-400 group-hover:text-[#332885] transition-colors" />
                                        <p className="text-gray-700 font-bold italic">Forbes 30 Under 30 Finalist</p>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#332885] transition-all">
                                        <Award className="w-8 h-8 text-gray-400 group-hover:text-[#332885] transition-colors" />
                                        <p className="text-gray-700 font-bold italic">Davos Neurodiversity Summit Leadership Wall, 2025</p>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#332885] transition-all">
                                        <Award className="w-8 h-8 text-gray-400 group-hover:text-[#332885] transition-colors" />
                                        <p className="text-gray-700 font-bold italic">Autism Today 100 Top Global Inclusion Leaders, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;

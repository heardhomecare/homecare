'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const ContactFormSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        source: '',
        message: '',
        textOptIn: true
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Thank you for your message. Our team will contact you soon!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    source: '',
                    message: '',
                    textOptIn: true
                });
            } else {
                const data = await response.json();
                toast.error(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Failed to send message. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        
        if (name === 'phone' && typeof val === 'string') {
            const formattedValue = formatPhoneNumber(val);
            setFormData({ ...formData, [name]: formattedValue });
        } else {
            setFormData({ ...formData, [name]: val });
        }
    };

    return (
        <section className="bg-[#332885] py-10 md:py-20 relative overflow-hidden">
            {/* Circular Design Elements - High Visibility */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] border-2 border-white/20 rounded-full pointer-events-none"></div>
            <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none"></div>
            
            <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] border-2 border-white/20 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] border border-white/10 rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 flex justify-center relative z-10">
                
                {/* Main Unified White Container */}
                <div className="w-full max-w-5xl bg-white rounded-none shadow-2xl overflow-hidden">
                    
                    {/* Top Header Content */}
                    <div className="p-6 md:p-12 lg:p-16 space-y-12">
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
                            <div className="lg:max-w-xl space-y-8 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                                    Contact <span className="text-[#332885]">Us</span>
                                </h2>
                                
                                <p className="text-xl text-black leading-relaxed font-serif italic">
                                    We’re here to support you and your loved ones. Whether you have questions about our services or need assistance in finding the right home care, we’d love to hear from you.
                                </p>

                                <div className="space-y-4 pt-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 w-20">Email:</div>
                                        <a href="mailto:team@heardhome.com" className="text-xl md:text-2xl font-serif font-bold text-[#332885] hover:underline transition-all">team@heardhome.com</a>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 w-20">Phone:</div>
                                        <a href="tel:9196595991" className="text-xl md:text-2xl font-serif font-bold text-[#332885] hover:underline transition-all">(919) 659-5991</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <img 
                                    src="/Asset5.png" 
                                    alt="Heard Home Care Logo" 
                                    className="w-32 md:w-40 h-auto drop-shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="w-full pt-8 border-t border-gray-100">
                            <p className="text-lg text-gray-600 italic leading-relaxed text-center lg:text-left">
                                Please fill out the form below, and a member of our team will reach out to you shortly to discuss how we can best meet your needs.
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-gradient-to-br from-[#332885]/10 to-[#332885]/5 p-6 md:p-16 flex justify-center">
                        <div className="w-full max-w-2xl bg-white rounded-none shadow-xl p-6 md:p-12">
                            <div className="text-center mb-10 space-y-4">
                                <img src="/Asset5.png" alt="Logo" className="w-20 h-auto mx-auto mb-6" />
                                <h3 className="text-2xl font-serif font-bold text-gray-800">
                                    Send us a message
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    placeholder="Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        placeholder="Email address*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                    />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        required
                                        placeholder="Phone*"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                    />
                                </div>

                                <input 
                                    type="text" 
                                    name="city"
                                    placeholder="City*"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                />

                                <input 
                                    type="text" 
                                    name="source"
                                    placeholder="How did you hear about us?"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                />

                                <textarea 
                                    name="message"
                                    placeholder="How can we serve you?"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#332885] placeholder:text-gray-400"
                                ></textarea>

                                <div className="flex items-start gap-3 py-2">
                                    <input 
                                        type="checkbox" 
                                        name="textOptIn"
                                        id="textOptIn"
                                        checked={formData.textOptIn}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-[#332885] border-gray-300 rounded focus:ring-[#332885]"
                                    />
                                    <label htmlFor="textOptIn" className="text-sm text-gray-600 leading-tight">
                                        I agree to receive text messages from HEARD Home Care at the phone number provided above. Data rates may apply.
                                    </label>
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#332885] hover:bg-black text-white font-bold py-4 rounded-md transition-all duration-300 uppercase tracking-widest text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                Sending...
                                            </>
                                        ) : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactFormSection;


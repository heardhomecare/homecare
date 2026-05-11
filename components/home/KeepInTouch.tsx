"use client";

import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function KeepInTouch() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [openUpwards, setOpenUpwards] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const options = [
    'Google Search',
    'Social Media',
    'Friend or Family',
    'Healthcare Professional',
    'Other'
  ];

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleDropdownToggle = () => {
    if (!isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If less than 250px below, open upwards
      setOpenUpwards(spaceBelow < 250);
    }
    setIsDropdownOpen(!isDropdownOpen);
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
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedValue = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedOption === 'Select an option') {
      toast.error('Please select how you heard about us.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: selectedOption,
          city: 'N/A', // Home page form doesn't have city
          textOptIn: true // Default opt-in
        }),
      });

      if (response.ok) {
        toast.success('Thank you for your message! Our team will reach out shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSelectedOption('Select an option');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: 'url(/wp-content/uploads/2024/11/bg-home-contact-us.jpg)',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Visual Fidelity Overlay - Cream overlay for consistent brand feel */}
      <div 
        className="absolute inset-0 bg-[#E9ECEF] pointer-events-none" 
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--brand-black)] leading-tight">
              Keep in <mark className="kt-highlight text-[var(--brand-black)] !text-inherit text-5xl md:text-7xl lg:text-8xl font-normal">Touch</mark>
            </h2>
            
            <p className="text-xl text-[var(--brand-black)] leading-relaxed max-w-xl">
              We’re here to answer your questions and help you navigate the journey of finding the right care. Fill out the form, and a member of our team will reach out to you shortly.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-4 cursor-pointer group">
                <div className="bg-[var(--brand-green)] p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-[var(--brand-tan)]">Call Us</p>
                  <p className="text-xl font-bold text-[var(--brand-black)]">(919) 659-5991</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 cursor-pointer group">
                <div className="bg-[var(--brand-green)] p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-[var(--brand-tan)]">Email Us</p>
                  <p className="text-xl font-bold text-[var(--brand-black)]">team@heardhome.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-100 py-3 focus:border-[var(--brand-green)] outline-none transition-colors text-[var(--brand-black)]"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[var(--brand-green)] outline-none transition-colors text-[var(--brand-black)]"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[var(--brand-green)] outline-none transition-colors text-[var(--brand-black)]"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">How can we help you?</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-100 py-3 focus:border-[var(--brand-green)] outline-none transition-colors text-[var(--brand-black)] resize-none"
                  rows={4}
                  placeholder="Tell us a bit about your needs..."
                ></textarea>
              </div>

              <div className="space-y-2 relative" ref={dropdownRef}>
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">How did you hear about us?</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className="w-full border-b-2 border-gray-100 py-3 text-left focus:border-[var(--brand-green)] outline-none transition-colors text-[var(--brand-black)] flex justify-between items-center cursor-pointer bg-white"
                  >
                    <span>{selectedOption}</span>
                    <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className={`absolute z-[100] right-0 w-full md:w-[320px] bg-white shadow-2xl border border-[var(--brand-tan)] rounded-xl overflow-hidden transition-all duration-200 ${openUpwards ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
                      {/* Close button */}
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownOpen(false);
                        }}
                        className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 cursor-pointer z-10"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <div className="py-2 max-h-[250px] overflow-y-auto">
                        {options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedOption(option);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-6 py-3 text-left hover:bg-[var(--brand-cream)] text-[var(--brand-black)] transition-colors cursor-pointer text-sm font-medium first:pt-4 last:pb-4"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[var(--brand-green)] text-white py-5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-[var(--brand-tan)] hover:shadow-xl hover:-translate-y-1 cursor-pointer flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


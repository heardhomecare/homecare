import React from 'react';

export default function ServiceArea() {
  const cities = [
    'Raleigh', 'Durham', 'Sanford', 'Goldsboro',
    'Greenville', 'Wilmington', 'Outer Banks', 'Pinehurst',
    'Southern Pines', 'New Bern', 'Fayetteville'
  ];

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Column: Full-Bleed Map Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
          <img 
            src="/service_map.webp" 
            alt="Service Area Map" 
            className="absolute inset-0 w-full h-full object-cover lg:object-left"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex items-center bg-white border-y lg:border-y-0 border-gray-50">
          <div className="py-12 lg:py-20 px-8 md:px-12 lg:px-20 max-w-3xl">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
                  <mark className="kt-highlight text-[var(--brand-black)] !text-inherit font-normal">Service</mark> Area
                </h2>
                <p className="text-lg text-[var(--brand-black)] opacity-90 leading-relaxed font-medium">
                  We are honored to serve our local community and the surrounding cities.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-gray-100">
                {cities.map((city) => (
                  <div key={city} className="flex items-center space-x-2 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-green)] group-hover:scale-125 transition-transform"></div>
                    <span className="text-base font-bold text-[var(--brand-black)] hover:text-[var(--brand-green)] transition-colors whitespace-nowrap">{city}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm md:text-base text-[var(--brand-black)] opacity-70 leading-relaxed italic border-l-2 border-[var(--brand-tan)] pl-4">
                  Don’t see your area listed? Give us a call at (919) 659-5991 to see if we can provide services in your city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

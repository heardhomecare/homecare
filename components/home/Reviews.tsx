import React from 'react';

export default function Reviews() {
  const testimonials = [
    {
      name: "Dore Myers",
      text: "Heard Home Care was so accessible to me – from casually inquiring information to needing hands on help pretty quickly, they provided immediate care.",
      role: "Family Member",
      image: "D"
    },
    {
      name: "Senya Borrelli",
      text: "Their team was incredibly caring, knowledgeable, and compassionate during a time when that meant everything to us.",
      role: "Client Daughter",
      image: "S"
    },
    {
      name: "Lisa Maclennan",
      text: "They provided great care and made adjustments where needed to best fit the needs of our family. Highly recommend!",
      role: "Family Friend",
      image: "L"
    }
  ];

  return null;
  /*
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-green)]">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
            What Families <mark className="kt-highlight text-[var(--brand-black)] !text-inherit font-normal italic">Say</mark>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-[var(--brand-cream)] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-[var(--brand-tan)]/10 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-green)] flex items-center justify-center text-white font-bold shadow-inner">
                  {item.image}
                </div>
                <div>
                  <p className="font-bold text-[var(--brand-black)] text-sm">{item.name}</p>
                  <p className="text-[10px] text-[var(--brand-green)] uppercase tracking-widest font-semibold">{item.role}</p>
                </div>
              </div>
              
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-6 h-6 text-[var(--brand-green)]/10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8h6l-2.5 5.5-2 1.5H16l3-7V8h-9zm12 0v8h6l-2.5 5.5-2 1.5H28l3-7V8h-9z" />
                </svg>
                <p className="text-[var(--brand-black)]/75 italic leading-relaxed text-sm relative z-10 pl-4">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--brand-tan)]/20 flex justify-between items-center">
                 <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
  */
}

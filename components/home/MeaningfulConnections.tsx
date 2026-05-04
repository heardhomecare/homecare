import React from 'react';

export default function MeaningfulConnections() {
  const items = [
    { name: 'Maintaining independence', icon: '/wp-content/uploads/2024/10/icon-maintaining-independence.png' },
    { name: 'Responsive communication', icon: '/wp-content/uploads/2024/10/icon-responsive-communication.png' },
    { name: 'Dignified care', icon: '/wp-content/uploads/2024/10/icon-dignified-care.png' },
    { name: 'Personal relationships', icon: '/wp-content/uploads/2024/10/icon-personal-relationships.png' },
    { name: 'Valued care professionals', icon: '/wp-content/uploads/2024/10/icon-valued-care-professionals.png' },
  ];

  return (
    <section className="bg-[var(--brand-green)] py-20 md:py-32 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
            It’s Not Just Care. It’s Making <mark className="kt-highlight text-[var(--brand-black)] !text-inherit text-4xl md:text-6xl lg:text-7xl">Personal</mark> Connections.
          </h2>

          <p className="text-lg opacity-90 leading-relaxed max-w-4xl mx-auto">
            We believe that true care goes beyond tasks—it’s about fostering meaningful relationships. We address each client’s unique needs by delivering elevated care centered around:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center space-y-6 group">
              <div className="transform transition-transform duration-500 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] leading-snug max-w-[180px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

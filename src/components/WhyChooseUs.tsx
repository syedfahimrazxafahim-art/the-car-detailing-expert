import React from 'react';
import { Sparkles, ShieldCheck, Eye, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'feature-1',
      title: 'PREMIUM QUALITY',
      description: 'A refined focus on presentation and finish.',
      icon: Sparkles,
    },
    {
      id: 'feature-2',
      title: 'PROFESSIONAL SERVICE',
      description: 'A clean and professional customer experience.',
      icon: ShieldCheck,
    },
    {
      id: 'feature-3',
      title: 'ATTENTION TO DETAIL',
      description: "Careful attention to the vehicle's appearance.",
      icon: Eye,
    },
    {
      id: 'feature-4',
      title: 'CUSTOMER SATISFACTION',
      description: 'Your vehicle, our priority.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#050505] border-t border-b border-[#8C6B18]/25"
      aria-label="Why Choose The Detailing Expert"
    >
      {/* Background Vehicle Image with Heavy Dark Charcoal/Black Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.whyChooseUs}
          alt="Automotive detailing surface presentation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808]/95 to-[#050505]" />
        <div className="absolute inset-0 bg-[#050505]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-['Oswald'] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-2">
            OUR COMMITMENT
          </span>
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            WHY CHOOSE <span className="gold-gradient-text">US</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light max-w-xl mx-auto">
            Our automotive car washing philosophy is built upon disciplined presentation, precision handling, and a pristine clean finish.
          </p>
        </div>

        {/* Four Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.id}
                className="relative bg-[#101010]/80 backdrop-blur-sm border border-[#8C6B18]/40 p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#121212] group shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
              >
                {/* Shield/Circular Minimalist Geometric Frame for Icon */}
                <div className="w-14 h-14 rounded-full border border-[#D4AF37] bg-[#0A0A0A] flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <IconComp className="w-6 h-6 text-[#F5C542]" />
                  <div className="absolute inset-0 rounded-full border border-[#F5C542]/30 animate-pulse pointer-events-none" />
                </div>

                <h3 className="font-['Oswald'] text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#F5C542] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                  {feat.description}
                </p>

                {/* Subtle bottom decorative accent */}
                <div className="w-8 h-[1px] bg-[#8C6B18]/40 mt-6 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

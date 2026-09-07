import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';

export const CTASection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-b border-[#8C6B18]/30"
      aria-label="Call to Action"
    >
      {/* Background Image with Cinematic Darkness & Ambient Gold Reflections */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.cta}
          alt="Exotic vehicle detailing finish"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark overlays for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        {/* Elegant, restrained gold ambient glow behind vehicle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#D4AF37]/12 blur-[100px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8C6B18]/60 bg-[#0A0A0A]/90 backdrop-blur-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
          <span className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
            EXPERIENCE THE FINISH
          </span>
        </div>

        {/* Mandatory Headline */}
        <h2 className="font-['Oswald'] font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4 leading-tight">
          READY TO MAKE YOUR <br className="hidden sm:inline" />
          <span className="gold-gradient-text">CAR SHINE?</span>
        </h2>

        {/* Mandatory Supporting Text */}
        <p className="text-base sm:text-xl text-[#E0E0E0] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Give your vehicle a premium look with The Detailing Expert.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto gold-gradient-bg text-black font-semibold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(212,175,55,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>BOOK YOUR DETAIL</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto bg-[#101010] hover:bg-[#151515] border border-[#8C6B18] text-white hover:text-[#F5C542] hover:border-[#D4AF37] font-semibold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Calendar, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20"
      aria-label="The Detailing Expert Hero"
    >
      {/* Background Image with Dark Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Luxury black automotive detailing"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Deep Black & Dark Charcoal Vignette Overlays for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />
        {/* Subtle warm metallic gold ambient specular glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[120px] pointer-events-none rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Subtle Performance Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#8C6B18]/60 bg-[#101010]/80 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C542] animate-pulse" />
          <span className="font-['Oswald'] tracking-[0.25em] text-[11px] sm:text-xs text-[#D4AF37] uppercase font-semibold">
            LOS ANGELES, CA &bull; {BUSINESS_INFO.shortName}
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-['Oswald'] font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase italic leading-[0.95] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          THE DETAILING <br className="hidden sm:inline" />
          <span className="gold-gradient-text not-italic font-black">
            EXPERT
          </span>
        </h1>

        {/* Supporting Headline */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <p className="font-['Oswald'] text-base sm:text-xl md:text-2xl text-[#E6C875] tracking-[0.2em] uppercase font-semibold">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Supporting Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#A8A8A8] font-light leading-relaxed mb-10">
          Professional automotive care with a premium finish.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto">
          <a
            id="hero-book-now-button"
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto gold-gradient-bg text-black font-semibold tracking-wider text-sm uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(212,175,55,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#F5C542]"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>BOOK NOW</span>
          </a>

          <a
            id="hero-call-now-button"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto bg-[#101010]/80 hover:bg-[#151515] border border-[#8C6B18] text-white hover:text-[#F5C542] hover:border-[#D4AF37] font-semibold tracking-wider text-sm uppercase px-8 py-4 flex items-center justify-center gap-2.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Subtle Metallic Gold Line Underneath Hero Content */}
        <div className="mt-14 max-w-md mx-auto">
          <div className="gold-line" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#A8A8A8] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};

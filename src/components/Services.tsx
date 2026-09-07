import React from 'react';
import { Sparkles, ArrowRight, Info, Droplets } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';

export const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden"
      aria-label="Services of The Detailing Expert"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8C6B18]/40 bg-[#101010] mb-4">
            <Droplets className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-['Oswald'] text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              CORE SPECIALIZATION
            </span>
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            PRIMARY <span className="gold-gradient-text">SERVICE</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light max-w-xl mx-auto">
            Our confirmed expertise focuses on precision automotive car washing engineered to achieve a flawless showroom presentation.
          </p>
        </div>

        {/* Dominant Primary Service Presentation Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-[#8C6B18] bg-[#101010] p-6 sm:p-10 transition-all duration-300 hover:border-[#D4AF37] shadow-[0_15px_50px_rgba(0,0,0,0.9)] gold-glow group">
            {/* Subtle Metallic Gradient Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Visual Thumbnail */}
              <div className="md:col-span-5 relative overflow-hidden border border-[#8C6B18]/40 aspect-[4/3] bg-[#080808]">
                <img
                  src={IMAGES.services}
                  alt="Professional hand car washing service"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#050505]/90 border border-[#8C6B18]/60 px-2.5 py-1 text-[10px] font-['Oswald'] tracking-wider text-[#F5C542] uppercase font-bold">
                  PRIMARY SERVICE
                </div>
              </div>

              {/* Service Details */}
              <div className="md:col-span-7 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37] bg-[#080808] flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-[#F5C542]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-['Oswald'] tracking-[0.2em] text-[#A8A8A8] uppercase">
                      CONFIRMED BUSINESS OFFERING
                    </span>
                    <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#F5C542]">
                      {BUSINESS_INFO.primaryService}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#E0E0E0] font-light leading-relaxed">
                  Professional automotive car washing tailored for luxury and daily vehicles. Combining high-lubricity foam cleansers, microfiber hand washing, gentle wheel surface cleaning, and spot-free drying techniques to maintain pristine paint luster and finish.
                </p>

                <div className="grid grid-cols-2 gap-3 py-2 text-xs text-[#A8A8A8] border-t border-b border-[#1f1f1f]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                    <span>Gentle Microfiber Hand Wash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                    <span>Wheel &amp; Rim Surface Rinse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                    <span>Glass &amp; Mirror Exterior Clean</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                    <span>Spot-Free Clean Towel Dry</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase px-7 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 shadow-[0_2px_15px_rgba(212,175,55,0.3)]"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#packages"
                    className="bg-transparent border border-[#8C6B18]/60 hover:border-[#D4AF37] text-white hover:text-[#F5C542] text-xs font-semibold tracking-wider uppercase px-5 py-3 text-center transition-colors"
                  >
                    VIEW PACKAGES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aesthetic Visual Inspiration Note (Clearly distinguished from active confirmed offerings) */}
        <div className="mt-16 max-w-4xl mx-auto p-4 sm:p-5 bg-[#0A0A0A] border border-[#8C6B18]/20 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-['Oswald'] text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              SERVICE SCOPE &amp; CUSTOM INQUIRIES
            </h4>
            <p className="text-xs text-[#8A8A8A] leading-relaxed">
              Car Washing is the primary confirmed service provided by The Detailing Expert. Additional specialized services (such as ceramic coatings, paint correction, interior treatments, or engine bay detailing) may be discussed directly with our specialists upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

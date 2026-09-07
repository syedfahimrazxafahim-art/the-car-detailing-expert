import React from 'react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#101010] relative overflow-hidden border-t border-b border-[#8C6B18]/25"
      aria-label="About The Detailing Expert"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#151515] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large Automotive/Detailing Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#8C6B18]/40 bg-[#080808] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={IMAGES.about}
                  alt="Precision automotive car washing and surface care"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
              </div>

              {/* Decorative Corner Gold Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

              {/* Small Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080808]/90 backdrop-blur-md border border-[#8C6B18]/50 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#F5C542]" />
                  <span className="font-['Oswald'] text-xs uppercase tracking-wider text-white">
                    PRECISION WASH CRAFTSMANSHIP
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Typography & Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-['Oswald'] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block">
                ABOUT THE BRAND
              </span>
              <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                THE DETAILING <span className="gold-gradient-text">EXPERT</span>
              </h2>
            </div>

            {/* Thin Gold Decorative Line */}
            <div className="w-20 h-[2px] bg-[#D4AF37]" />

            {/* Primary Suggested Copy */}
            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
              &ldquo;Premium automotive care with a focus on presentation, precision, and a clean finish.&rdquo;
            </p>

            {/* Soft-gray Supporting Text */}
            <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
              At The Detailing Expert, every vehicle is treated with an uncompromising standard of care. Serving Los Angeles, California, we dedicate ourselves to high-caliber car washing techniques that preserve, protect, and enhance the visual brilliance of your vehicle.
            </p>

            {/* Core Values / Focus Points without fabricated claims */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 bg-[#080808] border border-[#8C6B18]/30">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Oswald'] text-sm font-semibold text-white tracking-wide uppercase">
                    METICULOUS HAND WASH
                  </h4>
                  <p className="text-xs text-[#A8A8A8] mt-1 font-light">
                    Gentle, swirl-free wash techniques for a pristine paint finish.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#080808] border border-[#8C6B18]/30">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Oswald'] text-sm font-semibold text-white tracking-wide uppercase">
                    SHOWROOM PRESENTATION
                  </h4>
                  <p className="text-xs text-[#A8A8A8] mt-1 font-light">
                    Focused attention on clear glass, clean wheels, and deep paint luster.
                  </p>
                </div>
              </div>
            </div>

            {/* In-Section Quick CTA */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37] hover:text-[#F5C542] uppercase transition-colors group"
              >
                <span>EXPLORE OUR PRIMARY SERVICE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

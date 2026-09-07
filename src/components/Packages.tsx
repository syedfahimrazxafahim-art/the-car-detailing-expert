import React from 'react';
import { PACKAGES_DATA } from '../data/businessData';
import { Sparkles, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

export const Packages: React.FC = () => {
  const handlePackageSelect = (pkgName: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill or notify message area if element exists
      const messageElem = document.getElementById('booking-message') as HTMLTextAreaElement | null;
      if (messageElem && !messageElem.value) {
        messageElem.value = `Inquiring about ${pkgName} Package details.`;
      }
    }
  };

  return (
    <section
      id="packages"
      className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden border-t border-[#8C6B18]/20"
      aria-label="Packages at The Detailing Expert"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-['Oswald'] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-2">
            SERVICE TIERS
          </span>
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            WASH <span className="gold-gradient-text">PACKAGES</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light max-w-xl mx-auto">
            Configurable service tiers designed to meet the unique presentation needs of your vehicle. Contact us for custom quotes and tailored specifications.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-[#101010] border-2 border-[#D4AF37] shadow-[0_10px_35px_rgba(212,175,55,0.2)] scale-[1.02] z-10'
                    : 'bg-[#0D0D0D] border border-[#8C6B18]/40 hover:border-[#D4AF37]/80 hover:bg-[#121212]'
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient-bg text-black px-4 py-0.5 text-[10px] font-['Oswald'] tracking-[0.2em] font-bold uppercase flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                {/* Card Top */}
                <div className="space-y-4">
                  <div className="border-b border-[#222] pb-4">
                    <span className="text-[10px] font-['Oswald'] tracking-widest text-[#D4AF37] uppercase font-semibold">
                      PACKAGE TIER
                    </span>
                    <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Pricing Placeholder with Transparent Information Notice */}
                  <div className="py-3">
                    <div className="text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37]">
                      TAILORED PRICING
                    </div>
                    <div className="text-xl font-bold text-white font-['Oswald'] mt-1">
                      CUSTOM QUOTE
                    </div>
                    <p className="text-[11px] text-[#888] mt-1 font-light italic">
                      Pricing determined by vehicle model, size, and condition.
                    </p>
                  </div>

                  {/* Package Notes / Details */}
                  <div className="py-2 border-t border-[#1a1a1a]">
                    <p className="text-xs text-[#B0B0B0] font-light leading-relaxed">
                      {pkg.note}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 border-t border-[#1a1a1a] mt-4">
                  <button
                    type="button"
                    onClick={() => handlePackageSelect(pkg.name)}
                    className={`w-full py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isPopular
                        ? 'gold-gradient-bg text-black hover:brightness-110 shadow-[0_2px_15px_rgba(212,175,55,0.25)]'
                        : 'bg-[#151515] text-white border border-[#8C6B18]/50 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#888] inline-flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              All package scopes and options are customizable. Have specific vehicle requirements? Contact us directly.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

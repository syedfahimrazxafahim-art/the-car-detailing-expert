import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050505] text-white relative border-t border-[#8C6B18]/50 overflow-hidden"
      aria-label="Footer"
    >
      {/* Top Thin Metallic Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="The Detailing Expert Logo"
                referrerPolicy="no-referrer"
                className="w-11 h-11 object-contain rounded border border-[#D4AF37] bg-[#101010] p-0.5"
              />
              <div>
                <span className="font-['Oswald'] font-bold text-base tracking-wider uppercase text-white block leading-none">
                  THE DETAILING EXPERT
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#A8A8A8] uppercase">
                  TDE &bull; LOS ANGELES
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-[#777] font-light">
              Professional automotive car washing with an unyielding dedication to presentation, precision, and a clean finish.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-['Oswald'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#A8A8A8] hover:text-[#F5C542] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Primary Services */}
          <div>
            <h4 className="font-['Oswald'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
              PRIMARY SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A8A8A8]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                <span className="text-white font-medium">Car Washing (Confirmed Service)</span>
              </li>
              <li className="flex items-center gap-2 text-[#777]">
                <span className="w-1.5 h-1.5 bg-[#555]" />
                <span>Custom Wash Packages</span>
              </li>
              <li className="flex items-center gap-2 text-[#777]">
                <span className="w-1.5 h-1.5 bg-[#555]" />
                <span>Luxury Vehicle Hand Washing</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-['Oswald'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
              DIRECT CONTACT
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#A8A8A8]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#F5C542] transition-colors font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#F5C542] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#8C6B18]/40 bg-[#0F0F0F] text-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors"
                aria-label="Visit The Detailing Expert on Instagram."
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#8C6B18]/40 bg-[#0F0F0F] text-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors"
                aria-label="Visit The Detailing Expert on Facebook."
              >
                <Facebook className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="ml-auto p-2 border border-[#8C6B18]/40 bg-[#0F0F0F] text-[#A8A8A8] hover:text-[#F5C542] transition-colors"
                aria-label="Scroll back to top"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#777] gap-3">
          <p>© 2026 The Detailing Expert - TDE. All Rights Reserved.</p>
          <p className="tracking-wider uppercase text-[#A8A8A8]">
            Los Angeles, California &bull; Automotive Detailing Brand
          </p>
        </div>
      </div>
    </footer>
  );
};

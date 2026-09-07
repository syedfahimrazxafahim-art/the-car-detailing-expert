import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/businessData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key and body scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#8C6B18]/50 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-[#8C6B18]/25 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="The Detailing Expert - TDE Home"
        >
          {/* Official Brand Logo */}
          <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="The Detailing Expert Logo"
              referrerPolicy="no-referrer"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded border border-[#8C6B18]/60 p-0.5 bg-[#0A0A0A] group-hover:border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.2)]"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-['Oswald'] font-bold text-base sm:text-lg tracking-wider text-white uppercase group-hover:text-[#F5C542] transition-colors leading-none">
              THE DETAILING EXPERT
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#A8A8A8] font-medium uppercase mt-0.5">
              LOS ANGELES, CA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'text-[#F5C542] font-semibold'
                    : 'text-[#E0E0E0] hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs: Call & Book Now */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-[#A8A8A8] hover:text-[#D4AF37] transition-colors px-2 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            title="Call The Detailing Expert"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_2px_15px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#F5C542]"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-2 border border-[#8C6B18]/40 bg-[#101010] text-[#D4AF37] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="Call The Detailing Expert at 332-288-6330"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#8C6B18]/40 bg-[#101010] text-white hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5C542]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu using 100dvh */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-6 sm:hidden border-t border-[#8C6B18]/50"
          style={{ height: '100dvh', maxHeight: '100dvh' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header with Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[#8C6B18]/30">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="The Detailing Expert Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-10 object-contain rounded border border-[#D4AF37] p-0.5 bg-[#0A0A0A]"
              />
              <span className="font-['Oswald'] font-bold text-base tracking-wider text-white">
                THE DETAILING EXPERT
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-[#8C6B18]/40 bg-[#101010] text-[#D4AF37] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 py-8 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-2xl font-['Oswald'] tracking-wider uppercase py-2 transition-colors flex items-center justify-between border-b border-[#151515] ${
                    isActive ? 'text-[#F5C542] pl-2 border-l-2 border-[#D4AF37]' : 'text-[#E0E0E0] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-5 h-5 ${isActive ? 'text-[#F5C542]' : 'text-[#555]'}`} />
                </a>
              );
            })}
          </nav>

          {/* Bottom Actions & Business Details */}
          <div className="space-y-4 pt-4 border-t border-[#8C6B18]/30">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full gold-gradient-bg text-black font-semibold text-center py-3.5 tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_2px_15px_rgba(212,175,55,0.25)]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full bg-[#101010] border border-[#8C6B18]/60 text-[#D4AF37] font-semibold text-center py-3.5 tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: {BUSINESS_INFO.phone}</span>
            </a>

            <p className="text-center text-[11px] text-[#777] uppercase tracking-wider">
              {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

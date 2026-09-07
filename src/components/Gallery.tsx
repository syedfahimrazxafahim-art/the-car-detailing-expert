import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';
import { X, Eye, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const CATEGORIES = [
  'ALL',
  'LUXURY VEHICLES',
  'CAR WASHING',
  'EXTERIOR CARE',
  'PAINT LUSTER',
  'WHEEL & RIM CARE',
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(
        (item) => item.category.toUpperCase() === selectedCategory.toUpperCase()
      );

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[0]);
    }
  }, [currentIndex, filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden border-t border-[#8C6B18]/20"
      aria-label="Automotive Detailing Visual Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8C6B18]/40 bg-[#101010] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-['Oswald'] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
              REAL WORK SHOWCASE
            </span>
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            GALLERY <span className="gold-gradient-text">SHOWCASE</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light max-w-xl mx-auto">
            Authentic vehicle results, high-gloss paint luster, gentle hand wash care, and spotless wheel detailing crafted by The Detailing Expert.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-['Oswald'] tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? 'gold-gradient-bg text-black font-bold border-[#D4AF37] shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#0A0A0A] text-[#A8A8A8] border-[#8C6B18]/40 hover:text-white hover:border-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Rectangular Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.title}`}
              className="group relative cursor-pointer border border-[#8C6B18]/40 hover:border-[#D4AF37] bg-[#080808] overflow-hidden aspect-[16/10] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {/* Image with slight zoom on hover */}
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                {/* Gold "VIEW DETAILS" badge */}
                <div className="gold-gradient-bg text-black px-4 py-1.5 text-xs font-['Oswald'] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-3.5 h-3.5 text-black" />
                  <span>VIEW DETAILS</span>
                </div>

                <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase mt-3">
                  {item.category}
                </span>
                <h3 className="font-['Oswald'] text-lg font-bold text-white uppercase tracking-wide mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Subtle Permanent Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]" />
            </div>
          ))}
        </div>

        {/* Informative Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#777] font-light">
            Real photography of vehicle presentation and wash care services by The Detailing Expert in Los Angeles, California.
          </p>
        </div>
      </div>

      {/* Lightbox Modal with Next/Prev and Keyboard controls */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div className="relative max-w-4xl w-full bg-[#101010] border-2 border-[#D4AF37] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute -top-4 -right-4 bg-[#050505] border border-[#D4AF37] text-white hover:text-[#F5C542] p-2 transition-colors z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Close lightbox modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Container */}
            <div className="relative overflow-hidden aspect-[16/10] bg-[#050505] flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain sm:object-cover"
              />

              {/* Previous Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#050505]/80 hover:bg-[#D4AF37] text-white hover:text-black p-2.5 border border-[#8C6B18]/60 transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#050505]/80 hover:bg-[#D4AF37] text-white hover:text-black p-2.5 border border-[#8C6B18]/60 transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Index indicator */}
              {currentIndex >= 0 && (
                <div className="absolute bottom-3 right-3 bg-[#050505]/80 border border-[#8C6B18]/50 px-2.5 py-1 text-[11px] font-mono text-[#D4AF37]">
                  {currentIndex + 1} / {filteredItems.length}
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-6 bg-[#0B0B0B] border-t border-[#8C6B18]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-['Oswald'] tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  {selectedItem.category}
                </span>
                <h3 className="font-['Oswald'] text-xl font-bold uppercase text-white tracking-wide">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#A8A8A8] font-light mt-1 max-w-xl">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="gold-gradient-bg text-black px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  INQUIRE FOR THIS FINISH
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 border border-[#8C6B18] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

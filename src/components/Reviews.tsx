import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SAMPLE_REVIEWS } from '../data/businessData';
import { ChevronLeft, ChevronRight, Play, Pause, AlertCircle, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, SAMPLE_REVIEWS.length - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay management
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      } else if (isPlaying && !isHovered && !isFocused) {
        startTimer();
      }
    };

    const startTimer = () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 5500);
    };

    if (isPlaying && !isHovered && !isFocused && !document.hidden) {
      startTimer();
    } else {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isHovered, isFocused, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#101010] relative overflow-hidden"
      aria-label="Client Experience and Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8C6B18]/40 bg-[#0A0A0A] mb-3">
            <span className="text-[11px] font-['Oswald'] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              EXPERIENCE &amp; FEEDBACK
            </span>
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            CLIENT <span className="gold-gradient-text">PERSPECTIVE</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />

          {/* Mandatory Transparent Sample Review Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#080808] border border-[#8C6B18]/40 text-[#A8A8A8] text-xs">
            <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Preview Notice: Below entries are <strong className="text-[#F5C542]">SAMPLE REVIEWS</strong> illustrating customer service focus.
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-6xl mx-auto"
        >
          {/* Card Viewport */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {SAMPLE_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="h-full bg-[#0A0A0A] border border-[#8C6B18]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] relative group">
                    {/* Top Tag & Stars */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-['Oswald'] tracking-widest text-[#F5C542] border border-[#8C6B18]/60 bg-[#121212] px-2 py-0.5 uppercase font-bold">
                          SAMPLE REVIEW
                        </span>

                        {/* Metallic Gold 5 Stars */}
                        <div
                          className="text-[#F5C542] text-sm tracking-wider select-none font-bold"
                          aria-label="5 out of 5 stars visual rating element"
                        >
                          ★★★★★
                        </div>
                      </div>

                      {/* Aspect Title */}
                      <h3 className="font-['Oswald'] text-base sm:text-lg font-semibold text-white tracking-wide uppercase mb-3">
                        {review.aspect}
                      </h3>

                      {/* Quote */}
                      <p className="text-sm text-[#B0B0B0] font-light leading-relaxed italic relative pl-5">
                        <Quote className="w-3.5 h-3.5 text-[#D4AF37] absolute left-0 top-0.5 opacity-60" />
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-xs text-[#777]">
                      <span className="font-mono text-[11px] tracking-wider text-[#D4AF37]/80">
                        THE DETAILING EXPERT
                      </span>
                      <span className="text-[10px] tracking-widest uppercase">
                        LOS ANGELES, CA
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls: Prev, Next, Play/Pause, Pagination */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#8C6B18]/20">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-2" aria-label="Review pagination">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] ${
                    currentIndex === idx ? 'w-8 bg-[#F5C542]' : 'w-2 bg-[#444] hover:bg-[#888]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={currentIndex === idx ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Navigation & Autoplay Play/Pause */}
            <div className="flex items-center gap-3">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 border border-[#8C6B18]/40 bg-[#0A0A0A] text-[#A8A8A8] hover:text-[#F5C542] hover:border-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label={isPlaying ? 'Pause review autoplay' : 'Start review autoplay'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 border border-[#8C6B18]/40 bg-[#0A0A0A] text-white hover:text-[#F5C542] hover:border-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="p-2 border border-[#8C6B18]/40 bg-[#0A0A0A] text-white hover:text-[#F5C542] hover:border-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

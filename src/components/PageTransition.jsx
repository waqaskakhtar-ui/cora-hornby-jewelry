import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const location = useLocation();
  const containerRef = useRef(null);
  const sweepRef = useRef(null);

  useEffect(() => {
    // Scroll window smoothly to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      const el = containerRef.current;
      const sweep = sweepRef.current;
      if (!el) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Background sweep layer smoothly sweeps in
      if (sweep) {
        gsap.fromTo(
          sweep,
          { scaleY: 1, transformOrigin: 'top' },
          { scaleY: 0, duration: 0.8, ease: 'power4.inOut' }
        );
      }

      // 2. Main Page Entrance: Translate from +30px Y-axis with opacity fade-in
      tl.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      // 3. Staggered Entrance: Typography first
      const textElements = el.querySelectorAll('[data-stagger="text"]');
      if (textElements.length > 0) {
        tl.fromTo(
          textElements,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
          0.15
        );
      }

      // 4. Staggered Entrance: Slow clip-path inset reveal for imagery
      const imageElements = el.querySelectorAll('[data-stagger="image"]');
      if (imageElements.length > 0) {
        tl.fromTo(
          imageElements,
          { clipPath: 'inset(14% 0% 14% 0%)', opacity: 0.7, scale: 1.04 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out'
          },
          0.35
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Background sweep curtain for luxury SPA transitions */}
      <div
        ref={sweepRef}
        className="fixed inset-0 z-40 bg-[#f8f4e7] dark:bg-[#000000] pointer-events-none"
        style={{ transformOrigin: 'top' }}
      />
      
      {/* Main Page Container */}
      <div ref={containerRef} className="w-full">
        {children}
      </div>
    </div>
  );
}

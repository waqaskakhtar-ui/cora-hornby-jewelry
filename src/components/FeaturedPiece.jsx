import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURED_MASTERPIECE } from '../data/coraData';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedPiece({ onSelectPiece }) {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const annotationsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.94, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1.2,
          }
        }
      );

      annotationsRef.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 65%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured"
      ref={containerRef}
      className="py-20 lg:py-32 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 overflow-hidden relative transition-colors duration-700"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="space-y-2">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold">
              TECHNICAL ANATOMY · ATELIER PIECE OF DISTINCTION
            </div>
            <h2 className="font-editorial-luxury text-4xl sm:text-6xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] mt-1">
              The Cleo Architectural Pendant
            </h2>
          </div>

          <div className="sm:text-right font-editorial-mono">
            <span className="text-sm sm:text-lg font-bold text-[#C5A869] block">
              $150.00 USD
            </span>
            <span className="text-[10px] uppercase text-[#78746B] dark:text-[#A8A49C] tracking-widest">
              EDITION: ONE OF ONE
            </span>
          </div>
        </div>

        {/* FEATURED VISUAL WITH GLOSSY TECHNICAL ANNOTATIONS */}
        <div className="relative mt-12 w-full flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
          
          {/* Main Floating Silhouette */}
          <div
            ref={imageWrapperRef}
            data-cursor="inspect"
            data-cursor-text="INSPECT"
            className="relative w-full max-w-3xl aspect-[16/11] bg-[#F2EFE8] dark:bg-[#161412] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.8)] will-change-transform cursor-pointer group transition-all duration-700 hover:shadow-[0_35px_80px_rgba(197,168,105,0.18)]"
          >
            {/* Specular Glint Highlight on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
            </div>

            <div className="w-full h-full overflow-hidden">
              <img
                src={FEATURED_MASTERPIECE.mainImage}
                alt={FEATURED_MASTERPIECE.name}
                className="w-full h-full object-contain filter contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Floating Glossy Technical Annotations (Desktop View) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            
            {/* Annotation 01: Top Left */}
            <div
              ref={(el) => (annotationsRef.current[0] = el)}
              data-cursor="view"
              data-cursor-text="FORGED"
              className="absolute top-10 left-12 pointer-events-auto max-w-[240px] glossy-card p-4 shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#C5A869] font-bold tracking-wider">
                01 / COLD-FORGED BRASS
              </div>
              <p className="text-xs text-[#5E5A54] dark:text-[#B5B0A4] mt-1 font-editorial-body leading-relaxed group-hover/ann:text-[#12100E] dark:group-hover/ann:text-[#FAF8F2] transition-colors">
                Hand-hammered on the anvil in Cape Elizabeth to produce micro-faceted light play.
              </p>
            </div>

            {/* Annotation 02: Bottom Left */}
            <div
              ref={(el) => (annotationsRef.current[1] = el)}
              data-cursor="view"
              data-cursor-text="SPACE"
              className="absolute bottom-10 left-14 pointer-events-auto max-w-[240px] glossy-card p-4 shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#C5A869] font-bold tracking-wider">
                02 / NEGATIVE SPACE
              </div>
              <p className="text-xs text-[#5E5A54] dark:text-[#B5B0A4] mt-1 font-editorial-body leading-relaxed group-hover/ann:text-[#12100E] dark:group-hover/ann:text-[#FAF8F2] transition-colors">
                Precision pierced geometric cutout revealing the wearer's skin and collarbone.
              </p>
            </div>

            {/* Annotation 03: Top Right */}
            <div
              ref={(el) => (annotationsRef.current[2] = el)}
              data-cursor="view"
              data-cursor-text="BALANCE"
              className="absolute top-12 right-12 pointer-events-auto max-w-[240px] glossy-card p-4 shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#C5A869] font-bold tracking-wider">
                03 / KINETIC BALANCE
              </div>
              <p className="text-xs text-[#5E5A54] dark:text-[#B5B0A4] mt-1 font-editorial-body leading-relaxed group-hover/ann:text-[#12100E] dark:group-hover/ann:text-[#FAF8F2] transition-colors">
                Center of gravity engineered for perfect flush rest against the collarbone without twisting.
              </p>
            </div>

            {/* Annotation 04: Bottom Right */}
            <div
              ref={(el) => (annotationsRef.current[3] = el)}
              data-cursor="view"
              data-cursor-text="PATINA"
              className="absolute bottom-10 right-14 pointer-events-auto max-w-[240px] glossy-card p-4 shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#C5A869] font-bold tracking-wider">
                04 / TIMELESS PATINA
              </div>
              <p className="text-xs text-[#5E5A54] dark:text-[#B5B0A4] mt-1 font-editorial-body leading-relaxed group-hover/ann:text-[#12100E] dark:group-hover/ann:text-[#FAF8F2] transition-colors">
                Unsealed natural brass that deepens in warmth through daily skin contact.
              </p>
            </div>

          </div>

        </div>

        {/* Mobile Annotations List (Responsive) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {FEATURED_MASTERPIECE.annotations.map((ann) => (
            <div key={ann.id} className="p-4 glossy-card rounded-xs">
              <span className="font-editorial-mono text-xs font-bold text-[#12100E] dark:text-[#FAF8F2] block">
                {ann.number} / {ann.title}
              </span>
              <p className="text-xs text-[#5E5A54] dark:text-[#B5B0A4] mt-1 font-editorial-body leading-relaxed">
                {ann.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 pt-8 border-t border-[#12100E]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-editorial-mono text-xs text-[#78746B] dark:text-[#A8A49C]">
            ORIGIN: CAPE ELIZABETH, MAINE · ONE-OF-A-KIND CREATION
          </div>
          <button
            onClick={() => onSelectPiece && onSelectPiece(FEATURED_MASTERPIECE)}
            data-cursor="explore"
            data-cursor-text="ACQUIRE"
            className="px-6 py-3 rounded-full bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] font-editorial-mono text-xs uppercase tracking-[0.2em] hover:bg-[#C5A869] dark:hover:bg-[#C5A869] dark:hover:text-[#12100E] transition-all shadow-md font-semibold"
          >
            REQUEST PRIVATE ACQUISITION
          </button>
        </div>

      </div>
    </section>
  );
}

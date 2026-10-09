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
      className="py-16 lg:py-24 bg-[#F9F8F5] dark:bg-[#121110] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 overflow-hidden relative transition-colors duration-500"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.24em] text-[#8A867E] dark:text-[#9E9A90]">
              TECHNICAL ANATOMY · ATELIER PIECE OF DISTINCTION
            </div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-1">
              The Cleo Architectural Pendant
            </h2>
          </div>

          <div className="text-right">
            <span className="font-editorial-mono text-sm sm:text-base font-semibold text-[#111111] dark:text-[#FAF9F5] block">
              $150.00 USD
            </span>
            <span className="font-editorial-mono text-[10px] uppercase text-[#8A867E] dark:text-[#9E9A90] tracking-widest">
              EDITION: ONE OF ONE
            </span>
          </div>
        </div>

        {/* Featured Visual with Fine-Line Annotations */}
        <div className="relative mt-8 w-full flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
          
          {/* Main Image Container */}
          <div
            ref={imageWrapperRef}
            data-cursor="inspect"
            data-cursor-text="INSPECT"
            className="relative w-full max-w-3xl aspect-[16/11] bg-[#F1EFE8] dark:bg-[#181715] border border-[#111111]/8 dark:border-white/10 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] will-change-transform cursor-pointer group transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-[0_25px_60px_rgba(168,139,88,0.12)]"
          >
            {/* Corner Crosshair Reticles */}
            <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="absolute top-1 left-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute top-1 right-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute bottom-1 left-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute bottom-1 right-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
            </div>

            {/* Light Glint Reflection on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
            </div>

            <div className="w-full h-full overflow-hidden bg-[#ECE9DE] dark:bg-[#201F1C]">
              <img
                src={FEATURED_MASTERPIECE.mainImage}
                alt={FEATURED_MASTERPIECE.name}
                className="w-full h-full object-contain filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Floating Editorial Technical Annotations (Desktop View) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            
            {/* Annotation 01: Top Left */}
            <div
              ref={(el) => (annotationsRef.current[0] = el)}
              data-cursor="view"
              data-cursor-text="FORGED"
              className="absolute top-10 left-12 pointer-events-auto max-w-[220px] bg-[#FAF9F5]/95 dark:bg-[#1C1B18]/95 backdrop-blur-sm p-3 border border-[#111111]/15 dark:border-white/15 shadow-xs transition-all duration-300 hover:border-[#A88B58] hover:shadow-[0_8px_25px_rgba(168,139,88,0.18)] hover:-translate-y-1 cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#A88B58] font-bold group-hover/ann:tracking-wider transition-all">
                01 / COLD-FORGED BRASS
              </div>
              <p className="text-[11px] text-[#5E5C57] dark:text-[#C2BCAB] mt-0.5 font-editorial-body leading-relaxed group-hover/ann:text-[#111111] dark:group-hover/ann:text-[#FAF9F5] transition-colors">
                Hand-hammered on the anvil in Cape Elizabeth to produce micro-faceted light play.
              </p>
            </div>

            {/* Annotation 02: Bottom Left */}
            <div
              ref={(el) => (annotationsRef.current[1] = el)}
              data-cursor="view"
              data-cursor-text="SPACE"
              className="absolute bottom-10 left-14 pointer-events-auto max-w-[220px] bg-[#FAF9F5]/95 dark:bg-[#1C1B18]/95 backdrop-blur-sm p-3 border border-[#111111]/15 dark:border-white/15 shadow-xs transition-all duration-300 hover:border-[#A88B58] hover:shadow-[0_8px_25px_rgba(168,139,88,0.18)] hover:-translate-y-1 cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#A88B58] font-bold group-hover/ann:tracking-wider transition-all">
                02 / NEGATIVE SPACE
              </div>
              <p className="text-[11px] text-[#5E5C57] dark:text-[#C2BCAB] mt-0.5 font-editorial-body leading-relaxed group-hover/ann:text-[#111111] dark:group-hover/ann:text-[#FAF9F5] transition-colors">
                Precision pierced geometric cutout revealing the wearer's skin and textile beneath.
              </p>
            </div>

            {/* Annotation 03: Top Right */}
            <div
              ref={(el) => (annotationsRef.current[2] = el)}
              data-cursor="view"
              data-cursor-text="BALANCE"
              className="absolute top-12 right-12 pointer-events-auto max-w-[220px] bg-[#FAF9F5]/95 dark:bg-[#1C1B18]/95 backdrop-blur-sm p-3 border border-[#111111]/15 dark:border-white/15 shadow-xs transition-all duration-300 hover:border-[#A88B58] hover:shadow-[0_8px_25px_rgba(168,139,88,0.18)] hover:-translate-y-1 cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#A88B58] font-bold group-hover/ann:tracking-wider transition-all">
                03 / KINETIC BALANCE
              </div>
              <p className="text-[11px] text-[#5E5C57] dark:text-[#C2BCAB] mt-0.5 font-editorial-body leading-relaxed group-hover/ann:text-[#111111] dark:group-hover/ann:text-[#FAF9F5] transition-colors">
                Center of gravity engineered for perfect flush rest against the collarbone.
              </p>
            </div>

            {/* Annotation 04: Bottom Right */}
            <div
              ref={(el) => (annotationsRef.current[3] = el)}
              data-cursor="view"
              data-cursor-text="PATINA"
              className="absolute bottom-10 right-14 pointer-events-auto max-w-[220px] bg-[#FAF9F5]/95 dark:bg-[#1C1B18]/95 backdrop-blur-sm p-3 border border-[#111111]/15 dark:border-white/15 shadow-xs transition-all duration-300 hover:border-[#A88B58] hover:shadow-[0_8px_25px_rgba(168,139,88,0.18)] hover:-translate-y-1 cursor-pointer group/ann"
            >
              <div className="font-editorial-mono text-[9px] text-[#A88B58] font-bold group-hover/ann:tracking-wider transition-all">
                04 / TIMELESS PATINA
              </div>
              <p className="text-[11px] text-[#5E5C57] dark:text-[#C2BCAB] mt-0.5 font-editorial-body leading-relaxed group-hover/ann:text-[#111111] dark:group-hover/ann:text-[#FAF9F5] transition-colors">
                Unsealed natural brass that deepens in warmth through daily skin contact.
              </p>
            </div>

          </div>

        </div>

        {/* Mobile Annotations List (Responsive) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {FEATURED_MASTERPIECE.annotations.map((ann) => (
            <div key={ann.id} className="p-3 bg-[#F2EFE7] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10">
              <span className="font-editorial-mono text-xs font-bold text-[#111111] dark:text-[#FAF9F5] block">
                {ann.number} / {ann.title}
              </span>
              <p className="text-sm text-[#5E5C57] dark:text-[#C2BCAB] mt-0.5 font-editorial-body leading-relaxed">
                {ann.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-8 pt-6 border-t border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            ORIGIN: CAPE ELIZABETH, MAINE · ONE-OF-A-KIND CREATION
          </div>
          <button
            onClick={() => onSelectPiece && onSelectPiece(FEATURED_MASTERPIECE)}
            data-cursor="explore"
            data-cursor-text="ACQUIRE"
            className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-[0.18em] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF9F5] transition-all shadow-md"
          >
            REQUEST PRIVATE ACQUISITION
          </button>
        </div>

      </div>
    </section>
  );
}

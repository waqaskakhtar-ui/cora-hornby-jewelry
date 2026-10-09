import React, { useState } from 'react';
import { MATERIALS_EDITORIAL } from '../data/coraData';

export default function MaterialFragments({ onSelectMaterial }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = MATERIALS_EDITORIAL[activeIndex];

  return (
    <section
      id="materials"
      className="py-20 lg:py-32 bg-[#F5F2EA] dark:bg-[#080706] text-[#12100E] dark:text-[#F7F5EE] overflow-hidden border-t border-[#12100E]/8 dark:border-white/10 relative transition-colors duration-700"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#12100E]/10 dark:border-white/10">
          <div>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold">
              ANATOMY OF A PIECE · RAW MINERAL PROVENANCE
            </div>
            <h2 className="font-editorial-luxury text-4xl sm:text-6xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] mt-1">
              Material Fragments
            </h2>
          </div>
          <div className="font-editorial-mono text-xs text-[#78746B] dark:text-[#A8A49C] max-w-sm sm:text-right">
            Sourced directly from artisan lapidaries across five continents. Preserved in unpolished crystalline state.
          </div>
        </div>

        {/* DYNAMIC SHOWCASE WITH MASSIVE SERIF TYPOGRAPHY OVERLAP */}
        <div className="relative mt-12 min-h-[480px] lg:min-h-[540px] bg-[#EFECE4] dark:bg-[#12100E] overflow-hidden flex items-center justify-center p-6 sm:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
          
          {/* Giant Background Word in Cormorant Garamond */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span className="font-editorial-luxury italic font-light text-[#12100E]/[0.08] dark:text-[#FAF8F2]/[0.06] text-[24vw] leading-none uppercase whitespace-nowrap transition-all duration-700">
              {current.word}
            </span>
          </div>

          {/* Overlapping Content Split */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left: Close-Up Image Overlapping Typography */}
            <div 
              data-cursor="inspect"
              data-cursor-text={current.word}
              className="w-full max-w-[340px] sm:max-w-[400px] aspect-square glossy-card p-4 shadow-[0_25px_50px_rgba(0,0,0,0.1)] group cursor-pointer relative"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#EAE6DD] dark:bg-[#1E1B17]">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover filter contrast-[1.05] transition-all duration-700 animate-fade-in group-hover:scale-105"
                />

                {/* Specular Highlight Glint */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-[45%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
                </div>

                <div className="absolute top-3 left-3 gloss-pill px-3 py-1 rounded-full font-editorial-mono text-[9px] uppercase tracking-widest text-[#12100E] dark:text-[#FAF8F2]">
                  {current.tag}
                </div>
              </div>
            </div>

            {/* Right: Mineral Provenance Card in Specular Gloss */}
            <div className="w-full max-w-md glossy-card p-6 sm:p-10 shadow-lg space-y-4">
              <div className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A869] font-bold">
                {current.subtitle}
              </div>

              <h3 className="font-editorial-luxury text-2xl sm:text-4xl font-normal text-[#12100E] dark:text-[#FAF8F2]">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5E5A54] dark:text-[#B5B0A4] font-editorial-body leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 border-t border-[#12100E]/10 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs text-[#78746B] dark:text-[#A8A49C]">
                <span>SOURCED: {current.origin}</span>
                <span className="text-[#C5A869] font-bold">100% UNTREATED</span>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Material Selector Strip Below */}
        <div className="mt-6 flex flex-wrap items-center gap-3 font-editorial-mono text-xs">
          {MATERIALS_EDITORIAL.map((mat, idx) => (
            <button
              key={mat.word}
              data-cursor="explore"
              data-cursor-text={mat.word}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-3 rounded-full transition-all flex items-center gap-3 ${
                activeIndex === idx
                  ? 'bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] font-bold shadow-md'
                  : 'gloss-pill text-[#78746B] dark:text-[#A8A49C] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
              }`}
            >
              <span className={`text-[10px] ${activeIndex === idx ? 'text-[#C5A869]' : 'opacity-50'}`}>
                0{idx + 1}
              </span>
              <span className="tracking-widest uppercase text-xs">{mat.word}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

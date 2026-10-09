import React, { useState } from 'react';
import { MATERIALS_EDITORIAL } from '../data/coraData';

export default function MaterialFragments({ onSelectMaterial }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = MATERIALS_EDITORIAL[activeIndex];

  return (
    <section
      id="materials"
      className="py-16 lg:py-24 bg-[#F4F2EC] dark:bg-[#0F0E0D] text-[#111111] dark:text-[#FAF9F5] overflow-hidden border-t border-[#111111]/10 dark:border-white/10 relative transition-colors duration-500"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.22em] text-[#8A867E] dark:text-[#9E9A90]">
              ANATOMY OF A PIECE · RAW MINERAL PROVENANCE
            </div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-1">
              MATERIAL FRAGMENTS
            </h2>
          </div>
          <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] max-w-sm sm:text-right">
            Sourced directly from lapidaries across five continents. Preserved in unpolished crystalline state.
          </div>
        </div>

        {/* Dynamic Material Showcase with Monumental Typography Overlap */}
        <div className="relative mt-8 min-h-[460px] lg:min-h-[520px] bg-[#EFECE4] dark:bg-[#161513] border border-[#111111]/8 dark:border-white/10 overflow-hidden flex items-center justify-center p-6 sm:p-12">
          
          {/* Giant Background Word */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span className="font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5] text-[20vw] lg:text-[23vw] leading-none tracking-[-0.07em] uppercase whitespace-nowrap opacity-[0.92] dark:opacity-[0.88] transition-all duration-700">
              {current.word}
            </span>
          </div>

          {/* Overlapping Content Split */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
            
            {/* Left: Close-Up Image Overlapping Typography */}
            <div 
              data-cursor="inspect"
              data-cursor-text={current.word}
              className="w-full max-w-[340px] sm:max-w-[390px] aspect-square bg-[#FAF9F5] dark:bg-[#1A1917] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-[#111111]/10 dark:border-white/10 transform transition-all duration-500 hover:scale-[1.03] hover:border-[#A88B58]/40 hover:shadow-[0_25px_50px_rgba(168,139,88,0.15)] group cursor-pointer relative"
            >
              {/* Hairline Exhibition Corner Brackets */}
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

              <div className="relative w-full h-full overflow-hidden bg-[#E2DFD6] dark:bg-[#24221F]">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover filter contrast-[1.05] transition-all duration-700 animate-fade-in group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 z-10 shadow-xs">
                  {current.tag}
                </div>
              </div>
            </div>

            {/* Right: Mineral Provenance Card */}
            <div className="w-full max-w-md bg-[#FAF9F5]/95 dark:bg-[#1A1917]/95 backdrop-blur-md p-6 sm:p-8 border border-[#111111]/12 dark:border-white/15 shadow-sm space-y-4 hover:border-[#A88B58]/40 transition-colors">
              <div className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#9E9A90]">
                {current.subtitle}
              </div>

              <h3 className="font-display-grotesk text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                {current.description}
              </p>

              <div className="pt-3 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
                <span>SOURCED: {current.origin}</span>
                <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">100% UNTREATED</span>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Material Selector Strip Below */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 font-editorial-mono text-xs">
          {MATERIALS_EDITORIAL.map((mat, idx) => (
            <button
              key={mat.word}
              data-cursor="explore"
              data-cursor-text={mat.word}
              onClick={() => setActiveIndex(idx)}
              className={`p-3 text-left border transition-all ${
                activeIndex === idx
                  ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-semibold shadow-[0_0_15px_rgba(168,139,88,0.2)]'
                  : 'bg-[#FAF9F5] dark:bg-[#181715] text-[#73716B] dark:text-[#9E9A90] border-[#111111]/10 dark:border-white/10 hover:border-[#A88B58]/60 hover:text-[#111111] dark:hover:text-[#FAF9F5] hover:shadow-[0_0_15px_rgba(168,139,88,0.12)]'
              }`}
            >
              <span className="text-[10px] block text-[#8A867E] dark:text-[#7E7A70]">0{idx + 1}</span>
              <span className="font-bold tracking-wider text-xs sm:text-sm">{mat.word}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

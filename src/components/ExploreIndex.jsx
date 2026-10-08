import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EXPLORE_CATEGORIES } from '../data/coraData';

export default function ExploreIndex({ onCategorySelect }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = EXPLORE_CATEGORIES[activeCategoryIndex];

  return (
    <section id="index" className="py-16 lg:py-24 bg-[#FAF9F5] dark:bg-[#121110] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Top Heading Bar */}
        <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5]">
              Explore the Collection
            </h2>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#9E9A90] mt-1.5">
              Select a medium or silhouette
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body max-w-lg lg:text-right leading-relaxed">
            Every material catches light in its own way — from the raw fire of an uncut geode druzy to the quiet clarity of hand-forged architectural brass.
          </p>
        </div>

        {/* List Layout with Parallel Image Preview on the Right */}
        <div className="mt-8 grid grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Minimal Numbered Rows */}
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            {EXPLORE_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;

              return (
                <div
                  key={cat.number}
                  data-cursor="explore"
                  data-cursor-text={cat.name.toUpperCase()}
                  onMouseEnter={() => setActiveCategoryIndex(idx)}
                  onClick={() => onCategorySelect && onCategorySelect(cat)}
                  className={`group relative py-5 sm:py-6 px-3 sm:px-4 -mx-3 sm:-mx-4 border-b border-[#111111]/12 dark:border-white/10 flex items-center justify-between cursor-pointer transition-all duration-300 rounded-xs ${
                    isActive 
                      ? 'bg-[#F2EFE8] dark:bg-[#1A1917] opacity-100 shadow-xs border-[#A88B58]/40' 
                      : 'opacity-50 hover:opacity-100 hover:bg-[#F2EFE8]/50 dark:hover:bg-[#1A1917]/50'
                  }`}
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className={`font-editorial-mono text-xs sm:text-sm font-semibold transition-colors ${
                      isActive ? 'text-[#A88B58]' : 'text-[#73716B] dark:text-[#9E9A90] group-hover:text-[#A88B58]'
                    }`}>
                      {cat.number}
                    </span>
                    <div>
                      <h3 className={`font-display-grotesk text-xl sm:text-3xl font-bold tracking-tight transition-all duration-300 ${
                        isActive ? 'text-[#111111] dark:text-[#FAF9F5] translate-x-2' : 'text-[#111111] dark:text-[#FAF9F5] group-hover:translate-x-1'
                      }`}>
                        {cat.name}
                      </h3>
                      <p className={`text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] mt-0.5 font-editorial-mono hidden sm:block transition-all duration-300 ${
                        isActive ? 'opacity-100 translate-x-2 text-[#A88B58] dark:text-[#C2BCAB]' : 'opacity-0'
                      }`}>
                        {cat.subtext}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline font-editorial-mono text-[10px] uppercase tracking-[0.16em] text-[#8A867E] dark:text-[#9E9A90]">
                      {cat.count}
                    </span>
                    <div className={`p-2.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] translate-x-1 shadow-[0_0_15px_rgba(168,139,88,0.25)]' 
                        : 'bg-transparent text-[#111111] dark:text-[#FAF9F5] group-hover:bg-[#111111]/10 dark:group-hover:bg-white/10'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Photo Display */}
          <div className="col-span-12 lg:col-span-5 sticky top-24">
            <div 
              data-cursor="inspect"
              data-cursor-text="EXPLORE"
              className="relative aspect-[4/3] bg-[#F0EEE6] dark:bg-[#181715] overflow-hidden border border-[#111111]/8 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-2.5 group/preview cursor-pointer transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-[0_20px_45px_rgba(168,139,88,0.1)]"
            >
              {/* Hairline Exhibition Corner Brackets */}
              <div className="absolute inset-3 pointer-events-none opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 z-10">
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A88B58]"></span>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#A88B58]"></span>
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#A88B58]"></span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#A88B58]"></span>
              </div>

              <div className="relative w-full h-full overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F]">
                <img
                  key={activeCategory.image}
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover filter contrast-[1.04] transition-all duration-700 ease-out transform scale-100 group-hover/preview:scale-105"
                />

                <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between text-[#FAF9F5] font-editorial-mono text-[10px]">
                  <div>
                    <span className="text-[8px] block text-[#C2BCAB] uppercase tracking-widest">
                      CATEGORY {activeCategory.number}
                    </span>
                    <span className="font-semibold text-xs font-sans tracking-wide">
                      {activeCategory.name}
                    </span>
                  </div>
                  <span className="text-[9px] text-[#DDD8CB] max-w-[170px] text-right truncate">
                    {activeCategory.tagline}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between font-editorial-mono text-[9px] text-[#8A867E] dark:text-[#9E9A90]">
              <span>[STUDIO DISCOVERY]</span>
              <span>CLICK TO FILTER ARCHIVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

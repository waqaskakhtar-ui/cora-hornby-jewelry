import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Compass, MapPin } from 'lucide-react';
import { WORLD_TRAVELS } from '../data/coraData';

export default function WorldTravels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = WORLD_TRAVELS[activeIndex];

  return (
    <section id="travels" className="py-16 lg:py-24 bg-[#161615] text-[#FAF9F5] overflow-hidden relative">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Header (Tight & Cinematic) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#FAF9F5]/15">
          <div className="space-y-2">
            <div className="font-editorial-mono text-[11px] uppercase tracking-[0.25em] text-[#A88B58] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#A88B58]" />
              <span>THE EXPEDITION ARCHIVE · 25 YEARS OF WORLD TRAVEL</span>
            </div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5]">
              THE WORLD BEHIND THE PIECES
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : WORLD_TRAVELS.length - 1))}
              className="w-10 h-10 rounded-full border border-[#FAF9F5]/25 flex items-center justify-center text-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#111111] transition-all"
              aria-label="Previous destination"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev < WORLD_TRAVELS.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full border border-[#FAF9F5]/25 flex items-center justify-center text-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#111111] transition-all"
              aria-label="Next destination"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-editorial-mono text-xs text-[#8A867E]">
              0{activeIndex + 1} / 0{WORLD_TRAVELS.length}
            </span>
          </div>
        </div>

        {/* Cinematic Main Viewport */}
        <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Big Location Typography and Field Notes */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <div className="font-editorial-mono text-xs text-[#A88B58] flex items-center gap-2 uppercase tracking-[0.2em]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{current.coordinates}</span>
              </div>
              
              <h3 className="font-display-grotesk text-5xl sm:text-7xl font-black tracking-tight text-[#FAF9F5] leading-none uppercase">
                {current.country}
              </h3>
              
              <div className="font-editorial-mono text-sm text-[#C2BCAB] pt-1">
                {current.region}
              </div>
            </div>

            {/* Field Notes Narrative */}
            <div className="p-5 bg-[#20201E] border-l-2 border-[#A88B58] space-y-2">
              <div className="font-editorial-mono text-[9px] uppercase tracking-[0.2em] text-[#8A867E]">
                STUDIO FIELD NOTES · {current.influence}
              </div>
              <p className="text-xs sm:text-sm text-[#D4D0C7] font-editorial-body leading-relaxed">
                "{current.narrative}"
              </p>
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-2 gap-3 font-editorial-mono text-xs">
              <div className="p-3 bg-[#1C1C1A] border border-[#FAF9F5]/10">
                <span className="block text-[8px] uppercase tracking-widest text-[#73716B]">MATERIAL HARVEST</span>
                <span className="text-[#FAF9F5] font-medium mt-0.5 block truncate">{current.materialHarvested}</span>
              </div>
              <div className="p-3 bg-[#1C1C1A] border border-[#FAF9F5]/10">
                <span className="block text-[8px] uppercase tracking-widest text-[#73716B]">RESULTING PIECE</span>
                <span className="text-[#FAF9F5] font-medium mt-0.5 block truncate">{current.pieceName}</span>
              </div>
            </div>

            {/* Horizontal Timeline Selector */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#FAF9F5]/10">
              {WORLD_TRAVELS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`font-editorial-mono text-xs uppercase px-3 py-1.5 transition-all ${
                    activeIndex === idx
                      ? 'bg-[#A88B58] text-[#111111] font-semibold'
                      : 'text-[#8A867E] hover:text-[#FAF9F5] bg-[#20201E]'
                  }`}
                >
                  {t.country}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Fragment */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#20201E] overflow-hidden border border-[#FAF9F5]/15 p-2 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={current.image}
                  alt={`${current.country} material fragment`}
                  className="w-full h-full object-cover filter contrast-[1.08] transform transition-all duration-700 hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-[#111111]/90 backdrop-blur-md p-3 border border-[#FAF9F5]/15 flex items-center justify-between font-editorial-mono text-xs">
                  <div>
                    <span className="text-[8px] block text-[#8A867E] uppercase tracking-widest">PRODUCED IN</span>
                    <span className="text-[#FAF9F5] font-semibold text-[11px]">CAPE ELIZABETH STUDIO, MAINE</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] block text-[#8A867E] uppercase tracking-widest">COLLECTION</span>
                    <span className="text-[#A88B58] text-[11px]">{current.pieceName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

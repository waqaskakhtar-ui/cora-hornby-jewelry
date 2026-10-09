import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, MapPin, Sparkles, Filter } from 'lucide-react';
import { TRAVEL_DESTINATIONS } from '../data/coraData';

export default function TravelHubPage() {
  const [filterMode, setFilterMode] = useState('ALL'); // 'ALL' | 'MATERIAL' | 'DESIGN'

  const filteredDestinations = TRAVEL_DESTINATIONS.filter(dest => {
    if (filterMode === 'MATERIAL') return dest.isMaterialSource;
    if (filterMode === 'DESIGN') return !dest.isMaterialSource;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb & Micro Tag */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">TRAVEL INSPIRATION ARCHIVE</span>
        </div>

        {/* Monumental Header Section */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 space-y-6">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#A88B58]" />
            <span>25 YEARS OF FIELD JOURNAL EXPEDITIONS · 8 COUNTRIES</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] max-w-5xl leading-[0.98]">
            Traveling the World for Inspiration and Materials
          </h1>

          {/* Core Storytelling Distinction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
            <div className="md:col-span-8 space-y-4">
              <p className="font-editorial-body text-base sm:text-lg text-[#3E3C38] dark:text-[#D4D0C7] leading-relaxed">
                Hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals. Every journey holds a specific role:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-editorial-body text-xs sm:text-sm">
                <div className="p-4 bg-[#F2ECE1] dark:bg-[#161412] border-l-2 border-[#A88B58]">
                  <strong className="font-editorial-mono text-[10px] uppercase text-[#A88B58] block mb-1">
                    ✦ RAW MATERIAL SOURCES
                  </strong>
                  <span className="text-[#5E5C57] dark:text-[#B5B0A4]">
                    Countries like <strong>Guatemala</strong> (rare carved jadeite) and <strong>Brazil</strong> (golden citrine & amethyst clusters) provide raw geological treasures harvested directly from lapidaries.
                  </span>
                </div>

                <div className="p-4 bg-[#EDEAE1] dark:bg-[#141416] border-l-2 border-[#73716B]">
                  <strong className="font-editorial-mono text-[10px] uppercase text-[#73716B] dark:text-[#9E9A90] block mb-1">
                    ✦ DESIGN & ARCHITECTURAL INSPIRATION
                  </strong>
                  <span className="text-[#5E5C57] dark:text-[#B5B0A4]">
                    Destinations like <strong>Greece</strong> (ancient spirals & armor), <strong>Germany</strong> (Bauhaus form), and <strong>Namibia</strong> (sun-bleached desert bone) inspire the shapes and kinetic metalwork forged at the bench.
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Pills on Right */}
            <div className="md:col-span-4 flex flex-col sm:items-end justify-between space-y-3">
              <span className="font-editorial-micro text-[#8A867E]">FILTER EXPEDITION ARCHIVE:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterMode('ALL')}
                  className={`px-3 py-1.5 text-xs font-editorial-mono uppercase tracking-wider border transition-all ${
                    filterMode === 'ALL'
                      ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-bold'
                      : 'border-[#111111]/15 dark:border-white/15 text-[#73716B] hover:text-[#111111]'
                  }`}
                >
                  ALL (8)
                </button>
                <button
                  onClick={() => setFilterMode('MATERIAL')}
                  className={`px-3 py-1.5 text-xs font-editorial-mono uppercase tracking-wider border transition-all ${
                    filterMode === 'MATERIAL'
                      ? 'bg-[#A88B58] text-[#111111] border-[#A88B58] font-bold'
                      : 'border-[#111111]/15 dark:border-white/15 text-[#73716B] hover:text-[#A88B58]'
                  }`}
                >
                  MATERIAL SOURCES (2)
                </button>
                <button
                  onClick={() => setFilterMode('DESIGN')}
                  className={`px-3 py-1.5 text-xs font-editorial-mono uppercase tracking-wider border transition-all ${
                    filterMode === 'DESIGN'
                      ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-bold'
                      : 'border-[#111111]/15 dark:border-white/15 text-[#73716B] hover:text-[#111111]'
                  }`}
                >
                  DESIGN INSPIRATION (6)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical 8-Country Lookbook Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredDestinations.map((dest, idx) => {
            const isStaggered = idx % 2 === 1;

            return (
              <div
                key={dest.id}
                className={`group flex flex-col justify-between bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 shadow-xs transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-lg ${
                  isStaggered ? 'md:translate-y-8' : ''
                }`}
              >
                {/* Visual Area with Overlapping Tag */}
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] bg-[#ECE8DF] dark:bg-[#1A1917] overflow-hidden reveal-clip">
                    <img
                      src={dest.heroImage}
                      alt={dest.heroAlt}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#111111]/90 dark:bg-[#FAF9F5]/90 text-[#FAF9F5] dark:text-[#111111] px-2.5 py-1 font-editorial-micro">
                      {dest.isMaterialSource ? '✦ MATERIAL SOURCE' : '✦ DESIGN INSPIRATION'}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#FAF9F5] px-2 py-0.5 text-[9px] font-editorial-mono">
                      EXACTLY 3 BENCH PIECES
                    </div>
                  </div>

                  {/* Negative Margin Physical Overlap Block */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between font-editorial-micro text-[#8A867E]">
                      <span>DESTINATION 0{idx + 1}</span>
                      <span>CAPE ELIZABETH STUDIO BENCH</span>
                    </div>

                    <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                      {dest.country}
                    </h2>

                    <p className="font-editorial-heading italic text-base sm:text-lg text-[#5E5C57] dark:text-[#C2BCAB]">
                      "{dest.tagline}"
                    </p>

                    <p className="font-editorial-body text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] leading-relaxed line-clamp-2">
                      {dest.sourceNotes}
                    </p>
                  </div>

                  {/* 3 Featured Products Preview Row */}
                  <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10">
                    <span className="font-editorial-micro text-[#8A867E] block mb-2">
                      CURATED 3 PIECES IN THIS EXPEDITION:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {dest.pairs.map((pair, pIdx) => (
                        <div key={pair.id} className="group/pair relative">
                          <div className="aspect-square bg-[#E5E2DA] dark:bg-[#1E1D1B] overflow-hidden">
                            <img
                              src={pair.jewelryImage}
                              alt={pair.title}
                              className="w-full h-full object-cover filter contrast-[1.05]"
                            />
                          </div>
                          <span className="block mt-1 font-editorial-mono text-[9px] text-[#73716B] dark:text-[#9E9A90] truncate">
                            {pair.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 mt-6 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between">
                  <span className="font-editorial-micro text-[#A88B58]">
                    {dest.isMaterialSource ? 'HARVEST EXPEDITION' : 'AESTHETIC JOURNEY'}
                  </span>
                  
                  <Link
                    to={`/travel/${dest.id}`}
                    className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] flex items-center gap-2 font-bold"
                  >
                    <span>EXPLORE {dest.country.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

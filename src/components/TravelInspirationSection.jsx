import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, ArrowRight, ArrowLeft, Eye, ShoppingBag, Check } from 'lucide-react';
import { TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function TravelInspirationSection({ onSelectProduct, onQuickAdd }) {
  const [activeCountryId, setActiveCountryId] = useState('greece');
  const [addedPairId, setAddedPairId] = useState(null);

  const activeDest = TRAVEL_DESTINATIONS.find((d) => d.id === activeCountryId) || TRAVEL_DESTINATIONS[0];
  const currentIndex = TRAVEL_DESTINATIONS.findIndex((d) => d.id === activeDest.id);

  const handlePrev = () => {
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : TRAVEL_DESTINATIONS.length - 1;
    setActiveCountryId(TRAVEL_DESTINATIONS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = currentIndex < TRAVEL_DESTINATIONS.length - 1 ? currentIndex + 1 : 0;
    setActiveCountryId(TRAVEL_DESTINATIONS[nextIdx].id);
  };

  const handlePieceClick = (pair) => {
    // Find matching product in catalog
    const matched = PRODUCTS.find((p) => 
      p.name.toLowerCase().includes(pair.title.toLowerCase()) || 
      pair.title.toLowerCase().includes(p.name.toLowerCase()) ||
      (p.country && p.country.toLowerCase().includes(activeDest.country.toLowerCase()))
    ) || {
      id: pair.id,
      name: pair.title,
      category: 'Travel Inspiration · Handcrafted Bench Piece',
      material: 'Hammered mixed metals, semi-precious stone, hand-worked bench detail',
      price: '$185',
      origin: `${activeDest.country} Inspiration · Cape Elizabeth Studio`,
      description: pair.caption,
      image: pair.jewelryImage,
      altImage: pair.travelImage,
      modelImage: activeDest.heroImage,
      country: activeDest.country
    };

    if (onSelectProduct) {
      onSelectProduct(matched);
    }
  };

  const handleQuickAddPair = (pair, e) => {
    e.stopPropagation();
    const productToAdd = PRODUCTS.find((p) => 
      p.name.toLowerCase().includes(pair.title.toLowerCase()) || 
      pair.title.toLowerCase().includes(p.name.toLowerCase())
    ) || {
      id: pair.id,
      name: pair.title,
      price: '$185',
      image: pair.jewelryImage,
      material: 'Hand-crafted bench piece',
      category: 'Travel Inspiration'
    };

    if (onQuickAdd) {
      onQuickAdd(productToAdd);
    }
    setAddedPairId(pair.id);
    setTimeout(() => setAddedPairId(null), 1800);
  };

  return (
    <section id="travels" className="py-16 lg:py-24 bg-[#F5F3EC] dark:bg-[#0E0D0C] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#111111]/12 dark:border-white/10">
          <div className="space-y-3 max-w-3xl">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.22em] text-[#A88B58] flex items-center gap-2 font-semibold">
              <Compass className="w-4 h-4 text-[#A88B58]" />
              <span>THE TRAVEL INSPIRATION ARCHIVE · 8 COUNTRIES</span>
            </div>
            
            <h2 className="font-display-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-[0.98]">
              Traveling the World for Inspiration and Materials
            </h2>
            
            <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body leading-relaxed">
              Some countries provide rare raw materials—such as <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Guatemala for jade</strong> and <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Brazil for amethyst and citrine</strong>. Others ignite the design vocabulary—such as ancient spirals in <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Greece</strong> and functional Bauhaus lines in <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Germany</strong>.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center text-[#111111] dark:text-[#FAF9F5] hover:bg-[#111111] hover:text-[#FAF9F5] dark:hover:bg-[#FAF9F5] dark:hover:text-[#111111] transition-all"
              aria-label="Previous country"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center text-[#111111] dark:text-[#FAF9F5] hover:bg-[#111111] hover:text-[#FAF9F5] dark:hover:bg-[#FAF9F5] dark:hover:text-[#111111] transition-all"
              aria-label="Next country"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] ml-2">
              0{currentIndex + 1} / 0{TRAVEL_DESTINATIONS.length}
            </span>
          </div>
        </div>

        {/* 8-Country Interactive Selector Rail */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none border-b border-[#111111]/8 dark:border-white/10">
          {TRAVEL_DESTINATIONS.map((d, idx) => {
            const isSelected = d.id === activeDest.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveCountryId(d.id)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-editorial-mono uppercase tracking-wider transition-all flex items-center gap-2 rounded-xs border ${
                  isSelected
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] shadow-xs font-semibold'
                    : 'bg-[#ECEAE2] dark:bg-[#1A1917] text-[#5E5C57] dark:text-[#9E9A90] border-transparent hover:border-[#A88B58]/40 hover:text-[#111111] dark:hover:text-[#FAF9F5]'
                }`}
              >
                <span className={`text-[9px] ${isSelected ? 'text-[#A88B58] dark:text-[#B09462]' : 'text-[#8A867E]'}`}>
                  0{idx + 1}
                </span>
                <span>{d.country}</span>
                <span className={`text-[8px] px-1.5 py-0.5 rounded-2xs ${
                  d.isMaterialSource 
                    ? 'bg-[#A88B58]/20 text-[#A88B58] dark:bg-[#A88B58]/30 dark:text-[#E8D0A0]' 
                    : 'bg-black/5 dark:bg-white/10 text-[#73716B] dark:text-[#9E9A90]'
                }`}>
                  {d.isMaterialSource ? 'MATERIAL' : 'DESIGN'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Destination Hero Banner */}
        <div className="mt-8 relative bg-[#ECE9E0] dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 overflow-hidden shadow-xs">
          <div className="grid grid-cols-12 items-stretch">
            
            {/* Left: Destination Editorial Info */}
            <div className="col-span-12 lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 font-editorial-mono text-[10px] uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90]">
                  <span className={`px-2 py-0.5 font-bold ${
                    activeDest.isMaterialSource 
                      ? 'bg-[#A88B58] text-[#111111]' 
                      : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111]'
                  }`}>
                    {activeDest.type.toUpperCase()}
                  </span>
                  <span>CAPE ELIZABETH STUDIO ARCHIVE</span>
                </div>

                <h3 className="font-display-grotesk text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
                  {activeDest.country}
                </h3>

                <p className="font-editorial-serif italic text-lg sm:text-xl text-[#5E5C57] dark:text-[#C2BCAB]">
                  "{activeDest.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] font-editorial-body leading-relaxed pt-1">
                  {activeDest.sourceNotes}
                </p>
              </div>

              {/* Distinction Highlight Pill */}
              <div className="p-3.5 bg-[#FAF9F5] dark:bg-[#1F1E1B] border-l-2 border-[#A88B58] text-xs font-editorial-mono text-[#5E5C57] dark:text-[#C2BCAB] flex items-center justify-between">
                <span>
                  {activeDest.isMaterialSource
                    ? `✦ DIRECT MATERIAL SOURCING: Hand-harvested minerals direct from local artisan lapidaries.`
                    : `✦ AESTHETIC & ARCHITECTURAL INSPIRATION: Motifs and forms forged at the Maine bench.`}
                </span>
                <span className="text-[#A88B58] font-bold text-[10px] uppercase ml-2 flex-shrink-0">
                  3 BENCH PIECES
                </span>
              </div>
            </div>

            {/* Right: Destination Atmospheric Hero Photograph */}
            <div className="col-span-12 lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-[#24221F] overflow-hidden">
              <img
                src={activeDest.heroImage}
                alt={activeDest.heroAlt}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-4 right-4 text-right">
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#FAF9F5]/90 bg-black/60 px-2 py-1 backdrop-blur-xs">
                  FIELD PHOTOGRAPHY · {activeDest.heroAlt}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* The 3 Side-by-Side Pairs (The Client's Signature Storytelling Structure) */}
        <div className="mt-12 space-y-12">
          <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
            <span className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#73716B] dark:text-[#9E9A90]">
              SIDE-BY-SIDE INSPIRATION PAIRS · {activeDest.country.toUpperCase()} (3 BENCH CREATIONS)
            </span>
            <span className="font-editorial-mono text-[10px] uppercase text-[#A88B58]">
              TRAVEL SOURCE ↔ HAND-CRAFTED JEWELRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {activeDest.pairs.map((pair, idx) => {
              const isAdded = addedPairId === pair.id;

              return (
                <div
                  key={pair.id}
                  className="bg-[#FAF9F5] dark:bg-[#151413] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group"
                >
                  {/* Top Images Split: Side A (Inspiration) ↔ Side B (Jewelry) */}
                  <div className="p-3 bg-[#EFECE4] dark:bg-[#1A1917] border-b border-[#111111]/8 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Left: Travel Inspiration Photo */}
                      <div className="flex flex-col space-y-1">
                        <div className="aspect-[4/5] bg-[#E2DFD6] dark:bg-[#201F1C] overflow-hidden relative border border-[#111111]/8 dark:border-white/10">
                          <img
                            src={pair.travelImage}
                            alt={pair.travelAlt}
                            className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-1 left-1 bg-black/70 text-[#FAF9F5] text-[7px] font-editorial-mono uppercase tracking-wider px-1.5 py-0.5">
                            INSPIRATION
                          </div>
                        </div>
                        <span className="text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] truncate">
                          {activeDest.country}
                        </span>
                      </div>

                      {/* Right: Handcrafted Jewelry Piece */}
                      <div 
                        onClick={() => handlePieceClick(pair)}
                        className="flex flex-col space-y-1 cursor-pointer"
                        title="Click to inspect piece"
                      >
                        <div className="aspect-[4/5] bg-[#E2DFD6] dark:bg-[#201F1C] overflow-hidden relative border border-[#111111]/8 dark:border-white/10 group-hover:border-[#A88B58]/60 transition-colors">
                          <img
                            src={pair.jewelryImage}
                            alt={pair.jewelryAlt}
                            className="w-full h-full object-cover filter contrast-[1.06] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-1 right-1 bg-[#A88B58] text-[#111111] text-[7px] font-editorial-mono uppercase font-bold tracking-wider px-1.5 py-0.5">
                            JEWELRY
                          </div>
                          
                          {/* Quick Inspect Hover Overlay */}
                          <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#FAF9F5] text-[#111111] text-[9px] font-editorial-mono uppercase px-2 py-1 shadow-xs flex items-center gap-1 font-semibold">
                              <Eye className="w-3 h-3" />
                              INSPECT
                            </span>
                          </div>
                        </div>
                        <span className="text-[8px] font-editorial-mono uppercase text-[#A88B58] font-bold truncate">
                          BENCH WORK
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Body Content & Narrative Caption */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#73716B] dark:text-[#9E9A90] uppercase">
                        <span>PAIR 0{idx + 1} OF 03</span>
                        <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">EDITION OF ONE</span>
                      </div>

                      <h4 
                        onClick={() => handlePieceClick(pair)}
                        className="font-display-grotesk text-lg sm:text-xl font-bold text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] dark:hover:text-[#A88B58] cursor-pointer transition-colors"
                      >
                        {pair.title}
                      </h4>

                      {/* Client's Storytelling Caption */}
                      <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed italic">
                        "{pair.caption}"
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handlePieceClick(pair)}
                        className="text-xs font-editorial-mono uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] dark:hover:text-[#A88B58] flex items-center gap-1.5 transition-colors font-semibold"
                      >
                        <span>DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => handleQuickAddPair(pair, e)}
                        className={`text-[10px] font-editorial-mono uppercase tracking-wider px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-2xs ${
                          isAdded
                            ? 'bg-[#2E5E4E] text-[#FAF9F5] font-semibold'
                            : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>ADDED</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3 h-3" />
                            <span>ADD TO BAG</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Destination Footer Summary */}
        <div className="mt-12 p-4 bg-[#EBE8DF] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A88B58]"></span>
            <span>EACH PIECE INDIVIDUALLY CRAFTED AT THE MAINE COAST STUDIO BENCH</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#collection"
              className="text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] underline underline-offset-4 uppercase tracking-wider font-semibold"
            >
              BROWSE ALL 5 COLLECTIONS →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

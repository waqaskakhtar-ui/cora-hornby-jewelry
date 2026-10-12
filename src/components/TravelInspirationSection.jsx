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
    <section id="travels" className="py-24 sm:py-32 lg:py-36 bg-[#F6F4EE] dark:bg-[#0E0D0C] text-[#1C1B19] dark:text-[#F8F6F2] border-t border-[#E8E4DA] dark:border-[#262421] transition-colors duration-500 overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E5E1D6] dark:border-[#262421]">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-[#A88B58] flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4 text-[#A88B58]" />
              <span>WAY 01 · THE TRAVEL INSPIRATION ARCHIVE (8 COUNTRIES)</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1C1B19] dark:text-[#F8F6F2] leading-[1.05]">
              Traveling the World for Inspiration &amp; Materials
            </h2>
            
            <p className="text-sm sm:text-base text-[#55524B] dark:text-[#ACA79D] leading-[1.8] font-normal">
              Some countries provide rare raw materials—such as <strong className="text-[#1C1B19] dark:text-[#F8F6F2] font-semibold">Guatemala for jade</strong> and <strong className="text-[#1C1B19] dark:text-[#F8F6F2] font-semibold">Brazil for amethyst and citrine</strong>. Others ignite the design vocabulary—such as ancient Aegean motifs in <strong className="text-[#1C1B19] dark:text-[#F8F6F2] font-semibold">Greece</strong> and functional Bauhaus lines in <strong className="text-[#1C1B19] dark:text-[#F8F6F2] font-semibold">Germany</strong>.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 self-start lg:self-end">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#D5D0C5] dark:border-[#38342F] flex items-center justify-center text-[#1C1B19] dark:text-[#F8F6F2] hover:bg-[#1C1B19] hover:text-[#FAF8F5] dark:hover:bg-[#F8F6F2] dark:hover:text-[#1C1B19] transition-all shadow-2xs"
              aria-label="Previous country"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#D5D0C5] dark:border-[#38342F] flex items-center justify-center text-[#1C1B19] dark:text-[#F8F6F2] hover:bg-[#1C1B19] hover:text-[#FAF8F5] dark:hover:bg-[#F8F6F2] dark:hover:text-[#1C1B19] transition-all shadow-2xs"
              aria-label="Next country"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold tracking-wider text-[#7A766E] dark:text-[#9A968E] ml-2">
              0{currentIndex + 1} / 0{TRAVEL_DESTINATIONS.length}
            </span>
          </div>
        </div>

        {/* 8-Country Interactive Selector Rail */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none border-b border-[#E5E1D6] dark:border-[#262421]">
          {TRAVEL_DESTINATIONS.map((d, idx) => {
            const isSelected = d.id === activeDest.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveCountryId(d.id)}
                className={`flex-shrink-0 px-5 py-2.5 text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 rounded-xl border ${
                  isSelected
                    ? 'bg-[#1C1B19] dark:bg-[#F8F6F2] text-[#FAF8F5] dark:text-[#1C1B19] border-[#1C1B19] dark:border-[#F8F6F2] shadow-xs font-bold'
                    : 'bg-[#ECE8DF] dark:bg-[#181614] text-[#55524B] dark:text-[#9A968E] border-transparent hover:border-[#A88B58]/40 hover:text-[#1C1B19] dark:hover:text-[#F8F6F2]'
                }`}
              >
                <span className={`text-[10px] font-bold ${isSelected ? 'text-[#A88B58]' : 'text-[#827E75]'}`}>
                  0{idx + 1}
                </span>
                <span>{d.country}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-semibold ${
                  d.isMaterialSource 
                    ? 'bg-[#A88B58]/20 text-[#A88B58] dark:bg-[#A88B58]/30 dark:text-[#E8D0A0]' 
                    : 'bg-black/5 dark:bg-white/10 text-[#7A766E] dark:text-[#9A968E]'
                }`}>
                  {d.isMaterialSource ? 'MATERIAL' : 'DESIGN'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Destination Hero Banner */}
        <div className="relative bg-white/70 dark:bg-[#141210] border border-[#E5E1D6] dark:border-[#262421] rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-12 items-stretch">
            
            {/* Left: Destination Editorial Info */}
            <div className="col-span-12 lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#7A766E] dark:text-[#9A968E] font-semibold">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                    activeDest.isMaterialSource 
                      ? 'bg-[#A88B58] text-[#1C1B19]' 
                      : 'bg-[#1C1B19] dark:bg-[#F8F6F2] text-[#FAF8F5] dark:text-[#1C1B19]'
                  }`}>
                    {activeDest.type.toUpperCase()}
                  </span>
                  <span>CAPE ELIZABETH STUDIO ARCHIVE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1C1B19] dark:text-[#F8F6F2] leading-tight">
                  {activeDest.country}
                </h3>

                <p className="text-base sm:text-lg italic text-[#6B6760] dark:text-[#C2BCAB] font-medium">
                  "{activeDest.tagline}"
                </p>

                <p className="text-sm text-[#55524B] dark:text-[#9A968E] leading-[1.8] font-normal pt-1">
                  {activeDest.sourceNotes}
                </p>
              </div>

              {/* Distinction Highlight Pill */}
              <div className="p-4 bg-[#F7F5EE] dark:bg-[#1A1816] rounded-xl border-l-4 border-[#A88B58] text-xs font-medium text-[#55524B] dark:text-[#C2BCAB] flex items-center justify-between">
                <span>
                  {activeDest.isMaterialSource
                    ? `✦ DIRECT MATERIAL SOURCING: Natural minerals direct from local artisan lapidaries.`
                    : `✦ AESTHETIC & ARCHITECTURAL INSPIRATION: Motifs and forms forged at Maine bench.`}
                </span>
                <span className="text-[#A88B58] font-bold text-xs uppercase ml-3 flex-shrink-0">
                  3 PIECES
                </span>
              </div>
            </div>

            {/* Right: Destination Atmospheric Hero Photograph */}
            <div className="col-span-12 lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] bg-[#1E1C1A] overflow-hidden">
              <img
                src={activeDest.heroImage}
                alt={activeDest.heroAlt}
                className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-6 right-6 text-right">
                <span className="text-xs uppercase tracking-widest text-[#FAF8F5]/90 bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-xs font-semibold">
                  FIELD PHOTOGRAPHY · {activeDest.heroAlt}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* The 3 Side-by-Side Pairs (The Client's Signature Storytelling Structure) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#E5E1D6] dark:border-[#262421] pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A766E] dark:text-[#9A968E] font-bold">
              SIDE-BY-SIDE INSPIRATION PAIRS · {activeDest.country.toUpperCase()} (3 BENCH CREATIONS)
            </span>
            <span className="text-xs uppercase text-[#A88B58] font-bold">
              TRAVEL SOURCE ↔ HAND-CRAFTED JEWELRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeDest.pairs.map((pair, idx) => {
              const isAdded = addedPairId === pair.id;

              return (
                <div
                  key={pair.id}
                  className="bg-white/80 dark:bg-[#141210] border border-[#E5E1D6] dark:border-[#262421] rounded-2xl flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/60 hover:shadow-md group overflow-hidden"
                >
                  {/* Top Images Split: Side A (Inspiration) ↔ Side B (Jewelry) */}
                  <div className="p-4 bg-[#F5F2EA] dark:bg-[#181614] border-b border-[#E5E1D6] dark:border-[#262421]">
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Left: Travel Inspiration Photo */}
                      <div className="flex flex-col space-y-1.5">
                        <div className="aspect-[4/5] bg-[#E0DCD2] dark:bg-[#201D1A] rounded-xl overflow-hidden relative border border-[#E5E1D6] dark:border-[#262421]">
                          <img
                            src={pair.travelImage}
                            alt={pair.travelAlt}
                            className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 bg-black/75 text-[#FAF8F5] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                            INSPIRATION
                          </div>
                        </div>
                        <span className="text-[10px] uppercase text-[#7A766E] dark:text-[#9A968E] truncate font-semibold">
                          {activeDest.country}
                        </span>
                      </div>

                      {/* Right: Handcrafted Jewelry Piece */}
                      <div 
                        onClick={() => handlePieceClick(pair)}
                        className="flex flex-col space-y-1.5 cursor-pointer"
                        title="Click to inspect piece"
                      >
                        <div className="aspect-[4/5] bg-[#E0DCD2] dark:bg-[#201D1A] rounded-xl overflow-hidden relative border border-[#E5E1D6] dark:border-[#262421] group-hover:border-[#A88B58]/60 transition-colors">
                          <img
                            src={pair.jewelryImage}
                            alt={pair.jewelryAlt}
                            className="w-full h-full object-cover filter contrast-[1.06] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-[#A88B58] text-[#1C1B19] text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                            JEWELRY
                          </div>
                          
                          {/* Quick Inspect Hover Overlay */}
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white text-[#1C1B19] text-xs uppercase px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 font-bold">
                              <Eye className="w-3.5 h-3.5" />
                              INSPECT
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] uppercase text-[#A88B58] font-bold truncate">
                          BENCH WORK
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Body Content & Narrative Caption */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#7A766E] dark:text-[#9A968E] uppercase font-bold tracking-wider">
                        <span>PAIR 0{idx + 1} OF 03</span>
                        <span className="text-[#1C1B19] dark:text-[#F8F6F2]">EDITION OF ONE</span>
                      </div>

                      <h4 
                        onClick={() => handlePieceClick(pair)}
                        className="text-lg font-bold text-[#1C1B19] dark:text-[#F8F6F2] hover:text-[#A88B58] dark:hover:text-[#A88B58] cursor-pointer transition-colors"
                      >
                        {pair.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#55524B] dark:text-[#ACA79D] leading-[1.7] italic font-normal">
                        "{pair.caption}"
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#E5E1D6] dark:border-[#262421] flex items-center justify-between gap-3">
                      <button
                        onClick={() => handlePieceClick(pair)}
                        className="text-xs uppercase tracking-wider text-[#1C1B19] dark:text-[#F8F6F2] hover:text-[#A88B58] dark:hover:text-[#A88B58] flex items-center gap-1.5 transition-colors font-bold"
                      >
                        <span>DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => handleQuickAddPair(pair, e)}
                        className={`text-xs uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-1.5 rounded-lg font-bold ${
                          isAdded
                            ? 'bg-[#2E5E4E] text-white'
                            : 'bg-[#1C1B19] dark:bg-[#F8F6F2] text-[#FAF8F5] dark:text-[#1C1B19] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF8F5]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>ADDED</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
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
        <div className="p-5 bg-white/60 dark:bg-[#161412] rounded-2xl border border-[#E5E1D6] dark:border-[#262421] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#7A766E] dark:text-[#9A968E]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#A88B58]"></span>
            <span>EACH PIECE INDIVIDUALLY CRAFTED AT THE MAINE COAST STUDIO BENCH</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#collections"
              className="text-[#1C1B19] dark:text-[#F8F6F2] hover:text-[#A88B58] underline underline-offset-4 uppercase tracking-wider font-bold"
            >
              BROWSE ALL 5 COLLECTIONS →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

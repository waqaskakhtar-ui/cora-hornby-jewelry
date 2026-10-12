import React, { useState } from 'react';
import { ArrowLeft, Compass, Eye, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function TravelLookbookPage({ onBack, onSelectProduct, onAddToCart }) {
  const [activeCountryId, setActiveCountryId] = useState('greece');
  const [addedId, setAddedId] = useState(null);

  const activeDest = TRAVEL_DESTINATIONS.find((d) => d.id === activeCountryId) || TRAVEL_DESTINATIONS[0];

  const handlePieceClick = (pair) => {
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

  const handleQuickAdd = (pair, e) => {
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

    if (onAddToCart) {
      onAddToCart(productToAdd);
    }
    setAddedId(pair.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-28 pb-24 px-6 sm:px-10 lg:px-14 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#111111]/10 dark:border-white/10 mb-10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>RETURN TO JOURNAL</span>
            </button>
            <span className="text-[#A88B58]">/</span>
            <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#A88B58] font-semibold">
              THE WORLD LOOKBOOK
            </span>
          </div>

          <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#A88B58]" />
            <span>8 GLOBAL EXPEDITION ARCHIVES</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="mb-12">
          <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#8A867E] dark:text-[#9E9A90] block">
            TRAVELING THE WORLD FOR INSPIRATION AND MATERIALS
          </span>
          <h1 className="text-fluid-headline font-display-grotesk font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-2">
            EXPEDITIONS & INSPIRATION
          </h1>
          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-2xl mt-3 leading-relaxed">
            Some countries are direct sources of raw minerals—such as Guatemala for jade, and Brazil for amethyst and citrine. Others are boundless wells of design inspiration—such as ancient spirals in Greece, and Bauhaus architecture in Germany.
          </p>
        </div>

        {/* 8-Country Horizontal Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#111111]/8 dark:border-white/10">
          {TRAVEL_DESTINATIONS.map((dest, idx) => {
            const isSelected = dest.id === activeDest.id;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveCountryId(dest.id)}
                className={`px-4 py-2.5 rounded-xs font-editorial-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 flex-shrink-0 border ${
                  isSelected
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-bold shadow-md'
                    : 'bg-[#F2EFE8] dark:bg-[#141312] text-[#73716B] dark:text-[#9E9A90] border-transparent hover:border-[#A88B58]'
                }`}
              >
                <span className={`text-[9px] ${isSelected ? 'text-[#A88B58]' : 'text-[#8A867E]'}`}>
                  0{idx + 1}
                </span>
                <span>{dest.country}</span>
                <span className={`text-[8px] px-1.5 py-0.5 rounded-2xs ${
                  dest.isMaterialSource
                    ? 'bg-[#A88B58]/20 text-[#A88B58]'
                    : 'bg-black/5 dark:bg-white/10 text-[#73716B] dark:text-[#9E9A90]'
                }`}>
                  {dest.isMaterialSource ? 'MATERIAL' : 'DESIGN'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Destination Feature Showcase (Matching the Exact Visual Layout in Reference Image) */}
        <div className="bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/12 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm space-y-12">
          
          {/* Destination Header with Curved Pointer Motif */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#111111]/10 dark:border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-editorial-mono text-[10px] uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90]">
                <span className={`px-2 py-0.5 font-bold ${
                  activeDest.isMaterialSource
                    ? 'bg-[#A88B58] text-[#111111]'
                    : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111]'
                }`}>
                  {activeDest.type.toUpperCase()}
                </span>
                <span>CAPE ELIZABETH STUDIO ARCHIVE</span>
              </div>

              <h2 className="font-display-grotesk text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
                0{TRAVEL_DESTINATIONS.findIndex((d) => d.id === activeDest.id) + 1} / {activeDest.country.toUpperCase()}
              </h2>

              <p className="font-editorial-italiana text-xl sm:text-2xl italic text-[#5E5C57] dark:text-[#D4D0C7]">
                "{activeDest.tagline}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] font-editorial-body max-w-md leading-relaxed">
              {activeDest.sourceNotes}
            </p>
          </div>

          {/* Asymmetric Side-by-Side Visuals with Hand-Drawn Curved Vector Lines (Matching Image Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* SVG Curved Leader Lines Overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-20 opacity-40"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M 280 200 C 340 180, 390 220, 440 210"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                className="text-[#A88B58]"
              />
              <circle cx="280" cy="200" r="3" fill="#A88B58" />
              <circle cx="440" cy="210" r="3" fill="#A88B58" />

              <path
                d="M 680 210 C 740 230, 790 190, 840 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                className="text-[#A88B58]"
              />
              <circle cx="680" cy="210" r="3" fill="#A88B58" />
              <circle cx="840" cy="200" r="3" fill="#A88B58" />
            </svg>

            {activeDest.pairs.map((pair, pIdx) => {
              const isAdded = addedId === pair.id;

              return (
                <div
                  key={pair.id}
                  className="bg-[#FAF9F5] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/60 hover:shadow-xl group"
                >
                  {/* Split Visual Pair: Inspiration ↔ Jewelry */}
                  <div className="p-3 bg-[#E8E5DC] dark:bg-[#201F1C] border-b border-[#111111]/8 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Left: Travel Photo */}
                      <div className="space-y-1">
                        <div className="aspect-[4/5] overflow-hidden bg-[#D8D4C8] dark:bg-[#2A2825] relative border border-[#111111]/8 dark:border-white/10">
                          <img
                            src={pair.travelImage}
                            alt={pair.travelAlt}
                            className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-104 transition-transform duration-500"
                          />
                          <div className="absolute top-1 left-1 bg-black/70 text-[#FAF9F5] text-[7px] font-editorial-mono uppercase px-1.5 py-0.5 tracking-wider">
                            TRAVEL INSPIRATION
                          </div>
                        </div>
                        <span className="text-[8px] font-editorial-mono text-[#73716B] dark:text-[#9E9A90] uppercase block truncate">
                          {activeDest.country}
                        </span>
                      </div>

                      {/* Right: Handcrafted Jewelry */}
                      <div
                        onClick={() => handlePieceClick(pair)}
                        className="space-y-1 cursor-pointer"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-[#D8D4C8] dark:bg-[#2A2825] relative border border-[#111111]/8 dark:border-white/10 gloss-highlight">
                          <img
                            src={pair.jewelryImage}
                            alt={pair.jewelryAlt}
                            className="w-full h-full object-cover filter contrast-[1.06] group-hover:scale-108 transition-transform duration-500"
                          />
                          <div className="absolute top-1 right-1 bg-[#A88B58] text-[#111111] text-[7px] font-editorial-mono font-bold uppercase px-1.5 py-0.5 tracking-wider">
                            MAINE BENCH
                          </div>

                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#FAF9F5] text-[#111111] text-[9px] font-editorial-mono uppercase px-2 py-1 shadow-md flex items-center gap-1 font-semibold">
                              <Eye className="w-3 h-3" />
                              INSPECT
                            </span>
                          </div>
                        </div>
                        <span className="text-[8px] font-editorial-mono text-[#A88B58] font-bold uppercase block truncate">
                          HAND-FORGED
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Body & Caption */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#73716B] dark:text-[#9E9A90] uppercase">
                        <span>CREATION 0{pIdx + 1} / 03</span>
                        <span className="text-[#A88B58] font-bold">ONE OF ONE</span>
                      </div>

                      <h3
                        onClick={() => handlePieceClick(pair)}
                        className="font-display-grotesk text-lg font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors cursor-pointer"
                      >
                        {pair.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed italic">
                        "{pair.caption}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handlePieceClick(pair)}
                        className="text-xs font-editorial-mono uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-1 transition-colors font-semibold"
                      >
                        <span>VIEW PDP</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => handleQuickAdd(pair, e)}
                        className={`text-[10px] font-editorial-mono uppercase tracking-wider px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-2xs ${
                          isAdded
                            ? 'bg-[#2E5E4E] text-[#FAF9F5]'
                            : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] hover:text-[#111111]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>ACQUIRED</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3 h-3" />
                            <span>ACQUIRE</span>
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

      </div>
    </div>
  );
}

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
    <section 
      id="travels" 
      className="py-20 lg:py-32 bg-[#F5F2EA] dark:bg-[#080706] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      {/* Glossy Atmospheric Illumination */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-radial from-[#C5A869]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER: MAGAZINE EDITORIAL ESSAY OPENING */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="space-y-4 max-w-4xl">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>EXPEDITION ARCHIVE · 8 COUNTRIES VISITED</span>
            </div>
            
            <h2 className="font-editorial-luxury text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-[0.94]">
              Traveling the World for <br />
              <span className="italic text-[#78746B] dark:text-[#C5A869]">Inspiration and Materials</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5E5A54] dark:text-[#B5B0A4] font-editorial-body leading-relaxed max-w-2xl">
              Some countries provide raw materials—such as <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Guatemala for jade</strong> and <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Brazil for amethyst & citrine</strong>. Others ignite the aesthetic vocabulary—such as ancient spirals in <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Greece</strong> and Bauhaus geometry in <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Germany</strong>.
            </p>
          </div>

          {/* Destination Navigator Controls */}
          <div className="flex items-center gap-4 self-start lg:self-end font-editorial-mono text-xs">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-[#12100E]/20 dark:border-white/20 flex items-center justify-center text-[#12100E] dark:text-[#FAF8F2] hover:bg-[#12100E] hover:text-[#FAF8F2] dark:hover:bg-[#FAF8F2] dark:hover:text-[#12100E] transition-all"
              aria-label="Previous country"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-[#8F8A80] dark:text-[#888379] tracking-widest">
              0{currentIndex + 1} / 0{TRAVEL_DESTINATIONS.length}
            </span>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#12100E]/20 dark:border-white/20 flex items-center justify-center text-[#12100E] dark:text-[#FAF8F2] hover:bg-[#12100E] hover:text-[#FAF8F2] dark:hover:bg-[#FAF8F2] dark:hover:text-[#12100E] transition-all"
              aria-label="Next country"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8-COUNTRY LUXURY INDEX SELECTOR (Spaced Out Haute-Couture Rail) */}
        <div className="mt-6 flex items-center gap-x-6 gap-y-2 overflow-x-auto pb-4 pt-1 scrollbar-none border-b border-[#12100E]/8 dark:border-white/10 font-editorial-mono text-[11px] uppercase tracking-[0.16em]">
          {TRAVEL_DESTINATIONS.map((d, idx) => {
            const isSelected = d.id === activeDest.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveCountryId(d.id)}
                className={`flex-shrink-0 py-1 transition-all flex items-center gap-2 group ${
                  isSelected
                    ? 'text-[#12100E] dark:text-[#FAF8F2] font-bold'
                    : 'text-[#8F8A80] dark:text-[#888379] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
                }`}
              >
                <span className={`text-[9px] ${isSelected ? 'text-[#C5A869]' : 'opacity-50'}`}>
                  0{idx + 1}
                </span>
                <span>{d.country}</span>
                {isSelected && (
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                    d.isMaterialSource 
                      ? 'bg-[#C5A869]/20 text-[#C5A869]' 
                      : 'bg-black/10 dark:bg-white/10 text-[#78746B] dark:text-[#B5B0A4]'
                  }`}>
                    {d.isMaterialSource ? 'MATERIAL' : 'DESIGN'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* DESTINATION CINEMATIC ESSAY BANNER (Overlapping Scrollytelling Moment) */}
        <div className="mt-12 relative">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-[#161412] shadow-[0_30px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
            <img
              src={activeDest.heroImage}
              alt={activeDest.heroAlt}
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92] transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Overlapping Floating Destination Title Layer */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FAF8F2]">
              <div className="space-y-1">
                <div className="font-editorial-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C5A869] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                  <span>{activeDest.type.toUpperCase()} · ARCHIVE DISPATCH</span>
                </div>
                <h3 className="font-editorial-luxury text-3xl sm:text-5xl lg:text-7xl font-normal leading-none tracking-tight">
                  {activeDest.country}
                </h3>
              </div>

              <div className="max-w-md text-right hidden sm:block">
                <p className="font-editorial-serif italic text-base sm:text-lg text-[#EAE6DD]/90">
                  "{activeDest.tagline}"
                </p>
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#B0AAA0] block mt-1">
                  {activeDest.heroAlt}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL SPREAD: THE 3 SIDE-BY-SIDE INSPIRATION PAIRS */}
        {/* (Completely eliminates the boxy 3-column cards for a magazine spread rhythm) */}
        <div className="mt-20 space-y-28 sm:space-y-36">

          {/* PAIR 1: Asymmetrical Diptych (Tall Inspiration Portrait Left + Floating Jewelry Right) */}
          {activeDest.pairs.length > 0 && (() => {
            const pair = activeDest.pairs[0];
            const isAdded = addedPairId === pair.id;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Left: Tall Inspiration Field Photograph */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative aspect-[3/4] sm:aspect-[9/13] bg-[#EAE6DD] dark:bg-[#1E1B17] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group">
                    <img
                      src={pair.travelImage}
                      alt={pair.travelAlt}
                      className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 gloss-pill px-2.5 py-1 rounded-full text-[8px] font-editorial-mono uppercase text-[#12100E] dark:text-[#FAF8F2]">
                      FIELD PHOTOGRAPHY · {activeDest.country}
                    </div>
                  </div>
                  <div className="font-editorial-mono text-[9px] text-[#78746B] dark:text-[#A8A49C] uppercase tracking-wider">
                    SOURCE 01: {pair.travelAlt}
                  </div>
                </div>

                {/* Right: Floating Handcrafted Bench Piece + Editorial Narrative */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6">
                  <div className="space-y-3">
                    <div className="font-editorial-mono text-[9px] uppercase tracking-[0.25em] text-[#C5A869] font-bold">
                      PAIR 01 · RESULTING BENCH PIECE
                    </div>
                    <h4 
                      onClick={() => handlePieceClick(pair)}
                      className="font-editorial-luxury text-3xl sm:text-5xl font-normal text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] transition-colors cursor-pointer"
                    >
                      {pair.title}
                    </h4>
                    
                    {/* Authentic Storytelling Caption */}
                    <blockquote className="font-editorial-serif italic text-lg sm:text-2xl text-[#5E5A54] dark:text-[#C5A869] leading-relaxed max-w-xl">
                      "{pair.caption}"
                    </blockquote>
                  </div>

                  {/* Borderless Jewelry Showcase */}
                  <div 
                    onClick={() => handlePieceClick(pair)}
                    className="relative aspect-[16/11] sm:aspect-[16/10] bg-[#FAF8F2] dark:bg-[#161412] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] group cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-[0_30px_70px_rgba(197,168,105,0.18)]"
                  >
                    <img
                      src={pair.jewelryImage}
                      alt={pair.jewelryAlt}
                      className="w-full h-full object-contain filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Specular Highlight */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-[45%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
                    </div>

                    <div className="absolute top-4 right-4 gloss-pill px-3 py-1 rounded-full text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                      $185 · ONE OF ONE
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => handlePieceClick(pair)}
                      className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] flex items-center gap-2 font-semibold transition-colors"
                    >
                      <span>INSPECT DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => handleQuickAddPair(pair, e)}
                      className={`text-[10px] font-editorial-mono uppercase tracking-widest px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                        isAdded
                          ? 'bg-[#2E5E4E] text-[#FAF8F2]'
                          : 'bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] hover:bg-[#C5A869] dark:hover:bg-[#C5A869] hover:text-[#12100E]'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'ADDED' : 'ACQUIRE'}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })()}

          {/* PAIR 2: Reversed Cinematic Horizontal Spread (Jewelry Left + Wide Inspiration Right) */}
          {activeDest.pairs.length > 1 && (() => {
            const pair = activeDest.pairs[1];
            const isAdded = addedPairId === pair.id;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Left: Handcrafted Bench Creation */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                  <div className="space-y-3">
                    <div className="font-editorial-mono text-[9px] uppercase tracking-[0.25em] text-[#C5A869] font-bold">
                      PAIR 02 · RESULTING BENCH PIECE
                    </div>
                    <h4 
                      onClick={() => handlePieceClick(pair)}
                      className="font-editorial-luxury text-3xl sm:text-5xl font-normal text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] transition-colors cursor-pointer"
                    >
                      {pair.title}
                    </h4>
                    
                    <blockquote className="font-editorial-serif italic text-lg sm:text-2xl text-[#5E5A54] dark:text-[#C5A869] leading-relaxed max-w-xl">
                      "{pair.caption}"
                    </blockquote>
                  </div>

                  <div 
                    onClick={() => handlePieceClick(pair)}
                    className="relative aspect-[16/11] sm:aspect-[16/10] bg-[#FAF8F2] dark:bg-[#161412] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] group cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-[0_30px_70px_rgba(197,168,105,0.18)]"
                  >
                    <img
                      src={pair.jewelryImage}
                      alt={pair.jewelryAlt}
                      className="w-full h-full object-contain filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-[45%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
                    </div>

                    <div className="absolute top-4 left-4 gloss-pill px-3 py-1 rounded-full text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                      $185 · BENCH WORK
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => handlePieceClick(pair)}
                      className="text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] flex items-center gap-2 font-semibold transition-colors"
                    >
                      <span>INSPECT DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => handleQuickAddPair(pair, e)}
                      className={`text-[10px] font-editorial-mono uppercase tracking-widest px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                        isAdded
                          ? 'bg-[#2E5E4E] text-[#FAF8F2]'
                          : 'bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] hover:bg-[#C5A869] dark:hover:bg-[#C5A869] hover:text-[#12100E]'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'ADDED' : 'ACQUIRE'}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Field Photograph */}
                <div className="lg:col-span-5 space-y-3 order-1 lg:order-2">
                  <div className="relative aspect-[3/4] sm:aspect-[9/13] bg-[#EAE6DD] dark:bg-[#1E1B17] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group">
                    <img
                      src={pair.travelImage}
                      alt={pair.travelAlt}
                      className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 gloss-pill px-2.5 py-1 rounded-full text-[8px] font-editorial-mono uppercase text-[#12100E] dark:text-[#FAF8F2]">
                      TRAVEL SOURCE · {activeDest.country}
                    </div>
                  </div>
                  <div className="font-editorial-mono text-[9px] text-[#78746B] dark:text-[#A8A49C] uppercase tracking-wider text-right">
                    {pair.travelAlt}
                  </div>
                </div>

              </div>
            );
          })()}

          {/* PAIR 3: Expansive Monumental Feature Spread (Centerpiece) */}
          {activeDest.pairs.length > 2 && (() => {
            const pair = activeDest.pairs[2];
            const isAdded = addedPairId === pair.id;
            return (
              <div className="relative py-10 border-t border-[#12100E]/10 dark:border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Inspiration Mini Fragment */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="aspect-[4/3] bg-[#EAE6DD] dark:bg-[#1E1B17] overflow-hidden shadow-sm relative group">
                      <img
                        src={pair.travelImage}
                        alt={pair.travelAlt}
                        className="w-full h-full object-cover filter contrast-[1.04] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-[#FAF8F2] text-[8px] font-editorial-mono uppercase px-2 py-0.5">
                        INSPIRATION MOTIF
                      </div>
                    </div>
                    <p className="font-editorial-body text-xs text-[#78746B] dark:text-[#A8A49C]">
                      {pair.travelAlt}
                    </p>
                  </div>

                  {/* Center: Monumental Headline & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="font-editorial-mono text-[9px] uppercase tracking-[0.25em] text-[#C5A869] font-bold">
                      PAIR 03 · CLOSING CREATION
                    </span>
                    <h4 
                      onClick={() => handlePieceClick(pair)}
                      className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] transition-colors cursor-pointer"
                    >
                      {pair.title}
                    </h4>
                    <p className="font-editorial-serif italic text-base sm:text-xl text-[#5E5A54] dark:text-[#C5A869] leading-relaxed">
                      "{pair.caption}"
                    </p>
                  </div>

                  {/* Right: Floating Centerpiece */}
                  <div className="lg:col-span-3 space-y-3">
                    <div 
                      onClick={() => handlePieceClick(pair)}
                      className="relative aspect-square bg-[#FAF8F2] dark:bg-[#161412] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] group cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-[0_25px_60px_rgba(197,168,105,0.18)]"
                    >
                      <img
                        src={pair.jewelryImage}
                        alt={pair.jewelryAlt}
                        className="w-full h-full object-contain filter contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-3 right-3 text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                        $185
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleQuickAddPair(pair, e)}
                      className={`w-full text-[10px] font-editorial-mono uppercase tracking-widest py-2.5 rounded-full transition-all flex items-center justify-center gap-2 ${
                        isAdded
                          ? 'bg-[#2E5E4E] text-[#FAF8F2]'
                          : 'bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] hover:bg-[#C5A869] dark:hover:bg-[#C5A869] hover:text-[#12100E]'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'ADDED TO BAG' : 'ACQUIRE PIECE'}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}

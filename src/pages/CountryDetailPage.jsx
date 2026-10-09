import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, ArrowRight, ArrowLeft, Eye, ShoppingBag, Check, MapPin, Sparkles } from 'lucide-react';
import { getCountryById, TRAVEL_DESTINATIONS, getProductById } from '../data/coraData';

export default function CountryDetailPage({ onQuickAdd, onSelectProduct }) {
  const { countryId } = useParams();
  const country = getCountryById(countryId);
  const [addedPairId, setAddedPairId] = useState(null);

  // Find country index for next/prev
  const currentIndex = TRAVEL_DESTINATIONS.findIndex(d => d.id === country.id);
  const prevCountry = TRAVEL_DESTINATIONS[currentIndex > 0 ? currentIndex - 1 : TRAVEL_DESTINATIONS.length - 1];
  const nextCountry = TRAVEL_DESTINATIONS[currentIndex < TRAVEL_DESTINATIONS.length - 1 ? currentIndex + 1 : 0];

  const handleQuickAdd = (pair, e) => {
    e.stopPropagation();
    const product = getProductById(pair.id);
    if (onQuickAdd) onQuickAdd(product);
    setAddedPairId(pair.id);
    setTimeout(() => setAddedPairId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-editorial-micro text-[#8A867E] mb-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">TRAVEL INSPIRATION</Link>
            <span>/</span>
            <span className="text-[#A88B58] font-bold">{country.country.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to={`/travel/${prevCountry.id}`} 
              className="hover:text-[#111111] dark:hover:text-[#FAF9F5] flex items-center gap-1 font-editorial-mono text-xs"
            >
              ← PREV ({prevCountry.country.split(' ')[0]})
            </Link>
            <span>·</span>
            <Link 
              to={`/travel/${nextCountry.id}`} 
              className="hover:text-[#111111] dark:hover:text-[#FAF9F5] flex items-center gap-1 font-editorial-mono text-xs"
            >
              NEXT ({nextCountry.country.split(' ')[0]}) →
            </Link>
          </div>
        </div>

        {/* Hero Banner with Negative Margin Physical Text Overlap */}
        <div className="relative bg-[#ECE8DF] dark:bg-[#151413] border border-[#111111]/10 dark:border-white/10 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 items-stretch">
            
            {/* Left: Editorial Narrative Column */}
            <div className="col-span-12 lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 font-editorial-micro text-[#73716B] dark:text-[#9E9A90]">
                  <span className={`px-2.5 py-1 font-bold ${
                    country.isMaterialSource 
                      ? 'bg-[#A88B58] text-[#111111]' 
                      : 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111]'
                  }`}>
                    {country.isMaterialSource ? '✦ MATERIAL SOURCE' : '✦ DESIGN INSPIRATION'}
                  </span>
                  <span>CAPE ELIZABETH BENCH ARCHIVE</span>
                </div>

                <h1 className="font-editorial-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
                  {country.country}
                </h1>

                <p className="font-editorial-heading italic text-xl sm:text-2xl text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
                  "{country.tagline}"
                </p>

                <p className="font-editorial-body text-sm text-[#73716B] dark:text-[#9E9A90] leading-relaxed pt-2">
                  {country.sourceNotes}
                </p>
              </div>

              {/* Explicit Distinction Box */}
              <div className="p-4 bg-[#FAF9F5] dark:bg-[#1D1C1A] border-l-2 border-[#A88B58] space-y-1">
                <span className="font-editorial-micro text-[#A88B58] block">
                  EXPEDITION CLASSIFICATION
                </span>
                <p className="font-editorial-body text-xs sm:text-sm text-[#4A4742] dark:text-[#D4D0C7]">
                  {country.isMaterialSource
                    ? `This country serves as a primary source of raw minerals. Cora walks highland workshops and local mines to harvest authentic specimens directly.`
                    : `This destination serves as an artistic well of design inspiration. Architectural silhouettes, ancient armor, and textile palettes are translated into hand-hammered metals at the Maine bench.`}
                </p>
              </div>
            </div>

            {/* Right: Atmospheric Field Photography */}
            <div className="col-span-12 lg:col-span-6 relative min-h-[320px] sm:min-h-[460px] bg-[#1E1D1B] overflow-hidden">
              <img
                src={country.heroImage}
                alt={country.heroAlt}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-right">
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#FAF9F5]/90 bg-black/60 px-3 py-1 backdrop-blur-xs">
                  FIELD PHOTOGRAPHY · {country.heroAlt}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* The 3 Curated Products Showcase Section */}
        <div className="mt-16 sm:mt-24 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#111111]/10 dark:border-white/10 pb-4">
            <div>
              <span className="font-editorial-micro text-[#A88B58] block mb-1">
                SIDE-BY-SIDE INSPIRATION PAIRS
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Three Curated Pieces from {country.country}
              </h2>
            </div>
            <span className="font-editorial-mono text-xs text-[#8A867E]">
              SOURCE PHOTO ↔ HAND-CRAFTED JEWELRY
            </span>
          </div>

          {/* 3 Asymmetrical Product Pair Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {country.pairs.map((pair, idx) => {
              const product = getProductById(pair.id);
              const isAdded = addedPairId === pair.id;

              return (
                <div
                  key={pair.id}
                  className="bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/40 hover:shadow-lg group"
                >
                  {/* Top Images Split: Travel Photo ↔ Jewelry Photo */}
                  <div className="p-3 bg-[#EFECE4] dark:bg-[#181715] border-b border-[#111111]/8 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Left: Inspiration Image */}
                      <div className="space-y-1">
                        <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1E1D1B] overflow-hidden relative">
                          <img
                            src={pair.travelImage}
                            alt={pair.travelAlt}
                            className="w-full h-full object-cover filter contrast-[1.02]"
                          />
                          <div className="absolute top-1 left-1 bg-black/75 text-[#FAF9F5] text-[7px] font-editorial-mono px-1.5 py-0.5 uppercase">
                            INSPIRATION
                          </div>
                        </div>
                        <span className="text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] truncate block">
                          {country.country}
                        </span>
                      </div>

                      {/* Right: Jewelry Image */}
                      <div className="space-y-1">
                        <Link to={`/product/${product.id}`} className="block">
                          <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1E1D1B] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                            <img
                              src={pair.jewelryImage}
                              alt={pair.jewelryAlt}
                              className="w-full h-full object-cover filter contrast-[1.06]"
                            />
                            <div className="absolute top-1 right-1 bg-[#A88B58] text-[#111111] text-[7px] font-editorial-mono font-bold px-1.5 py-0.5 uppercase">
                              BENCH WORK
                            </div>
                          </div>
                        </Link>
                        <span className="text-[8px] font-editorial-mono uppercase text-[#A88B58] font-bold truncate block">
                          {product.price}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Body Content & Authentic Caption */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#8A867E]">
                        <span>PIECE 0{idx + 1} OF 03</span>
                        <span className="font-semibold text-[#111111] dark:text-[#FAF9F5]">{product.category}</span>
                      </div>

                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-editorial-heading text-xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                          {pair.title}
                        </h3>
                      </Link>

                      {/* Client's Storytelling Caption */}
                      <p className="font-editorial-body italic text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed pt-1">
                        "{pair.caption}"
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between gap-3">
                      <Link
                        to={`/product/${product.id}`}
                        className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-1.5 font-bold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>DETAILS</span>
                      </Link>

                      <button
                        onClick={(e) => handleQuickAdd(pair, e)}
                        className={`font-editorial-mono text-[10px] uppercase tracking-wider px-3 py-1.5 transition-all flex items-center gap-1.5 ${
                          isAdded
                            ? 'bg-[#2E5E4E] text-[#FAF9F5] font-bold'
                            : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>IN BAG</span>
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

        {/* Back Link to Hub */}
        <div className="mt-16 pt-8 border-t border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-editorial-mono text-xs">
          <Link
            to="/travel"
            className="text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-2 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO ALL 8 TRAVEL COUNTRIES</span>
          </Link>

          <Link
            to="/collections"
            className="text-[#A88B58] hover:underline"
          >
            BROWSE CURATED COLLECTIONS →
          </Link>
        </div>

      </div>
    </div>
  );
}

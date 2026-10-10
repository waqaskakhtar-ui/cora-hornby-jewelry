import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, ArrowLeft, ArrowRight, Eye, ShoppingBag, MapPin, Check } from 'lucide-react';
import { TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function TravelCountryPage({ onAddToCart }) {
  const { countryId } = useParams();
  const destination = TRAVEL_DESTINATIONS.find((d) => d.id === countryId) || TRAVEL_DESTINATIONS[0];
  const currentIndex = TRAVEL_DESTINATIONS.findIndex((d) => d.id === destination.id);

  const prevDest = TRAVEL_DESTINATIONS[(currentIndex > 0 ? currentIndex - 1 : TRAVEL_DESTINATIONS.length - 1)];
  const nextDest = TRAVEL_DESTINATIONS[(currentIndex < TRAVEL_DESTINATIONS.length - 1 ? currentIndex + 1 : 0)];

  return (
    <div className="w-full pt-24 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Navigation Breadcrumb & Country Switcher */}
        <div data-stagger="text" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#4e342e]/15 dark:border-white/15">
          <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-wider text-[#4e342e]/70 dark:text-white/70">
            <Link to="/travels" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL 8 COUNTRIES</span>
            </Link>
            <span>/</span>
            <span className="text-[#4e342e] dark:text-white font-bold">{destination.country}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-editorial-mono">
            <Link
              to={`/travels/${prevDest.id}`}
              className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1"
            >
              ← {prevDest.country}
            </Link>
            <span className="opacity-30">|</span>
            <Link
              to={`/travels/${nextDest.id}`}
              className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1 font-bold"
            >
              {nextDest.country} →
            </Link>
          </div>
        </div>

        {/* SECTION 1: Massive Full-Bleed Landscape Image NEXT TO Tightly Cropped Photos of the 3 Curated Pieces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Massive Full-Bleed Landscape Image + Country Context */}
          <div data-stagger="image" className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 text-[9px] font-editorial-mono uppercase font-bold text-white tracking-widest ${
                  destination.isMaterialSource ? 'bg-[#cc5500]' : 'bg-[#2c3480]'
                }`}>
                  {destination.isMaterialSource ? '✦ RAW MATERIAL SOURCE' : '✦ DESIGN INSPIRATION'}
                </span>
                <span className="text-[11px] font-editorial-mono text-[#4e342e]/70 dark:text-white/70">
                  CAPE ELIZABETH STUDIO ARCHIVE
                </span>
              </div>

              <h1 className="font-display-serif text-5xl sm:text-7xl lg:text-8xl font-black text-[#4e342e] dark:text-white leading-[0.92] tracking-tight">
                {destination.country}
              </h1>

              <p className="font-editorial-serif italic text-xl sm:text-2xl text-[#cc5500] dark:text-[#2c3480]">
                "{destination.tagline}"
              </p>

              <p className="text-sm sm:text-base text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed max-w-2xl">
                {destination.sourceNotes}
              </p>
            </div>

            {/* Massive Full-Bleed Landscape Image */}
            <div className="relative aspect-[16/10] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden border border-[#4e342e]/15 dark:border-white/15 shadow-2xl group mt-4">
              <img
                src={destination.heroImage}
                alt={destination.heroAlt}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-4 right-4 bg-[#f8f4e7]/90 dark:bg-black/90 px-3 py-1.5 font-editorial-mono text-[10px] text-[#4e342e] dark:text-white flex items-center justify-between backdrop-blur-xs border border-[#4e342e]/10 dark:border-white/10">
                <span>FIELD TRAVEL PHOTOGRAPHY</span>
                <span className="font-bold">{destination.heroAlt}</span>
              </div>
            </div>
          </div>

          {/* Right: Tightly Cropped Photos of the 3 Curated Jewelry Pieces */}
          <div data-stagger="text" className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="border-b border-[#4e342e]/15 dark:border-white/15 pb-3">
              <span className="text-[10px] font-editorial-mono uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                3 CURATED BENCH PIECES FOR {destination.country.toUpperCase()}
              </span>
              <span className="text-xs font-editorial-mono text-[#4e342e]/70 dark:text-white/70">
                Hand-forged on the Maine coast from minerals & forms gathered in this region
              </span>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {destination.pairs.map((pair, idx) => {
                // Find matching product in catalog
                const matchedProduct = PRODUCTS.find((p) =>
                  p.name.toLowerCase().includes(pair.title.toLowerCase()) ||
                  pair.title.toLowerCase().includes(p.name.toLowerCase()) ||
                  (p.travelCountry && p.travelCountry.toLowerCase().includes(destination.country.toLowerCase()))
                ) || PRODUCTS[idx % PRODUCTS.length];

                return (
                  <div
                    key={pair.id}
                    className="p-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex items-center gap-4 transition-all duration-300 hover:border-[#cc5500] dark:hover:border-[#2c3480] group"
                  >
                    {/* Tightly cropped jewelry photo */}
                    <div className="w-24 h-24 aspect-square bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden flex-shrink-0 border border-[#4e342e]/10 dark:border-white/10 relative">
                      <img
                        src={pair.jewelryImage}
                        alt={pair.jewelryAlt}
                        className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-1 left-1 bg-[#cc5500] dark:bg-[#2c3480] text-white text-[8px] font-mono px-1 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex-1 space-y-1">
                      <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#4e342e]/60 dark:text-white/60 block">
                        BENCH EDITION
                      </span>
                      <h3 className="font-display-serif text-lg font-bold text-[#4e342e] dark:text-white leading-tight">
                        {pair.title}
                      </h3>
                      <p className="text-[11px] text-[#4e342e]/75 dark:text-white/75 font-editorial-body line-clamp-2 italic">
                        "{pair.caption}"
                      </p>

                      <div className="pt-2 flex items-center gap-4 text-xs font-editorial-mono">
                        <Link
                          to={`/product/${matchedProduct.id}`}
                          className="font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>INSPECT PIECE</span>
                        </Link>
                        <button
                          onClick={() => onAddToCart && onAddToCart(matchedProduct)}
                          className="text-[#4e342e] dark:text-white hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1 transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>+ ADD</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* SECTION 2: SIDE-BY-SIDE INSPIRATION COMPARISON PAIRS (THE PROOF) */}
        <div className="pt-12 border-t border-[#4e342e]/15 dark:border-white/15 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <span className="text-[10px] font-editorial-mono uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                SIDE-BY-SIDE INSPIRATION STUDY
              </span>
              <h2 className="font-display-serif text-3xl sm:text-5xl font-bold text-[#4e342e] dark:text-white mt-1">
                From Scene to Bench
              </h2>
            </div>
            <p className="text-xs font-editorial-mono text-[#4e342e]/70 dark:text-white/70 max-w-md">
              Each pair shows the authentic travel scene photographed on location alongside the hand-forged piece it directly sparked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.pairs.map((pair, idx) => {
              const matchedProduct = PRODUCTS.find((p) =>
                p.name.toLowerCase().includes(pair.title.toLowerCase()) ||
                pair.title.toLowerCase().includes(p.name.toLowerCase()) ||
                (p.travelCountry && p.travelCountry.toLowerCase().includes(destination.country.toLowerCase()))
              ) || PRODUCTS[idx % PRODUCTS.length];

              return (
                <div
                  key={pair.id}
                  className="bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-6 flex flex-col justify-between space-y-6 group"
                >
                  {/* Side-by-Side Images Split */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <div className="aspect-[4/5] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                        <img src={pair.travelImage} alt={pair.travelAlt} className="w-full h-full object-cover filter contrast-[1.02]" />
                        <span className="absolute top-1 left-1 bg-black/75 text-white text-[7px] font-mono uppercase px-1">
                          INSPIRATION
                        </span>
                      </div>
                      <span className="text-[8px] font-editorial-mono text-[#4e342e]/60 dark:text-white/60 block truncate">
                        {destination.country}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <Link to={`/product/${matchedProduct.id}`} className="block">
                        <div className="aspect-[4/5] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10 group-hover:border-[#cc5500] dark:group-hover:border-[#2c3480] transition-colors">
                          <img src={pair.jewelryImage} alt={pair.jewelryAlt} className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500" />
                          <span className="absolute top-1 right-1 bg-[#cc5500] dark:bg-[#2c3480] text-white text-[7px] font-mono uppercase font-bold px-1">
                            JEWELRY
                          </span>
                        </div>
                      </Link>
                      <span className="text-[8px] font-editorial-mono text-[#cc5500] dark:text-[#2c3480] font-bold block truncate">
                        BENCH PIECE
                      </span>
                    </div>
                  </div>

                  {/* Narrative Caption */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#4e342e]/60 dark:text-white/60 block">
                      PAIR 0{idx + 1} OF 03
                    </span>
                    <h3 className="font-display-serif text-xl font-bold text-[#4e342e] dark:text-white">
                      {pair.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e342e]/85 dark:text-white/85 font-editorial-body italic leading-relaxed">
                      "{pair.caption}"
                    </p>
                  </div>

                  {/* CRO Actions */}
                  <div className="pt-4 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/product/${matchedProduct.id}`}
                      className="text-xs font-editorial-mono uppercase tracking-wider font-bold text-[#4e342e] dark:text-white hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onAddToCart && onAddToCart(matchedProduct)}
                      className="px-3 py-1.5 bg-[#cc5500] dark:bg-[#2c3480] text-white text-[10px] font-editorial-mono uppercase font-bold hover:scale-105 transition-all"
                    >
                      ADD TO BAG
                    </button>
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

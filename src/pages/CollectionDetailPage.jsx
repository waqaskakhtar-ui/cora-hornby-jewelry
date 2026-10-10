import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, ShoppingBag } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/coraData';

export default function CollectionDetailPage({ onAddToCart }) {
  const { collectionSlug } = useParams();
  
  const currentCollection = COLLECTIONS.find((c) => c.slug === collectionSlug) || COLLECTIONS[0];
  const collectionIndex = COLLECTIONS.findIndex((c) => c.slug === currentCollection.slug);
  
  const prevCollection = COLLECTIONS[(collectionIndex > 0 ? collectionIndex - 1 : COLLECTIONS.length - 1)];
  const nextCollection = COLLECTIONS[(collectionIndex < COLLECTIONS.length - 1 ? collectionIndex + 1 : 0)];

  // Get matching products for this collection
  const matchingProducts = PRODUCTS.filter((p) =>
    p.collection && p.collection.toLowerCase() === currentCollection.name.toLowerCase()
  );

  // If few items directly tagged, fallback to full catalog items for that aesthetic
  const displayProducts = matchingProducts.length > 0 ? matchingProducts : PRODUCTS.slice(0, 8);

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Navigation Breadcrumbs & Collection Switcher */}
        <div data-stagger="text" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#4e342e]/15 dark:border-white/15">
          <div className="flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-wider text-[#4e342e]/70 dark:text-white/70">
            <Link to="/collections" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL 5 COLLECTIONS</span>
            </Link>
            <span>/</span>
            <span className="text-[#4e342e] dark:text-white font-bold">{currentCollection.name}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-editorial-mono">
            <Link
              to={`/collections/${prevCollection.slug}`}
              className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1"
            >
              ← {prevCollection.name}
            </Link>
            <span className="opacity-30">|</span>
            <Link
              to={`/collections/${nextCollection.slug}`}
              className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1 font-bold"
            >
              {nextCollection.name} →
            </Link>
          </div>
        </div>

        {/* Collection Hero Header */}
        <div data-stagger="text" className="space-y-4 max-w-4xl">
          <span className="font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
            FLOATING MINIMALIST GRID · SIGNATURE LINE
          </span>

          <h1 className="font-display-serif text-5xl sm:text-7xl lg:text-8xl font-black text-[#4e342e] dark:text-white leading-[0.92] tracking-tight">
            {currentCollection.name}
          </h1>

          <p className="font-editorial-body text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 max-w-2xl leading-relaxed pt-2">
            {currentCollection.desc} Every piece is individually bench-forged in Cape Elizabeth, Maine with zero duplicate mold repetitions.
          </p>

          <div className="pt-2 flex items-center gap-6 font-editorial-mono text-xs text-[#4e342e]/70 dark:text-white/70">
            <span>{displayProducts.length} BENCH PIECES SHOWN</span>
            <span>·</span>
            <span>EDITION OF ONE</span>
            <span>·</span>
            <span className="text-[#cc5500] dark:text-[#2c3480] font-bold">100% UNTREATED STONES</span>
          </div>
        </div>

        {/* FLOATING MINIMALIST GRID:
            - STRICT REQUIREMENT: "Remove all visible UI cards/boxes. Float the jewelry pieces asymmetrically with massive padding."
            - Smooth scale-up (scale: 1.05) over 0.6s on hover
            - Dim surrounding UI slightly to draw absolute focus
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 editorial-hover-parent pt-8">
          {displayProducts.map((p, idx) => {
            // Create asymmetrical rhythm with varied vertical offsets
            const isStaggeredY = idx % 2 === 1;

            return (
              <div
                key={p.id}
                className={`flex flex-col items-center text-center p-8 sm:p-12 lg:p-16 editorial-hover-card group cursor-pointer ${
                  isStaggeredY ? 'lg:translate-y-8' : ''
                }`}
              >
                {/* Floating Jewelry Piece: No background card, no borders, purely floating in negative space */}
                <Link to={`/product/${p.id}`} className="w-full flex items-center justify-center mb-8 relative">
                  <div className="w-full max-w-[320px] aspect-square relative flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover filter contrast-[1.06] shadow-[0_25px_50px_rgba(78,52,46,0.15)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                    />

                    {/* Quick Inspect Pill on Hover */}
                    <div className="absolute inset-0 bg-[#4e342e]/20 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-white font-editorial-mono text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-1.5 border border-[#4e342e]/15 dark:border-white/15">
                        <Eye className="w-3.5 h-3.5" />
                        INSPECT
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Microscopic Clean Typography */}
                <div className="space-y-1.5 w-full max-w-sm">
                  <span className="text-[10px] font-editorial-mono uppercase tracking-[0.22em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                    {p.category} · {p.travelCountry || 'MAINE STUDIO'}
                  </span>

                  <Link to={`/product/${p.id}`}>
                    <h2 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#4e342e] dark:text-white group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors leading-tight">
                      {p.name}
                    </h2>
                  </Link>

                  <p className="font-editorial-body text-xs text-[#4e342e]/75 dark:text-white/75 line-clamp-2 max-w-xs mx-auto pt-1">
                    {p.description}
                  </p>

                  <div className="pt-3 flex items-center justify-center gap-4 font-editorial-mono">
                    <span className="text-base font-bold text-[#4e342e] dark:text-white">
                      {p.price}
                    </span>
                    <button
                      onClick={() => onAddToCart && onAddToCart(p)}
                      className="px-4 py-1.5 bg-[#cc5500] dark:bg-[#2c3480] text-white text-[10px] uppercase font-bold tracking-wider hover:scale-105 active:scale-95 transition-transform flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

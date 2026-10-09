import React, { useState } from 'react';
import { ArrowUpRight, Eye, Plus, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { PRODUCTS, COLLECTIONS } from '../data/coraData';

export default function CollectionEditorial({ onSelectProduct, onQuickAdd }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { label: 'ALL ARCHIVE', key: 'ALL', count: PRODUCTS.length },
    { label: 'MIXED METALS', key: 'Mixed Metals', count: PRODUCTS.filter(p => p.collection === 'Mixed Metals').length },
    { label: 'GEOMETRICS', key: 'Geometrics', count: PRODUCTS.filter(p => p.collection === 'Geometrics').length },
    { label: 'MAYAN SOL', key: 'Mayan Sol', count: PRODUCTS.filter(p => p.collection === 'Mayan Sol').length },
    { label: 'PEARLS', key: 'Pearls', count: PRODUCTS.filter(p => p.collection === 'Pearls').length },
    { label: 'BLACK IS BACK', key: 'Black is Back', count: PRODUCTS.filter(p => p.collection === 'Black is Back').length },
  ];

  const filteredProducts = selectedFilter === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => 
        (p.collection && p.collection.toLowerCase() === selectedFilter.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  const handleQuickAdd = (p, e) => {
    e.stopPropagation();
    if (onQuickAdd) onQuickAdd(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section 
      id="collection" 
      className="py-20 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      {/* Ambient Specular Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#C5A869]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C5A869]/6 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto">
        
        {/* EDITORIAL HEADER WITH HAUTE-COUTURE TYPOGRAPHY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="space-y-3">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
              <span>✦</span>
              <span>THE FIVE SIGNATURE LINES · MAINE BENCH WORK</span>
            </div>
            
            <h2 className="font-editorial-luxury text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-[0.95]">
              Curated Collections
            </h2>

            <p className="text-xs sm:text-sm text-[#78746B] dark:text-[#A8A49C] font-editorial-body max-w-lg leading-relaxed">
              No two pieces align on a standard grid, just as no two stones carry identical crystal grain. Each design is individually hand-formed at the anvil in Cape Elizabeth.
            </p>
          </div>

          {/* Minimal Spaced-Out Typographic Taxonomy Selector */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-editorial-mono text-[11px] uppercase tracking-[0.16em]">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedFilter(cat.key)}
                  className={`group relative py-1 transition-all flex items-baseline gap-1.5 ${
                    isSelected
                      ? 'text-[#12100E] dark:text-[#FAF8F2] font-bold'
                      : 'text-[#8F8A80] dark:text-[#888379] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[8px] font-sans transition-colors ${
                    isSelected ? 'text-[#C5A869] font-semibold' : 'opacity-40 group-hover:opacity-80'
                  }`}>
                    {cat.count}
                  </span>
                  {isSelected && (
                    <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C5A869]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SCATTERED ASYMMETRICAL EDITORIAL RUNWAY */}
        <div className="mt-16 space-y-24 sm:space-y-32">
          
          {/* SECTION ROW 1: Monumental Portrait (Left) + Offset Tall Slender Piece (Right) */}
          {filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left: Monumental Hero Piece (Wide, Grounded) */}
              {(() => {
                const p = filteredProducts[0];
                const isAdded = addedId === p.id;
                return (
                  <div 
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className="lg:col-span-7 group cursor-pointer space-y-5"
                  >
                    {/* Borderless Floating Canvas with Specular Lighting */}
                    <div className="relative aspect-[4/5] sm:aspect-[16/13] bg-[#F2EFE8] dark:bg-[#161412] overflow-hidden p-6 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.7)] transition-all duration-700 group-hover:shadow-[0_35px_80px_rgba(197,168,105,0.18)]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain filter contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-105"
                      />

                      {/* Specular Glint Highlight */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
                      </div>

                      {/* Floating Specifier Badges */}
                      <div className="absolute top-4 left-4 gloss-pill px-3 py-1 rounded-full text-[9px] font-editorial-mono uppercase tracking-widest text-[#12100E] dark:text-[#FAF8F2]">
                        {p.collection || 'ARCHIVE'} · ONE OF ONE
                      </div>

                      <div className="absolute bottom-4 right-4 gloss-pill px-3 py-1 rounded-full text-[10px] font-editorial-mono font-bold text-[#C5A869]">
                        {p.price}
                      </div>
                    </div>

                    {/* Staggered Floating Metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pt-2">
                      <div className="space-y-1">
                        <h3 className="font-editorial-luxury text-2xl sm:text-4xl font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                          {p.name}
                        </h3>
                        <p className="font-editorial-body text-xs sm:text-sm text-[#78746B] dark:text-[#A8A49C] max-w-lg leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(p, e)}
                        className={`self-start sm:self-auto text-[10px] font-editorial-mono uppercase tracking-widest px-4 py-2 rounded-full transition-all flex items-center gap-2 flex-shrink-0 ${
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
                );
              })()}

              {/* Right: Offset Slender Vertical Piece (Pushed Down, Asymmetrical) */}
              {filteredProducts.length > 1 && (() => {
                const p = filteredProducts[1];
                const isAdded = addedId === p.id;
                return (
                  <div 
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className="lg:col-span-5 lg:pt-28 group cursor-pointer space-y-4"
                  >
                    {/* Slender Portrait Aspect Ratio */}
                    <div className="relative aspect-[3/4] sm:aspect-[9/13] bg-[#EFECE4] dark:bg-[#181614] overflow-hidden p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:shadow-[0_30px_70px_rgba(197,168,105,0.15)]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-105"
                      />

                      <div className="absolute top-4 right-4 gloss-pill px-2.5 py-1 rounded-full text-[8px] font-editorial-mono uppercase tracking-widest text-[#12100E] dark:text-[#FAF8F2]">
                        {p.category}
                      </div>

                      <div className="absolute bottom-4 left-4 font-editorial-mono text-xs font-bold text-[#C5A869]">
                        {p.price}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#C5A869]">
                        CAPE ELIZABETH STUDIO
                      </div>
                      <h4 className="font-editorial-luxury text-xl sm:text-2xl font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                        {p.name}
                      </h4>
                      <p className="font-editorial-body text-xs text-[#78746B] dark:text-[#A8A49C] line-clamp-2">
                        {p.material}
                      </p>
                    </div>
                  </div>
                );
              })()}

            </div>
          )}

          {/* EDITORIAL INTERLUDE: Standalone Cinematic Pull-Quote Break */}
          <div className="w-full py-12 sm:py-16 border-y border-[#12100E]/8 dark:border-white/10 relative">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.3em] text-[#C5A869]">
                BENCH PRINCIPLE · CORA HORNBY
              </span>
              <blockquote className="font-editorial-luxury italic text-2xl sm:text-4xl lg:text-5xl font-light text-[#12100E] dark:text-[#FAF8F2] leading-tight">
                “A piece of jewelry should never feel like an industrial reproduction. It should carry the human cadence of the hands that forged it.”
              </blockquote>
              <div className="font-editorial-mono text-[10px] text-[#8F8A80] dark:text-[#888379] uppercase tracking-widest">
                Direct mineral sourcing · No duplicate molds · Hand-worked metals
              </div>
            </div>
          </div>

          {/* SECTION ROW 2: Triple Staggered Asymmetry (No horizontal alignment) */}
          {filteredProducts.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Card A: Low Stagger Left */}
              {(() => {
                const p = filteredProducts[2];
                return (
                  <div 
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className="md:col-span-4 group cursor-pointer space-y-3"
                  >
                    <div className="relative aspect-square bg-[#F2EFE8] dark:bg-[#161412] p-6 shadow-sm overflow-hidden transition-all duration-700 group-hover:shadow-[0_25px_50px_rgba(197,168,105,0.12)]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                        {p.price}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-editorial-luxury text-lg font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] font-editorial-body text-[#78746B] dark:text-[#A8A49C] line-clamp-1">
                        {p.material}
                      </p>
                    </div>
                  </div>
                );
              })()}

              {/* Card B: Center Elevated Stagger (Pushed Down by pt-16 lg:pt-24) */}
              {filteredProducts.length > 3 && (() => {
                const p = filteredProducts[3];
                return (
                  <div 
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className="md:col-span-4 md:pt-16 lg:pt-24 group cursor-pointer space-y-3"
                  >
                    <div className="relative aspect-[3/4] bg-[#EFECE4] dark:bg-[#181614] p-8 shadow-sm overflow-hidden transition-all duration-700 group-hover:shadow-[0_25px_50px_rgba(197,168,105,0.12)]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 gloss-pill px-2 py-0.5 rounded-full text-[8px] font-editorial-mono uppercase text-[#12100E] dark:text-[#FAF8F2]">
                        {p.collection}
                      </div>
                      <div className="absolute bottom-3 left-3 text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                        {p.price}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-editorial-luxury text-lg font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] font-editorial-body text-[#78746B] dark:text-[#A8A49C] line-clamp-1">
                        {p.origin}
                      </p>
                    </div>
                  </div>
                );
              })()}

              {/* Card C: Right Offset Stagger (Pushed Down by pt-8 lg:pt-12) */}
              {filteredProducts.length > 4 && (() => {
                const p = filteredProducts[4];
                return (
                  <div 
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className="md:col-span-4 md:pt-8 lg:pt-12 group cursor-pointer space-y-3"
                  >
                    <div className="relative aspect-[4/5] bg-[#F2EFE8] dark:bg-[#161412] p-6 shadow-sm overflow-hidden transition-all duration-700 group-hover:shadow-[0_25px_50px_rgba(197,168,105,0.12)]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                        {p.price}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-editorial-luxury text-lg font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] font-editorial-body text-[#78746B] dark:text-[#A8A49C] line-clamp-1">
                        {p.material}
                      </p>
                    </div>
                  </div>
                );
              })()}

            </div>
          )}

          {/* Remaining pieces scattered smoothly */}
          {filteredProducts.length > 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pt-8">
              {filteredProducts.slice(5).map((p, idx) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct && onSelectProduct(p)}
                  className={`group cursor-pointer space-y-3 ${
                    idx % 2 === 1 ? 'lg:pt-12' : ''
                  }`}
                >
                  <div className="relative aspect-[4/5] bg-[#F2EFE8] dark:bg-[#161412] p-6 overflow-hidden shadow-xs transition-all duration-700 group-hover:shadow-[0_20px_45px_rgba(197,168,105,0.12)]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 text-[8px] font-editorial-mono uppercase text-[#8F8A80]">
                      0{idx + 6}
                    </div>
                    <div className="absolute bottom-3 right-3 text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                      {p.price}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-editorial-luxury text-lg font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs font-editorial-body text-[#78746B] dark:text-[#A8A49C] line-clamp-1">
                      {p.material}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

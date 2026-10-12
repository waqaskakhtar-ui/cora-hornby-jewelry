import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/coraData';

export default function CollectionsPage({ onBack, onSelectProduct, onAddToCart }) {
  const [activeCollectionId, setActiveCollectionId] = useState('mixed-metals');

  const activeCol = COLLECTIONS.find((c) => c.id === activeCollectionId) || COLLECTIONS[0];
  const colProducts = PRODUCTS.filter(
    (p) => p.collection && p.collection.toLowerCase() === activeCol.name.toLowerCase()
  );

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
              CURATED COLLECTIONS
            </span>
          </div>

          <span className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            5 SIGNATURE STUDIO LINES
          </span>
        </div>

        {/* Monumental Headline */}
        <div className="mb-12">
          <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#8A867E] dark:text-[#9E9A90] block">
            ATELIER EDITIONS · CAPE ELIZABETH BENCH
          </span>
          <h1 className="text-fluid-headline font-display-grotesk font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-2">
            CURATED COLLECTIONS
          </h1>
          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-2xl mt-3 leading-relaxed">
            From the radiant ancient sunbursts of Mayan Sol to Bauhaus-inspired Geometrics, tactile Mixed Metals, Dutch master Pearls, and midnight-toned Black is Back.
          </p>
        </div>

        {/* Collection Selector Rail */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#111111]/8 dark:border-white/10">
          {COLLECTIONS.map((col, idx) => {
            const isSelected = col.id === activeCol.id;
            return (
              <button
                key={col.id}
                onClick={() => setActiveCollectionId(col.id)}
                className={`px-5 py-3 rounded-xs font-editorial-mono text-xs uppercase tracking-wider transition-all flex items-center gap-3 flex-shrink-0 border ${
                  isSelected
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-bold shadow-md'
                    : 'bg-[#F2EFE8] dark:bg-[#141312] text-[#73716B] dark:text-[#9E9A90] border-transparent hover:border-[#A88B58]'
                }`}
              >
                <span className={`text-[9px] ${isSelected ? 'text-[#A88B58]' : 'text-[#8A867E]'}`}>
                  0{idx + 1}
                </span>
                <span>{col.name}</span>
                <span className="text-[9px] opacity-60">({col.count})</span>
              </button>
            );
          })}
        </div>

        {/* Collection Overview Card */}
        <div className="p-8 sm:p-12 bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 mb-12 space-y-4">
          <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#A88B58] font-bold block">
            COLLECTION ESSAY & ART DIRECTION
          </span>
          <h2 className="font-display-grotesk text-3xl sm:text-4xl font-bold uppercase text-[#111111] dark:text-[#FAF9F5]">
            {activeCol.name}
          </h2>
          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#D4D0C7] font-editorial-body max-w-3xl leading-relaxed">
            {activeCol.desc}
          </p>
        </div>

        {/* Catalog Grid for Active Collection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(colProducts.length > 0 ? colProducts : PRODUCTS.slice(0, 4)).map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct && onSelectProduct(product)}
              className="group cursor-pointer bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 p-5 flex flex-col justify-between hover:border-[#A88B58] transition-all shadow-xs hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-[#E2DFD6] dark:bg-[#1E1C1A] border border-[#111111]/8 dark:border-white/10 gloss-highlight">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover filter contrast-[1.04] group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-[#FAF9F5]/90 dark:bg-[#111111]/90 px-2 py-0.5 text-[8px] font-editorial-mono uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between font-editorial-mono text-xs">
                  <span className="text-[#8A867E] dark:text-[#7E7A70] text-[9px] uppercase">
                    {product.origin}
                  </span>
                  <span className="text-[#A88B58] font-bold">
                    {product.price}
                  </span>
                </div>

                <h3 className="font-display-grotesk text-lg font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors truncate">
                  {product.name}
                </h3>

                <p className="text-xs text-[#5E5C57] dark:text-[#B5B0A4] line-clamp-2 font-editorial-body">
                  {product.material}
                </p>

                <div className="pt-3 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between text-xs font-editorial-mono">
                  <span className="text-[#111111] dark:text-[#FAF9F5] flex items-center gap-1 group-hover:text-[#A88B58] transition-colors">
                    <span>VIEW PIECE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[9px] text-[#A88B58] font-semibold">EDITION OF ONE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

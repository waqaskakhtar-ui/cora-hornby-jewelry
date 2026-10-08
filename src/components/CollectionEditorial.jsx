import React, { useState } from 'react';
import { ArrowUpRight, Eye, Plus, Award } from 'lucide-react';
import { PRODUCTS } from '../data/coraData';

export default function CollectionEditorial({ onSelectProduct, onQuickAdd }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = [
    { label: 'ALL ARCHIVE', key: 'ALL', count: 60 },
    { label: 'NECKLACES', key: 'Necklaces', count: 24 },
    { label: 'BRACELETS', key: 'Bracelets', count: 12 },
    { label: 'EARRINGS', key: 'Earrings', count: 18 },
  ];

  const filteredProducts = selectedFilter === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  const headlinePiece = filteredProducts[0] || PRODUCTS[0];
  const gridPieces = filteredProducts.slice(1);

  return (
    <section id="collection" className="py-16 lg:py-20 px-6 sm:px-10 lg:px-14 bg-[#F9F8F5] dark:bg-[#121110] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Heritage Credential Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2.5 px-4 mb-8 bg-[#F0EEE6] dark:bg-[#181715] border border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] uppercase tracking-[0.16em] text-[#73716B] dark:text-[#9E9A90]">
          <div className="flex items-center gap-2 text-[#111111] dark:text-[#FAF9F5] font-semibold">
            <Award className="w-3.5 h-3.5 text-[#B09462]" />
            <span>THE CORA HORNBY STUDIO ARCHIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">CAPE ELIZABETH, MAINE BENCH</span>
            <span>NO DUPLICATE PIECES</span>
            <span className="hidden md:inline">100% ETHICAL GEMSTONES</span>
          </div>
        </div>

        {/* Section Header with Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.22em] text-[#8A867E] dark:text-[#9E9A90]">
              CATALOG & EDITORIAL LOOKBOOK · 2026 RELEASES
            </div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none mt-1">
              COLLECTED. COMPOSED.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE9DF]/70 dark:bg-[#1F1E1B] border border-[#111111]/10 dark:border-white/10 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedFilter(cat.key)}
                className={`text-[10px] font-editorial-mono uppercase tracking-[0.12em] px-3.5 py-1.5 transition-all flex items-center gap-1.5 ${
                  selectedFilter === cat.key
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] shadow-xs font-semibold'
                    : 'text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[8px] opacity-60`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* TOP ROW: EDITORIAL SPOTLIGHT (TOP-LEFT) + HEADLINE PIECE (TOP-RIGHT) */}
        <div className="mt-8 grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Top-Left: Editorial Atelier Feature Card */}
          <div 
            data-cursor="view"
            data-cursor-text="ATELIER"
            className="col-span-12 lg:col-span-5 bg-[#F2EFE8] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_14px_35px_rgba(168,139,88,0.06)] group/spotlight"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-[0.18em] text-[#8A867E] dark:text-[#9E9A90]">
                <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold group-hover/spotlight:text-[#A88B58] transition-colors">[01 · ATELIER SPOTLIGHT]</span>
                <span>MAINE STUDIO</span>
              </div>

              <h3 className="font-display-grotesk text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
                Mineral & Metal <br />
                <span className="font-editorial-serif font-normal italic text-[#5E5C57] dark:text-[#A88B58]">Singular Creations</span>
              </h3>

              <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                Every piece in this catalog is individually hand-assembled by Cora Hornby in her Cape Elizabeth studio. Stones are hand-selected from lapidaries across Peru, Africa, and Guatemala, mounted without duplicate molds.
              </p>

              {/* Atelier Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 font-editorial-mono text-[10px]">
                <div className="p-2.5 bg-[#FAF9F5] dark:bg-[#201F1C] border border-[#111111]/8 dark:border-white/10 group-hover/spotlight:border-[#A88B58]/30 transition-colors">
                  <span className="text-[#8A867E] dark:text-[#9E9A90] block text-[8px] uppercase">MATERIAL INTEGRITY</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] font-medium">100% UNTREATED</span>
                </div>
                <div className="p-2.5 bg-[#FAF9F5] dark:bg-[#201F1C] border border-[#111111]/8 dark:border-white/10 group-hover/spotlight:border-[#A88B58]/30 transition-colors">
                  <span className="text-[#8A867E] dark:text-[#9E9A90] block text-[8px] uppercase">EDITION RUN</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] font-medium">ONE OF ONE</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between text-xs font-editorial-mono">
              <span className="text-[#73716B] dark:text-[#9E9A90]">CURRENT EXHIBIT: 2026 ARCHIVE</span>
              <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold group-hover/spotlight:text-[#A88B58] transition-colors">CAPE ELIZABETH, ME</span>
            </div>
          </div>

          {/* Top-Right: Headline Product Card */}
          <div 
            data-cursor="inspect"
            data-cursor-text="INSPECT"
            className="col-span-12 lg:col-span-7 bg-[#F0EEE6] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:border-[#A88B58]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_40px_rgba(168,139,88,0.08)]"
            onMouseEnter={() => setHoveredId(headlinePiece.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div 
              className="relative w-full h-[360px] sm:h-[420px] bg-[#FAF9F5] dark:bg-[#141312] overflow-hidden cursor-pointer"
              onClick={() => onSelectProduct(headlinePiece)}
            >
              {/* Hairline Exhibition Corner Brackets */}
              <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A88B58]"></span>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#A88B58]"></span>
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#A88B58]"></span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#A88B58]"></span>
              </div>

              {/* Light Glint Reflection on Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
              </div>

              <img
                src={hoveredId === headlinePiece.id && headlinePiece.altImage ? headlinePiece.altImage : headlinePiece.image}
                alt={headlinePiece.name}
                className="w-full h-full object-contain filter contrast-[1.04] p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute top-3 left-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-[9px] uppercase tracking-widest px-2.5 py-1 z-10 shadow-xs">
                FEATURED PIECE · {headlinePiece.category}
              </div>

              <div className="absolute top-3 right-3 bg-[#FAF9F5]/90 dark:bg-[#1A1917]/90 backdrop-blur-xs font-editorial-mono text-xs font-bold text-[#111111] dark:text-[#FAF9F5] px-3 py-1 border border-[#111111]/10 dark:border-white/10 z-10 shadow-xs group-hover:border-[#A88B58]/50 transition-colors">
                {headlinePiece.price}
              </div>

              {/* Quick Action Overlay */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(headlinePiece);
                  }}
                  className="px-3.5 py-2 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] text-[10px] font-editorial-mono uppercase tracking-widest hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF9F5] transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Eye className="w-3 h-3" />
                  <span>VIEW DETAILS</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAdd(headlinePiece);
                  }}
                  className="px-3.5 py-2 bg-[#FAF9F5] dark:bg-[#201F1C] text-[#111111] dark:text-[#FAF9F5] text-[10px] font-editorial-mono uppercase tracking-widest hover:border-[#A88B58] hover:text-[#A88B58] transition-all border border-[#111111]/15 dark:border-white/20 flex items-center gap-1 shadow-md"
                >
                  <Plus className="w-3 h-3" />
                  <span>ADD TO BAG</span>
                </button>
              </div>
            </div>

            <div className="p-5 bg-[#F7F5EF] dark:bg-[#1A1917] border-t border-[#111111]/8 dark:border-white/10 flex items-baseline justify-between gap-4">
              <div>
                <h4 
                  onClick={() => onSelectProduct(headlinePiece)}
                  className="font-display-grotesk text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] cursor-pointer transition-colors"
                >
                  {headlinePiece.name}
                </h4>
                <div className="font-editorial-mono text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] mt-0.5">
                  {headlinePiece.material}
                </div>
              </div>
              <span className="font-editorial-mono text-xs uppercase text-[#8A867E] dark:text-[#9E9A90] shrink-0">
                {headlinePiece.origin}
              </span>
            </div>
          </div>

        </div>

        {/* REST OF CATALOG GRID */}
        <div className="mt-8 grid grid-cols-12 gap-6 lg:gap-8 items-start">
          {gridPieces.map((product, idx) => {
            const isHovered = hoveredId === product.id;

            return (
              <div
                key={product.id}
                data-cursor="inspect"
                data-cursor-text="INSPECT"
                className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#F2EFE8] dark:bg-[#181715] border border-[#111111]/8 dark:border-white/10 overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:border-[#A88B58]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_rgba(168,139,88,0.08)]"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Box */}
                <div
                  className="relative w-full h-[320px] sm:h-[360px] bg-[#FAF9F5] dark:bg-[#141312] overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  {/* Hairline Exhibition Corner Brackets */}
                  <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A88B58]"></span>
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#A88B58]"></span>
                    <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#A88B58]"></span>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#A88B58]"></span>
                  </div>

                  {/* Light Glint Reflection on Hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
                  </div>

                  <img
                    src={isHovered && product.altImage ? product.altImage : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#1A1917]/90 backdrop-blur-xs font-editorial-mono text-[9px] uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] px-2 py-0.5 border border-[#111111]/10 dark:border-white/10 z-10 shadow-xs">
                    0{idx + 2} · {product.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#FAF9F5]/90 dark:bg-[#1A1917]/90 backdrop-blur-xs font-editorial-mono text-xs font-semibold text-[#111111] dark:text-[#FAF9F5] px-2.5 py-0.5 border border-[#111111]/10 dark:border-white/10 z-10 shadow-xs group-hover:border-[#A88B58]/50 transition-colors">
                    {product.price}
                  </div>

                  {/* Hover Buttons */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="px-3.5 py-2 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] text-[10px] font-editorial-mono uppercase tracking-widest hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF9F5] transition-all flex items-center gap-1 shadow-md"
                    >
                      <Eye className="w-3 h-3" />
                      <span>VIEW PIECE</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(product);
                      }}
                      className="px-3.5 py-2 bg-[#FAF9F5] dark:bg-[#201F1C] text-[#111111] dark:text-[#FAF9F5] text-[10px] font-editorial-mono uppercase tracking-widest hover:border-[#A88B58] hover:text-[#A88B58] transition-all border border-[#111111]/15 dark:border-white/20 flex items-center gap-1 shadow-md"
                    >
                      <Plus className="w-3 h-3" />
                      <span>ADD</span>
                    </button>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-4 bg-[#FAF9F5] dark:bg-[#1A1917] border-t border-[#111111]/8 dark:border-white/10 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 
                      onClick={() => onSelectProduct(product)}
                      className="font-display-grotesk text-base sm:text-lg font-bold text-[#111111] dark:text-[#FAF9F5] truncate cursor-pointer group-hover:text-[#A88B58] transition-colors"
                    >
                      {product.name}
                    </h4>
                    <span className="font-editorial-mono text-xs sm:text-sm font-semibold text-[#111111] dark:text-[#FAF9F5]">
                      {product.price}
                    </span>
                  </div>

                  <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] truncate">
                    {product.material}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[9px] font-editorial-mono text-[#8A867E] dark:text-[#7E7A70] border-t border-[#111111]/6 dark:border-white/8">
                    <span>{product.origin}</span>
                    <span className="text-[#111111] dark:text-[#FAF9F5]">EDITION 1/1</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

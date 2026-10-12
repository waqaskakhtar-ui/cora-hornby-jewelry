import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Filter, Sparkles, ShoppingBag, Eye, ArrowUpRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { PRODUCTS, COLLECTIONS, PRODUCT_CATEGORIES } from '../data/coraData';

export default function ProductListingPage({ onSelectProduct, onAddToCart, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedCollection, setSelectedCollection] = useState('ALL');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [addedId, setAddedId] = useState(null);
  const gridRef = useRef(null);

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat =
      selectedCategory === 'ALL' ||
      p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      p.productType.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesCol =
      selectedCollection === 'ALL' ||
      (p.collection && p.collection.toLowerCase() === selectedCollection.toLowerCase());
    return matchesCat && matchesCol;
  });

  // Antigravity physics: cards drift slightly upward on scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.antigravity-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out'
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [selectedCategory, selectedCollection]);

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-28 pb-24 px-6 sm:px-10 lg:px-14 transition-colors duration-500 relative">
      
      {/* Background Macro Texture Shift when hovering on a product */}
      {hoveredProduct && (
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-15 dark:opacity-20 blur-2xl transition-all duration-700 bg-cover bg-center"
          style={{ backgroundImage: `url(${hoveredProduct.image})` }}
        />
      )}

      <div className="max-w-[1720px] mx-auto relative z-10">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="group flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>RETURN TO JOURNAL</span>
            </button>
            <span className="text-[#A88B58]">/</span>
            <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#A88B58] font-semibold">
              THE COMPLETE ARCHIVE
            </span>
          </div>

          <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] flex items-center gap-4">
            <span>{filteredProducts.length} ONE-OF-A-KIND CREATIONS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]"></span>
            <span>MAINE BENCH FORGED</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="mt-10 mb-12">
          <h1 className="text-fluid-headline font-display-grotesk font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5]">
            THE STUDIO ARCHIVE
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-2xl leading-relaxed">
            Every piece cataloged here is individually crafted at Cora Hornby's bench on the coast of Maine. No repeated molds; raw minerals and hammered metals preserved in their authentic crystalline geometry.
          </p>
        </div>

        {/* Dual Filtering Rails: Category & Collection */}
        <div className="space-y-4 mb-14 pb-8 border-b border-[#111111]/8 dark:border-white/10">
          
          {/* Category Rail */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-editorial-mono text-xs uppercase">
            <span className="text-[10px] text-[#8A867E] dark:text-[#7E7A70] tracking-widest mr-2 flex-shrink-0">
              CATEGORY:
            </span>
            {['ALL', ...PRODUCT_CATEGORIES.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xs transition-all flex-shrink-0 border ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] border-[#111111] dark:border-[#FAF9F5] font-semibold shadow-xs'
                    : 'bg-[#FAF9F5] dark:bg-[#161514] text-[#5E5C57] dark:text-[#9E9A90] border-[#111111]/10 dark:border-white/10 hover:border-[#A88B58]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collection Rail */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-editorial-mono text-xs uppercase">
            <span className="text-[10px] text-[#8A867E] dark:text-[#7E7A70] tracking-widest mr-2 flex-shrink-0">
              COLLECTION:
            </span>
            {['ALL', ...COLLECTIONS.map((c) => c.name)].map((col) => (
              <button
                key={col}
                onClick={() => setSelectedCollection(col)}
                className={`px-3.5 py-1.5 rounded-xs transition-all flex-shrink-0 border ${
                  selectedCollection.toLowerCase() === col.toLowerCase()
                    ? 'bg-[#A88B58] text-[#111111] border-[#A88B58] font-bold shadow-xs'
                    : 'bg-[#FAF9F5] dark:bg-[#161514] text-[#73716B] dark:text-[#9E9A90] border-[#111111]/10 dark:border-white/10 hover:border-[#A88B58]'
                }`}
              >
                {col}
              </button>
            ))}
          </div>

        </div>

        {/* Asymmetric Masonry Grid with Antigravity Physics & High-Gloss Magnification */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => {
            const isAdded = addedId === product.id;
            const isAsymmetricTall = idx % 5 === 0;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onSelectProduct && onSelectProduct(product)}
                className={`antigravity-card group cursor-pointer bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 hover:border-[#A88B58]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(168,139,88,0.1)] relative ${
                  isAsymmetricTall ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                {/* Hairline Corner Accent Notches */}
                <div className="absolute top-2 left-2 text-[9px] font-editorial-mono text-[#A88B58] opacity-0 group-hover:opacity-100 transition-opacity">
                  +
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-editorial-mono text-[#A88B58] opacity-0 group-hover:opacity-100 transition-opacity">
                  +
                </div>

                {/* Image Container with High-Gloss Shimmer */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#E8E5DC] dark:bg-[#1E1C1A] border border-[#111111]/8 dark:border-white/10 gloss-highlight">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter contrast-[1.04] transition-all duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Top Origin Tag */}
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#111111]/90 backdrop-blur-xs px-2.5 py-1 text-[8px] font-editorial-mono uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] border border-[#111111]/10 dark:border-white/10">
                    {product.collection || product.category}
                  </div>

                  {/* High-Gloss Inspection Pill */}
                  <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#FAF9F5] text-[#111111] text-[10px] font-editorial-mono uppercase tracking-widest px-3 py-1.5 shadow-lg flex items-center gap-1.5 font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      INSPECT PIECE
                    </span>
                  </div>
                </div>

                {/* Details Tier */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-baseline justify-between text-xs font-editorial-mono">
                    <span className="text-[10px] uppercase text-[#8A867E] dark:text-[#7E7A70] truncate max-w-[65%]">
                      {product.origin}
                    </span>
                    <span className="text-[#A88B58] font-bold text-sm">
                      {product.price}
                    </span>
                  </div>

                  <h3 className="font-display-grotesk text-lg sm:text-xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body line-clamp-2 leading-relaxed">
                    {product.material}
                  </p>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between gap-3">
                    <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90]">
                      EDITION OF ONE
                    </span>

                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`text-[10px] font-editorial-mono uppercase tracking-wider px-3 py-1.5 transition-all flex items-center gap-1.5 rounded-2xs ${
                        isAdded
                          ? 'bg-[#2E5E4E] text-[#FAF9F5] font-semibold'
                          : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111]'
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
  );
}

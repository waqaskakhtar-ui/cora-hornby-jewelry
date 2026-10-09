import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, ShoppingBag, Check, Filter } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/coraData';

export default function ShopHubPage({ onQuickAdd, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = selectedCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => (p.productType && p.productType.toLowerCase() === selectedCategory.toLowerCase()) || (p.category && p.category.toLowerCase().includes(selectedCategory.toLowerCase())));

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    if (onQuickAdd) onQuickAdd(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">SHOP BY PRODUCT</span>
        </div>

        {/* Section Header */}
        <div className="pb-10 border-b border-[#111111]/10 dark:border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#A88B58]" />
              <span>FIVE SILHOUETTES · ONE-OF-A-KIND CREATIONS</span>
            </div>

            <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
              Shop by Product
            </h1>

            <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
              Every listing on the website has its own dedicated product listing. Filter by anatomical silhouette or explore individual piece profiles below.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE8DF]/80 dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 rounded-sm">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 text-xs font-editorial-mono uppercase tracking-wider transition-all ${
                selectedCategory === 'ALL'
                  ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                  : 'text-[#6B6862] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
              }`}
            >
              ALL ({PRODUCTS.length})
            </button>

            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 text-xs font-editorial-mono uppercase tracking-wider transition-all ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase()
                    ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                    : 'text-[#6B6862] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
                }`}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Silhouette Quick Portals */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 border-b border-[#111111]/8 dark:border-white/10 pb-8 font-editorial-mono text-xs">
          {PRODUCT_CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="p-3 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 hover:border-[#A88B58] transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block text-[8px] text-[#8A867E]">CATEGORY</span>
                <span className="font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58]">
                  {cat.name}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A867E] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Asymmetrical Gallery of Floating Borderless Cards in Negative Space */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 editorial-gallery-group">
          {filteredProducts.map((product, idx) => {
            const isStaggered = idx % 2 === 1;
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className={`floating-product-card group flex flex-col justify-between ${
                  isStaggered ? 'sm:translate-y-8' : ''
                }`}
              >
                {/* Borderless Floating Container */}
                <div className="relative aspect-[4/5] bg-[#ECE8DF] dark:bg-[#161514] overflow-hidden reveal-clip">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-0.5 text-[8px] font-editorial-mono uppercase text-[#111111] dark:text-[#FAF9F5]">
                    {product.collection}
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="p-2.5 bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] shadow-lg hover:bg-[#A88B58] dark:hover:bg-[#A88B58] transition-colors rounded-full"
                      title="Add to Shopping Bag"
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Overlapping Metadata Block */}
                <div className="pt-4 space-y-1">
                  <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#8A867E]">
                    <span>{product.travelCountry || product.origin}</span>
                    <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">{product.price}</span>
                  </div>

                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-editorial-heading text-xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="font-editorial-body text-xs text-[#5E5C57] dark:text-[#A6A49E] line-clamp-2 pt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowRight, Layers, Compass, Grid, Sparkles, ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, COLLECTIONS, TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function ExploreIndex({ onCategorySelect, onSelectCountry }) {
  const [activeTab, setActiveTab] = useState('products');
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const taxonomyData = {
    products: PRODUCT_CATEGORIES.map((cat, idx) => {
      const sample = PRODUCTS.find((p) => p.category.toLowerCase().includes(cat.name.toLowerCase())) || PRODUCTS[idx % PRODUCTS.length];
      return {
        id: cat.id,
        number: `0${idx + 1}`,
        title: cat.name,
        subtitle: `${cat.count} handcrafted bench creations · cape elizabeth`,
        tag: 'PRODUCT TYPE',
        image: sample.image || sample.altImage,
        samplePiece: sample.name,
        count: `${cat.count} PIECES`,
        actionTarget: 'collection',
        filterKey: cat.name
      };
    }),
    collections: COLLECTIONS.map((col, idx) => {
      const sample = PRODUCTS.find((p) => p.collection && p.collection.toLowerCase() === col.name.toLowerCase()) || PRODUCTS[idx % PRODUCTS.length];
      return {
        id: col.id,
        number: `0${idx + 1}`,
        title: col.name,
        subtitle: col.desc,
        tag: 'COLLECTION ARCHIVE',
        image: sample.image || sample.altImage,
        samplePiece: sample.name,
        count: `${col.count} DESIGNS`,
        actionTarget: 'collection',
        filterKey: col.name
      };
    }),
    travel: TRAVEL_DESTINATIONS.map((dest, idx) => {
      return {
        id: dest.id,
        number: `0${idx + 1}`,
        title: dest.country,
        subtitle: dest.tagline,
        tag: dest.isMaterialSource ? 'MATERIAL HARVEST' : 'DESIGN INSPIRATION',
        image: dest.pairs[0].jewelryImage || dest.heroImage,
        samplePiece: dest.pairs[0].title,
        count: '3 BENCH PIECES',
        actionTarget: 'travels',
        filterKey: dest.id
      };
    })
  };

  const currentList = taxonomyData[activeTab] || taxonomyData.products;
  const safeIndex = Math.min(activeItemIndex, currentList.length - 1);
  const activeItem = currentList[safeIndex] || currentList[0];

  const handleRowClick = (item) => {
    if (item.actionTarget === 'travels') {
      const elem = document.getElementById('travels');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      if (onSelectCountry) onSelectCountry(item.id);
    } else {
      const elem = document.getElementById('collection');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      if (onCategorySelect) onCategorySelect(item.filterKey);
    }
  };

  return (
    <section 
      id="index" 
      className="py-20 lg:py-32 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="space-y-3">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>THE THREE-WAY STUDIO TAXONOMY</span>
            </div>
            
            <h2 className="font-editorial-luxury text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-none">
              The Three Paths
            </h2>

            <p className="font-editorial-serif italic text-base sm:text-xl text-[#78746B] dark:text-[#C5A869] max-w-xl">
              Browse by product silhouette, signature collection, or country of origin.
            </p>
          </div>

          {/* Minimalist Tab Navigation Bar */}
          <div className="flex flex-wrap items-center gap-6 font-editorial-mono text-[11px] uppercase tracking-[0.18em]">
            <button
              onClick={() => { setActiveTab('products'); setActiveItemIndex(0); }}
              className={`py-1 transition-all flex items-baseline gap-2 relative ${
                activeTab === 'products'
                  ? 'text-[#12100E] dark:text-[#FAF8F2] font-bold'
                  : 'text-[#8F8A80] dark:text-[#888379] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
              }`}
            >
              <span className="text-[9px] text-[#C5A869]">01</span>
              <span>BY PRODUCT TYPE</span>
              {activeTab === 'products' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C5A869]" />
              )}
            </button>

            <button
              onClick={() => { setActiveTab('collections'); setActiveItemIndex(0); }}
              className={`py-1 transition-all flex items-baseline gap-2 relative ${
                activeTab === 'collections'
                  ? 'text-[#12100E] dark:text-[#FAF8F2] font-bold'
                  : 'text-[#8F8A80] dark:text-[#888379] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
              }`}
            >
              <span className="text-[9px] text-[#C5A869]">02</span>
              <span>BY COLLECTION</span>
              {activeTab === 'collections' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C5A869]" />
              )}
            </button>

            <button
              onClick={() => { setActiveTab('travel'); setActiveItemIndex(0); }}
              className={`py-1 transition-all flex items-baseline gap-2 relative ${
                activeTab === 'travel'
                  ? 'text-[#12100E] dark:text-[#FAF8F2] font-bold'
                  : 'text-[#8F8A80] dark:text-[#888379] hover:text-[#12100E] dark:hover:text-[#FAF8F2]'
              }`}
            >
              <span className="text-[9px] text-[#C5A869]">03</span>
              <span>BY TRAVEL INSPIRATION</span>
              {activeTab === 'travel' && (
                <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C5A869]" />
              )}
            </button>
          </div>
        </div>

        {/* ASYMMETRICAL SPREAD: SCATTERED INDEX LIST (LEFT) + FLOATING PREVIEW (RIGHT) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Rows with Generous Whitespace */}
          <div className="lg:col-span-7 space-y-2">
            {currentList.map((item, idx) => {
              const isActive = activeItemIndex === idx;

              return (
                <div
                  key={item.id}
                  data-cursor="explore"
                  data-cursor-text={item.title.toUpperCase()}
                  onMouseEnter={() => setActiveItemIndex(idx)}
                  onClick={() => handleRowClick(item)}
                  className={`group relative py-6 px-4 -mx-4 border-b border-[#12100E]/8 dark:border-white/10 flex items-center justify-between cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#F2EFE8]/70 dark:bg-[#161412]/80 opacity-100' 
                      : 'opacity-50 hover:opacity-100 hover:bg-[#F2EFE8]/40 dark:hover:bg-[#161412]/40'
                  }`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10 flex-1 mr-4">
                    <span className={`font-editorial-luxury text-xl sm:text-2xl transition-colors ${
                      isActive ? 'text-[#C5A869]' : 'text-[#8F8A80]'
                    }`}>
                      {item.number}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className={`font-editorial-luxury text-2xl sm:text-4xl font-normal tracking-tight transition-transform duration-500 ${
                          isActive ? 'text-[#12100E] dark:text-[#FAF8F2] translate-x-2' : 'text-[#12100E] dark:text-[#FAF8F2]'
                        }`}>
                          {item.title}
                        </h3>
                        <span className="text-[8px] font-editorial-mono uppercase px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#78746B] dark:text-[#A8A49C]">
                          {item.tag}
                        </span>
                      </div>

                      <p className={`font-editorial-body text-xs text-[#78746B] dark:text-[#A8A49C] line-clamp-1 transition-all duration-500 ${
                        isActive ? 'text-[#12100E] dark:text-[#EAE6DD] translate-x-2' : ''
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="hidden sm:inline font-editorial-mono text-[10px] uppercase tracking-widest text-[#8F8A80]">
                      {item.count}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#12100E] dark:bg-[#FAF8F2] text-[#FAF8F2] dark:text-[#12100E] scale-105' 
                        : 'bg-transparent text-[#12100E] dark:text-[#FAF8F2] group-hover:bg-[#12100E]/10 dark:group-hover:bg-white/10'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Floating Asymmetric Monograph Preview Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div 
              onClick={() => handleRowClick(activeItem)}
              className="relative aspect-[4/5] sm:aspect-[16/14] bg-[#F2EFE8] dark:bg-[#161412] overflow-hidden p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] group/preview cursor-pointer transition-all duration-700 hover:shadow-[0_30px_70px_rgba(197,168,105,0.18)]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  key={activeItem.image}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain filter contrast-[1.06] transition-transform duration-700 group-hover/preview:scale-105"
                />

                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700">
                  <div className="w-[45%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover/preview:translate-x-[350%] transition-transform duration-1000 ease-out" />
                </div>

                {/* Floating Specular Tag */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between text-[#FAF8F2] font-editorial-mono text-[10px]">
                  <div>
                    <span className="text-[8px] block text-[#C5A869] uppercase tracking-widest">
                      {activeItem.tag} · {activeItem.number}
                    </span>
                    <span className="font-editorial-luxury text-xl font-normal">
                      {activeItem.title}
                    </span>
                  </div>
                  <span className="text-[9px] text-[#FAF8F2]/90 max-w-[160px] text-right truncate">
                    {activeItem.samplePiece}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between font-editorial-mono text-[9px] text-[#78746B] dark:text-[#A8A49C]">
              <span>[TAXONOMY BROWSER]</span>
              <span className="text-[#C5A869] uppercase font-bold tracking-wider">
                CLICK TO JUMP TO ARCHIVE →
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

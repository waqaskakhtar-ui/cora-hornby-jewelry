import React, { useState } from 'react';
import { ArrowRight, Layers, Compass, Grid, Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES, COLLECTIONS, TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function ExploreIndex({ onCategorySelect, onSelectCountry }) {
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'collections' | 'travel'
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Define the 3 taxonomy datasets
  const taxonomyData = {
    products: PRODUCT_CATEGORIES.map((cat, idx) => {
      const sampleProduct = PRODUCTS.find((p) => p.category.toLowerCase().includes(cat.name.toLowerCase())) || PRODUCTS[idx % PRODUCTS.length];
      return {
        id: cat.id,
        number: `0${idx + 1}`,
        title: cat.name,
        subtitle: `${cat.count} One-of-a-Kind Bench Pieces`,
        tag: 'PRODUCT TYPE',
        image: sampleProduct.image || sampleProduct.altImage,
        samplePiece: sampleProduct.name,
        count: `${cat.count} PIECES`,
        actionTarget: 'collection',
        filterKey: cat.name
      };
    }),
    collections: COLLECTIONS.map((col, idx) => {
      const sampleProduct = PRODUCTS.find((p) => p.collection && p.collection.toLowerCase() === col.name.toLowerCase()) || PRODUCTS[idx % PRODUCTS.length];
      return {
        id: col.id,
        number: `0${idx + 1}`,
        title: col.name,
        subtitle: col.desc,
        tag: 'COLLECTION ARCHIVE',
        image: sampleProduct.image || sampleProduct.altImage,
        samplePiece: sampleProduct.name,
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
        tag: dest.isMaterialSource ? 'MATERIAL SOURCE' : 'DESIGN INSPIRATION',
        image: dest.pairs[0].jewelryImage || dest.heroImage,
        samplePiece: dest.pairs[0].title,
        count: '3 BENCH CREATIONS',
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
    <section id="index" className="py-16 lg:py-24 bg-[#FAF9F5] dark:bg-[#121110] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Top Heading Bar */}
        <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4 pb-8 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.22em] text-[#A88B58] font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>THE THREE-WAY STUDIO TAXONOMY</span>
            </div>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-1">
              Explore 3 Ways
            </h2>
            <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] mt-1">
              Browse by Product Category, by Collection, or by Country of Travel Inspiration
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body max-w-lg lg:text-right leading-relaxed">
            Every piece in the studio is characterized in three ways: its anatomical product type, its thematic collection, and its country of material harvest or design inspiration.
          </p>
        </div>

        {/* 3 Taxonomy Dimension Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-[#EBE8DF] dark:bg-[#1B1A18] border border-[#111111]/10 dark:border-white/10 rounded-sm">
          <button
            onClick={() => { setActiveTab('products'); setActiveItemIndex(0); }}
            className={`text-xs font-editorial-mono uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-2 rounded-2xs ${
              activeTab === 'products'
                ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                : 'text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>01 / BY PRODUCT TYPE (5)</span>
          </button>

          <button
            onClick={() => { setActiveTab('collections'); setActiveItemIndex(0); }}
            className={`text-xs font-editorial-mono uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-2 rounded-2xs ${
              activeTab === 'collections'
                ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                : 'text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / BY COLLECTION (5)</span>
          </button>

          <button
            onClick={() => { setActiveTab('travel'); setActiveItemIndex(0); }}
            className={`text-xs font-editorial-mono uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-2 rounded-2xs ${
              activeTab === 'travel'
                ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                : 'text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>03 / BY TRAVEL INSPIRATION (8 COUNTRIES)</span>
          </button>
        </div>

        {/* List Layout with Parallel Image Preview on the Right */}
        <div className="mt-8 grid grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Interactive List Rows */}
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            {currentList.map((item, idx) => {
              const isActive = activeItemIndex === idx;

              return (
                <div
                  key={item.id}
                  data-cursor="explore"
                  data-cursor-text={item.title.toUpperCase()}
                  onMouseEnter={() => setActiveItemIndex(idx)}
                  onClick={() => handleRowClick(item)}
                  className={`group relative py-4 sm:py-5 px-3 sm:px-4 -mx-3 sm:-mx-4 border-b border-[#111111]/12 dark:border-white/10 flex items-center justify-between cursor-pointer transition-all duration-300 rounded-xs ${
                    isActive 
                      ? 'bg-[#F2EFE8] dark:bg-[#1A1917] opacity-100 shadow-xs border-[#A88B58]/40' 
                      : 'opacity-60 hover:opacity-100 hover:bg-[#F2EFE8]/50 dark:hover:bg-[#1A1917]/50'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1 mr-4">
                    <span className={`font-editorial-mono text-xs sm:text-sm font-semibold transition-colors ${
                      isActive ? 'text-[#A88B58]' : 'text-[#73716B] dark:text-[#9E9A90] group-hover:text-[#A88B58]'
                    }`}>
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-display-grotesk text-lg sm:text-2xl font-bold tracking-tight transition-all duration-300 ${
                          isActive ? 'text-[#111111] dark:text-[#FAF9F5] translate-x-1.5' : 'text-[#111111] dark:text-[#FAF9F5] group-hover:translate-x-1'
                        }`}>
                          {item.title}
                        </h3>
                        <span className="text-[8px] font-editorial-mono uppercase px-1.5 py-0.5 bg-black/5 dark:bg-white/10 text-[#73716B] dark:text-[#9E9A90]">
                          {item.tag}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90] mt-0.5 font-editorial-body line-clamp-1 transition-all duration-300 ${
                        isActive ? 'text-[#111111] dark:text-[#D4D0C7] translate-x-1.5' : ''
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:inline font-editorial-mono text-[10px] uppercase tracking-[0.16em] text-[#8A867E] dark:text-[#9E9A90]">
                      {item.count}
                    </span>
                    <div className={`p-2.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] translate-x-1 shadow-[0_0_15px_rgba(168,139,88,0.25)]' 
                        : 'bg-transparent text-[#111111] dark:text-[#FAF9F5] group-hover:bg-[#111111]/10 dark:group-hover:bg-white/10'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Parallel Photo Preview */}
          <div className="col-span-12 lg:col-span-5 sticky top-24">
            <div 
              onClick={() => handleRowClick(activeItem)}
              className="relative aspect-[4/3] bg-[#F0EEE6] dark:bg-[#181715] overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-2.5 group/preview cursor-pointer transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-[0_20px_45px_rgba(168,139,88,0.1)]"
            >
              {/* Hairline Exhibition Corner Brackets */}
              <div className="absolute inset-3 pointer-events-none opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 z-10">
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A88B58]"></span>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#A88B58]"></span>
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#A88B58]"></span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#A88B58]"></span>
              </div>

              <div className="relative w-full h-full overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F]">
                <img
                  key={activeItem.image}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover filter contrast-[1.04] transition-all duration-700 ease-out transform scale-100 group-hover/preview:scale-105"
                />

                <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between text-[#FAF9F5] font-editorial-mono text-[10px]">
                  <div>
                    <span className="text-[8px] block text-[#C2BCAB] uppercase tracking-widest">
                      {activeItem.tag} · {activeItem.number}
                    </span>
                    <span className="font-semibold text-xs font-sans tracking-wide">
                      {activeItem.title}
                    </span>
                  </div>
                  <span className="text-[9px] text-[#DDD8CB] max-w-[170px] text-right truncate">
                    {activeItem.samplePiece}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between font-editorial-mono text-[9px] text-[#8A867E] dark:text-[#9E9A90]">
              <span>[TAXONOMY BROWSER]</span>
              <span className="text-[#A88B58] uppercase font-semibold">CLICK TO JUMP TO ARCHIVE →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

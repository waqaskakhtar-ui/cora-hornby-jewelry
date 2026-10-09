import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/coraData';

export default function CollectionsHubPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">CURATED COLLECTIONS</span>
        </div>

        {/* Section Header */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 space-y-4">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A88B58]" />
            <span>THE 5 ARTISTIC LINES · CAPE ELIZABETH STUDIO ARCHIVE</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
            Curated Collections
          </h1>

          <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] max-w-2xl leading-relaxed">
            Five signature series hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals.
          </p>
        </div>

        {/* 5 Collections Asymmetrical Showcase */}
        <div className="mt-14 space-y-16 lg:space-y-24">
          {COLLECTIONS.map((col, idx) => {
            // Find sample products for this collection
            const collectionProducts = PRODUCTS.filter(p => p.collection && p.collection.toLowerCase() === col.name.toLowerCase());
            const heroProduct = collectionProducts[0] || PRODUCTS[idx % PRODUCTS.length];
            const secondaryProduct = collectionProducts[1] || PRODUCTS[(idx + 1) % PRODUCTS.length];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={col.id}
                className="grid grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#111111]/8 dark:border-white/10 pb-16"
              >
                {/* Visual Side (Asymmetrical Dual Image Overlap) */}
                <div className={`col-span-12 lg:col-span-7 relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    
                    {/* Primary Large Image */}
                    <div className="col-span-8 aspect-[4/5] bg-[#ECE8DF] dark:bg-[#161514] overflow-hidden reveal-clip shadow-md group">
                      <Link to={`/collections/${col.slug}`}>
                        <img
                          src={heroProduct.image}
                          alt={heroProduct.name}
                          className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                        />
                      </Link>
                    </div>

                    {/* Secondary Overlapping Image */}
                    <div className="col-span-4 aspect-[3/4] bg-[#E0DDD5] dark:bg-[#1A1917] overflow-hidden shadow-lg mt-12 -ml-6 relative z-10 group">
                      <Link to={`/collections/${col.slug}`}>
                        <img
                          src={secondaryProduct.image}
                          alt={secondaryProduct.name}
                          className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                        />
                      </Link>
                    </div>

                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 bg-[#111111]/90 text-[#FAF9F5] px-2.5 py-1 font-editorial-micro">
                    SERIES 0{idx + 1}
                  </div>
                </div>

                {/* Narrative Side with Negative Margined Text Block */}
                <div className={`col-span-12 lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-3">
                    <span className="font-editorial-micro text-[#A88B58]">
                      COLLECTION LINE 0{idx + 1}
                    </span>

                    <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
                      {col.name}
                    </h2>

                    <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
                      {col.desc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="p-4 bg-[#F2ECE1] dark:bg-[#141312] border-l-2 border-[#A88B58] font-editorial-mono text-xs space-y-1">
                    <div className="flex items-center justify-between text-[#73716B] dark:text-[#9E9A90]">
                      <span>DESIGN CATALOG COUNT</span>
                      <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">{col.count} DESIGNS</span>
                    </div>
                    <div className="flex items-center justify-between text-[#73716B] dark:text-[#9E9A90]">
                      <span>PRODUCTION BENCH</span>
                      <span className="text-[#A88B58]">CAPE ELIZABETH, ME</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      to={`/collections/${col.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111] transition-all shadow-sm"
                    >
                      <span>VIEW {col.name.toUpperCase()} GALLERY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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

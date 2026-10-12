import React from 'react';
import { ArrowLeft, Box, Truck, ShieldCheck, CheckCircle2, Gift, RefreshCw } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function PackagingGuaranteesPage({ onBack, onExploreShop }) {
  const { packaging, shipping, guarantees } = STUDIO_ASSURANCES;

  return (
    <div className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-28 pb-24 px-6 sm:px-10 lg:px-14 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex items-center justify-between pb-8 border-b border-[#111111]/10 dark:border-white/10 mb-10">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO JOURNAL</span>
          </button>

          <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#A88B58] font-semibold">
            COLLECTOR ASSURANCES
          </span>
        </div>

        {/* Monumental Headline */}
        <div className="mb-14">
          <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#8A867E] dark:text-[#9E9A90] block">
            CONFIDENCE IN ARTISAN CRAFT
          </span>
          <h1 className="text-fluid-headline font-display-grotesk font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] mt-2">
            PACKAGING, SHIPPING & GUARANTEES
          </h1>
          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-2xl mt-3 leading-relaxed">
            Every piece is created with love at our Cape Elizabeth, Maine studio and arrives ready for gifting, lifetime keeping, and total peace of mind.
          </p>
        </div>

        {/* 3 Pillars In-Depth Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Packaging Pillar */}
          <div className="bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-editorial-mono uppercase tracking-widest text-[#A88B58] block">01 / PRESENTATION</span>
                <h2 className="font-display-grotesk text-2xl font-bold uppercase text-[#111111] dark:text-[#FAF9F5] mt-1">{packaging.title}</h2>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block">{packaging.subtitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">{packaging.description}</p>

              <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10 space-y-2.5 font-editorial-mono text-xs">
                {packaging.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[#3D3A36] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>DEBOSSED MATTE BOX</span>
              <span className="text-[#A88B58] font-bold">100% GIFT-READY</span>
            </div>
          </div>

          {/* Shipping Pillar */}
          <div className="bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-editorial-mono uppercase tracking-widest text-[#A88B58] block">02 / FULFILLMENT</span>
                <h2 className="font-display-grotesk text-2xl font-bold uppercase text-[#111111] dark:text-[#FAF9F5] mt-1">{shipping.title}</h2>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block">{shipping.subtitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">{shipping.description}</p>

              <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10 space-y-2.5 font-editorial-mono text-xs">
                {shipping.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[#3D3A36] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>MAINE DIRECT DISPATCH</span>
              <span className="text-[#A88B58] font-bold">INSURED TRANSIT</span>
            </div>
          </div>

          {/* Guarantees Pillar */}
          <div className="bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-editorial-mono uppercase tracking-widest text-[#A88B58] block">03 / PEACE OF MIND</span>
                <h2 className="font-display-grotesk text-2xl font-bold uppercase text-[#111111] dark:text-[#FAF9F5] mt-1">{guarantees.title}</h2>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block">{guarantees.subtitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">{guarantees.description}</p>

              <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10 space-y-2.5 font-editorial-mono text-xs">
                {guarantees.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[#3D3A36] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>30-DAY SATISFACTION</span>
              <span className="text-[#A88B58] font-bold">100% MONEY BACK</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onExploreShop}
            className="px-10 py-5 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111] transition-all shadow-xl"
          >
            DISCOVER THE STUDIO COLLECTION →
          </button>
        </div>

      </div>
    </div>
  );
}

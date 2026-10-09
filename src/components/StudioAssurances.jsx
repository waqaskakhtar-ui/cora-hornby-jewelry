import React from 'react';
import { Package, Truck, ShieldCheck, CheckCircle2, Gift, RefreshCw } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function StudioAssurances() {
  const { packaging, shipping, guarantees } = STUDIO_ASSURANCES;

  return (
    <section id="assurances" className="py-16 lg:py-24 bg-[#FAF9F5] dark:bg-[#121110] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="space-y-3 pb-8 border-b border-[#111111]/10 dark:border-white/10 max-w-3xl">
          <div className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#A88B58] font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A88B58]" />
            <span>STUDIO ASSURANCES & COLLECTOR CARE</span>
          </div>

          <h2 className="font-display-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
            Packaging, Shipping & Guarantees
          </h2>

          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body leading-relaxed">
            Every piece leaves our Cape Elizabeth, Maine studio prepared for a lifetime of wear. From our custom logo gift boxes to guaranteed USPS insured transit and full money-back returns.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Packaging */}
          <div className="bg-[#F2EFE8] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>

              <div>
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#A88B58] block">
                  01 / PRESENTATION
                </span>
                <h3 className="font-display-grotesk text-2xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-0.5">
                  {packaging.title}
                </h3>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block mt-1">
                  {packaging.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                {packaging.description}
              </p>

              <div className="pt-2 space-y-2 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-xs">
                {packaging.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-[#4A4742] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>CUSTOM LOGO BOX</span>
              <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">GIFT-READY</span>
            </div>
          </div>

          {/* Pillar 2: Shipping */}
          <div className="bg-[#F2EFE8] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>

              <div>
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#A88B58] block">
                  02 / FULFILLMENT
                </span>
                <h3 className="font-display-grotesk text-2xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-0.5">
                  {shipping.title}
                </h3>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block mt-1">
                  {shipping.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                {shipping.description}
              </p>

              <div className="pt-2 space-y-2 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-xs">
                {shipping.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-[#4A4742] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>USPS PRIORITY DISPATCH</span>
              <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">1-2 DAYS BENCH OUT</span>
            </div>
          </div>

          {/* Pillar 3: Guarantees */}
          <div className="bg-[#F2EFE8] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#A88B58]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>

              <div>
                <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#A88B58] block">
                  03 / PEACE OF MIND
                </span>
                <h3 className="font-display-grotesk text-2xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-0.5">
                  {guarantees.title}
                </h3>
                <span className="text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90] block mt-1">
                  {guarantees.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                {guarantees.description}
              </p>

              <div className="pt-2 space-y-2 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-xs">
                {guarantees.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-[#4A4742] dark:text-[#D4D0C7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#8A867E] dark:text-[#7E7A70] flex items-center justify-between">
              <span>30-DAY MONEY BACK</span>
              <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">100% ASSURANCE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

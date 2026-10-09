import React from 'react';
import { Package, Truck, ShieldCheck, CheckCircle2, Gift, RefreshCw, Sparkles } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function StudioAssurances() {
  const { packaging, shipping, guarantees } = STUDIO_ASSURANCES;

  const pillars = [
    {
      number: '01',
      tag: 'PACKAGING',
      icon: Gift,
      title: packaging.title,
      subtitle: packaging.subtitle,
      description: packaging.description,
      features: packaging.features
    },
    {
      number: '02',
      tag: 'DISPATCH',
      icon: Truck,
      title: shipping.title,
      subtitle: shipping.subtitle,
      description: shipping.description,
      features: shipping.features
    },
    {
      number: '03',
      tag: 'PEACE OF MIND',
      icon: RefreshCw,
      title: guarantees.title,
      subtitle: guarantees.subtitle,
      description: guarantees.description,
      features: guarantees.features
    }
  ];

  return (
    <section 
      id="assurances" 
      className="py-20 lg:py-32 bg-[#F5F2EA] dark:bg-[#080706] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl space-y-3 pb-12 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STUDIO ASSURANCES & COLLECTOR CARE</span>
          </div>

          <h2 className="font-editorial-luxury text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-none">
            Care Beyond the Bench
          </h2>

          <p className="font-editorial-serif italic text-base sm:text-xl text-[#78746B] dark:text-[#C5A869]">
            From our debossed logo gift boxes to fully insured USPS Priority shipping and a 100% money-back guarantee.
          </p>
        </div>

        {/* ARCHITECTURAL TRIPTYCH: Generous Whitespace, Floating Columns */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.number}
                className="space-y-6 group"
              >
                {/* Minimal Top Identification */}
                <div className="flex items-center justify-between font-editorial-mono text-[10px] text-[#8F8A80] dark:text-[#888379] uppercase tracking-widest pb-3 border-b border-[#12100E]/8 dark:border-white/10">
                  <span className="text-[#C5A869] font-bold text-sm font-editorial-luxury">{p.number}</span>
                  <span>{p.tag}</span>
                </div>

                {/* Pillar Typography */}
                <div className="space-y-1">
                  <h3 className="font-editorial-luxury text-2xl sm:text-3xl font-normal text-[#12100E] dark:text-[#FAF8F2] group-hover:text-[#C5A869] transition-colors">
                    {p.title}
                  </h3>
                  <div className="font-editorial-mono text-[10px] text-[#8F8A80] dark:text-[#888379] uppercase tracking-wider">
                    {p.subtitle}
                  </div>
                </div>

                <p className="font-editorial-body text-xs sm:text-sm text-[#5E5A54] dark:text-[#B5B0A4] leading-relaxed">
                  {p.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2 font-editorial-mono text-[11px] text-[#78746B] dark:text-[#A8A49C]">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#C5A869] mt-0.5">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Provenance Sign-Off */}
        <div className="mt-16 pt-8 border-t border-[#12100E]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-editorial-mono text-[10px] text-[#8F8A80] dark:text-[#888379] uppercase tracking-widest">
          <div>CAPE ELIZABETH STUDIO · MAINE COAST</div>
          <div className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">100% MONEY-BACK PROMISE ON ALL COLLECTOR ACQUISITIONS</div>
        </div>

      </div>
    </section>
  );
}

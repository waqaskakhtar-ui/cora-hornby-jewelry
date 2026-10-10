import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Truck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function ShippingPackagingPage() {
  const { packaging, shipping } = STUDIO_ASSURANCES;

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <Gift className="w-4 h-4" />
            <span>COLLECTOR CARE · PRESENTATION & DISPATCH</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Packaging and Shipping
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-1">
            Every piece is an edition of one. We package each treasure in our custom rigid black gift box debossed with the signature Cora Hornby logo, shipped directly from our Maine studio bench.
          </p>
        </div>

        {/* 2-Pillar Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Pillar 1: Packaging & Logo Gift Box */}
          <div className="bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-8 sm:p-12 space-y-6">
            <div className="w-12 h-12 bg-[#cc5500] dark:bg-[#2c3480] text-white flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>

            <div>
              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold block">
                ATELIER UNBOXING EXPERIENCE
              </span>
              <h2 className="font-display-serif text-3xl font-bold text-[#4e342e] dark:text-white mt-1">
                {packaging.title}
              </h2>
              <span className="text-xs font-editorial-mono text-[#4e342e]/60 dark:text-white/60 block mt-1">
                {packaging.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
              {packaging.description}
            </p>

            {/* Visual Box Rendering Showcase */}
            <div className="p-4 bg-[#f8f4e7] dark:bg-black border border-[#4e342e]/15 dark:border-white/15 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/3] bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/packaging-box.png" 
                    alt="Custom Rigid Debossed Logo Gift Box with Ribbon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/packaging-pouch.png" 
                    alt="Archival Cotton Drawstring Pouch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center font-editorial-mono text-[10px] uppercase tracking-wider text-[#4e342e]/70 dark:text-white/70">
                Signature Packaging Included With Every Piece
              </div>
            </div>

            <div className="space-y-3 pt-2 font-editorial-mono text-xs">
              {packaging.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[#4e342e] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Shipping & Fulfillment */}
          <div className="bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-8 sm:p-12 space-y-6">
            <div className="w-12 h-12 bg-[#cc5500] dark:bg-[#2c3480] text-white flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>

            <div>
              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold block">
                STUDIO DISPATCH FROM CAPE ELIZABETH
              </span>
              <h2 className="font-display-serif text-3xl font-bold text-[#4e342e] dark:text-white mt-1">
                {shipping.title}
              </h2>
              <span className="text-xs font-editorial-mono text-[#4e342e]/60 dark:text-white/60 block mt-1">
                {shipping.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
              {shipping.description}
            </p>

            <div className="p-6 bg-[#f8f4e7] dark:bg-black border border-[#4e342e]/15 dark:border-white/15 space-y-3 font-editorial-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#4e342e]/10 dark:border-white/10">
                <span className="opacity-70">DOMESTIC TRANSIT:</span>
                <span className="font-bold text-[#cc5500] dark:text-[#2c3480]">COMPLIMENTARY OVER $100</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#4e342e]/10 dark:border-white/10">
                <span className="opacity-70">DISPATCH TIMEFRAME:</span>
                <span className="font-bold text-[#4e342e] dark:text-white">1–2 BUSINESS DAYS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="opacity-70">CARRIER:</span>
                <span className="font-bold text-[#4e342e] dark:text-white">USPS PRIORITY INSURED</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 font-editorial-mono text-xs">
              {shipping.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[#4e342e] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

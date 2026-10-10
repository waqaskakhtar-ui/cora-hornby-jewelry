import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function GuaranteesPage() {
  const { guarantees } = STUDIO_ASSURANCES;

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>COLLECTOR PEACE OF MIND · THE STUDIO COMMITMENT</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Guarantees & Policies
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-1">
            We believe collecting handcrafted bench jewelry should be completely joyful and confident. Every piece is guaranteed with a full 30-day money-back promise and lifetime craftsmanship backing.
          </p>
        </div>

        {/* 3 Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Guarantee 1: 100% Money-Back Guarantee */}
          <div className="p-8 sm:p-10 bg-[#4e342e]/5 dark:bg-white/5 border-2 border-[#cc5500] dark:border-[#2c3480] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#cc5500] dark:bg-[#2c3480] text-white flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>

              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold block">
                30-DAY RISK-FREE RETURN
              </span>

              <h2 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
                100% Money-Back Guarantee
              </h2>

              <p className="text-sm text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
                If your handcrafted jewelry piece does not completely enchant you upon arrival, simply contact our studio within 30 days of receipt for an immediate, hassle-free 100% refund or exchange.
              </p>
            </div>

            <div className="pt-4 border-t border-[#4e342e]/15 dark:border-white/15 font-editorial-mono text-xs text-[#cc5500] dark:text-[#2c3480] font-bold">
              ✦ FULL REFUND TO ORIGINAL PAYMENT
            </div>
          </div>

          {/* Guarantee 2: Sizing & Cord Adjustments */}
          <div className="p-8 sm:p-10 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4e342e] dark:bg-white text-white dark:text-black flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#4e342e]/70 dark:text-white/70 font-bold block">
                BENCH CUSTOMIZATION
              </span>

              <h2 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
                Free Length & Cord Adjustments
              </h2>

              <p className="text-sm text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
                Necklace too long or bracelet too snug? Because every piece is assembled by hand in Maine, we gladly provide complimentary cord, chain, or clasp adjustments to ensure a flawless custom fit.
              </p>
            </div>

            <div className="pt-4 border-t border-[#4e342e]/15 dark:border-white/15 font-editorial-mono text-xs text-[#4e342e] dark:text-white font-bold">
              ✦ COMPLIMENTARY BENCH TAILORING
            </div>
          </div>

          {/* Guarantee 3: Ethical Provenance */}
          <div className="p-8 sm:p-10 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4e342e] dark:bg-white text-white dark:text-black flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#4e342e]/70 dark:text-white/70 font-bold block">
                MATERIAL INTEGRITY
              </span>

              <h2 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
                Ethical Sourcing Guarantee
              </h2>

              <p className="text-sm text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
                We guarantee that 100% of our natural gemstones (jade, citrine, amethyst, jasper, turquoise) are ethically sourced directly from artisan miners and family lapidaries worldwide without exploitative intermediaries.
              </p>
            </div>

            <div className="pt-4 border-t border-[#4e342e]/15 dark:border-white/15 font-editorial-mono text-xs text-[#4e342e] dark:text-white font-bold">
              ✦ 100% ETHICALLY MINED & UNTREATED
            </div>
          </div>

        </div>

        {/* Action Link to Shop */}
        <div className="p-8 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 font-editorial-mono text-xs">
          <div>
            <span className="font-bold text-[#4e342e] dark:text-white block uppercase">
              HAVE A SPECIFIC CUSTOM INQUIRY?
            </span>
            <span className="text-[#4e342e]/70 dark:text-white/70 text-[11px]">
              Call our Maine studio directly at 518 · 469 · 8981 or email us anytime.
            </span>
          </div>

          <Link
            to="/shop"
            className="px-6 py-3 bg-[#cc5500] dark:bg-[#2c3480] text-white font-bold uppercase tracking-wider hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>BROWSE ARCHIVE WITH CONFIDENCE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

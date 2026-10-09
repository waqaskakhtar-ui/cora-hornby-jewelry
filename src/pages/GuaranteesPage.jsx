import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function GuaranteesPage() {
  const { guarantees } = STUDIO_ASSURANCES;

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">STUDIO GUARANTEES</span>
        </div>

        {/* Section Header */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 space-y-4 max-w-4xl">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A88B58]" />
            <span>COLLECT WITH ABSOLUTE CONFIDENCE</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-tight">
            Guarantees & Studio Promise
          </h1>

          <p className="font-editorial-body text-base sm:text-lg text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
            Collecting handcrafted jewelry should be joyful, inspiring, and completely risk-free. Every piece backed by our 100% money-back guarantee.
          </p>
        </div>

        {/* 4 Pillars of Studio Assurance */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 1: 100% 30-Day Money-Back Guarantee */}
          <div className="p-8 sm:p-10 bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 space-y-5 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-editorial-micro text-[#A88B58]">
                01 / PEACE OF MIND
              </span>
              <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                100% 30-Day Money-Back Guarantee
              </h2>
            </div>

            <p className="font-editorial-body text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
              If any piece does not feel completely right in your hands, return it within 30 days of receipt in its original condition for a full 100% refund to your original payment method. No restocking fees or complicated hurdles.
            </p>

            <div className="pt-2 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] border-t border-[#111111]/8 dark:border-white/8">
              PREPAID DOMESTIC RETURN LABELS PROVIDED UPON REQUEST
            </div>
          </div>

          {/* Pillar 2: Complimentary Length & Sizing Adjustments */}
          <div className="p-8 sm:p-10 bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 space-y-5 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-editorial-micro text-[#A88B58]">
                02 / BESPOKE FIT
              </span>
              <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Free Length & Cord Sizing
              </h2>
            </div>

            <p className="font-editorial-body text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
              Because jewelry should drape naturally against your collarbone or wrist, Cora offers complimentary chain and leather cord length adjustments before or after your order ships.
            </p>

            <div className="pt-2 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] border-t border-[#111111]/8 dark:border-white/8">
              SIMPLY NOTE YOUR PREFERRED LENGTH AT CHECKOUT OR CONTACT THE BENCH
            </div>
          </div>

          {/* Pillar 3: Ethical Mineral Provenance */}
          <div className="p-8 sm:p-10 bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 space-y-5 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-editorial-micro text-[#A88B58]">
                03 / GEOLOGICAL INTEGRITY
              </span>
              <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Ethical Sourcing Guarantee
              </h2>
            </div>

            <p className="font-editorial-body text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
              100% of our minerals, quartz druzies, and semi-precious stones are ethically acquired through direct relationships with local lapidaries in Guatemala, Brazil, and Africa. Never synthetic, never lab-simulated.
            </p>

            <div className="pt-2 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] border-t border-[#111111]/8 dark:border-white/8">
              RAW & UNTREATED MINERAL HONESTY
            </div>
          </div>

          {/* Pillar 4: Lifetime Bench Craftsmanship Commitment */}
          <div className="p-8 sm:p-10 bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 space-y-5 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-editorial-micro text-[#A88B58]">
                04 / LIFELONG WEAR
              </span>
              <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Lifetime Bench Warranty
              </h2>
            </div>

            <p className="font-editorial-body text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
              Cora stands behind every weld, wire coil, and magnetic clasp for life. If a piece ever experiences a structural bench failure, send it back to Cape Elizabeth for complimentary repair or restoration.
            </p>

            <div className="pt-2 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90] border-t border-[#111111]/8 dark:border-white/8">
              JEWELRY THAT BECOMES PART OF YOUR LIFELONG STORY
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 bg-[#F5F3EC] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-editorial-micro text-[#A88B58]">
              READY TO DISCOVER?
            </span>
            <h3 className="font-editorial-heading text-2xl font-bold text-[#111111] dark:text-[#FAF9F5]">
              Explore the studio collection with complete peace of mind
            </h3>
          </div>

          <Link
            to="/shop"
            className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A88B58] transition-colors"
          >
            START BROWSING ARCHIVE →
          </Link>
        </div>

      </div>
    </div>
  );
}

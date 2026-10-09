import React from 'react';
import { MapPin, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function BrandStory() {
  return (
    <section 
      id="story" 
      className="py-20 lg:py-36 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Minimal Editorial Tag */}
        <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2 mb-6">
          <Compass className="w-3.5 h-3.5 text-[#C5A869]" />
          <span>ATELIER LEGACY · 25 YEARS OF MAINE BENCH CRAFT</span>
        </div>

        {/* MASSIVE OVERLAPPING HEADLINE */}
        <div className="relative z-10 max-w-6xl">
          <h2 className="font-editorial-luxury text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight text-[#12100E] dark:text-[#FAF8F2]">
            I Travel to Gather. <br />
            <span className="italic font-light text-[#78746B] dark:text-[#C5A869]">I return to compose.</span>
          </h2>
        </div>

        {/* ASYMMETRICAL STORY SPREAD */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Intimate Narrative & Credentials (Borderless) */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="font-editorial-mono text-[10px] uppercase text-[#C5A869] tracking-widest flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>CAPE ELIZABETH, MAINE STUDIO BENCH</span>
              </div>

              <p className="font-editorial-luxury text-2xl sm:text-3xl text-[#12100E] dark:text-[#FAF8F2] leading-snug">
                Hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals.
              </p>

              <p className="font-editorial-body text-xs sm:text-sm text-[#5E5A54] dark:text-[#B5B0A4] leading-relaxed">
                Her work embodies a lifelong journey of traveling the world for inspiration and materials. Some countries are direct sources of raw minerals—such as <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Guatemala for rare jade</strong>, and <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Brazil for amethyst and citrine</strong>. Others are timeless wells of design inspiration—such as ancient spirals and bronze armor in <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Greece</strong>, and Bauhaus architecture in <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Germany</strong>.
              </p>
            </div>

            {/* Atelier Credentials Pill Matrix */}
            <div className="grid grid-cols-2 gap-3 font-editorial-mono text-[10px] text-[#78746B] dark:text-[#A8A49C]">
              <div className="p-3 gloss-pill rounded-xs flex items-center gap-2">
                <span className="text-[#C5A869]">✦</span>
                <span>100% Bench Forged</span>
              </div>
              <div className="p-3 gloss-pill rounded-xs flex items-center gap-2">
                <span className="text-[#C5A869]">✦</span>
                <span>Maine Coast Studio</span>
              </div>
              <div className="p-3 gloss-pill rounded-xs flex items-center gap-2">
                <span className="text-[#C5A869]">✦</span>
                <span>Direct Mineral Sourcing</span>
              </div>
              <div className="p-3 gloss-pill rounded-xs flex items-center gap-2">
                <span className="text-[#C5A869]">✦</span>
                <span>Zero Duplicate Molds</span>
              </div>
            </div>

            {/* Handwritten Philosophy Fragment */}
            <div className="pl-6 border-l border-[#C5A869] space-y-2">
              <span className="font-editorial-mono text-[9px] uppercase tracking-widest text-[#8F8A80]">
                PHILOSOPHY OF HANDWORK
              </span>
              <p className="font-editorial-luxury italic text-xl sm:text-2xl text-[#12100E] dark:text-[#FAF8F2] leading-snug">
                “A piece of jewelry should not feel like an industrial reproduction. It should carry the human trace of the hand that forged it.”
              </p>
              <div className="font-editorial-mono text-[10px] text-[#C5A869]">— Cora Hornby</div>
            </div>
          </div>

          {/* Right Column: Hero Archival Image Overlapping Typography */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-[#F2EFE8] dark:bg-[#161412] overflow-hidden p-3 shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.8)] group cursor-pointer">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
                  alt="Cora Hornby jewelry worn on model"
                  className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 gloss-pill px-3 py-1 rounded-full font-editorial-mono text-[9px] uppercase tracking-widest text-[#12100E] dark:text-[#FAF8F2]">
                  MAINE COAST · ARCHIVE STYLING
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 font-editorial-mono text-[10px] text-[#78746B] dark:text-[#A8A49C]">
              <span>NO TWO MINERALS ARE IDENTICAL</span>
              <span className="text-[#C5A869]">ONE-OF-A-KIND CREATIONS ONLY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

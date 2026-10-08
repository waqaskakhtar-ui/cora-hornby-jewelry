import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#F7F5EF] dark:bg-[#0F0E0D] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Tag & Oversized Headline */}
        <div className="space-y-3">
          <div className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#8A867E] dark:text-[#9E9A90] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111111] dark:bg-[#FAF9F5]"></span>
            <span>ATELIER LEGACY · 25 YEARS OF MAINE BENCH CRAFT</span>
          </div>

          <h2 className="font-display-grotesk text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-[0.94] max-w-5xl">
            I TRAVEL TO GATHER. <br />
            <span className="font-editorial-serif font-normal italic text-[#5E5C57] dark:text-[#A88B58]">I return to compose.</span>
          </h2>
        </div>

        {/* Asymmetrical Story Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Intimate Narrative & Legacy Credentials */}
          <div className="col-span-12 lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="p-6 sm:p-8 bg-[#FAF9F5] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 shadow-xs space-y-5 transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-[0_12px_30px_rgba(168,139,88,0.08)] group/legacy">
              <div className="font-editorial-mono text-xs uppercase text-[#A88B58] tracking-widest flex items-center gap-2 group-hover/legacy:tracking-wider transition-all">
                <MapPin className="w-3.5 h-3.5" />
                <span>CAPE ELIZABETH, MAINE STUDIO</span>
              </div>

              <p className="text-base sm:text-lg text-[#111111] dark:text-[#FAF9F5] font-editorial-body leading-relaxed">
                Cora Hornby produces handcrafted jewelry designs in various media, including semi-precious stones, Austrian crystals, druzies, metals, leather, and beads.
              </p>

              <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                Designs are directly inspired by Cora's world travel—most recently to Peru, the Côte d'Azur, France, Italy, and Spain. Her materials are sourced directly from artisans across Turkey, Israel, China, Guatemala, Africa, Poland, and the United States.
              </p>

              {/* Atelier Credentials Matrix */}
              <div className="pt-4 border-t border-[#111111]/10 dark:border-white/10 grid grid-cols-2 gap-3 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
                <div className="flex items-center gap-1.5 group-hover/legacy:text-[#111111] dark:group-hover/legacy:text-[#FAF9F5] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462]" />
                  <span>100% Bench Forged</span>
                </div>
                <div className="flex items-center gap-1.5 group-hover/legacy:text-[#111111] dark:group-hover/legacy:text-[#FAF9F5] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462]" />
                  <span>Maine Coast Studio</span>
                </div>
                <div className="flex items-center gap-1.5 group-hover/legacy:text-[#111111] dark:group-hover/legacy:text-[#FAF9F5] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462]" />
                  <span>Ethical Mineral Direct</span>
                </div>
                <div className="flex items-center gap-1.5 group-hover/legacy:text-[#111111] dark:group-hover/legacy:text-[#FAF9F5] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B09462]" />
                  <span>No Mold Repetitions</span>
                </div>
              </div>
            </div>

            {/* Handwritten / Editorial Note Fragment */}
            <div className="pl-5 border-l-2 border-[#111111] dark:border-[#FAF9F5] space-y-1.5 hover:border-[#A88B58] transition-colors">
              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8A867E] dark:text-[#9E9A90]">
                PHILOSOPHY OF HANDWORK
              </span>
              <p className="font-editorial-serif italic text-lg sm:text-xl text-[#111111] dark:text-[#FAF9F5] leading-relaxed">
                “A piece of jewelry should not feel like an industrial reproduction. It should carry the human trace of the hand that forged it.”
              </p>
              <div className="font-editorial-mono text-xs sm:text-sm text-[#73716B] dark:text-[#9E9A90]">— Cora Hornby</div>
            </div>
          </div>

          {/* Right Column: Hero Archival Image & Statement */}
          <div className="col-span-12 lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div 
              data-cursor="view"
              data-cursor-text="ARCHIVE"
              className="relative aspect-[16/10] bg-[#ECEAE4] dark:bg-[#181715] overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] p-2.5 transition-all duration-500 hover:border-[#A88B58]/50 hover:shadow-[0_20px_45px_rgba(168,139,88,0.12)] group/photo cursor-pointer"
            >
              {/* Hairline Exhibition Corner Brackets */}
              <div className="absolute inset-3 pointer-events-none opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 z-10">
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A88B58]"></span>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#A88B58]"></span>
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#A88B58]"></span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#A88B58]"></span>
              </div>

              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
                  alt="Cora Hornby jewelry worn on model"
                  className="w-full h-full object-cover filter contrast-[1.04] group-hover/photo:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-3 right-3 bg-[#FAF9F5]/90 dark:bg-[#1A1917]/90 backdrop-blur-xs px-2.5 py-1 font-editorial-mono text-[9px] text-[#111111] dark:text-[#FAF9F5] border border-[#111111]/10 dark:border-white/10 shadow-xs">
                  MAINE COAST · ARCHIVE STYLING
                </div>
              </div>
            </div>

            {/* Second Statement */}
            <div className="space-y-2">
              <div className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#9E9A90]">
                [ONE OF A KIND HERITAGE]
              </div>
              <h3 className="font-display-grotesk text-2xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
                NO TWO MINERALS ARE IDENTICAL. <br />
                NO TWO PIECES CAN BE DUPLICATED.
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

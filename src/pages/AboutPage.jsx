import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">CORA'S STORY</span>
        </div>

        {/* Section Header */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 space-y-4 max-w-4xl">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#A88B58]" />
            <span>ATELIER PROFILE · 25 YEARS OF MAINE BENCH CRAFT</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-tight">
            I Travel to Gather. I Return to Compose.
          </h1>

          <p className="font-editorial-body text-base sm:text-lg text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
            The story of Cora Hornby Jewelry—from transatlantic geological expeditions to hand-worked cold metal benches on the rugged coast of Maine.
          </p>
        </div>

        {/* Asymmetrical Editorial Spread with Physical Image & Text Overlaps */}
        <div className="mt-14 grid grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Archival Photography with Negative Margin Overlaps */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="relative aspect-[4/5] bg-[#ECE8DF] dark:bg-[#151413] overflow-hidden reveal-clip shadow-xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
                alt="Cora Hornby Atelier Studio"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute top-4 left-4 bg-[#111111]/90 text-[#FAF9F5] px-3 py-1 font-editorial-micro">
                CAPE ELIZABETH STUDIO ARCHIVE
              </div>
            </div>

            {/* Overlapping Note Card */}
            <div className="p-6 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 shadow-md space-y-3 lg:-mt-16 lg:ml-8 relative z-20 max-w-md">
              <span className="font-editorial-micro text-[#A88B58]">
                BENCH PHILOSOPHY
              </span>
              <p className="font-editorial-heading italic text-base sm:text-lg text-[#111111] dark:text-[#FAF9F5] leading-relaxed">
                “A piece of jewelry should not feel like an industrial reproduction. It should carry the human trace of the hand that forged it.”
              </p>
              <div className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">— Cora Hornby, Studio Founder</div>
            </div>
          </div>

          {/* Right: Narrative Story Text */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>CAPE ELIZABETH, MAINE BENCH</span>
              </div>

              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Handcrafted on the Coast of Maine
              </h2>

              <p className="font-editorial-body text-sm sm:text-base text-[#4A4742] dark:text-[#D4D0C7] leading-relaxed">
                Cora Hornby produces handcrafted jewelry designs from her coastal Maine studio using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals.
              </p>

              <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
                Her creative life is defined by decades of world travel. Rather than relying on commercial component catalogs, Cora physically travels to the origins of the materials and ideas. Some countries are direct sources of raw minerals—such as Guatemala for rare mottled jade and Brazil for crystalline amethyst and golden citrine. Other countries are endless sources of design inspiration—such as ancient spirals and coiled armor in Greece, and the Bauhaus geometry of Germany.
              </p>
            </div>

            {/* Atelier Benchmark Standards */}
            <div className="p-6 bg-[#F5F3EC] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 space-y-4">
              <span className="font-editorial-micro text-[#111111] dark:text-[#FAF9F5] font-semibold block">
                OUR FOUR BENCH PRINCIPLES:
              </span>

              <div className="space-y-3 font-editorial-mono text-xs">
                <div className="flex items-start gap-3 text-[#4A4742] dark:text-[#D4D0C7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                  <span><strong>No Duplicate Molds:</strong> Every piece is individually cold-forged and wire-worked without industrial wax duplication.</span>
                </div>

                <div className="flex items-start gap-3 text-[#4A4742] dark:text-[#D4D0C7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Mineral Sourcing:</strong> Stones are hand-selected from lapidaries across Guatemala, Brazil, and Africa.</span>
                </div>

                <div className="flex items-start gap-3 text-[#4A4742] dark:text-[#D4D0C7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                  <span><strong>Living Metal Finishes:</strong> Unlacquered brass, copper, and silver develop an organic patina through contact with the wearer's skin.</span>
                </div>

                <div className="flex items-start gap-3 text-[#4A4742] dark:text-[#D4D0C7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0 mt-0.5" />
                  <span><strong>Maine Dispatch:</strong> Every order is hand-inspected, boxed, and fulfilled directly from Cape Elizabeth.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/travel"
                className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A88B58] transition-colors"
              >
                EXPLORE TRAVEL INSPIRATIONS →
              </Link>

              <Link
                to="/packaging-and-shipping"
                className="px-6 py-3 border border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-[#FAF9F5] font-editorial-mono text-xs uppercase tracking-widest hover:border-[#A88B58] transition-colors"
              >
                PACKAGING & DISPATCH
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

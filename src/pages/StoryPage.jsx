import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function StoryPage() {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <MapPin className="w-4 h-4" />
            <span>CAPE ELIZABETH, MAINE BENCH STUDIO · EST. 2018</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Cora’s Story
          </h1>

          <p className="font-editorial-serif italic text-2xl sm:text-3xl text-[#cc5500] dark:text-[#2c3480] leading-snug">
            “A piece of jewelry should not feel like an industrial reproduction. It should carry the human trace of the hand that forged it.”
          </p>
        </div>

        {/* Story Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Intimate Narrative */}
          <div className="lg:col-span-7 space-y-8 font-editorial-body text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 leading-relaxed">
            <p className="text-xl sm:text-2xl font-display-serif font-bold text-[#4e342e] dark:text-white leading-normal">
              Cora Hornby produces hand-crafted jewelry designs on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals.
            </p>

            <p>
              Her work embodies a lifelong journey of traveling the world for inspiration and materials. Some countries are direct sources of raw minerals—such as Guatemala for rare mountain jade, and Brazil for deep amethyst and golden citrine. Others are timeless wells of design inspiration—such as ancient Aegean spirals and bronze armor in Greece, and functional Bauhaus geometry in Germany.
            </p>

            <p>
              Every single piece is forged individually on an antique iron anvil at her Cape Elizabeth studio. Unlike commercial fashion brands that cast thousands of replicas from synthetic molds, Cora creates editions of one. Stones are mounted untreated in their organic crystalline state, preserving the natural fire formed deep in the earth millions of years ago.
            </p>

            {/* Bench Guarantees Matrix */}
            <div className="pt-6 border-t border-[#4e342e]/15 dark:border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 font-editorial-mono text-xs">
              <div className="flex items-center gap-2 text-[#4e342e] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                <span>100% Hand-Crafted in Maine</span>
              </div>
              <div className="flex items-center gap-2 text-[#4e342e] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                <span>No Duplicate Mold Castings</span>
              </div>
              <div className="flex items-center gap-2 text-[#4e342e] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                <span>Ethically Sourced Minerals</span>
              </div>
              <div className="flex items-center gap-2 text-[#4e342e] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-4">
              <Link
                to="/travels"
                className="px-6 py-3.5 bg-[#cc5500] dark:bg-[#2c3480] text-white font-editorial-mono text-xs uppercase tracking-wider font-bold hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>EXPLORE TRAVEL LOOKBOOKS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shipping"
                className="px-6 py-3.5 border border-[#4e342e]/25 dark:border-white/25 font-editorial-mono text-xs uppercase tracking-wider text-[#4e342e] dark:text-white hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-colors"
              >
                PACKAGING DETAILS
              </Link>
            </div>
          </div>

          {/* Right Column: Atelier Portrait & Bench Photographs */}
          <div className="lg:col-span-5 space-y-6">
            <div data-stagger="image" className="aspect-[4/5] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden border border-[#4e342e]/15 dark:border-white/15 p-3 shadow-xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
                alt="Cora Hornby studio styling"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>

            <div className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 font-editorial-mono text-xs space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                STUDIO DIRECTORY
              </div>
              <div className="text-[#4e342e] dark:text-white font-bold">
                Cora Hornby Jewelry Atelier
              </div>
              <div className="text-[#4e342e]/70 dark:text-white/70">
                Cape Elizabeth, Maine 04107 · United States
              </div>
              <div className="text-[#4e342e]/70 dark:text-white/70">
                Email: {BRAND_INFO.contact.email}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

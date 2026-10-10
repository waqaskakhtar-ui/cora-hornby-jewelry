import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { TRAVEL_DESTINATIONS } from '../data/coraData';

export default function TravelsHubPage() {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <Compass className="w-4 h-4" />
            <span>THE TRAVEL INSPIRATION ARCHIVE · 8 COUNTRIES</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Traveling the World for Inspiration and Materials
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-2">
            Some countries are the sources of raw materials—such as <strong className="text-[#cc5500] dark:text-[#2c3480]">Guatemala for mountain jade</strong> and <strong className="text-[#cc5500] dark:text-[#2c3480]">Brazil for amethyst and citrine</strong>. Others ignite the design vocabulary—such as ancient spirals in <strong className="text-[#cc5500] dark:text-[#2c3480]">Greece</strong> and Bauhaus geometry in <strong className="text-[#cc5500] dark:text-[#2c3480]">Germany</strong>.
          </p>
        </div>

        {/* 8 Countries Editorial Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 editorial-hover-parent">
          {TRAVEL_DESTINATIONS.map((dest, idx) => (
            <Link
              key={dest.id}
              to={`/travels/${dest.id}`}
              className="bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-6 flex flex-col justify-between editorial-hover-card group relative"
            >
              <div className="space-y-4">
                {/* Hero Photograph with Clip Inset Reveal */}
                <div data-stagger="image" className="aspect-[4/3] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                  <img
                    src={dest.heroImage}
                    alt={dest.heroAlt}
                    className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#f8f4e7]/90 dark:bg-[#000000]/90 px-2 py-0.5 font-editorial-mono text-[8px] uppercase tracking-wider text-[#4e342e] dark:text-white font-bold">
                    0{idx + 1}
                  </div>
                  <div className={`absolute top-2 right-2 px-2 py-0.5 text-[8px] font-editorial-mono uppercase font-bold text-white ${
                    dest.isMaterialSource ? 'bg-[#cc5500]' : 'bg-[#2c3480]'
                  }`}>
                    {dest.isMaterialSource ? 'MATERIAL SOURCE' : 'DESIGN INSPIRATION'}
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors">
                    {dest.country}
                  </h2>
                  <p className="font-editorial-serif italic text-xs text-[#4e342e]/70 dark:text-white/70 line-clamp-1">
                    "{dest.tagline}"
                  </p>
                </div>

                {/* 3 Pieces Thumbnails Rail */}
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10">
                  <span className="text-[9px] font-editorial-mono uppercase tracking-wider text-[#4e342e]/60 dark:text-white/60 block mb-2">
                    3 CURATED BENCH PIECES:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {dest.pairs.map((p) => (
                      <div key={p.id} className="aspect-square bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden border border-[#4e342e]/10 dark:border-white/10" title={p.title}>
                        <img src={p.jewelryImage} alt={p.title} className="w-full h-full object-cover filter contrast-[1.05]" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#4e342e]/80 dark:text-white/80 font-editorial-body line-clamp-2 pt-1">
                  {dest.sourceNotes}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs font-bold text-[#cc5500] dark:text-[#2c3480]">
                <span>VIEW LOOKBOOK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

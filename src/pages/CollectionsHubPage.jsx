import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/coraData';

export default function CollectionsHubPage() {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>THE 5 SIGNATURE COLLECTIONS · FLOATING MINIMALIST ARCHIVE</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Curated Collections
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-2">
            Five thematic lineages forged at the Cape Elizabeth bench. From architectural Bauhaus Geometrics and iridescent Pearls to cold-hammered Mixed Metals, solar Mayan Sol, and dark mineral Black is Back.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.id}
                to={`/collections/${c.slug}`}
                className="px-4 py-2 border border-[#4e342e]/20 dark:border-white/20 font-editorial-mono text-xs uppercase tracking-wider text-[#4e342e] dark:text-white hover:border-[#cc5500] dark:hover:border-[#2c3480] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
              >
                {c.name} ({c.count})
              </Link>
            ))}
          </div>
        </div>

        {/* 5 Floating Minimalist Lines Showcase */}
        <div className="space-y-24">
          {COLLECTIONS.map((col, idx) => {
            const collectionProducts = PRODUCTS.filter((p) =>
              p.collection && p.collection.toLowerCase() === col.name.toLowerCase()
            ).slice(0, 3);

            return (
              <div key={col.id} className="space-y-8 border-b border-[#4e342e]/10 dark:border-white/10 pb-16">
                
                {/* Collection Title & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                      COLLECTION 0{idx + 1}
                    </span>
                    <h2 className="font-display-serif text-3xl sm:text-5xl font-bold text-[#4e342e] dark:text-white">
                      {col.name}
                    </h2>
                    <p className="font-editorial-body text-sm sm:text-base text-[#4e342e]/80 dark:text-white/80 max-w-xl">
                      {col.desc}
                    </p>
                  </div>

                  <Link
                    to={`/collections/${col.slug}`}
                    className="font-editorial-mono text-xs uppercase font-bold text-[#cc5500] dark:text-[#2c3480] flex items-center gap-1.5 hover:underline"
                  >
                    <span>ENTER {col.name.toUpperCase()} GRID</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Floating Minimalist Pieces: No visible cards/boxes, massive padding */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 editorial-hover-parent pt-6">
                  {collectionProducts.map((p, pIdx) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="flex flex-col items-center text-center p-8 sm:p-12 editorial-hover-card group cursor-pointer"
                    >
                      {/* Floating Jewelry Visual (No background card, purely isolated with massive padding) */}
                      <div className="w-full max-w-[280px] aspect-square relative flex items-center justify-center mb-6">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover filter contrast-[1.06] shadow-[0_20px_40px_rgba(78,52,46,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                        />
                      </div>

                      <span className="text-[9px] font-editorial-mono uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] font-bold block mb-1">
                        {p.category}
                      </span>
                      <h3 className="font-display-serif text-xl sm:text-2xl font-bold text-[#4e342e] dark:text-white group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors">
                        {p.name}
                      </h3>
                      <span className="font-editorial-mono text-sm font-semibold text-[#4e342e]/70 dark:text-white/70 mt-1 block">
                        {p.price}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

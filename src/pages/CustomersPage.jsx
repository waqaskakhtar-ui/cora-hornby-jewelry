import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Award, ArrowRight } from 'lucide-react';
import { CUSTOMER_STORIES } from '../data/coraData';

export default function CustomersPage() {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <Heart className="w-4 h-4" />
            <span>COLLECTOR ARCHIVE · SOCIAL PROOF & ETSY REVIEWS</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Cora’s Customers
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-1">
            Real customer photos and reviews shared from Cora's Etsy studio shop. Over 500+ five-star verified purchases treasured across the United States and worldwide.
          </p>

          <div className="flex items-center gap-6 pt-2 font-editorial-mono text-xs text-[#4e342e]/70 dark:text-white/70">
            <div className="flex items-center gap-1 text-[#cc5500] dark:text-[#2c3480]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#4e342e] dark:text-white">5.0 OUT OF 5.0 STAR RATING</span>
            <span>·</span>
            <span>VERIFIED COLLECTORS</span>
          </div>
        </div>

        {/* MASONRY GALLERY OF CUSTOMER PHOTOS / ETSY QUOTES */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="break-inside-avoid bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-6 sm:p-8 space-y-5 transition-all duration-300 hover:border-[#cc5500] dark:hover:border-[#2c3480] group"
            >
              {/* Customer Photo */}
              <div className="aspect-[4/3] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                <img
                  src={story.photo}
                  alt={`${story.author} styling ${story.piece}`}
                  className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-[8px] font-editorial-mono uppercase px-2 py-0.5">
                  VERIFIED STYLING
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-[#cc5500] dark:text-[#2c3480]">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Real Etsy Quote */}
              <p className="font-editorial-body italic text-sm sm:text-base text-[#4e342e]/90 dark:text-white/90 leading-relaxed">
                "{story.quote}"
              </p>

              {/* Collector Details */}
              <div className="pt-4 border-t border-[#4e342e]/10 dark:border-white/10 font-editorial-mono text-xs space-y-1">
                <div className="font-bold text-[#4e342e] dark:text-white">
                  {story.author}
                </div>
                <div className="text-[11px] text-[#4e342e]/60 dark:text-white/60 flex items-center justify-between">
                  <span>{story.location}</span>
                  <span className="text-[#cc5500] dark:text-[#2c3480] font-semibold">{story.piece}</span>
                </div>
                <div className="text-[9px] text-[#4e342e]/40 dark:text-white/40">
                  {story.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 font-editorial-mono text-xs">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480]" />
            <span className="text-[#4e342e] dark:text-white font-bold uppercase">
              JOIN HUNDREDS OF COLLECTORS WEARING ONE-OF-A-KIND BENCH PIECES
            </span>
          </div>
          <Link
            to="/shop"
            className="px-6 py-3 bg-[#cc5500] dark:bg-[#2c3480] text-white uppercase font-bold tracking-wider hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>SHOP THE ARCHIVE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

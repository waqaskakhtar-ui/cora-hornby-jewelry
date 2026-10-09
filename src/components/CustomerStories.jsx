import React from 'react';
import { Star, Quote, Heart, Award } from 'lucide-react';
import { CUSTOMER_STORIES } from '../data/coraData';

export default function CustomerStories() {
  return (
    <section id="customers" className="py-16 lg:py-24 bg-[#F5F3EC] dark:bg-[#0F0E0D] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#111111]/12 dark:border-white/10">
          <div className="space-y-3">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#A88B58] flex items-center gap-2 font-semibold">
              <Heart className="w-3.5 h-3.5 text-[#A88B58]" />
              <span>COLLECTOR ARCHIVE · CORA'S CUSTOMERS</span>
            </div>

            <h2 className="font-display-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
              Worn & Cherished Worldwide
            </h2>

            <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-xl leading-relaxed">
              Real quotes and photos shared by collectors from Cora's Etsy studio shop. Handcrafted pieces that travel from the coast of Maine into everyday life.
            </p>
          </div>

          {/* Social Proof Badges */}
          <div className="flex items-center gap-6 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#A88B58]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#A88B58]" />
                ))}
              </div>
              <span className="text-[10px] text-[#111111] dark:text-[#FAF9F5] font-semibold mt-1">
                5.0 RATING · 500+ ETSY REVIEWS
              </span>
            </div>
            <div className="h-8 w-px bg-[#111111]/10 dark:border-white/10"></div>
            <div>
              <span className="block text-[10px] uppercase text-[#8A867E]">EST. 2018</span>
              <span className="text-[10px] text-[#111111] dark:text-[#FAF9F5] font-semibold">MAINE BENCH STUDIO</span>
            </div>
          </div>
        </div>

        {/* Customer Reviews & Styling Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#FAF9F5] dark:bg-[#151413] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between p-6 shadow-xs transition-all duration-300 hover:border-[#A88B58]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group"
            >
              <div className="space-y-4">
                {/* Customer Photo */}
                <div className="aspect-[4/3] bg-[#E5E2DA] dark:bg-[#201F1C] overflow-hidden relative border border-[#111111]/8 dark:border-white/10">
                  <img
                    src={story.photo}
                    alt={`${story.author} styling ${story.piece}`}
                    className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[8px] font-editorial-mono text-[#FAF9F5] uppercase">
                    COLLECTOR PHOTO
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#A88B58]">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#A88B58]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#2E2C29] dark:text-[#E0DDD5] font-editorial-body leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Collector Details */}
              <div className="pt-4 mt-4 border-t border-[#111111]/10 dark:border-white/10 font-editorial-mono space-y-1">
                <div className="text-xs font-bold text-[#111111] dark:text-[#FAF9F5]">
                  {story.author}
                </div>
                <div className="text-[10px] text-[#73716B] dark:text-[#9E9A90] flex items-center justify-between">
                  <span>{story.location}</span>
                  <span className="text-[#A88B58]">{story.piece}</span>
                </div>
                <div className="text-[8px] text-[#8A867E] dark:text-[#7A7770]">
                  {story.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 bg-[#EBE8DF] dark:bg-[#181715] border border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#A88B58]" />
            <span>JOIN OVER 1,000 COLLECTORS TREASURING CORA HORNBY BENCH DESIGNS</span>
          </div>
          <span className="text-[#111111] dark:text-[#FAF9F5] uppercase font-semibold">
            EVERY PIECE SHIPS FROM CAPE ELIZABETH, MAINE
          </span>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Star, Quote, Heart, Award } from 'lucide-react';
import { CUSTOMER_STORIES } from '../data/coraData';

export default function CustomerStories() {
  return (
    <section id="customers" className="py-24 sm:py-32 lg:py-36 bg-[#F6F4EE] dark:bg-[#0E0D0C] text-[#1C1B19] dark:text-[#F8F6F2] border-t border-[#E8E4DA] dark:border-[#262421] transition-colors duration-500 overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E5E1D6] dark:border-[#262421]">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.22em] text-[#A88B58] flex items-center gap-2 font-bold">
              <Heart className="w-4 h-4 text-[#A88B58]" />
              <span>COLLECTOR ARCHIVE · CORA'S CUSTOMERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1C1B19] dark:text-[#F8F6F2] leading-tight">
              Worn &amp; Cherished Worldwide
            </h2>

            <p className="text-sm sm:text-base text-[#55524B] dark:text-[#ACA79D] max-w-xl leading-relaxed font-normal">
              Real quotes and photos shared by collectors from Cora's Etsy studio shop. Handcrafted pieces that travel from the coast of Maine into everyday life.
            </p>
          </div>

          {/* Social Proof Badges */}
          <div className="flex items-center gap-6 text-xs text-[#7A766E] dark:text-[#9A968E]">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#A88B58]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A88B58]" />
                ))}
              </div>
              <span className="text-xs text-[#1C1B19] dark:text-[#F8F6F2] font-bold mt-1 tracking-wider uppercase">
                5.0 RATING · 500+ ETSY REVIEWS
              </span>
            </div>
            <div className="h-8 w-px bg-[#D5D0C5] dark:border-[#33302B]"></div>
            <div>
              <span className="block text-xs uppercase text-[#7A766E] font-medium">EST. 2018</span>
              <span className="text-xs text-[#1C1B19] dark:text-[#F8F6F2] font-bold tracking-wider uppercase">MAINE BENCH STUDIO</span>
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

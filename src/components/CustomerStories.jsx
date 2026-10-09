import React, { useState } from 'react';
import { Star, Quote, Heart, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { CUSTOMER_STORIES } from '../data/coraData';

export default function CustomerStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const activeStory = CUSTOMER_STORIES[activeStoryIdx] || CUSTOMER_STORIES[0];

  return (
    <section 
      id="customers" 
      className="py-20 lg:py-32 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700 relative overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#12100E]/10 dark:border-white/10">
          <div className="space-y-3">
            <div className="font-editorial-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>COLLECTOR ARCHIVE · CORA'S CUSTOMERS</span>
            </div>

            <h2 className="font-editorial-luxury text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-none">
              Cherished in Real Life
            </h2>

            <p className="font-editorial-serif italic text-base sm:text-xl text-[#78746B] dark:text-[#C5A869] max-w-xl">
              Quotes and styling captured by collectors who wear Cora's creations across the world.
            </p>
          </div>

          <div className="flex items-center gap-6 font-editorial-mono text-xs text-[#78746B] dark:text-[#A8A49C]">
            <div className="flex items-center gap-1 text-[#C5A869]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A869]" />
              ))}
            </div>
            <span>5.0 RATING ON ETSY · 500+ COLLECTORS</span>
          </div>
        </div>

        {/* ASYMMETRICAL MAGAZINE EDITORIAL SPREAD */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Collector Portrait with Specular Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-[16/14] bg-[#F2EFE8] dark:bg-[#161412] overflow-hidden p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
              <img
                src={activeStory.photo}
                alt={`${activeStory.author} styling ${activeStory.piece}`}
                className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 gloss-pill px-3 py-1 rounded-full text-[8px] font-editorial-mono uppercase text-[#12100E] dark:text-[#FAF8F2]">
                COLLECTOR ARCHIVE · {activeStory.location}
              </div>

              <div className="absolute bottom-4 right-4 gloss-pill px-3 py-1 rounded-full text-[9px] font-editorial-mono font-bold text-[#C5A869]">
                {activeStory.piece}
              </div>
            </div>

            <div className="flex items-center justify-between font-editorial-mono text-[9px] text-[#78746B] dark:text-[#A8A49C] uppercase tracking-wider">
              <span>{activeStory.date}</span>
              <span>VERIFIED PURCHASE</span>
            </div>
          </div>

          {/* Right Column: Expansive Pull Quote in Haute-Couture Serif */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <div className="font-editorial-luxury text-7xl text-[#C5A869]/30 leading-none select-none">
              “
            </div>

            <blockquote className="font-editorial-luxury italic text-2xl sm:text-4xl lg:text-5xl font-light text-[#12100E] dark:text-[#FAF8F2] leading-snug -mt-8">
              {activeStory.quote}
            </blockquote>

            <div className="pt-4 border-t border-[#12100E]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-editorial-mono">
              <div>
                <span className="text-sm font-bold text-[#12100E] dark:text-[#FAF8F2] block">
                  {activeStory.author}
                </span>
                <span className="text-xs text-[#78746B] dark:text-[#A8A49C]">
                  {activeStory.location} · Styled with {activeStory.piece}
                </span>
              </div>

              {/* Selector Dots / Buttons */}
              <div className="flex items-center gap-2">
                {CUSTOMER_STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`h-2 transition-all rounded-full ${
                      activeStoryIdx === idx
                        ? 'w-8 bg-[#C5A869]'
                        : 'w-2 bg-[#D8D4CA] dark:bg-[#38342E] hover:bg-[#C5A869]/60'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Quote, Award } from 'lucide-react';
import { CUSTOMER_STORIES } from '../data/coraData';

export default function CustomersPage() {
  // Expand customer stories array with diverse variations for a rich masonry gallery
  const extendedStories = [
    ...CUSTOMER_STORIES,
    {
      id: "cust-5",
      author: "Annabelle Vance",
      location: "San Francisco, CA",
      quote: "The contrast between the hammered brass crescent and the volcanic lava rock is pure art. I wear them to gallery openings and people constantly ask where they came from.",
      piece: "Caldera Lava Stone Earrings",
      rating: 5,
      date: "Verified Etsy Collector · January 2026",
      photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657407786-RFXK8MW4PWVJ10M80Z19/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F923bab%2F5999251349%2Fil_fullxfull.5999251349_s24p.jpg"
    },
    {
      id: "cust-6",
      author: "Grace Thornton",
      location: "London, UK",
      quote: "International dispatch from Maine was surprisingly fast. The logo box is so sturdy and beautiful that I keep it displayed on my dressing table.",
      piece: "African Zebra Jasper Bracelet",
      rating: 5,
      date: "Verified Etsy Collector · December 2025",
      photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657175661-H3MP7IZ64SJDBIXNNAL1/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Ff84fda%2F5999280529%2Fil_fullxfull.5999280529_2eqo.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">CORA'S CUSTOMERS</span>
        </div>

        {/* Section Header */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#A88B58]" />
              <span>COLLECTOR ARCHIVE · CLIENT STYLING & ETSY FEEDBACK</span>
            </div>

            <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-none">
              Cora’s Customers
            </h1>

            <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
              Photographs and reviews sent by collectors around the world who wear Cora Hornby creations. Sourced directly from verified reviews on our Etsy studio shop.
            </p>
          </div>

          <div className="flex items-center gap-6 font-editorial-mono text-xs">
            <div className="flex items-center gap-1 text-[#A88B58]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#A88B58]" />
              ))}
            </div>
            <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">5.0 STAR COLLECTOR RATING</span>
          </div>
        </div>

        {/* Asymmetrical Masonry Gallery (No two images align horizontally) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {extendedStories.map((story, idx) => {
            // Irregular stagger heights to enforce non-aligned horizontal axes
            const staggerClasses = [
              'lg:translate-y-0',
              'lg:translate-y-16',
              'lg:translate-y-6',
              'lg:translate-y-24',
              'lg:translate-y-10',
              'lg:translate-y-28'
            ][idx % 6];

            const aspectClasses = [
              'aspect-[3/4]',
              'aspect-[4/5]',
              'aspect-[1/1]',
              'aspect-[4/5]',
              'aspect-[3/4]',
              'aspect-[4/5]'
            ][idx % 6];

            return (
              <div
                key={story.id}
                className={`flex flex-col bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/10 dark:border-white/10 p-6 sm:p-8 shadow-sm transition-all duration-500 hover:border-[#A88B58]/40 hover:shadow-xl group ${staggerClasses}`}
              >
                {/* Visual Customer Styling Photo */}
                <div className={`relative ${aspectClasses} bg-[#ECE8DF] dark:bg-[#181715] overflow-hidden reveal-clip`}>
                  <img
                    src={story.photo}
                    alt={`${story.author} styling ${story.piece}`}
                    className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-xs text-[#FAF9F5] px-2 py-0.5 font-editorial-micro text-[8px]">
                    VERIFIED COLLECTOR
                  </div>
                </div>

                {/* Overlapping Text Card with Negative Margin */}
                <div className="mt-[-2rem] relative z-10 p-5 bg-[#FAF9F5]/95 dark:bg-[#161514]/95 backdrop-blur-md border border-[#111111]/8 dark:border-white/10 shadow-md space-y-3">
                  <div className="flex items-center gap-1 text-[#A88B58]">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#A88B58]" />
                    ))}
                  </div>

                  <p className="font-editorial-heading italic text-sm sm:text-base text-[#111111] dark:text-[#FAF9F5] leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="pt-3 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#111111] dark:text-[#FAF9F5] block">{story.author}</span>
                      <span className="text-[10px] text-[#73716B] dark:text-[#9E9A90]">{story.location}</span>
                    </div>
                    <span className="text-[10px] text-[#A88B58] font-bold text-right max-w-[130px] truncate">
                      {story.piece}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Etsy Callout Banner */}
        <div className="mt-28 p-8 bg-[#F5F3EC] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-editorial-micro text-[#A88B58]">
              COMMUNITY OF COLLECTORS
            </span>
            <h3 className="font-editorial-heading text-2xl font-bold text-[#111111] dark:text-[#FAF9F5]">
              Own a piece of Cora’s travel story today
            </h3>
          </div>

          <Link
            to="/shop"
            className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A88B58] transition-colors"
          >
            EXPLORE THE COMPLETE SHOP CATALOG →
          </Link>
        </div>

      </div>
    </div>
  );
}

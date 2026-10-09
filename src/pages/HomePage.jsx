import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Layers, ShieldCheck, Heart, Award, Eye, ShoppingBag } from 'lucide-react';
import { 
  BRAND_INFO, 
  TRAVEL_DESTINATIONS, 
  COLLECTIONS, 
  PRODUCT_CATEGORIES, 
  PRODUCTS, 
  FEATURED_MASTERPIECE,
  CUSTOMER_STORIES 
} from '../data/coraData';

export default function HomePage({ onQuickAdd, onSelectProduct }) {
  const featuredPieces = PRODUCTS.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. EDITORIAL HERO: "MESSY BUT GLOSSY" LUXURY OVERLAP */}
      <section className="relative min-h-[96vh] pt-28 sm:pt-36 pb-16 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden">
        
        {/* Top Microscopic Meta Row */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 font-editorial-micro text-[#73716B] dark:text-[#9E9A90] border-b border-[#111111]/8 dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A88B58] animate-pulse"></span>
            <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold tracking-widest">
              CORA HORNBY JEWELRY · CAPE ELIZABETH, MAINE BENCH
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>ONE-OF-A-KIND CREATIONS</span>
            <span className="hidden sm:inline">NO DUPLICATE MOLDS</span>
            <span className="text-[#A88B58]">EST. 2018</span>
          </div>
        </div>

        {/* Central Asymmetrical Visual & Typographic Overlap Area */}
        <div className="my-auto py-8 sm:py-12 relative w-full max-w-[1720px] mx-auto">
          
          {/* Giant Monumental Background Typography */}
          <div className="select-none pointer-events-none leading-none">
            <h1 className="font-editorial-heading text-[15vw] sm:text-[14vw] lg:text-[12.5vw] font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] opacity-95 uppercase flex flex-col -space-y-4 sm:-space-y-8 lg:-space-y-12">
              <span className="tracking-tight">CORA</span>
              <span className="italic font-normal text-[#4A4742] dark:text-[#9E9A90] self-end sm:mr-8 lg:mr-24">HORNBY</span>
            </h1>
          </div>

          {/* ASYMMETRICAL FLOATING HERO IMAGES WITH PHYSICAL TEXT OVERLAPS */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center mt-[-6vw] sm:mt-[-8vw] relative z-20 pointer-events-auto">
            
            {/* Left Image: Model Look with Overlapping Caption */}
            <div className="col-span-12 sm:col-span-5 lg:col-span-4 relative group">
              <div className="aspect-[3/4] overflow-hidden bg-[#ECE8DF] dark:bg-[#1A1917] shadow-[0_20px_50px_rgba(0,0,0,0.12)] reveal-clip">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
                  alt="Cora Hornby Ear Styling Detail"
                  className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Physical Text Overlap Block: Negatively Margined into the corner */}
              <div className="mt-[-2.5rem] ml-4 sm:-ml-6 relative z-30 p-5 bg-[#FAF9F5]/90 dark:bg-[#141312]/90 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 shadow-lg max-w-[280px]">
                <div className="font-editorial-micro text-[#A88B58] block mb-1">
                  PLATE 01 · COASTAL MAINE
                </div>
                <p className="text-xs text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body leading-relaxed">
                  Cold-hammered metals and sea-weathered textures shaped at our Atlantic oceanfront studio bench.
                </p>
              </div>
            </div>

            {/* Center: Primary Core Hooks & Narrative */}
            <div className="col-span-12 sm:col-span-7 lg:col-span-5 space-y-6 lg:pl-6">
              <div className="space-y-4">
                <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A88B58]"></span>
                  <span>PRIMARY BRAND THEME</span>
                </div>

                {/* Primary Hook */}
                <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-[1.08]">
                  "{BRAND_INFO.tagline}"
                </h2>

                {/* Secondary Hook */}
                <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
                  {BRAND_INFO.subtitle}
                </p>
              </div>

              {/* Distinct Narrative Breakdown: Material Source vs. Design Inspiration */}
              <div className="p-5 bg-[#F2EFE8] dark:bg-[#161514] border-l-2 border-[#A88B58] space-y-2">
                <div className="font-editorial-micro text-[#73716B] dark:text-[#9E9A90]">
                  THE DUAL EXPEDITION PHILOSOPHY
                </div>
                <p className="text-xs sm:text-sm text-[#3E3C38] dark:text-[#D4D0C7] font-editorial-body leading-relaxed">
                  Some countries serve as direct <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Material Sources</strong>—such as Guatemala for rare jade and Brazil for amethyst and citrine. Others serve as lifelong <strong className="text-[#111111] dark:text-[#FAF9F5] font-semibold">Design Inspiration</strong>—such as ancient spirals in Greece and Bauhaus geometry in Germany.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/travel"
                  className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111] transition-all flex items-center gap-2 font-bold shadow-sm"
                >
                  <span>TRAVEL INSPIRATIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/collections"
                  className="px-6 py-3 border border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-[#FAF9F5] font-editorial-mono text-xs uppercase tracking-widest hover:border-[#A88B58] hover:text-[#A88B58] transition-all font-semibold"
                >
                  <span>CURATED COLLECTIONS</span>
                </Link>
              </div>
            </div>

            {/* Right: Floating Masterpiece Teaser Card */}
            <div className="col-span-12 lg:col-span-3 hidden lg:flex flex-col items-end">
              <Link 
                to="/product/prod-mayan-sol" 
                className="group w-full max-w-[260px] block"
              >
                <div className="aspect-[4/5] bg-[#EFECE4] dark:bg-[#181715] overflow-hidden relative shadow-md">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/e7ab7a3a-c133-4b24-b004-9266589ac8f5/IMG_7358.jpeg"
                    alt="Mayan Sol Turquoise Earrings"
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#A88B58] text-[#111111] font-editorial-mono text-[8px] font-bold uppercase">
                    FEATURED BENCH WORK
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <div className="font-editorial-heading text-sm font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                    Mayan Sol Turquoise
                  </div>
                  <div className="font-editorial-micro text-[#8A867E]">
                    GUATEMALA · $95.00
                  </div>
                </div>
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Three-Way Browsing Pathway Navigator */}
        <div className="pt-6 border-t border-[#111111]/8 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-editorial-mono text-xs">
            <span className="font-editorial-micro text-[#73716B] dark:text-[#9E9A90]">
              EXPLORE THE ATELIER THREE WAYS:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/travel"
                className="px-4 py-2 bg-[#EFECE4] dark:bg-[#181715] hover:border-[#A88B58] border border-transparent text-[#111111] dark:text-[#FAF9F5] transition-all flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-[#A88B58]" />
                <span className="font-bold">01 / TRAVEL INSPIRATION</span>
                <span className="text-[10px] text-[#8A867E]">(8 Countries)</span>
              </Link>

              <Link
                to="/collections"
                className="px-4 py-2 bg-[#EFECE4] dark:bg-[#181715] hover:border-[#A88B58] border border-transparent text-[#111111] dark:text-[#FAF9F5] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A88B58]" />
                <span className="font-bold">02 / CURATED COLLECTIONS</span>
                <span className="text-[10px] text-[#8A867E]">(5 Lines)</span>
              </Link>

              <Link
                to="/shop"
                className="px-4 py-2 bg-[#EFECE4] dark:bg-[#181715] hover:border-[#A88B58] border border-transparent text-[#111111] dark:text-[#FAF9F5] transition-all flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5 text-[#A88B58]" />
                <span className="font-bold">03 / SHOP BY PRODUCT</span>
                <span className="text-[10px] text-[#8A867E]">(5 Categories)</span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 2. THE THREE BROWSING GATEWAYS (EXPANDED EDITORIAL LOOKBOOK) */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#F5F3EC] dark:bg-[#0E0D0C]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 dark:border-white/10">
            <div>
              <span className="font-editorial-micro text-[#A88B58] block mb-1">
                THREE PILLARS OF DISCOVERY
              </span>
              <h2 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
                Three Ways to Experience Cora Hornby
              </h2>
            </div>
            <p className="text-sm text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body max-w-md leading-relaxed">
              Every listing on the website sits in a country of origin or inspiration, a thematic collection, and an anatomical product category.
            </p>
          </div>

          {/* Asymmetrical 3-Card Gateway Spread with Negative Margin Overlaps */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Gateway 1: Travel Inspiration */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/10 group shadow-xs">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-[#E8E4DA] dark:bg-[#1E1D1B] overflow-hidden relative reveal-clip">
                  <img
                    src="/travel_inspirations/greece-hero.jpg"
                    alt="Greece Expedition"
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#FAF9F5] px-2 py-0.5 font-editorial-micro">
                    8 DESTINATIONS
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-editorial-micro text-[#A88B58] block">01 / EXPEDITIONS</span>
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-1">
                    Travel Inspiration
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#A6A49E] font-editorial-body mt-2 leading-relaxed">
                    Explore 8 distinct country portals (Greece, Namibia, Brazil, Guatemala, Germany, Indonesia, Belize, India). Discover raw mineral harvests versus architectural design influences.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between">
                <span className="font-editorial-micro text-[#8A867E]">3 CURATED PRODUCTS EACH</span>
                <Link
                  to="/travel"
                  className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] flex items-center gap-2 font-bold"
                >
                  <span>ENTER HUB</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Gateway 2: Curated Collections */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/10 group shadow-xs lg:translate-y-6">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-[#E8E4DA] dark:bg-[#1E1D1B] overflow-hidden relative reveal-clip">
                  <img
                    src="/travel_inspirations/germany-pair-1-jewelry.jpg"
                    alt="Geometrics Collection"
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#A88B58] text-[#111111] px-2 py-0.5 font-editorial-micro font-bold">
                    5 SIGNATURE LINES
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-editorial-micro text-[#A88B58] block">02 / THEMATIC SERIES</span>
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-1">
                    Curated Collections
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#A6A49E] font-editorial-body mt-2 leading-relaxed">
                    Delve into our five designated artistic collections: Mixed Metals, Geometrics, Mayan Sol, Baroque Pearls, and Black is Back.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between">
                <span className="font-editorial-micro text-[#8A867E]">MAINE BENCH FORGED</span>
                <Link
                  to="/collections"
                  className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] flex items-center gap-2 font-bold"
                >
                  <span>VIEW COLLECTIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Gateway 3: Shop by Product */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/10 group shadow-xs">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-[#E8E4DA] dark:bg-[#1E1D1B] overflow-hidden relative reveal-clip">
                  <img
                    src="/hero-zebra-jasper-3d.png"
                    alt="Jewelry Silhouettes"
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#FAF9F5] px-2 py-0.5 font-editorial-micro">
                    5 PRODUCT SILHOUETTES
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-editorial-micro text-[#A88B58] block">03 / ANATOMICAL SHOPPING</span>
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-1">
                    Shop by Product
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#A6A49E] font-editorial-body mt-2 leading-relaxed">
                    Full e-commerce categorization covering Earrings, Necklaces, Bracelets, Rings, and Bag Charms with individual Product Detail Pages.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#111111]/8 dark:border-white/10 flex items-center justify-between">
                <span className="font-editorial-micro text-[#8A867E]">COMPLETE ARCHIVE</span>
                <Link
                  to="/shop"
                  className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] flex items-center gap-2 font-bold"
                >
                  <span>EXPLORE SHOP</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MATERIAL SOURCE VS. DESIGN INSPIRATION: CINEMATIC DUALITY */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#FAF9F5] dark:bg-[#0A0909]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-editorial-micro text-[#A88B58]">
              THE CORE NARRATIVE DUALITY
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
              Where Stones Come From & Where Ideas Are Born
            </h2>
            <p className="text-sm text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body leading-relaxed">
              Cora’s travel journals balance geological fieldwork with cultural exploration. We honor this boundary with every piece forged at the bench.
            </p>
          </div>

          {/* Side-by-Side Dual Spreads with Asymmetrical Heights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left Duality: MATERIAL SOURCES (Guatemala & Brazil) */}
            <div className="p-8 sm:p-12 bg-[#F2ECE1] dark:bg-[#141210] border border-[#A88B58]/30 space-y-8 relative">
              <div className="flex items-center justify-between font-editorial-micro text-[#A88B58] border-b border-[#A88B58]/20 pb-4">
                <span>01 · THE DIRECT HARVEST</span>
                <span className="font-bold">MATERIAL SOURCES</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                  Guatemala for Jade & Brazil for Amethyst & Citrine
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                  Stones are not ordered through brokers. In Guatemala, Cora walks highland lapidary workshops to hand-select raw jadeite nodules. In Brazil, naturally faceted amethyst points and honey citrine crystals are sourced from local miners and lapidaries.
                </p>
              </div>

              {/* Two Asymmetrical Floating Visuals */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Link to="/travel/guatemala" className="group">
                  <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1C1A18] overflow-hidden">
                    <img
                      src="/travel_inspirations/guatemala-pair-1-jewelry.jpg"
                      alt="Guatemalan Jade"
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-2 text-xs font-editorial-mono uppercase font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58]">
                    Guatemala · Jade →
                  </div>
                </Link>

                <Link to="/travel/brazil" className="group">
                  <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1C1A18] overflow-hidden">
                    <img
                      src="/travel_inspirations/brazil-pair-2-jewelry.jpg"
                      alt="Brazilian Amethyst"
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-2 text-xs font-editorial-mono uppercase font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58]">
                    Brazil · Citrine →
                  </div>
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  to="/travel"
                  className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] underline underline-offset-4 hover:text-[#A88B58]"
                >
                  <span>BROWSE MATERIAL SOURCE COUNTRIES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Duality: DESIGN INSPIRATION (Greece & Germany) */}
            <div className="p-8 sm:p-12 bg-[#ECE9E0] dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 space-y-8 relative lg:mt-10">
              <div className="flex items-center justify-between font-editorial-micro text-[#73716B] dark:text-[#9E9A90] border-b border-[#111111]/10 dark:border-white/10 pb-4">
                <span>02 · ARCHITECTURE & ART</span>
                <span className="font-bold">DESIGN INSPIRATION</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                  Aegean Spirals in Greece & Bauhaus in Germany
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                  In Greece, ancient coiled bronze shields and Aegean meanders translate into kinetic raised silver domes and hammered discs. In Germany, the Reichstag dome and Bauhaus clean geometry shape modern minimalist squares and architectural pendants.
                </p>
              </div>

              {/* Two Asymmetrical Floating Visuals */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Link to="/travel/greece" className="group">
                  <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1C1A18] overflow-hidden">
                    <img
                      src="/travel_inspirations/greece-pair-1-jewelry.jpg"
                      alt="Greek Spiral Design"
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-2 text-xs font-editorial-mono uppercase font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58]">
                    Greece · Spirals →
                  </div>
                </Link>

                <Link to="/travel/germany" className="group">
                  <div className="aspect-[4/5] bg-[#E0DDD5] dark:bg-[#1C1A18] overflow-hidden">
                    <img
                      src="/travel_inspirations/germany-pair-2-jewelry.jpg"
                      alt="German Bauhaus Design"
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-2 text-xs font-editorial-mono uppercase font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58]">
                    Germany · Bauhaus →
                  </div>
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  to="/travel"
                  className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] underline underline-offset-4 hover:text-[#A88B58]"
                >
                  <span>BROWSE INSPIRATION COUNTRIES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ASYMMETRICAL FLOATING PRODUCT GALLERY (BORDERLESS PIECES IN NEGATIVE SPACE) */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#FAF9F5] dark:bg-[#0A0909]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 dark:border-white/10">
            <div>
              <span className="font-editorial-micro text-[#A88B58] block mb-1">
                STUDIO SELECTION · RECENT RELEASES
              </span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Curated Pieces
              </h2>
            </div>
            <Link
              to="/shop"
              className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-2 font-bold"
            >
              <span>VIEW ALL {PRODUCTS.length} PIECES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Gallery with Peer Hover Dimming & Borderless Floating Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 editorial-gallery-group">
            {featuredPieces.map((product, idx) => {
              // Stagger heights so no two horizontal rows align symmetrically
              const isStaggered = idx % 2 === 1;

              return (
                <div
                  key={product.id}
                  className={`floating-product-card group flex flex-col justify-between ${
                    isStaggered ? 'sm:translate-y-8' : ''
                  }`}
                >
                  {/* Image Container: Strictly borderless, floating in negative space */}
                  <div className="relative aspect-[4/5] bg-[#ECE8DF] dark:bg-[#161514] overflow-hidden reveal-clip">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle Overlay Badges */}
                    <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2 py-0.5 text-[8px] font-editorial-mono uppercase text-[#111111] dark:text-[#FAF9F5]">
                      {product.collection}
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onQuickAdd && onQuickAdd(product);
                        }}
                        className="p-2.5 bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] shadow-lg hover:bg-[#A88B58] dark:hover:bg-[#A88B58] transition-colors rounded-full"
                        title="Add to Shopping Bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Metadata Block Overlapping below */}
                  <div className="pt-4 space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#8A867E]">
                      <span>{product.travelCountry || product.origin}</span>
                      <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">{product.price}</span>
                    </div>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="font-editorial-heading text-xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#5E5C57] dark:text-[#A6A49E] font-editorial-body line-clamp-2 pt-1 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. MASTERPIECE ANATOMY SPOTLIGHT */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#F5F3EC] dark:bg-[#0E0D0C]">
        <div className="max-w-[1720px] mx-auto grid grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <span className="font-editorial-micro text-[#A88B58] block">
              ONE OF ONE BENCH ARCHIVE
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
              {FEATURED_MASTERPIECE.name}
            </h2>
            <p className="font-editorial-body text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
              Cold-forged on an antique iron anvil in Cape Elizabeth, Maine. The Cleo Architectural Pendant explores negative space and kinetic balance.
            </p>

            <div className="space-y-3 pt-2">
              {FEATURED_MASTERPIECE.annotations.map((ann) => (
                <div key={ann.id} className="p-3.5 bg-[#FAF9F5] dark:bg-[#141312] border-l border-[#A88B58] space-y-0.5">
                  <div className="font-editorial-micro text-[#111111] dark:text-[#FAF9F5] font-semibold">
                    {ann.number} / {ann.title}
                  </div>
                  <div className="text-xs text-[#5E5C57] dark:text-[#9E9A90] font-editorial-body">
                    {ann.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/product/prod-cleo"
                className="px-6 py-3 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A88B58] transition-colors"
              >
                INSPECT SPECIFICATION · $150.00
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="aspect-[4/3] bg-[#E5E2DA] dark:bg-[#181715] overflow-hidden relative shadow-2xl reveal-clip">
              <img
                src={FEATURED_MASTERPIECE.mainImage}
                alt={FEATURED_MASTERPIECE.name}
                className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 p-3 bg-[#111111]/85 backdrop-blur-md text-[#FAF9F5] font-editorial-mono text-xs">
                <span>CAPE ELIZABETH, ME · 28" ADJUSTABLE CHAIN</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CORA'S CUSTOMERS PREVIEW (REAL ETSY REVIEWS) */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#FAF9F5] dark:bg-[#0A0909]">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 dark:border-white/10">
            <div>
              <span className="font-editorial-micro text-[#A88B58] block mb-1">
                CORA'S CUSTOMERS · VERIFIED ETSY FEEDBACK
              </span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Worn Across the World
              </h2>
            </div>
            <Link
              to="/customers"
              className="font-editorial-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-2 font-bold"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Customer Reviews Spread */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_STORIES.map((story, i) => (
              <div
                key={story.id}
                className={`p-6 bg-[#FAF9F5] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between space-y-4 shadow-2xs ${
                  i % 2 === 1 ? 'lg:translate-y-6' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] bg-[#E8E4DA] dark:bg-[#1E1D1B] overflow-hidden">
                    <img
                      src={story.photo}
                      alt={story.author}
                      className="w-full h-full object-cover filter contrast-[1.03]"
                    />
                  </div>
                  <p className="font-editorial-heading italic text-sm text-[#111111] dark:text-[#FAF9F5] leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#111111]/10 dark:border-white/10 font-editorial-mono text-xs">
                  <div className="font-bold text-[#111111] dark:text-[#FAF9F5]">{story.author}</div>
                  <div className="text-[10px] text-[#A88B58]">{story.piece} · {story.location}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. STUDIO ASSURANCES & GUARANTEES TEASER */}
      <section className="py-16 px-6 sm:px-10 lg:px-14 border-t border-[#111111]/8 dark:border-white/10 bg-[#F5F3EC] dark:bg-[#11100F]">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-editorial-micro text-[#A88B58]">
              STUDIO PROVENANCE & COLLECTOR CARE
            </div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
              Logo Gift Boxes · Insured Maine Shipping · 30-Day Guarantees
            </h3>
          </div>

          <Link
            to="/packaging-and-shipping"
            className="px-6 py-3 border border-[#111111] dark:border-white text-[#111111] dark:text-[#FAF9F5] font-editorial-mono text-xs uppercase tracking-widest hover:bg-[#111111] hover:text-[#FAF9F5] dark:hover:bg-[#FAF9F5] dark:hover:text-[#111111] transition-all font-bold flex-shrink-0"
          >
            LEARN ABOUT PACKAGING & GUARANTEES →
          </Link>
        </div>
      </section>

    </div>
  );
}

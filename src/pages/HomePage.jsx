import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Grid, ShieldCheck, Heart, Award } from 'lucide-react';
import { BRAND_INFO, COLLECTIONS, TRAVEL_DESTINATIONS, PRODUCTS, FEATURED_MASTERPIECE } from '../data/coraData';

export default function HomePage({ onAddToCart }) {
  const heroPiece = PRODUCTS[0]; // Mayan Sol Turquoise Earrings
  const zebraPiece = PRODUCTS[1]; // African Zebra Jasper

  return (
    <div className="w-full">
      {/* SECTION 1 (HERO): 50/50 Split Viewport with Asymmetrical Editorial Hierarchy */}
      <section className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-12 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden">
        
        {/* Top Eyebrow Metadata */}
        <div data-stagger="text" className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-editorial-mono text-[#4e342e]/75 dark:text-white/75 uppercase tracking-[0.18em] pb-4 border-b border-[#4e342e]/12 dark:border-white/12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cc5500] dark:bg-[#2c3480]"></span>
            <span className="font-semibold text-[#4e342e] dark:text-white">
              CORA HORNBY JEWELRY · CAPE ELIZABETH, MAINE BENCH
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>EDITION OF ONE CREATIONS</span>
            <span className="text-[#cc5500] dark:text-[#2c3480] font-bold">EST. 2018</span>
          </div>
        </div>

        {/* 50/50 Split Viewport Container */}
        <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Massive Dramatic Typography & Centered Primary CTA in Immediate Heat Zone */}
          <div data-stagger="text" className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                BENCH ARCHIVE EXHIBITION · 2026
              </span>
              
              <h1 className="font-display-serif text-5xl sm:text-7xl lg:text-8xl font-black text-[#4e342e] dark:text-white leading-[0.92] tracking-tight">
                CORA <br />
                <span className="font-editorial-body italic font-light text-[#4e342e]/85 dark:text-white/85">
                  HORNBY
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body max-w-lg leading-relaxed pt-2">
                Hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies, and crystals.
              </p>
            </div>

            {/* Primary CTA: High-Conversion Heat Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/collections"
                className="px-8 py-4 bg-[#cc5500] dark:bg-[#2c3480] text-white font-editorial-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_10px_30px_rgba(204,85,0,0.25)] dark:shadow-[0_10px_30px_rgba(44,52,128,0.35)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 group"
              >
                <span>EXPLORE THE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>

              <Link
                to="/travels"
                className="px-6 py-4 border border-[#4e342e]/25 dark:border-white/25 text-[#4e342e] dark:text-white font-editorial-mono text-xs uppercase tracking-[0.16em] hover:border-[#cc5500] dark:hover:border-[#2c3480] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
              >
                TRAVEL INSPIRATIONS (8)
              </Link>
            </div>

            {/* Trust Micro-Badges */}
            <div className="pt-4 grid grid-cols-2 gap-3 text-[11px] font-editorial-mono text-[#4e342e]/70 dark:text-white/70">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#cc5500] dark:bg-[#2c3480]"></span>
                <span>Hand-crafted in Maine</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#cc5500] dark:bg-[#2c3480]"></span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Auto-Playing Lifestyle & High-Resolution Bench Visual Split */}
          <div data-stagger="image" className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden p-3 shadow-2xl group">
              
              {/* Corner Exhibition Brackets */}
              <div className="absolute inset-4 pointer-events-none z-20">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#cc5500] dark:border-[#2c3480]"></span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#cc5500] dark:border-[#2c3480]"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#cc5500] dark:border-[#2c3480]"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#cc5500] dark:border-[#2c3480]"></span>
              </div>

              {/* Main Image with Smooth Subtle Scale */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
                  alt="Cora Hornby signature jewelry styling"
                  className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid Floating Product Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#f8f4e7]/95 dark:bg-[#000000]/95 backdrop-blur-md p-4 border border-[#4e342e]/15 dark:border-white/20 flex items-center justify-between z-20">
                  <div>
                    <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] block font-bold">
                      FEATURED ATELIER PIECE
                    </span>
                    <span className="font-display-serif text-base font-bold text-[#4e342e] dark:text-white">
                      Mayan Sol Turquoise Drops
                    </span>
                  </div>
                  <Link
                    to="/product/prod-mayan-sol"
                    className="text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex items-center gap-1"
                  >
                    <span>VIEW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: 3-Way Taxonomy Quick Jump */}
        <div className="pt-4 border-t border-[#4e342e]/12 dark:border-white/12 flex flex-wrap items-center justify-between gap-4 font-editorial-mono text-[10px] uppercase text-[#4e342e]/70 dark:text-white/70">
          <span>BROWSE 3 WAYS:</span>
          <div className="flex flex-wrap items-center gap-4 font-semibold text-[#4e342e] dark:text-white">
            <Link to="/travels" className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">01 / TRAVEL INSPIRATION (8 COUNTRIES)</Link>
            <span className="opacity-30">·</span>
            <Link to="/collections" className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">02 / COLLECTIONS (5 LINES)</Link>
            <span className="opacity-30">·</span>
            <Link to="/shop" className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">03 / PRODUCT TYPES (5 CATEGORIES)</Link>
          </div>
        </div>

      </section>

      {/* SECTION 2 (THE HOOK): Full-Width Monumental Text Block */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 bg-[#4e342e] text-[#f8f4e7] dark:bg-[#080808] dark:text-white transition-colors duration-400">
        <div className="max-w-[1720px] mx-auto text-center space-y-6">
          <span className="font-editorial-mono text-xs uppercase tracking-[0.3em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
            THE ATELIER PHILOSOPHY
          </span>

          <h2 data-stagger="text" className="font-display-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black max-w-6xl mx-auto leading-[0.98] tracking-tight">
            “Traveling the World for Inspiration and Materials.”
          </h2>

          <p className="font-editorial-body text-base sm:text-xl text-[#f8f4e7]/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed pt-2">
            Some countries are the direct sources of rare raw materials—such as Guatemala for mountain jade, and Brazil for amethyst and citrine. Others ignite the design vocabulary—such as ancient Aegean spirals in Greece and Bauhaus geometry in Germany. Handcrafted on the coast of Maine.
          </p>

          <div className="pt-6 flex justify-center">
            <Link
              to="/story"
              className="text-xs font-editorial-mono uppercase tracking-[0.2em] font-bold text-[#cc5500] dark:text-[#2c3480] hover:text-white dark:hover:text-white underline underline-offset-8 transition-colors"
            >
              READ CORA'S FULL JOURNEY →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 (ENTRYWAYS): Three Asymmetrical Editorial Cards */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 bg-[#f8f4e7] dark:bg-[#000000] border-t border-[#4e342e]/12 dark:border-white/12">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-12 border-b border-[#4e342e]/15 dark:border-white/15">
            <div>
              <span className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                03 / THREE WAYS OF BROWSING
              </span>
              <h2 className="font-display-serif text-3xl sm:text-5xl font-bold text-[#4e342e] dark:text-white mt-1">
                Enter the Archive
              </h2>
            </div>
            <p className="text-sm font-editorial-mono text-[#4e342e]/70 dark:text-white/70 max-w-md">
              Every listing is classified across three dimensions: country of inspiration, thematic collection, and product silhouette.
            </p>
          </div>

          {/* Three Asymmetrical Editorial Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch editorial-hover-parent">
            
            {/* Card 1: Travel Inspiration (Span 4) */}
            <Link
              to="/travels"
              className="md:col-span-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-8 flex flex-col justify-between editorial-hover-card group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                  <span>ENTRYWAY 01</span>
                  <Compass className="w-4 h-4" />
                </div>

                <div className="aspect-[4/3] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                  <img
                    src="/travel_inspirations/greece-hero.jpg"
                    alt="Travel Inspiration"
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#f8f4e7]/90 dark:bg-[#000000]/90 px-2 py-0.5 font-editorial-mono text-[8px] uppercase tracking-wider text-[#4e342e] dark:text-white">
                    8 COUNTRIES
                  </div>
                </div>

                <h3 className="font-display-serif text-3xl font-bold text-[#4e342e] dark:text-white">
                  Travel Inspiration
                </h3>

                <p className="text-xs sm:text-sm text-[#4e342e]/80 dark:text-white/80 font-editorial-body leading-relaxed">
                  Explore 8 global destinations featuring 3 curated pieces each with side-by-side inspiration photos and storytelling captions.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between text-xs font-editorial-mono font-bold text-[#cc5500] dark:text-[#2c3480]">
                <span>EXPLORE 8 COUNTRIES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>

            {/* Card 2: Curated Collections (Span 4) */}
            <Link
              to="/collections"
              className="md:col-span-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-8 flex flex-col justify-between editorial-hover-card group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                  <span>ENTRYWAY 02</span>
                  <Sparkles className="w-4 h-4" />
                </div>

                <div className="aspect-[4/3] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657275999-NO6EK65SN16E85AOD73A/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fec8df4%2F3451414898%2Fil_fullxfull.3451414898_qvov.jpg"
                    alt="Curated Collections"
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#f8f4e7]/90 dark:bg-[#000000]/90 px-2 py-0.5 font-editorial-mono text-[8px] uppercase tracking-wider text-[#4e342e] dark:text-white">
                    5 SIGNATURE LINES
                  </div>
                </div>

                <h3 className="font-display-serif text-3xl font-bold text-[#4e342e] dark:text-white">
                  Curated Collections
                </h3>

                <p className="text-xs sm:text-sm text-[#4e342e]/80 dark:text-white/80 font-editorial-body leading-relaxed">
                  Floating minimalist grids for Mixed Metals, Geometrics, Mayan Sol, Pearls, and Black is Back.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between text-xs font-editorial-mono font-bold text-[#cc5500] dark:text-[#2c3480]">
                <span>BROWSE 5 COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>

            {/* Card 3: Shop All Products (Span 4) */}
            <Link
              to="/shop"
              className="md:col-span-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-8 flex flex-col justify-between editorial-hover-card group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                  <span>ENTRYWAY 03</span>
                  <Grid className="w-4 h-4" />
                </div>

                <div className="aspect-[4/3] bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden relative border border-[#4e342e]/10 dark:border-white/10">
                  <img
                    src="/hero-zebra-jasper-3d.png"
                    alt="Shop All Pieces"
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#f8f4e7]/90 dark:bg-[#000000]/90 px-2 py-0.5 font-editorial-mono text-[8px] uppercase tracking-wider text-[#4e342e] dark:text-white">
                    5 SILHOUETTES
                  </div>
                </div>

                <h3 className="font-display-serif text-3xl font-bold text-[#4e342e] dark:text-white">
                  Shop All Products
                </h3>

                <p className="text-xs sm:text-sm text-[#4e342e]/80 dark:text-white/80 font-editorial-body leading-relaxed">
                  Filter across Earrings, Necklaces, Bracelets, Rings, and Bag Charms with live inventory status.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between text-xs font-editorial-mono font-bold text-[#cc5500] dark:text-[#2c3480]">
                <span>VIEW FULL CATALOG (60+)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* SECTION 4: MASTERPIECE ANATOMY HIGHLIGHT */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 bg-[#4e342e]/5 dark:bg-white/5 border-t border-[#4e342e]/12 dark:border-white/12">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
              BENCH HIGHLIGHT · ONE OF ONE
            </span>

            <h2 className="font-display-serif text-4xl sm:text-6xl font-bold text-[#4e342e] dark:text-white leading-tight">
              {FEATURED_MASTERPIECE.name}
            </h2>

            <p className="text-sm sm:text-base text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
              {FEATURED_MASTERPIECE.material}. Cold-hammered on an antique iron anvil in Cape Elizabeth, Maine. Each facet reflects coastal light at an organic angle, leaving the human trace of the artisan.
            </p>

            <div className="grid grid-cols-2 gap-4 font-editorial-mono text-xs text-[#4e342e]/80 dark:text-white/80 pt-2">
              <div className="p-3 bg-[#f8f4e7] dark:bg-[#000000] border border-[#4e342e]/15 dark:border-white/15">
                <span className="text-[9px] uppercase block opacity-60">PRICE</span>
                <span className="font-bold text-base text-[#4e342e] dark:text-white">{FEATURED_MASTERPIECE.price}</span>
              </div>
              <div className="p-3 bg-[#f8f4e7] dark:bg-[#000000] border border-[#4e342e]/15 dark:border-white/15">
                <span className="text-[9px] uppercase block opacity-60">EDITION</span>
                <span className="font-bold text-base text-[#cc5500] dark:text-[#2c3480]">ONE OF ONE</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/product/prod-cleo"
                className="px-8 py-3.5 bg-[#cc5500] dark:bg-[#2c3480] text-white font-editorial-mono text-xs uppercase tracking-[0.18em] font-bold hover:scale-105 transition-all shadow-md"
              >
                VIEW MASTERPIECE SPECS →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#f8f4e7] dark:bg-[#000000] p-4 border border-[#4e342e]/15 dark:border-white/15 shadow-2xl relative overflow-hidden group">
              <img
                src={FEATURED_MASTERPIECE.mainImage}
                alt={FEATURED_MASTERPIECE.name}
                className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-[#f8f4e7]/90 dark:bg-black/90 px-3 py-1 text-[10px] font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] border border-[#4e342e]/15 dark:border-white/20">
                MAINE BENCH FORGED
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: TRUST SIGNALS & SOCIAL PROOF TEASER */}
      <section className="py-16 px-6 sm:px-10 lg:px-14 bg-[#f8f4e7] dark:bg-[#000000] border-t border-[#4e342e]/12 dark:border-white/12">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-editorial-mono text-xs">
          
          <Link
            to="/customers"
            className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex items-start gap-4 hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-colors group"
          >
            <Heart className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#4e342e] dark:text-white block uppercase">500+ Verified Etsy Reviews</span>
              <p className="text-[#4e342e]/70 dark:text-white/70 text-[11px] mt-1 font-editorial-body">
                "The magnetic handshake clasp is absolute genius... pure artisan integrity."
              </p>
              <span className="text-[#cc5500] dark:text-[#2c3480] text-[10px] uppercase font-bold mt-2 block group-hover:underline">
                Read Collector Quotes →
              </span>
            </div>
          </Link>

          <Link
            to="/shipping"
            className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex items-start gap-4 hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-colors group"
          >
            <Award className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#4e342e] dark:text-white block uppercase">Signature Logo Gift Box</span>
              <p className="text-[#4e342e]/70 dark:text-white/70 text-[11px] mt-1 font-editorial-body">
                Every piece arrives in our custom rigid black gift box debossed with the Cora Hornby logo.
              </p>
              <span className="text-[#cc5500] dark:text-[#2c3480] text-[10px] uppercase font-bold mt-2 block group-hover:underline">
                Packaging & Dispatch Details →
              </span>
            </div>
          </Link>

          <Link
            to="/guarantees"
            className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex items-start gap-4 hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-colors group"
          >
            <ShieldCheck className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#4e342e] dark:text-white block uppercase">100% Money-Back Guarantee</span>
              <p className="text-[#4e342e]/70 dark:text-white/70 text-[11px] mt-1 font-editorial-body">
                30-day risk-free collecting with complimentary chain and cord sizing adjustments.
              </p>
              <span className="text-[#cc5500] dark:text-[#2c3480] text-[10px] uppercase font-bold mt-2 block group-hover:underline">
                Read Guarantees →
              </span>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}

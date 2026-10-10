import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  ShoppingBag, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Gift, 
  Truck, 
  ChevronRight
} from 'lucide-react';
import { BRAND_INFO, COLLECTIONS, TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function HomePage({ onAddToCart }) {
  // Carousel index for Curated Collections
  const [collectionSlide, setCollectionSlide] = useState(0);

  // Quick helper to safely grab product
  const getProduct = (slug) => PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];

  return (
    <div className="w-full bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] transition-colors duration-400">
      
      {/* =========================================================================
          MAIN 50/50 DUAL-PANE EDITORIAL SPLIT VIEWPORT
          Directly matches the uploaded official design mockup:
          Left Pane: Giant CORA HORNBY + Collar Necklace + Agate Pointers + Photo Collage + Collections
          Right Pane: METALS Watermark + Brazil Showcase + Cora Studio Story + Packaging
      ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#4e342e]/15 dark:border-white/15">
        
        {/* =====================================================================
            LEFT COLUMN
        ===================================================================== */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#4e342e]/15 dark:border-white/15 px-6 sm:px-10 lg:px-12 pt-28 pb-16 justify-between space-y-12">
          
          {/* 1. Header Bar Sub-Navigation (Mockup accurate) */}
          <div className="flex items-center justify-between border-b border-[#4e342e]/12 dark:border-white/12 pb-4 text-[11px] font-editorial-mono tracking-[0.16em] uppercase text-[#4e342e]/70 dark:text-white/70">
            <span className="font-semibold text-[#4e342e] dark:text-white">Est. 2018</span>
            <div className="flex items-center gap-6">
              <Link to="/collections" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Collections</Link>
              <Link to="/story" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">About</Link>
              <Link to="/shipping" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Contacts</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/shop" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Search</Link>
              <Link to="/shop" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Cart</Link>
            </div>
          </div>

          {/* 2. Hero Stacked Typography with Overlapping Collar Necklace & Pointers */}
          <div className="relative pt-6 pb-8">
            
            {/* Top Right Model Earring Portrait Crop */}
            <div className="absolute top-0 right-2 w-16 sm:w-20 aspect-square rounded-sm overflow-hidden border border-[#4e342e]/20 dark:border-white/20 shadow-md hidden sm:block">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg" 
                alt="Editorial Earring Styling"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>

            {/* Giant Bold Headline */}
            <div className="relative select-none text-center">
              <h1 className="font-sans font-black text-6xl sm:text-8xl xl:text-[10rem] tracking-tighter leading-[0.82] uppercase text-[#4e342e] dark:text-[#ffffff] transition-colors">
                CORA<br />
                HORNBY
              </h1>

              {/* Overlapping Crescent Collar Necklace with Agate (Exact Mockup Match) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="relative group pointer-events-auto">
                  <img
                    src="/mockup_assets/crescent-collar.png"
                    alt="Natural Agate Crescent Collar Necklace"
                    className="w-44 sm:w-56 xl:w-64 object-contain drop-shadow-[0_20px_40px_rgba(78,52,46,0.35)] dark:drop-shadow-[0_20px_40px_rgba(255,255,255,0.18)] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Top-Right Curved Annotation Pointer */}
                  <div className="absolute -top-3 -right-20 sm:-right-28 hidden xs:flex flex-col items-start text-left pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-editorial-mono leading-tight text-[#4e342e] dark:text-white max-w-[120px]">
                      Natural Agate & Heavy Silver
                    </span>
                    <svg className="w-16 h-8 text-[#cc5500] dark:text-[#2c3480]" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M5 25 C20 25, 45 15, 55 5" />
                      <circle cx="5" cy="25" r="2.5" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Bottom-Left Curved Annotation Pointer */}
                  <div className="absolute -bottom-4 -left-20 sm:-left-28 hidden xs:flex flex-col items-end text-right pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-editorial-mono leading-tight text-[#4e342e] dark:text-white max-w-[120px]">
                      Natural Agate & Heavy Silver
                    </span>
                    <svg className="w-16 h-8 text-[#cc5500] dark:text-[#2c3480]" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M55 5 C40 10, 20 25, 5 25" />
                      <circle cx="55" cy="5" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore All CTA Button right under necklace */}
            <div className="pt-6 flex justify-end">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-editorial-mono uppercase font-bold tracking-[0.18em] border border-[#cc5500] dark:border-[#2c3480] bg-[#cc5500]/10 dark:bg-[#2c3480]/20 text-[#cc5500] dark:text-[#ffffff] hover:bg-[#cc5500] hover:text-white dark:hover:bg-[#2c3480] transition-all"
              >
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* 3. Mid Block: Traveling the World + Raw Gold Ring Pointer */}
          <div className="pt-4 border-t border-[#4e342e]/12 dark:border-white/12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-8 space-y-2">
              <h2 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#4e342e] dark:text-white leading-tight">
                Traveling the World for Inspiration and Materials
              </h2>
              <p className="font-editorial-body text-sm sm:text-base text-[#4e342e]/80 dark:text-white/80 max-w-md leading-relaxed">
                The expedition around for inspiration and the coming up inspiration and Materials.
              </p>
            </div>

            {/* Gold Ring Macro Box + Pointer */}
            <div className="sm:col-span-4 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cc5500] dark:bg-[#2c3480]"></span>
                <span className="text-[10px] font-editorial-mono uppercase text-[#4e342e]/70 dark:text-white/70 whitespace-nowrap">
                  Raw 18-karat Gold
                </span>
              </div>
              <div className="w-16 h-14 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-1 rounded-sm shadow-sm overflow-hidden flex-shrink-0">
                <img 
                  src="/mockup_assets/gold-ring-macro.png" 
                  alt="Raw 18-karat Gold Ring" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4. Natural Surroundings Expedition Photo Collage */}
          <div className="space-y-3">
            <div className="grid grid-cols-6 gap-2 items-center bg-[#4e342e]/3 dark:bg-white/3 p-3 border border-[#4e342e]/10 dark:border-white/10 rounded-sm">
              {/* Photo 1: Model tall portrait */}
              <div className="col-span-2 aspect-[3/4] overflow-hidden rounded-xs">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg" 
                  alt="Model portrait" 
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              {/* Photo 2: Mountain peaks */}
              <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-xs">
                <img 
                  src="/travel_inspirations/greece-hero.jpg" 
                  alt="Meteora geological peak" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Photo 3: Gold rings & fabric */}
              <div className="col-span-2 aspect-square overflow-hidden rounded-xs">
                <img 
                  src="/mockup_assets/brazil-ring-sand.png" 
                  alt="Ring on linen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#4e342e]/70 dark:text-white/70 tracking-widest uppercase">
              <span>Natural surroundings expedition.</span>
              <span className="text-[#cc5500] dark:text-[#2c3480] font-bold">ATELIER · MAINE</span>
            </div>
          </div>

          {/* 5. CURATED COLLECTIONS & CRAFT (With Slider Controls) */}
          <div className="space-y-6 pt-6 border-t border-[#4e342e]/12 dark:border-white/12">
            <div className="flex items-center justify-between">
              <h3 className="font-display-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#4e342e] dark:text-white">
                CURATED COLLECTIONS & CRAFT
              </h3>
              <div className="flex items-center gap-3 font-editorial-mono text-xs">
                <button 
                  onClick={() => setCollectionSlide(prev => (prev === 0 ? 1 : 0))}
                  className="p-2 border border-[#4e342e]/20 dark:border-white/20 hover:bg-[#cc5500] hover:text-white dark:hover:bg-[#2c3480] transition-colors"
                  aria-label="Previous Collection"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setCollectionSlide(prev => (prev === 0 ? 1 : 0))}
                  className="p-2 border border-[#4e342e]/20 dark:border-white/20 hover:bg-[#cc5500] hover:text-white dark:hover:bg-[#2c3480] transition-colors"
                  aria-label="Next Collection"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-[#cc5500] dark:text-[#2c3480]">
                  {collectionSlide === 0 ? "01 / 02" : "02 / 02"}
                </span>
              </div>
            </div>

            {/* Asymmetrical Craft Mosaic */}
            <div className="grid grid-cols-4 gap-3 items-end">
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 rounded-sm">
                <img 
                  src="/mockup_assets/gold-ring-macro.png" 
                  alt="Hand-hammered gold ring" 
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 rounded-sm">
                <img 
                  src="/mockup_assets/greece-coin-earring.png" 
                  alt="Ancient coin earrings" 
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 rounded-sm">
                <img 
                  src="/mockup_assets/greece-cuff.png" 
                  alt="Hammered bronze cuff" 
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="p-2 bg-white/40 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 rounded-sm">
                <img 
                  src="/hero-zebra-jasper-3d.png" 
                  alt="African Zebra Jasper Bracelet" 
                  className="w-full aspect-square object-contain"
                />
              </div>
            </div>

            {/* Bottom 4 Pieces Row: V COLLECTIONS | 01  02 */}
            <div className="pt-4 border-t border-[#4e342e]/10 dark:border-white/10">
              <div className="flex items-center justify-between text-[10px] font-editorial-mono uppercase text-[#4e342e]/60 dark:text-white/60 pb-3">
                <span>EST. 2018</span>
                <span className="font-bold text-[#4e342e] dark:text-white">V COLLECTIONS | 01  02</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {PRODUCTS.slice(0, 4).map((item, idx) => (
                  <Link 
                    key={item.id} 
                    to={`/product/${item.slug}`}
                    className="group bg-white dark:bg-[#111111] p-2 border border-[#4e342e]/10 dark:border-white/10 flex flex-col justify-between hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-colors"
                  >
                    <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-1">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <span className="text-[9px] font-editorial-mono text-[#4e342e]/60 dark:text-white/60 block">0{idx + 1}</span>
                      <span className="text-[10px] font-editorial-mono font-bold text-[#4e342e] dark:text-white truncate block">
                        ${item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>


        {/* =====================================================================
            RIGHT COLUMN
        ===================================================================== */}
        <div className="flex flex-col px-6 sm:px-10 lg:px-12 pt-28 pb-16 justify-between space-y-12">
          
          {/* 1. Top Section with Ghost Outline "METALS" & Model Images */}
          <div className="relative overflow-hidden pt-2 pb-6">
            
            {/* Ghost Watermark Background Typography (Mockup accurate) */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-0">
              <span className="font-sans font-black text-7xl sm:text-9xl text-[#4e342e]/6 dark:text-white/8 uppercase tracking-widest block">
                METALS
              </span>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="max-w-xs space-y-3">
                <span className="text-[11px] font-editorial-mono uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] font-bold block">
                  01 → 03 DESTINATIONS
                </span>
                <h2 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#4e342e] dark:text-white leading-tight">
                  Traveling the World for Inspiration and Materials
                </h2>
                <p className="font-editorial-body text-sm text-[#4e342e]/80 dark:text-white/80 leading-relaxed">
                  The expedition around for inspiration and the coming up inspiration and Materials.
                </p>
              </div>

              {/* Top Right Model Photos */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-20 aspect-[3/4] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/travel_inspirations/namibia-hero.jpg" 
                    alt="Ceremonial jewelry look" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 aspect-[3/4] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/travel_inspirations/namibia-pair-2-inspiration.jpg" 
                    alt="Leather talisman look" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* 2. Destination Card: 01 / BRAZIL + Copacabana Collage */}
          <div className="p-6 bg-[#4e342e]/4 dark:bg-white/4 border border-[#4e342e]/15 dark:border-white/15 rounded-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Destination Highlight Box */}
              <div className="sm:col-span-6 space-y-3">
                <span className="text-xs font-editorial-mono font-bold text-[#cc5500] dark:text-[#2c3480] block">
                  01 /
                </span>
                <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#4e342e] dark:text-white uppercase tracking-tight">
                  BRAZIL
                </h3>
                <p className="font-editorial-body text-sm text-[#4e342e]/80 dark:text-white/80 leading-relaxed">
                  Deep gemstones of Copacabana™ shades, resonating its and senses, museums and culture.
                </p>
                <div className="pt-2">
                  <Link
                    to="/travels/brazil"
                    className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Brazil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Brazil Photo Collage */}
              <div className="sm:col-span-6 grid grid-cols-2 gap-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xs border border-[#4e342e]/10 dark:border-white/10">
                  <img 
                    src="/travel_inspirations/brazil-hero.jpg" 
                    alt="Copacabana beach" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xs border border-[#4e342e]/10 dark:border-white/10">
                  <img 
                    src="/mockup_assets/brazil-ring-sand.png" 
                    alt="Gold citrine ring on sand" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[16/7] overflow-hidden rounded-xs border border-[#4e342e]/10 dark:border-white/10">
                  <img 
                    src="/travel_inspirations/brazil-pair-2-jewelry.jpg" 
                    alt="Brazilian amethyst rough cluster" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* 3. Brand Story: I TRAVEL TO GATHER. (Authentic Studio Portrait of Cora) */}
          <div className="pt-6 border-t border-[#4e342e]/12 dark:border-white/12 space-y-6">
            
            {/* Social / Editorial Micro-Links */}
            <div className="flex items-center gap-4 text-[#4e342e]/60 dark:text-white/60 text-xs font-editorial-mono">
              <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">&lt;</span>
              <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">f</span>
              <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">ig</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              <div className="sm:col-span-7 space-y-4">
                <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#4e342e] dark:text-white leading-[0.92]">
                  I TRAVEL TO<br />
                  GATHER.
                </h3>
                <p className="font-editorial-body text-sm sm:text-base text-[#4e342e]/80 dark:text-white/80 leading-relaxed max-w-sm">
                  Designed with precious stones and semi-precious materials and with exceptional craftsmanship. Unique pieces crafted along the Maine coastline.
                </p>
                <div className="pt-2">
                  <Link
                    to="/story"
                    className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline"
                  >
                    <span>Read Cora's Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Real Photo of Cora Hornby at Studio Workbench */}
              <div className="sm:col-span-5 relative group">
                <div className="aspect-[4/5] bg-white/40 dark:bg-white/5 border border-[#4e342e]/20 dark:border-white/20 p-1.5 shadow-lg overflow-hidden rounded-sm">
                  <img 
                    src="/mockup_assets/cora-bench.png" 
                    alt="Cora Hornby working at her jewelry studio workbench" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="pt-1.5 flex items-center justify-between text-[10px] font-editorial-mono text-[#4e342e]/60 dark:text-white/60">
                  <span>CAPE ELIZABETH BENCH</span>
                  <span>EST. 2018</span>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Assurance & Packaging Section: Packaging, Shipping & Commitment */}
          <div className="pt-6 border-t border-[#4e342e]/12 dark:border-white/12 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display-serif text-xl sm:text-2xl font-bold text-[#4e342e] dark:text-white">
                Packaging, Shipping & Commitment
              </h4>
              <Link 
                to="/shipping" 
                className="text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex items-center gap-1"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Feature Box 1: Luxury Rigid Gift Box */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm space-y-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/packaging-box.png" 
                    alt="Debossed Logo Gift Box with Ribbon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-editorial-mono uppercase font-bold text-[#4e342e] dark:text-white block">
                  Debossed Gift Box
                </span>
              </div>

              {/* Feature Box 2: Branded Logo Pouch */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm space-y-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/packaging-pouch.png" 
                    alt="Organic Cotton Logo Drawstring Pouch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-editorial-mono uppercase font-bold text-[#4e342e] dark:text-white block">
                  Archival Pouch
                </span>
              </div>

              {/* Feature Box 3: Trust & Assurance Commitment */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm flex flex-col justify-between">
                <p className="text-[11px] font-editorial-body text-[#4e342e]/80 dark:text-white/80 leading-relaxed">
                  Each and every piece arrives wrapped in archival protective packaging, ready for gift-giving and lifetime safe storage.
                </p>
                <div className="pt-2 text-[10px] font-editorial-mono uppercase text-[#cc5500] dark:text-[#2c3480] font-bold">
                  30-Day Money-Back Guarantee
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

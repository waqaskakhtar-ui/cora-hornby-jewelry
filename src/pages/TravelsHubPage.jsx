import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Compass, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { TRAVEL_DESTINATIONS, PRODUCTS } from '../data/coraData';

export default function TravelsHubPage() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'materials', 'aesthetics'
  const [selectedCountryId, setSelectedCountryId] = useState('all');

  const greece = TRAVEL_DESTINATIONS.find(d => d.id === 'greece') || TRAVEL_DESTINATIONS[0];
  const namibia = TRAVEL_DESTINATIONS.find(d => d.id === 'namibia') || TRAVEL_DESTINATIONS[1];
  const brazil = TRAVEL_DESTINATIONS.find(d => d.id === 'brazil') || TRAVEL_DESTINATIONS[2];

  // Filtered destinations list
  const filteredDestinations = TRAVEL_DESTINATIONS.filter(d => {
    if (activeTab === 'materials') return d.isMaterialSource;
    if (activeTab === 'aesthetics') return !d.isMaterialSource;
    return true;
  });

  return (
    <div className="w-full bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] transition-colors duration-400">
      
      {/* =========================================================================
          MAIN 50/50 DUAL-PANE LOOKBOOK LAYOUT (MATCHING IMAGE 2 EXACTLY)
          Left Pane: 01 / GREECE + 03 / BRAZIL (with curved arrow annotations & pieces)
          Right Pane: Traveling the World + Filter Tabs + 02 / NAMIBIA (with 3 pieces)
      ========================================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#4e342e]/15 dark:border-white/15">
        
        {/* =====================================================================
            LEFT PANE: 01 / GREECE & 03 / BRAZIL
        ===================================================================== */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#4e342e]/15 dark:border-white/15 px-6 sm:px-10 lg:px-12 pt-28 pb-16 justify-between space-y-12">
          
          {/* Sub-Header bar (Mockup accurate) */}
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

          {/* Top Brand Title */}
          <div className="text-left select-none">
            <h1 className="font-sans font-black text-5xl sm:text-7xl xl:text-8xl tracking-tighter leading-[0.85] uppercase text-[#4e342e] dark:text-white">
              CORA<br />
              HORNBY
            </h1>
          </div>

          {/* SECTION 01 / GREECE (Design Inspiration) */}
          <div className="space-y-6 pt-4 border-t border-[#4e342e]/12 dark:border-white/12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-xs font-bold text-[#cc5500] dark:text-[#2c3480]">01 /</span>
                <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight uppercase text-[#4e342e] dark:text-white">
                  GREECE
                </h2>
              </div>
              <span className="text-[10px] font-editorial-mono uppercase tracking-widest px-2.5 py-1 border border-[#4e342e]/15 dark:border-white/15">
                Design Inspiration
              </span>
            </div>

            {/* Greece Imagery Cluster with Curved Annotation */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Landscape: Meteora sandstone & Aegean sky */}
                <div className="sm:col-span-7 aspect-[4/3] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/travel_inspirations/greece-hero.jpg" 
                    alt="Meteora monasteries and Aegean cliffs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Model Look Right */}
                <div className="sm:col-span-5 aspect-[3/4] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg" 
                    alt="Editorial jewelry model" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Curved Arrow Annotation: Ancient Aegean Spirals, coiled bronze armor */}
              <div className="pt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-editorial-body italic text-[#4e342e]/85 dark:text-white/85 max-w-xs">
                    Ancient Aegean Spirals, coiled bronze armor
                  </span>
                  <svg className="w-12 h-6 text-[#cc5500] dark:text-[#2c3480]" viewBox="0 0 50 25" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M5 20 C20 20, 35 15, 45 5" />
                    <circle cx="5" cy="20" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Greece 2 Product Cards: Ancient Coin Earring & Hammered Bronze Cuff */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm flex flex-col justify-between">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/mockup_assets/greece-coin-earring.png" 
                    alt="Ancient Coin Earring" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="font-editorial-body text-xs font-bold text-[#4e342e] dark:text-white block">
                    Ancient Coin Earring · $480
                  </span>
                  <Link 
                    to="/travels/greece" 
                    className="text-[10px] font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline block"
                  >
                    Shop Look →
                  </Link>
                </div>
              </div>

              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm flex flex-col justify-between">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/mockup_assets/greece-cuff.png" 
                    alt="Hammered Bronze Cuff" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="font-editorial-body text-xs font-bold text-[#4e342e] dark:text-white block">
                    Hammered Bronze Cuff · $550
                  </span>
                  <Link 
                    to="/travels/greece" 
                    className="text-[10px] font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline block"
                  >
                    Shop Look →
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 03 / BRAZIL (Material Sourcing: Amethyst & Citrine) */}
          <div className="space-y-6 pt-8 border-t border-[#4e342e]/15 dark:border-white/15">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-xs font-bold text-[#cc5500] dark:text-[#2c3480]">03 /</span>
                <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight uppercase text-[#4e342e] dark:text-white">
                  BRAZIL
                </h2>
              </div>
              <span className="text-[10px] font-editorial-mono uppercase tracking-widest px-2.5 py-1 bg-[#cc5500] dark:bg-[#2c3480] text-white font-bold">
                Material Source: Amethyst & Citrine
              </span>
            </div>

            {/* Brazil Curved Annotation: Copacabana Pattern // Raw Amethyst & Citrine */}
            <div className="flex items-center gap-2 text-xs font-editorial-body text-[#4e342e]/85 dark:text-white/85">
              <span>Copacabana Pattern // Raw Amethyst & Citrine - $1,250</span>
              <svg className="w-10 h-5 text-[#cc5500] dark:text-[#2c3480]" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M5 15 C15 15, 25 10, 35 5" />
                <circle cx="5" cy="15" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Brazil Visual Triad: Mosaic Waves + Raw Amethyst Cluster + Amethyst Citrine Ring */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              {/* Copacabana Wave Stones Mosaic */}
              <div className="sm:col-span-5 aspect-[3/4] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                <img 
                  src="/mockup_assets/brazil-mosaic.png" 
                  alt="Copacabana wave pavement" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Raw Amethyst & Amethyst Ring Stack */}
              <div className="sm:col-span-7 space-y-3">
                <div className="aspect-[16/9] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/brazil-amethyst-raw.png" 
                    alt="Raw Brazilian amethyst minerals" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[16/9] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/brazil-amethyst-ring.png" 
                    alt="Hand-forged amethyst ring in 18k gold" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/travels/brazil" 
                className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:translate-x-1 transition-transform"
              >
                <span>View Brazil Lookbook & Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>


        {/* =====================================================================
            RIGHT PANE: HOOK + TABS + 02 / NAMIBIA & SOUTH AFRICA (3 PIECES)
        ===================================================================== */}
        <div className="flex flex-col px-6 sm:px-10 lg:px-12 pt-28 pb-16 justify-between space-y-12">
          
          {/* Top Hook: Traveling the World + Explore CTAs */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 max-w-md">
                <h2 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#4e342e] dark:text-white leading-tight">
                  Traveling the World for Inspiration and Materials
                </h2>
                <p className="font-editorial-body text-sm text-[#4e342e]/80 dark:text-white/80 leading-relaxed">
                  The expedition around for inspiration and the coming up inspiration and Materials.
                </p>
              </div>

              <Link
                to="/shop"
                className="inline-flex items-center gap-1.5 text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex-shrink-0 pt-1"
              >
                <span>Explore CTAs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Filter Tabs (Mockup accurate): All Regions | Materials | Aesthetics */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#4e342e]/12 dark:border-white/12">
              <div className="flex items-center gap-6 text-sm font-editorial-mono uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`pb-1 transition-all ${
                    activeTab === 'all'
                      ? 'border-b-2 border-[#cc5500] dark:border-[#2c3480] font-bold text-[#4e342e] dark:text-white'
                      : 'text-[#4e342e]/60 dark:text-white/60 hover:text-[#4e342e] dark:hover:text-white'
                  }`}
                >
                  All Regions (8)
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`pb-1 transition-all ${
                    activeTab === 'materials'
                      ? 'border-b-2 border-[#cc5500] dark:border-[#2c3480] font-bold text-[#4e342e] dark:text-white'
                      : 'text-[#4e342e]/60 dark:text-white/60 hover:text-[#4e342e] dark:hover:text-white'
                  }`}
                >
                  Materials Sourced
                </button>
                <button
                  onClick={() => setActiveTab('aesthetics')}
                  className={`pb-1 transition-all ${
                    activeTab === 'aesthetics'
                      ? 'border-b-2 border-[#cc5500] dark:border-[#2c3480] font-bold text-[#4e342e] dark:text-white'
                      : 'text-[#4e342e]/60 dark:text-white/60 hover:text-[#4e342e] dark:hover:text-white'
                  }`}
                >
                  Aesthetics & Culture
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#4e342e]/60 dark:text-white/60">
                <Search className="w-3.5 h-3.5" />
                <span>FILTER</span>
              </div>
            </div>

            {/* 8-Region Quick Selector Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TRAVEL_DESTINATIONS.map((d) => (
                <Link
                  key={d.id}
                  to={`/travels/${d.id}`}
                  className="px-2.5 py-1 text-[10px] font-editorial-mono uppercase border border-[#4e342e]/15 dark:border-white/15 hover:border-[#cc5500] dark:hover:border-[#2c3480] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
                >
                  {d.country}
                </Link>
              ))}
            </div>

          </div>

          {/* SECTION 02 / NAMIBIA & SOUTH AFRICA (Mockup accurate layout) */}
          <div className="space-y-6 pt-6 border-t border-[#4e342e]/12 dark:border-white/12">
            
            <div className="space-y-1">
              <span className="font-editorial-mono text-xs font-bold text-[#cc5500] dark:text-[#2c3480]">
                02 /
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#4e342e] dark:text-white leading-[0.92]">
                NAMIBIA &amp;<br />
                SOUTH AFRICA
              </h2>
            </div>

            {/* Namibia Visual Triad: Terracotta Fabric + Mountain Canyon + Beaded Collar Model */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              
              {/* Left Stack: Terracotta Fabric & Canyon */}
              <div className="sm:col-span-6 space-y-3">
                <div className="aspect-[4/3] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/namibia-fabric.png" 
                    alt="Sun-baked terracotta linen texture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/travel_inspirations/namibia-pair-1-inspiration.jpg" 
                    alt="Namibian red dune landscape" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: African Beadwork Collar Model with Curved Arrow */}
              <div className="sm:col-span-6 relative">
                <div className="aspect-[3/4] bg-white/20 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden rounded-xs">
                  <img 
                    src="/mockup_assets/namibia-collar-model.png" 
                    alt="Model wearing authentic African layered beadwork collar necklace" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Curved Arrow Annotation: View Story */}
                <div className="pt-2 flex items-center justify-end gap-1.5">
                  <svg className="w-10 h-5 text-[#cc5500] dark:text-[#2c3480]" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M35 15 C25 15, 15 10, 5 5" />
                    <circle cx="35" cy="15" r="2" fill="currentColor" />
                  </svg>
                  <Link 
                    to="/travels/namibia" 
                    className="text-xs font-editorial-body italic text-[#4e342e]/85 dark:text-white/85 hover:underline"
                  >
                    View Story
                  </Link>
                </div>
              </div>

            </div>

            {/* Namibia 3 Product Cards in a Row (Mockup accurate): $480, $600, $1,250 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              
              {/* Product 1: Sun-Baked Beadwork - $480 */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm flex flex-col justify-between">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/mockup_assets/namibia-bead-1.png" 
                    alt="Sun-Baked Beadwork Necklace" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10 space-y-1.5">
                  <span className="font-editorial-body text-xs font-bold text-[#4e342e] dark:text-white block">
                    Sun-Baked Beadwork · $480
                  </span>
                  <Link 
                    to="/travels/namibia" 
                    className="text-[10px] font-editorial-mono uppercase font-bold text-[#4e342e]/70 dark:text-white/70 hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center justify-between"
                  >
                    <span>View Story</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Product 2: Sun-Baked Beadwork - $600 (Shop Piece highlighted button) */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#cc5500]/50 dark:border-[#2c3480]/50 rounded-sm flex flex-col justify-between shadow-sm">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/mockup_assets/namibia-bead-2.png" 
                    alt="Sun-Baked Gold Collar Bib Piece" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10 space-y-1.5">
                  <span className="font-editorial-body text-xs font-bold text-[#4e342e] dark:text-white block">
                    Sun-Baked Beadwork · $600
                  </span>
                  <Link 
                    to="/travels/namibia" 
                    className="text-[10px] font-editorial-mono uppercase font-bold bg-[#cc5500] dark:bg-[#2c3480] text-white px-2.5 py-1 text-center block transition-transform hover:scale-102"
                  >
                    Shop Piece →
                  </Link>
                </div>
              </div>

              {/* Product 3: Sun-Baked Beadwork - $1,250 */}
              <div className="p-3 bg-white/50 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 rounded-sm flex flex-col justify-between">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/mockup_assets/namibia-bead-3.png" 
                    alt="Sun-Baked Amber Drop Statement Piece" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 border-t border-[#4e342e]/10 dark:border-white/10 space-y-1.5">
                  <span className="font-editorial-body text-xs font-bold text-[#4e342e] dark:text-white block">
                    Sun-Baked Beadwork · $1,250
                  </span>
                  <Link 
                    to="/travels/namibia" 
                    className="text-[10px] font-editorial-mono uppercase font-bold text-[#4e342e]/70 dark:text-white/70 hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center justify-between"
                  >
                    <span>View Story</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* View All 8 Countries Full Directory CTA */}
          <div className="pt-6 border-t border-[#4e342e]/12 dark:border-white/12 flex items-center justify-between">
            <span className="text-xs font-editorial-mono uppercase text-[#4e342e]/70 dark:text-white/70">
              8 TOTAL EXPEDITION JOURNALS DOCUMENTED
            </span>
            <Link 
              to="/travels/guatemala" 
              className="text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Guatemala Jade Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

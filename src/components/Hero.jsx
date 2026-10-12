import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Sparkles, Box, Compass } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExploreClick, onSelectPiece, onFilterSelect, onNavigate }) {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const filterBarRef = useRef(null);

  // Toggle between interactive 3D WebGL talisman and High-Res Studio Zebra Jasper piece
  const [centerpieceMode, setCenterpieceMode] = useState('3d'); // '3d' or 'photo'
  
  // Interactive Dropdown states for the bottom filter bar
  const [activeDropdown, setActiveDropdown] = useState(null); // 'region' | 'material' | 'aesthetic' | 'sort' | null

  // Tilt physics for photo mode
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleCenterpieceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12, active: true });
  };

  const handleCenterpieceMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftColRef.current, { opacity: 0, y: 24 });
      gsap.set(rightColRef.current, { opacity: 0, scale: 0.96 });
      gsap.set(filterBarRef.current, { opacity: 0, y: 15 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(leftColRef.current, { opacity: 1, y: 0, duration: 1.0 }, 0.15)
        .to(rightColRef.current, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 0.25)
        .to(filterBarRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.6);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const regions = [
    { name: "All Regions", id: "all" },
    { name: "Greece (Aegean Blue & Gold)", id: "greece" },
    { name: "Namibia (African Zebra Jasper)", id: "namibia" },
    { name: "Brazil (Amethyst & Citrine)", id: "brazil" },
    { name: "Guatemala (Mayan Carved Jade)", id: "guatemala" },
    { name: "Germany (Bauhaus Silver)", id: "germany" },
    { name: "Indonesia (Handmade Batik)", id: "indonesia" },
    { name: "Belize (Caribbean Coral & Brass)", id: "belize" },
    { name: "India (Jaipur Fire Carnelian)", id: "india" }
  ];

  const materials = [
    { name: "All Materials", id: "all" },
    { name: "Hammered Brass", id: "brass" },
    { name: "Sterling Silver", id: "silver" },
    { name: "African Zebra Jasper", id: "jasper" },
    { name: "Mayan Imperial Jade", id: "jade" },
    { name: "Brazilian Citrine", id: "citrine" },
    { name: "Freshwater Keshi Pearls", id: "pearls" }
  ];

  const aesthetics = [
    { name: "All Collections", id: "all" },
    { name: "Mixed Metals", id: "mixed-metals" },
    { name: "Geometrics", id: "geometrics" },
    { name: "Mayan Sol", id: "mayan-sol" },
    { name: "Coastal Pearls", id: "pearls" },
    { name: "Black is Back", id: "black-is-back" }
  ];

  const sortOptions = [
    { name: "Curated Bench Order", id: "curated" },
    { name: "Price: Low to High", id: "price-asc" },
    { name: "Price: High to Low", id: "price-desc" },
    { name: "Most Recent Atelier Harvest", id: "newest" }
  ];

  const handleSelectOption = (category, value) => {
    setActiveDropdown(null);
    if (onFilterSelect) {
      onFilterSelect(category, value);
    } else if (onNavigate) {
      if (category === 'region' && value !== 'all') {
        onNavigate('travels');
      } else {
        onNavigate('shop');
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#FAF8F5] dark:bg-[#0C0B0A] text-[#1C1B19] dark:text-[#F8F6F2] pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 transition-colors duration-500 overflow-hidden font-sans"
    >
      <div className="max-w-[1600px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Header Brow with Client Theme */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8E4DA] dark:border-[#262421] gap-3 text-xs tracking-[0.2em] text-[#7A766E] dark:text-[#9A968E] uppercase font-semibold">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A88B58]"></span>
            <span className="text-[#1C1B19] dark:text-[#F8F6F2]">
              CORA HORNBY JEWELRY · TRAVELING THE WORLD FOR INSPIRATION &amp; MATERIALS
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>CAPE ELIZABETH, MAINE BENCH</span>
            <span className="text-[#A88B58]">ONE-OF-A-KIND CREATIONS</span>
          </div>
        </div>

        {/* Expansive 2-Column Architectural Hero Grid (Zero Text Overlap, Generous Breathing Room) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-6 sm:py-12">
          
          {/* Left Column: Architectural Montserrat Content */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EFE7] dark:bg-[#1A1816] border border-[#DDD8CD] dark:border-[#2D2A26] rounded-full text-[11px] font-bold tracking-[0.2em] text-[#A88B58] uppercase">
              <span>ATELIER ARCHIVE</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1C1B19] dark:text-[#F8F6F2] leading-[1.12] tracking-tight uppercase">
              Traveling the World for Inspiration <br className="hidden sm:inline" />
              <span className="text-[#A88B58] font-light">&amp; Materials.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#524F48] dark:text-[#ACA79D] leading-[1.8] max-w-2xl font-normal">
              Hand-crafted at our studio bench on the rocky coast of Maine using hammered metals, supple leather, freshwater pearls, semi-precious stones, and crystalline druzies. Directly sourcing raw materials like imperial jade in Guatemala and amethyst &amp; citrine in Brazil, informed by architectural motifs from Greece to Germany.
            </p>

            {/* The 3 Ways of Browsing (Client's Core Taxonomy) */}
            <div className="pt-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A766E] dark:text-[#9A968E]">
                Explore The Collection 3 Ways:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate ? onNavigate('travels') : onExploreClick && onExploreClick()}
                  className="px-4 py-2.5 rounded-xl bg-[#F4F1E9] dark:bg-[#181614] border border-[#DCD6C9] dark:border-[#2E2B27] text-xs font-semibold text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58] hover:text-[#A88B58] transition-all flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-[#A88B58] font-bold">01</span>
                  <span>Travel Inspiration (8 Countries)</span>
                </button>
                <button
                  onClick={() => onNavigate ? onNavigate('collections') : onExploreClick && onExploreClick()}
                  className="px-4 py-2.5 rounded-xl bg-[#F4F1E9] dark:bg-[#181614] border border-[#DCD6C9] dark:border-[#2E2B27] text-xs font-semibold text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58] hover:text-[#A88B58] transition-all flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-[#A88B58] font-bold">02</span>
                  <span>Collections (5 Lines)</span>
                </button>
                <button
                  onClick={() => onNavigate ? onNavigate('shop') : onExploreClick && onExploreClick()}
                  className="px-4 py-2.5 rounded-xl bg-[#F4F1E9] dark:bg-[#181614] border border-[#DCD6C9] dark:border-[#2E2B27] text-xs font-semibold text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58] hover:text-[#A88B58] transition-all flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-[#A88B58] font-bold">03</span>
                  <span>Product Types (5 Archetypes)</span>
                </button>
              </div>
            </div>

            {/* CTAs with Generous Margins */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate ? onNavigate('shop') : onExploreClick && onExploreClick()}
                className="px-8 py-3.5 rounded-xl bg-[#1C1B19] dark:bg-[#F8F6F2] text-white dark:text-[#1C1B19] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-white transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Discover Archive</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate && onNavigate('craftsmanship')}
                className="px-8 py-3.5 rounded-xl border border-[#D5D0C5] dark:border-[#38342F] text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58] transition-all"
              >
                Atelier Craftsmanship
              </button>
            </div>

          </div>

          {/* Right Column: Dedicated Jewelry Showcase (Zero Overlap, Warm Ambient Glow) */}
          <div ref={rightColRef} className="lg:col-span-5 flex flex-col items-center">
            
            {/* Mode Switcher Pill */}
            <div className="mb-4 flex items-center gap-1.5 p-1 bg-[#F4F1E9] dark:bg-[#181614] border border-[#DCD6C9] dark:border-[#2E2B27] rounded-full shadow-2xs">
              <button
                onClick={() => setCenterpieceMode('3d')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                  centerpieceMode === '3d'
                    ? 'bg-[#1C1B19] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#1C1B19] shadow-xs'
                    : 'text-[#7A766E] hover:text-[#1C1B19] dark:hover:text-[#FAF8F5]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#A88B58]" />
                <span>3D Shader Talisman</span>
              </button>
              <button
                onClick={() => setCenterpieceMode('photo')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                  centerpieceMode === 'photo'
                    ? 'bg-[#1C1B19] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#1C1B19] shadow-xs'
                    : 'text-[#7A766E] hover:text-[#1C1B19] dark:hover:text-[#FAF8F5]'
                }`}
              >
                <Box className="w-3 h-3 text-[#A88B58]" />
                <span>Zebra Jasper Piece</span>
              </button>
            </div>

            {/* Dedicated Exhibition Frame with Expansive Whitespace */}
            <div
              className="relative w-full max-w-lg aspect-square bg-[#F5F2EA] dark:bg-[#161412] border border-[#E2DDD2] dark:border-[#2B2824] rounded-3xl p-8 sm:p-10 flex items-center justify-center shadow-xs cursor-pointer group"
              onMouseMove={handleCenterpieceMouseMove}
              onMouseLeave={handleCenterpieceMouseLeave}
              onClick={() => onSelectPiece && onSelectPiece({
                name: "African Zebra Jasper & Silver Cube Bracelet",
                category: "Bracelets / Stone & Silver",
                material: "Natural African zebra jasper cubes, solid sterling silver architectural spacers, magnetic clasp",
                price: "$145.00",
                origin: "Cape Elizabeth, Maine Studio",
                description: "A sculptural studio masterpiece. Individually cut cubic black and white African zebra jasper stones separated by mirror-polished sterling silver square spacers. Fastened with a high-strength magnetic closure.",
                image: "/hero-zebra-jasper-3d.png"
              })}
            >
              {/* Warm Ambient Backlight Aura */}
              <div
                className={`absolute inset-8 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out ${
                  tilt.active ? 'opacity-100 scale-105' : 'opacity-70 scale-95'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(168, 139, 88, 0.24) 0%, rgba(168, 139, 88, 0.06) 60%, transparent 80%)',
                }}
              />

              {/* Render 3D Canvas or Photo */}
              {centerpieceMode === '3d' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Hero3DCanvas className="w-full h-full" />
                  <div className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#A88B58] pointer-events-none bg-white/80 dark:bg-black/80 px-2.5 py-1 rounded-full border border-[#A88B58]/30 backdrop-blur-xs">
                    Rotate With Cursor
                  </div>
                </div>
              ) : (
                <div
                  className="relative aspect-square flex items-center justify-center will-change-transform w-full h-full"
                  style={{
                    transform: tilt.active
                      ? `perspective(850px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`
                      : 'perspective(850px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                    transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <img
                    src="/hero-zebra-jasper-3d.png"
                    alt="Cora Hornby African Zebra Jasper Bracelet"
                    className="relative z-10 max-h-[85%] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out"
                    loading="eager"
                  />
                </div>
              )}

              {/* Clean Bottom Specification Card (Disciplined, Zero Overlap) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#1E1C1A]/95 backdrop-blur-md border border-[#E0DCD2] dark:border-[#35312C] rounded-2xl p-4 flex items-center justify-between shadow-md group-hover:border-[#A88B58] transition-all">
                <div className="space-y-0.5 text-left">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#A88B58] font-bold">
                    Featured Masterpiece · Namibia
                  </div>
                  <div className="text-xs font-bold text-[#1C1B19] dark:text-[#F8F6F2]">
                    African Zebra Jasper &amp; Silver Cube Bracelet
                  </div>
                </div>
                <div className="text-sm font-extrabold text-[#A88B58] pl-4 border-l border-[#ECE8DF] dark:border-[#35312C]">
                  $145.00
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Structured Bottom Filter & Assurance Strip */}
        <div
          ref={filterBarRef}
          className="w-full pt-6 border-t border-[#E8E4DA] dark:border-[#262421] flex flex-wrap items-center justify-between gap-4 text-xs font-medium"
        >
          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A766E] dark:text-[#9A968E]">
              Quick Filter:
            </span>

            {/* 1. Regions */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'region' ? null : 'region')}
                className={`px-3.5 py-1.5 rounded-lg border flex items-center gap-2 uppercase tracking-[0.12em] transition-all font-semibold ${
                  activeDropdown === 'region'
                    ? 'border-[#A88B58] bg-white dark:bg-[#181614] text-[#A88B58]'
                    : 'border-[#DCD6C9] dark:border-[#2E2B27] bg-[#F7F5EE] dark:bg-[#161412] text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58]'
                }`}
              >
                <Compass className="w-3 h-3 text-[#A88B58]" />
                <span>All 8 Regions</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'region' && (
                <div className="absolute bottom-full mb-2 left-0 w-64 bg-white dark:bg-[#161514] border border-[#DCD6C9] dark:border-[#33302B] rounded-xl shadow-xl py-2 z-50 text-xs max-h-72 overflow-y-auto">
                  <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-[#7A766E] border-b border-[#ECE8DF] dark:border-[#2D2A26] mb-1 font-bold">
                    Select Destination
                  </div>
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => handleSelectOption('region', r.id)}
                      className="w-full text-left px-3.5 py-2 hover:bg-[#A88B58]/10 hover:text-[#A88B58] transition-colors truncate font-medium"
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Materials */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'material' ? null : 'material')}
                className={`px-3.5 py-1.5 rounded-lg border flex items-center gap-2 uppercase tracking-[0.12em] transition-all font-semibold ${
                  activeDropdown === 'material'
                    ? 'border-[#A88B58] bg-white dark:bg-[#181614] text-[#A88B58]'
                    : 'border-[#DCD6C9] dark:border-[#2E2B27] bg-[#F7F5EE] dark:bg-[#161412] text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58]'
                }`}
              >
                <span>Materials</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'material' && (
                <div className="absolute bottom-full mb-2 left-0 w-60 bg-white dark:bg-[#161514] border border-[#DCD6C9] dark:border-[#33302B] rounded-xl shadow-xl py-2 z-50 text-xs max-h-72 overflow-y-auto">
                  <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-[#7A766E] border-b border-[#ECE8DF] dark:border-[#2D2A26] mb-1 font-bold">
                    Select Material
                  </div>
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => handleSelectOption('material', m.id)}
                      className="w-full text-left px-3.5 py-2 hover:bg-[#A88B58]/10 hover:text-[#A88B58] transition-colors font-medium"
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Collections */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'aesthetic' ? null : 'aesthetic')}
                className={`px-3.5 py-1.5 rounded-lg border flex items-center gap-2 uppercase tracking-[0.12em] transition-all font-semibold ${
                  activeDropdown === 'aesthetic'
                    ? 'border-[#A88B58] bg-white dark:bg-[#181614] text-[#A88B58]'
                    : 'border-[#DCD6C9] dark:border-[#2E2B27] bg-[#F7F5EE] dark:bg-[#161412] text-[#1C1B19] dark:text-[#F8F6F2] hover:border-[#A88B58]'
                }`}
              >
                <span>Collections</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'aesthetic' && (
                <div className="absolute bottom-full mb-2 left-0 w-56 bg-white dark:bg-[#161514] border border-[#DCD6C9] dark:border-[#33302B] rounded-xl shadow-xl py-2 z-50 text-xs max-h-72 overflow-y-auto">
                  <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-[#7A766E] border-b border-[#ECE8DF] dark:border-[#2D2A26] mb-1 font-bold">
                    Select Collection
                  </div>
                  {aesthetics.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => handleSelectOption('aesthetic', a.id)}
                      className="w-full text-left px-3.5 py-2 hover:bg-[#A88B58]/10 hover:text-[#A88B58] transition-colors font-medium"
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Status & Assurances */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#7A766E] dark:text-[#9A968E] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100% Handcrafted at Maine Bench · Insured Dispatch</span>
            </span>
            <button
              onClick={() => onNavigate ? onNavigate('shop') : onExploreClick && onExploreClick()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1B19] dark:bg-[#F8F6F2] text-[#FAF8F5] dark:text-[#1C1B19] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF8F5] uppercase tracking-[0.14em] font-bold text-xs transition-all shadow-xs"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}


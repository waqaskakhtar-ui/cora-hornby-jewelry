import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Sparkles, Box, Compass } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExploreClick, onSelectPiece, onFilterSelect, onNavigate }) {
  const heroRef = useRef(null);
  const coraTypeRef = useRef(null);
  const travelsTypeRef = useRef(null);
  const centerpieceRef = useRef(null);
  const supportingLeftRef = useRef(null);
  const supportingRightRef = useRef(null);
  const annotationRef = useRef(null);
  const filterBarRef = useRef(null);

  // Toggle between interactive 3D WebGL talisman and High-Res Studio Zebra Jasper piece
  const [centerpieceMode, setCenterpieceMode] = useState('3d'); // '3d' or 'photo'
  
  // Interactive Dropdown states for the mockup bottom bar
  const [activeDropdown, setActiveDropdown] = useState(null); // 'region' | 'material' | 'aesthetic' | 'sort' | null

  // Tilt physics for photo mode
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleCenterpieceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14, active: true });
  };

  const handleCenterpieceMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(coraTypeRef.current, { opacity: 0, y: -30 });
      gsap.set(travelsTypeRef.current, { opacity: 0, y: 30 });
      gsap.set(centerpieceRef.current, { opacity: 0, scale: 0.92 });
      gsap.set([supportingLeftRef.current, supportingRightRef.current], { opacity: 0, y: 25 });
      gsap.set(annotationRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(filterBarRef.current, { opacity: 0, y: 15 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(coraTypeRef.current, { opacity: 1, y: 0, duration: 1.1 }, 0.1)
        .to(travelsTypeRef.current, { opacity: 1, y: 0, duration: 1.1 }, 0.2)
        .to(centerpieceRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, 0.3)
        .to(supportingLeftRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
        .to(supportingRightRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(annotationRef.current, { opacity: 1, scale: 1, duration: 0.7 }, 0.75)
        .to(filterBarRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9);

      // Monumental parallax scrub
      gsap.to(coraTypeRef.current, {
        y: -45,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      });

      gsap.to(travelsTypeRef.current, {
        y: 45,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      });

      gsap.to(centerpieceRef.current, {
        y: 70,
        scale: 0.96,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        }
      });
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
      className="relative min-h-[96svh] lg:min-h-[100svh] w-full bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-24 sm:pt-28 pb-6 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden transition-colors duration-500"
    >
      {/* Top Header Row with Client Theme */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-editorial-mono text-[#73716B] dark:text-[#9E9A90] uppercase tracking-[0.16em] pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A88B58]"></span>
          <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">
            CORA HORNBY JEWELRY · TRAVELING THE WORLD FOR INSPIRATION AND MATERIALS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="text-[#8A867E] dark:text-[#7E7A70]">CAPE ELIZABETH, MAINE BENCH</span>
          <span className="text-[#111111] dark:text-[#FAF9F5]">ONE-OF-A-KIND CREATIONS</span>
        </div>
      </div>

      {/* Main Compositional Viewport with Monumental [CORA HORNBY] & [TRAVELS] + 3D Centerpiece */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center my-3 min-h-[520px] lg:min-h-[640px]">
        
        {/* 1A. MONUMENTAL TYPOGRAPHY: [CORA HORNBY] - Matches High-Gloss Editorial Mockup */}
        <div
          ref={coraTypeRef}
          className="w-full text-center select-none pointer-events-none z-0 tracking-[-0.04em] uppercase font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5] text-fluid-monumental leading-[0.8] opacity-[0.96] transition-colors duration-500"
        >
          CORA HORNBY
        </div>

        {/* 2. THE 3D JEWELRY CENTERPIECE WITH INTERACTIVE WEBGL THREE.JS & PHOTO MODE SWITCHER */}
        <div
          ref={centerpieceRef}
          className="relative z-10 w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px] -my-10 sm:-my-14 lg:-my-20 flex flex-col items-center"
        >
          {/* Mode Switcher Pill */}
          <div className="mb-2 z-30 flex items-center gap-1.5 p-1 bg-[#FAF9F5]/90 dark:bg-[#161514]/90 backdrop-blur-md border border-[#111111]/12 dark:border-white/15 rounded-full shadow-xs">
            <button
              onClick={() => setCenterpieceMode('3d')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-editorial-mono uppercase tracking-[0.12em] transition-all ${
                centerpieceMode === '3d'
                  ? 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                  : 'text-[#73716B] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
              }`}
            >
              <Sparkles className="w-2.5 h-2.5 text-[#A88B58]" />
              <span>3D TALISMAN (WEBGL)</span>
            </button>
            <button
              onClick={() => setCenterpieceMode('photo')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-editorial-mono uppercase tracking-[0.12em] transition-all ${
                centerpieceMode === 'photo'
                  ? 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] font-bold shadow-xs'
                  : 'text-[#73716B] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
              }`}
            >
              <Box className="w-2.5 h-2.5 text-[#A88B58]" />
              <span>ZEBRA JASPER (ATELIER)</span>
            </button>
          </div>

          {/* Interactive Centerpiece Container */}
          <div
            className="relative w-full aspect-square max-h-[460px] flex items-center justify-center cursor-pointer group"
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
            {/* Subtle Archival Exhibition Crosshairs on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
              <span className="absolute top-1 left-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute top-1 right-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute bottom-1 left-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
              <span className="absolute bottom-1 right-1 text-[11px] font-editorial-mono text-[#A88B58] select-none leading-none">+</span>
            </div>

            {/* Environmental Mineral Backlight Aura that blooms on hover */}
            <div
              className={`absolute inset-4 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out ${
                tilt.active ? 'opacity-100 scale-110' : 'opacity-60 scale-95'
              }`}
              style={{
                background: 'radial-gradient(circle, rgba(168, 139, 88, 0.28) 0%, rgba(168, 139, 88, 0.08) 50%, transparent 75%)',
              }}
            />

            {/* Render 3D Canvas or Photo */}
            {centerpieceMode === '3d' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Hero3DCanvas className="w-full h-full" />
                <div className="absolute bottom-2 font-editorial-mono text-[9px] uppercase tracking-[0.16em] text-[#A88B58] pointer-events-none bg-[#FAF9F5]/80 dark:bg-[#0A0A0A]/80 px-2.5 py-0.5 rounded-full border border-[#A88B58]/30 backdrop-blur-xs">
                  INTERACTIVE 3D SHADER · ROTATE WITH CURSOR
                </div>
              </div>
            ) : (
              <div
                className="relative aspect-square flex items-center justify-center will-change-transform w-full h-full"
                style={{
                  transform: tilt.active
                    ? `perspective(850px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.04, 1.04, 1.04)`
                    : 'perspective(850px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                  transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Dynamic Contact Floor Shadow */}
                <div
                  className="absolute bottom-5 w-[65%] h-5 bg-[#111111]/15 dark:bg-black/60 blur-xl rounded-full transform scale-y-50 pointer-events-none transition-transform duration-200"
                  style={{
                    transform: `scaleY(0.5) translateX(${-tilt.x * 1.5}px)`,
                  }}
                />

                {/* 3D Render Image */}
                <img
                  src="/hero-zebra-jasper-3d.png"
                  alt="Cora Hornby African Zebra Jasper Bracelet"
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out"
                  loading="eager"
                />
              </div>
            )}

            {/* CURVED LEADER CALLOUT (Matching Mockup with Curved Vector Pointer Line) */}
            <div
              ref={annotationRef}
              className="mt-3 sm:mt-0 sm:absolute sm:top-8 sm:-right-10 md:-right-24 z-30 pointer-events-auto"
            >
              <div className="relative flex items-center sm:items-start justify-center sm:justify-start gap-2.5">
                <svg 
                  className="hidden sm:block w-20 sm:w-28 h-14 stroke-[#A88B58] fill-none overflow-visible" 
                  viewBox="0 0 120 60"
                >
                  <circle cx="2" cy="52" r="3" className="fill-[#A88B58]" />
                  <path d="M 2 52 Q 45 20, 118 12" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="118" cy="12" r="2.5" className="fill-[#A88B58]" />
                </svg>

                <div className="bg-[#FAF9F5]/95 dark:bg-[#161514]/95 backdrop-blur-md px-3.5 py-2.5 border border-[#111111]/12 dark:border-white/15 shadow-md max-w-[280px] sm:max-w-[220px] transition-all duration-300 group-hover:border-[#A88B58] group-hover:shadow-lg">
                  <div className="text-left">
                    <div className="font-editorial-mono text-[9px] uppercase tracking-[0.16em] text-[#A88B58] font-bold">
                      ZEBRA JASPER · STERLING
                    </div>
                    <div className="font-editorial-mono text-[10px] text-[#111111] dark:text-[#FAF9F5] font-semibold mt-0.5">
                      HANDCRAFTED IN MAINE
                    </div>
                    <div className="font-editorial-mono text-[9px] text-[#73716B] dark:text-[#9E9A90] mt-0.5">
                      43°33'56"N · 70°12'01"W
                    </div>
                  </div>
                  <div className="font-editorial-mono text-[11px] text-[#A88B58] dark:text-[#B09462] font-bold mt-1 text-right">
                    $145.00
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 1B. MONUMENTAL TYPOGRAPHY: [TRAVELS] - Layered underneath/with centerpiece */}
        <div
          ref={travelsTypeRef}
          className="w-full text-center select-none pointer-events-none z-0 tracking-[-0.04em] uppercase font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5] text-fluid-monumental leading-[0.8] opacity-[0.96] transition-colors duration-500"
        >
          TRAVELS
        </div>

        {/* ASYMMETRIC SUPPORTING IMAGE 1: Bottom-Left Studio Atelier */}
        <div
          ref={supportingLeftRef}
          data-cursor="view"
          data-cursor-text="ATELIER"
          onClick={() => onNavigate && onNavigate('craftsmanship')}
          className="absolute left-0 bottom-4 sm:bottom-8 lg:bottom-12 z-20 hidden sm:block w-32 sm:w-40 lg:w-48 group/left cursor-pointer"
        >
          <div className="p-2 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover/left:border-[#A88B58]/50 group-hover/left:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <div className="aspect-[3/4] overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657287352-1BZW6UYBIRV3EN9HT7A5/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F30c173%2F3451524516%2Fil_fullxfull.3451524516_pvxa.jpg"
                alt="Studio handcraft styling"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/left:scale-105"
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] group-hover/left:text-[#111111] dark:group-hover/left:text-[#FAF9F5] transition-colors">
              <span>STUDIO ATELIER</span>
              <span>MAINE BENCH →</span>
            </div>
          </div>
        </div>

        {/* ASYMMETRIC SUPPORTING IMAGE 2: Top-Right Coastal Detail */}
        <div
          ref={supportingRightRef}
          data-cursor="view"
          data-cursor-text="DETAIL"
          onClick={() => onNavigate && onNavigate('travels')}
          className="absolute right-0 top-4 sm:top-8 lg:top-12 z-20 hidden md:block w-28 sm:w-36 lg:w-40 group/right cursor-pointer"
        >
          <div className="p-2 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover/right:border-[#A88B58]/50 group-hover/right:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <div className="aspect-square overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
                alt="Ear styling detail"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/right:scale-105"
              />
            </div>
            <div className="mt-1 text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] text-center group-hover/right:text-[#111111] dark:group-hover/right:text-[#FAF9F5] transition-colors">
              COASTAL DETAIL →
            </div>
          </div>
        </div>

      </div>

      {/* 3. INTERACTIVE BOTTOM FILTER & EXPLORATION DOCK (Directly from Mockup Board) */}
      <div
        ref={filterBarRef}
        className="relative z-30 w-full pt-3 pb-1 border-t border-[#111111]/10 dark:border-white/10"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-editorial-mono">
          
          {/* Dropdown Filters matching mockup: All Regions ▾, Materials ▾, Aesthetics ▾, Sort By ▾ */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* 1. All Regions ▾ */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'region' ? null : 'region')}
                className={`px-3.5 py-1.5 border flex items-center gap-2 uppercase tracking-[0.12em] transition-all ${
                  activeDropdown === 'region'
                    ? 'border-[#A88B58] bg-[#FAF9F5] dark:bg-[#161514] text-[#A88B58]'
                    : 'border-[#111111]/15 dark:border-white/15 bg-white/40 dark:bg-black/40 text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58]'
                }`}
              >
                <Compass className="w-3 h-3 text-[#A88B58]" />
                <span>All Regions</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'region' && (
                <div className="absolute bottom-full mb-1 left-0 w-64 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/15 dark:border-white/20 shadow-xl py-2 z-50 text-[11px] max-h-72 overflow-y-auto">
                  <div className="px-3 py-1 text-[9px] uppercase tracking-widest text-[#73716B] border-b border-[#111111]/10 dark:border-white/10 mb-1">
                    Select Travel Destination
                  </div>
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => handleSelectOption('region', r.id)}
                      className="w-full text-left px-3 py-1.5 hover:bg-[#A88B58]/15 hover:text-[#A88B58] transition-colors truncate"
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Materials ▾ */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'material' ? null : 'material')}
                className={`px-3.5 py-1.5 border flex items-center gap-2 uppercase tracking-[0.12em] transition-all ${
                  activeDropdown === 'material'
                    ? 'border-[#A88B58] bg-[#FAF9F5] dark:bg-[#161514] text-[#A88B58]'
                    : 'border-[#111111]/15 dark:border-white/15 bg-white/40 dark:bg-black/40 text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58]'
                }`}
              >
                <span>Materials</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'material' && (
                <div className="absolute bottom-full mb-1 left-0 w-60 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/15 dark:border-white/20 shadow-xl py-2 z-50 text-[11px] max-h-72 overflow-y-auto">
                  <div className="px-3 py-1 text-[9px] uppercase tracking-widest text-[#73716B] border-b border-[#111111]/10 dark:border-white/10 mb-1">
                    Select Material
                  </div>
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => handleSelectOption('material', m.id)}
                      className="w-full text-left px-3 py-1.5 hover:bg-[#A88B58]/15 hover:text-[#A88B58] transition-colors"
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Aesthetics / Collections ▾ */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'aesthetic' ? null : 'aesthetic')}
                className={`px-3.5 py-1.5 border flex items-center gap-2 uppercase tracking-[0.12em] transition-all ${
                  activeDropdown === 'aesthetic'
                    ? 'border-[#A88B58] bg-[#FAF9F5] dark:bg-[#161514] text-[#A88B58]'
                    : 'border-[#111111]/15 dark:border-white/15 bg-white/40 dark:bg-black/40 text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58]'
                }`}
              >
                <span>Aesthetics</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'aesthetic' && (
                <div className="absolute bottom-full mb-1 left-0 w-56 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/15 dark:border-white/20 shadow-xl py-2 z-50 text-[11px] max-h-72 overflow-y-auto">
                  <div className="px-3 py-1 text-[9px] uppercase tracking-widest text-[#73716B] border-b border-[#111111]/10 dark:border-white/10 mb-1">
                    Select Collection Aesthetic
                  </div>
                  {aesthetics.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => handleSelectOption('aesthetic', a.id)}
                      className="w-full text-left px-3 py-1.5 hover:bg-[#A88B58]/15 hover:text-[#A88B58] transition-colors"
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Sort By ▾ */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'sort' ? null : 'sort')}
                className={`px-3.5 py-1.5 border flex items-center gap-2 uppercase tracking-[0.12em] transition-all ${
                  activeDropdown === 'sort'
                    ? 'border-[#A88B58] bg-[#FAF9F5] dark:bg-[#161514] text-[#A88B58]'
                    : 'border-[#111111]/15 dark:border-white/15 bg-white/40 dark:bg-black/40 text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58]'
                }`}
              >
                <span>Sort By</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {activeDropdown === 'sort' && (
                <div className="absolute bottom-full mb-1 left-0 w-56 bg-[#FAF9F5] dark:bg-[#161514] border border-[#111111]/15 dark:border-white/20 shadow-xl py-2 z-50 text-[11px]">
                  <div className="px-3 py-1 text-[9px] uppercase tracking-widest text-[#73716B] border-b border-[#111111]/10 dark:border-white/10 mb-1">
                    Sort Atelier Pieces
                  </div>
                  {sortOptions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelectOption('sort', s.id)}
                      className="w-full text-left px-3 py-1.5 hover:bg-[#A88B58]/15 hover:text-[#A88B58] transition-colors"
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Action: Explore Complete Archive */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#73716B] dark:text-[#9E9A90] hidden sm:inline">
              100% HANDCRAFTED IN MAINE
            </span>
            <button
              onClick={() => onNavigate ? onNavigate('shop') : onExploreClick && onExploreClick()}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] dark:hover:text-[#FAF9F5] uppercase tracking-[0.14em] font-semibold transition-all group shadow-sm"
            >
              <span>EXPLORE ARCHIVE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}


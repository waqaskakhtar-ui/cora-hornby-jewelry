import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExploreClick, onSelectPiece }) {
  const heroRef = useRef(null);
  const coraTypeRef = useRef(null);
  const hornbyTypeRef = useRef(null);
  const mainImageRef = useRef(null);
  const supportingLeftRef = useRef(null);
  const supportingRightRef = useRef(null);
  const annotationRef = useRef(null);
  const textLeftRef = useRef(null);
  const ctaRef = useRef(null);
  const metaLeftRef = useRef(null);

  // Environmental 3D tactile mouse tilt for centerpiece
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleCenterpieceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16, active: true });
  };

  const handleCenterpieceMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(coraTypeRef.current, { opacity: 0, x: -40, y: -20 });
      gsap.set(hornbyTypeRef.current, { opacity: 0, x: 40, y: 20 });
      gsap.set(mainImageRef.current, { opacity: 0, scale: 0.92, y: 20 });
      gsap.set([supportingLeftRef.current, supportingRightRef.current], { opacity: 0, y: 20 });
      gsap.set(annotationRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(textLeftRef.current, { opacity: 0, y: 15 });
      gsap.set(ctaRef.current, { opacity: 0, y: 15 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(coraTypeRef.current, { opacity: 1, x: 0, y: 0, duration: 1.1 }, 0.1)
        .to(hornbyTypeRef.current, { opacity: 1, x: 0, y: 0, duration: 1.1 }, 0.2)
        .to(mainImageRef.current, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 0.3)
        .to(supportingLeftRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
        .to(supportingRightRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(annotationRef.current, { opacity: 1, scale: 1, duration: 0.7 }, 0.75)
        .to(textLeftRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.85)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.0);

      gsap.to(coraTypeRef.current, {
        x: -70,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      });

      gsap.to(hornbyTypeRef.current, {
        x: 70,
        y: 30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      });

      gsap.to(mainImageRef.current, {
        y: 60,
        scale: 0.98,
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

  return (
    <section
      ref={heroRef}
      className="relative min-h-[96svh] lg:min-h-[100svh] w-full bg-[#F7F6F2] dark:bg-[#0F0E0D] text-[#111111] dark:text-[#FAF9F5] pt-24 sm:pt-28 pb-8 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden transition-colors duration-500"
    >
      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between text-[11px] font-editorial-mono text-[#73716B] dark:text-[#9E9A90] uppercase tracking-[0.16em] pt-1">
        <span ref={metaLeftRef} className="text-[#111111] dark:text-[#FAF9F5] font-semibold">
          CORA HORNBY · EST. 2018
        </span>
        <div className="hidden sm:flex items-center gap-6">
          <span className="text-[#8A867E] dark:text-[#7E7A70]">CAPE ELIZABETH, MAINE</span>
          <span className="text-[#111111] dark:text-[#FAF9F5]">STUDIO ARCHIVE CH-2026</span>
        </div>
      </div>

      {/* Main Compositional Viewport with Diagonal [CORA] (Top-Left) and [HORNBY] (Bottom-Right) */}
      <div className="relative w-full flex-1 flex items-center justify-center my-2 min-h-[520px] lg:min-h-[640px]">
        
        {/* 1A. [CORA] IN TOP LEFT */}
        <div
          ref={coraTypeRef}
          className="absolute top-0 sm:top-2 lg:top-4 left-0 sm:left-2 lg:left-6 select-none pointer-events-none z-0"
        >
          <span className="font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5] text-[18vw] sm:text-[19vw] lg:text-[19.5vw] leading-[0.75] tracking-[-0.06em] uppercase opacity-[0.96] block transition-colors duration-500">
            cora
          </span>
        </div>

        {/* 1B. [HORNBY] IN BOTTOM RIGHT */}
        <div
          ref={hornbyTypeRef}
          className="absolute bottom-2 sm:bottom-4 lg:bottom-6 right-0 sm:right-2 lg:right-6 select-none pointer-events-none z-0 text-right"
        >
          <span className="font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5] text-[18vw] sm:text-[19vw] lg:text-[19.5vw] leading-[0.75] tracking-[-0.06em] uppercase opacity-[0.96] block transition-colors duration-500">
            hornby
          </span>
        </div>

        {/* 2. THE 3D JEWELRY CENTERPIECE WITH ENVIRONMENTAL HOVER TILT & AURA */}
        <div
          ref={mainImageRef}
          data-cursor="inspect"
          data-cursor-text="INSPECT"
          onMouseMove={handleCenterpieceMouseMove}
          onMouseLeave={handleCenterpieceMouseLeave}
          className="relative z-10 w-full max-w-[310px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[530px] mx-auto cursor-pointer group p-4"
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
              tilt.active ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
            }`}
            style={{
              background: 'radial-gradient(circle, rgba(168, 139, 88, 0.28) 0%, rgba(168, 139, 88, 0.08) 50%, transparent 75%)',
            }}
          />

          <div
            className="relative aspect-square flex items-center justify-center will-change-transform"
            style={{
              transform: tilt.active
                ? `perspective(850px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.04, 1.04, 1.04)`
                : 'perspective(850px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
              transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Dynamic Contact Floor Shadow that tracks opposite to mouse tilt */}
            <div
              className="absolute bottom-5 w-[65%] h-5 bg-[#111111]/15 dark:bg-black/60 blur-xl rounded-full transform scale-y-50 pointer-events-none transition-transform duration-200"
              style={{
                transform: `scaleY(0.5) translateX(${-tilt.x * 1.5}px)`,
              }}
            />

            {/* 3D Render Image */}
            <img
              src="/hero-zebra-jasper-3d.png"
              alt="Cora Hornby African Zebra Jasper Bracelet 3D Render"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out"
              loading="eager"
            />
          </div>

          {/* 3. FINE-LINE EDITORIAL ANNOTATION */}
          <div
            ref={annotationRef}
            className="absolute top-8 sm:top-12 right-0 sm:-right-8 md:-right-16 z-20 pointer-events-auto"
          >
            <div className="relative flex items-start gap-2.5">
              <svg 
                className="w-16 sm:w-24 h-12 stroke-[#111111] dark:stroke-[#FAF9F5] fill-none overflow-visible -scale-x-100 sm:scale-x-100" 
                viewBox="0 0 100 50"
              >
                <circle cx="2" cy="44" r="2.5" className="fill-[#111111] dark:fill-[#FAF9F5]" />
                <path d="M 2 44 L 40 10 L 98 10" strokeWidth="1" />
              </svg>

              <div className="bg-[#FAF9F5]/95 dark:bg-[#1A1917]/95 backdrop-blur-sm px-3 py-2 border border-[#111111]/12 dark:border-white/15 shadow-xs max-w-[200px] transition-all duration-300 group-hover:border-[#A88B58]/60 group-hover:shadow-md">
                <div className="font-editorial-mono text-[9px] uppercase tracking-[0.16em] text-[#8A867E] dark:text-[#9E9A90]">
                  AFRICAN ZEBRA JASPER · STERLING
                </div>
                <div className="font-editorial-mono text-[10px] text-[#111111] dark:text-[#FAF9F5] font-semibold mt-0.5 group-hover:text-[#A88B58] transition-colors">
                  HANDCRAFTED IN MAINE
                </div>
                <div className="font-editorial-mono text-[9px] text-[#73716B] dark:text-[#C2BCAB]">
                  $145.00 · ONE OF A KIND
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. ASYMMETRIC SUPPORTING IMAGE 1: Bottom-Left with Tactile Environmental Hover */}
        <div
          ref={supportingLeftRef}
          data-cursor="view"
          data-cursor-text="ATELIER"
          className="absolute left-0 bottom-2 sm:bottom-4 lg:bottom-6 z-20 hidden sm:block w-32 sm:w-40 lg:w-48 group/left cursor-pointer"
        >
          <div className="p-2 bg-[#FAF9F5] dark:bg-[#1A1917] border border-[#111111]/10 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover/left:border-[#A88B58]/50 group-hover/left:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <div className="aspect-[3/4] overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657287352-1BZW6UYBIRV3EN9HT7A5/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F30c173%2F3451524516%2Fil_fullxfull.3451524516_pvxa.jpg"
                alt="Studio handcraft styling"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/left:scale-105"
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] group-hover/left:text-[#111111] dark:group-hover/left:text-[#FAF9F5] transition-colors">
              <span>STUDIO ATELIER</span>
              <span>CAPE ELIZABETH</span>
            </div>
          </div>
        </div>

        {/* 5. ASYMMETRIC SUPPORTING IMAGE 2: Top-Right with Tactile Environmental Hover */}
        <div
          ref={supportingRightRef}
          data-cursor="view"
          data-cursor-text="DETAIL"
          className="absolute right-0 top-0 sm:top-2 lg:top-4 z-20 hidden md:block w-28 sm:w-36 lg:w-40 group/right cursor-pointer"
        >
          <div className="p-2 bg-[#FAF9F5] dark:bg-[#1A1917] border border-[#111111]/10 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover/right:border-[#A88B58]/50 group-hover/right:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <div className="aspect-square overflow-hidden bg-[#E5E2DA] dark:bg-[#24221F] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
                alt="Ear styling detail"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/right:scale-105"
              />
            </div>
            <div className="mt-1 text-[8px] font-editorial-mono uppercase text-[#73716B] dark:text-[#9E9A90] text-center group-hover/right:text-[#111111] dark:group-hover/right:text-[#FAF9F5] transition-colors">
              COASTAL DETAIL
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Compositional Tier */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-3 border-t border-[#111111]/8 dark:border-white/10">
        
        {/* Left: Editorial Mission & Legacy */}
        <div ref={textLeftRef} className="md:col-span-5 space-y-1.5">
          <div className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#111111] dark:text-[#FAF9F5] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111111] dark:bg-[#FAF9F5]"></span>
            <span>JEWELRY THAT BECOMES PART OF YOUR STORY</span>
          </div>
          <p className="text-xs text-[#5E5C57] dark:text-[#9E9A90] leading-relaxed max-w-md font-editorial-body">
            Designed with precision, crafted to endure beyond time and trends. Each piece reflects the quiet elegance of Maine studio craftsmanship and global mineral discovery.
          </p>
        </div>

        {/* Center: Brand Legacy Stamp */}
        <div className="md:col-span-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#111111]/15 dark:border-white/20 flex items-center justify-center font-editorial-mono text-[9px] font-bold text-[#111111] dark:text-[#FAF9F5]">
            CH
          </div>
          <div className="font-editorial-mono text-[10px] text-[#73716B] dark:text-[#9E9A90] uppercase tracking-wider">
            HANDCRAFTED BENCH ARCHIVE <br />
            <span className="text-[#111111] dark:text-[#FAF9F5] font-medium">ONE OF ONE PRODUCTION</span>
          </div>
        </div>

        {/* Right: Direct CTA */}
        <div ref={ctaRef} className="md:col-span-3 flex justify-start md:justify-end items-center gap-4">
          <span className="text-[10px] font-editorial-mono text-[#8A867E] dark:text-[#7E7A70]">cora / 01</span>
          <a
            href="#collection"
            onClick={onExploreClick}
            data-cursor="explore"
            data-cursor-text="DISCOVER"
            className="group inline-flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-[0.16em] text-[#111111] dark:text-[#FAF9F5] py-1 border-b border-[#111111] dark:border-[#FAF9F5] hover:text-[#A88B58] dark:hover:text-[#A88B58] hover:border-[#A88B58] dark:hover:border-[#A88B58] transition-all font-semibold"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

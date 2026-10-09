import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExploreClick, onSelectPiece }) {
  const heroRef = useRef(null);
  const titleBackgroundRef = useRef(null);
  const heroPieceRef = useRef(null);
  const modelPortraitRef = useRef(null);
  const benchDetailRef = useRef(null);
  const narrativeRef = useRef(null);
  const floatingNavRef = useRef(null);

  // Smooth tactile tilt for the floating centerpiece
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handlePieceMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 22, y: -y * 22, active: true });
  };

  const handlePieceMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(titleBackgroundRef.current, 
        { opacity: 0, y: 60, scale: 0.98 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.4 }, 0.1
      )
      .fromTo(heroPieceRef.current,
        { opacity: 0, scale: 0.88, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'expo.out' }, 0.3
      )
      .fromTo(modelPortraitRef.current,
        { opacity: 0, y: 80, x: 20 },
        { opacity: 1, y: 0, x: 0, duration: 1.3 }, 0.5
      )
      .fromTo(benchDetailRef.current,
        { opacity: 0, y: 50, x: -20 },
        { opacity: 1, y: 0, x: 0, duration: 1.2 }, 0.6
      )
      .fromTo(narrativeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 }, 0.8
      )
      .fromTo(floatingNavRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }, 1.0
      );

      // Parallax scroll effects across multiple depth layers
      gsap.to(titleBackgroundRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });

      gsap.to(heroPieceRef.current, {
        y: 80,
        scale: 0.96,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      gsap.to(modelPortraitRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.8
        }
      });

      gsap.to(benchDetailRef.current, {
        y: 120,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const signaturePiece = {
    id: 'cleo-pendant-hero',
    name: 'The Cleo Architectural Pendant',
    category: 'Masterpiece · Cold-Forged Brass',
    price: '$150.00',
    origin: 'Cape Elizabeth Bench · 01 of 01',
    material: 'Hand-hammered brass, sculptural pierced geometry',
    mainImage: 'https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657275999-NO6EK65SN16E85AOD73A/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fec8df4%2F3451414898%2Fil_fullxfull.3451414898_qvov.jpg',
    annotation: 'Cold-forged brass negative space'
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[105svh] w-full bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] pt-24 sm:pt-28 pb-16 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden transition-colors duration-700 select-none"
    >
      {/* Specular Ambient Glow (Glossy Editorial Illumination) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#C5A869]/10 via-[#C5A869]/3 to-transparent rounded-full blur-3xl pointer-events-none dark:from-[#C5A869]/12 dark:via-transparent" />
      <div className="absolute top-12 right-12 w-[350px] h-[350px] bg-gradient-radial from-[#9DC3F0]/8 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Top Editorial Eyebrow Bar */}
      <div className="relative z-30 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-editorial-mono uppercase tracking-[0.28em] text-[#78746B] dark:text-[#A8A49C] pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] animate-pulse"></span>
          <span className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">
            CORA HORNBY · MAINE BENCH STUDIO
          </span>
          <span className="hidden md:inline text-[#B0AAA0] dark:text-[#5E5A54]">/</span>
          <span className="hidden md:inline text-[#8F8A80] dark:text-[#9E998F]">
            43°33'54"N 70°12'06"W
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#8F8A80] dark:text-[#9E998F] hidden lg:inline">
            ONE-OF-A-KIND CREATIONS ONLY
          </span>
          <span className="text-[#C5A869] font-medium tracking-[0.2em]">
            VOL. 2026 ARCHIVE
          </span>
        </div>
      </div>

      {/* 3-WAY TAXONOMY GLOSSY FLOATING PILL NAVIGATOR */}
      <div 
        ref={floatingNavRef}
        className="relative z-30 w-full flex justify-center mt-2 mb-4"
      >
        <div className="gloss-pill px-3 py-1.5 rounded-full flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] font-editorial-mono uppercase tracking-[0.18em]">
          <span className="text-[#8F8A80] dark:text-[#9E998F] pl-2 hidden sm:inline">
            BROWSE 3 WAYS:
          </span>
          <a
            href="#travels"
            className="px-3 py-1 rounded-full text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] dark:hover:text-[#C5A869] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#C5A869] font-bold">01</span>
            <span>TRAVEL INSPIRATION (8)</span>
          </a>
          <span className="text-[#D8D4CA] dark:text-[#38342E]">·</span>
          <a
            href="#collection"
            className="px-3 py-1 rounded-full text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] dark:hover:text-[#C5A869] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#C5A869] font-bold">02</span>
            <span>COLLECTIONS (5)</span>
          </a>
          <span className="text-[#D8D4CA] dark:text-[#38342E]">·</span>
          <a
            href="#index"
            className="px-3 py-1 rounded-full text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] dark:hover:text-[#C5A869] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#C5A869] font-bold">03</span>
            <span>TAXONOMY MATRIX</span>
          </a>
        </div>
      </div>

      {/* MAIN ASYMMETRICAL EDITORIAL COLLAGE CANVAS */}
      <div className="relative flex-1 w-full my-auto flex items-center justify-center min-h-[520px] lg:min-h-[640px]">
        
        {/* Layer 1: Massive Overlapping Haute-Couture Serif Typography */}
        <div
          ref={titleBackgroundRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
        >
          <div className="font-editorial-luxury text-[13vw] sm:text-[14vw] lg:text-[15vw] leading-[0.82] tracking-[-0.04em] font-normal text-[#1A1815]/[0.09] dark:text-[#F7F5EE]/[0.08] uppercase whitespace-nowrap text-center">
            CORA HORNBY
          </div>
          <div className="font-editorial-serif italic text-[5vw] sm:text-[4vw] lg:text-[3.2vw] tracking-normal text-[#C5A869]/25 dark:text-[#C5A869]/35 -mt-3 sm:-mt-8">
            atelier archive · cape elizabeth
          </div>
        </div>

        {/* Layer 2: Main Monumental Floating Jewelry Piece (Center-Left Asymmetry) */}
        <div
          ref={heroPieceRef}
          onMouseMove={handlePieceMouseMove}
          onMouseLeave={handlePieceMouseLeave}
          onClick={() => onSelectPiece && onSelectPiece(signaturePiece)}
          className="relative z-20 cursor-pointer group flex flex-col items-center justify-center -translate-x-4 sm:-translate-x-12 lg:-translate-x-20"
          style={{
            transform: tilt.active 
              ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.02, 1.02, 1.02)` 
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Borderless Floating Silhouette in Negative Space */}
          <div className="relative w-64 sm:w-80 md:w-96 lg:w-[440px] aspect-[4/5] filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_35px_50px_rgba(197,168,105,0.25)] transition-all duration-700">
            <img
              src={signaturePiece.mainImage}
              alt={signaturePiece.name}
              className="w-full h-full object-contain filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Specular Glint Highlight on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-[40%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
            </div>

            {/* Floating Tactile Tag */}
            <div className="absolute bottom-4 left-0 -translate-x-4 gloss-pill px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]"></span>
              <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#12100E] dark:text-[#FAF8F2] font-semibold">
                THE CLEO PENDANT · $150
              </span>
            </div>
          </div>
        </div>

        {/* Layer 3: Wild Aspect Ratio 1 — Slender Tall Model Portrait (Top-Right Floating) */}
        <div
          ref={modelPortraitRef}
          data-cursor="view"
          data-cursor-text="LOOKBOOK"
          className="absolute right-0 sm:right-6 lg:right-16 top-0 sm:top-4 z-10 w-28 sm:w-40 lg:w-52 aspect-[9/16] group/portrait cursor-pointer hidden md:block"
        >
          <div className="w-full h-full p-1.5 glossy-card rounded-xs transition-all duration-700 group-hover/portrait:scale-[1.03] group-hover/portrait:shadow-[0_30px_60px_rgba(197,168,105,0.15)]">
            <div className="w-full h-full overflow-hidden bg-[#EAE6DD] dark:bg-[#1E1B17] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
                alt="Model wearing Cora Hornby jewelry"
                className="w-full h-full object-cover filter contrast-[1.05] grayscale-[20%] group-hover/portrait:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 text-[8px] font-editorial-mono uppercase tracking-widest text-[#FAF8F2] text-center">
                ARCHIVE STYLING · NO. 04
              </div>
            </div>
          </div>
        </div>

        {/* Layer 4: Wild Aspect Ratio 2 — Raw Bench & Mineral Close-Up (Bottom-Left Staggered) */}
        <div
          ref={benchDetailRef}
          data-cursor="inspect"
          data-cursor-text="DETAIL"
          className="absolute left-2 sm:left-12 lg:left-24 bottom-2 sm:bottom-6 z-20 w-32 sm:w-44 lg:w-56 aspect-[3/4] group/bench cursor-pointer hidden sm:block"
        >
          <div className="w-full h-full p-1.5 glossy-card rounded-xs transition-all duration-700 group-hover/bench:scale-[1.03] group-hover/bench:shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
            <div className="w-full h-full overflow-hidden bg-[#EAE6DD] dark:bg-[#1E1B17] relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
                alt="Citrine necklace close up"
                className="w-full h-full object-cover filter contrast-[1.06] transition-transform duration-700 group-hover/bench:scale-105"
              />
              <div className="absolute top-2 left-2 bg-[#12100E]/80 backdrop-blur-xs text-[#FAF8F2] text-[7px] font-editorial-mono uppercase tracking-widest px-1.5 py-0.5">
                BENCH FORGED
              </div>
              <div className="absolute bottom-1.5 inset-x-1.5 text-center text-[8px] font-editorial-mono text-[#FAF8F2] bg-black/60 backdrop-blur-xs py-0.5">
                COLD-HAMMERED BRASS
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM COMPOSITION: HIGH-CONTRAST EDITORIAL NARRATIVE TIER */}
      <div 
        ref={narrativeRef}
        className="relative z-30 w-full pt-6 pb-2 border-t border-[#12100E]/10 dark:border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Left Column: Client's Core Theme as Massive Editorial Pull Quote */}
          <div className="lg:col-span-7 space-y-2">
            <div className="font-editorial-mono text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-bold flex items-center gap-2">
              <span>✦</span>
              <span>THE TRAVELING ATELIER</span>
            </div>

            <h1 className="font-editorial-luxury text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] text-[#12100E] dark:text-[#FAF8F2]">
              Traveling the World for <br />
              <span className="italic font-light text-[#78746B] dark:text-[#C5A869]">Inspiration and Materials.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#5E5A54] dark:text-[#B5B0A4] font-editorial-body leading-relaxed max-w-2xl pt-1">
              Hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies and crystals. Directly harvesting raw minerals like <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">jade in Guatemala</strong> and <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">amethyst & citrine in Brazil</strong>, sculpted by motifs from <strong className="text-[#12100E] dark:text-[#FAF8F2] font-semibold">Greece to Germany</strong>.
            </p>
          </div>

          {/* Center Column: Tactile Bench Provenance Stamp */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-[#C5A869]/40 flex items-center justify-center font-editorial-luxury text-sm font-bold text-[#C5A869]">
              CH
            </div>
            <div className="font-editorial-mono text-[10px] text-[#78746B] dark:text-[#A8A49C] uppercase tracking-wider leading-snug">
              CAPE ELIZABETH BENCH <br />
              <span className="text-[#12100E] dark:text-[#FAF8F2] font-bold">100% UNTREATED STONES</span>
            </div>
          </div>

          {/* Right Column: Direct Haute-Couture CTA */}
          <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
            <a
              href="#travels"
              onClick={onExploreClick}
              data-cursor="explore"
              data-cursor-text="DISCOVER"
              className="group inline-flex items-center gap-3 text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#12100E] dark:text-[#FAF8F2] py-2 border-b border-[#12100E] dark:border-[#FAF8F2] hover:text-[#C5A869] dark:hover:text-[#C5A869] hover:border-[#C5A869] dark:hover:border-[#C5A869] transition-all font-semibold"
            >
              <span>EXPLORE TRAVELS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

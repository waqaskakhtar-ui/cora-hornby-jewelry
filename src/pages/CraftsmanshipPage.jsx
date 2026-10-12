import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Compass, Hammer, Sparkles, Box, ShieldCheck, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO } from '../data/coraData';

gsap.registerPlugin(ScrollTrigger);

export default function CraftsmanshipPage({ onBack, onExploreShop }) {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const scrollTrackRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      // Horizontal GSAP Raw-to-Refined Scroll Transition
      const track = scrollTrackRef.current;
      if (track) {
        const totalScroll = track.scrollWidth - track.clientWidth;
        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSectionRef.current,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const rawToRefinedStages = [
    {
      step: "01",
      title: "THE RAW MINERAL HARVEST",
      subtitle: "DIRECT LAPIDARY SOURCING",
      desc: "Untreated rough mountain jade from Guatemala, raw honey citrine points from Minas Gerais in Brazil, African zebra jasper, and baroque freshwater pearls. No dyed synthetics; minerals are hand-chosen for their raw natural inclusions.",
      image: "/travel_inspirations/brazil-pair-2-inspiration.jpg",
      badge: "NATURAL MINERALS"
    },
    {
      step: "02",
      title: "THE ANVIL & COLD FORGING",
      subtitle: "CAPE ELIZABETH STUDIO BENCH",
      desc: "Raw solid brass, sterling silver, and copper plates are worked cold on an antique iron anvil. Hundreds of micro-hammer strikes create facets that catch changing Atlantic light, hardening the metal without industrial casting molds.",
      image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg",
      badge: "BENCH FORGING"
    },
    {
      step: "03",
      title: "KINETIC & WIRE FABRICATION",
      subtitle: "SCULPTURAL PRECISION",
      desc: "Piercing negative space, hand-spinning architectural wire armatures, and embedding high-strength neodymium magnetic clasps. Every closure is engineered to snap together effortlessly and stay securely locked on the body.",
      image: "/travel_inspirations/greece-pair-2-jewelry.jpg",
      badge: "KINETIC JEWELRY"
    },
    {
      step: "04",
      title: "STUDIO DISPATCH & PROVENANCE",
      subtitle: "SIGNATURE PRESENTATION",
      desc: "Each creation is signed and numbered in our studio register, nestled in an anti-tarnish velvet pouch, and packaged inside a custom rigid black gift box debossed with the Cora Hornby insignia.",
      image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG",
      badge: "GIFT-READY PRESENTATION"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-28 pb-24 transition-colors duration-500">
      
      {/* Top Header & Breadcrumb */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pb-8 border-b border-[#111111]/10 dark:border-white/10 mb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO JOURNAL</span>
          </button>

          <div className="font-editorial-mono text-xs text-[#A88B58] flex items-center gap-2 uppercase tracking-widest font-semibold">
            <Hammer className="w-4 h-4 text-[#A88B58]" />
            <span>THE ALCHEMIST'S BENCH</span>
          </div>
        </div>

        <div className="mt-8 space-y-4 max-w-4xl">
          <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#8A867E] dark:text-[#9E9A90] block">
            EST. 2018 · CAPE ELIZABETH, MAINE
          </span>
          <h1 className="text-fluid-headline font-display-grotesk font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5]">
            I TRAVEL TO GATHER. <br />
            <span className="font-editorial-italiana font-normal normal-case italic text-[#A88B58]">
              I return to compose.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B0A4] font-editorial-body leading-relaxed max-w-2xl">
            A piece of jewelry should not feel like an industrial reproduction. It should carry the human trace of the hand that forged it. Explore how raw minerals harvested across five continents become one-of-a-kind wearable art at Cora's bench.
          </p>
        </div>
      </div>

      {/* Horizontal GSAP Scroll Section: Raw-to-Refined Transformation Sequence */}
      <section ref={horizontalSectionRef} className="relative h-screen w-full overflow-hidden bg-[#ECE8DF] dark:bg-[#121110] border-y border-[#111111]/10 dark:border-white/10 flex flex-col justify-center">
        
        {/* Section Title Pill Bar */}
        <div className="absolute top-6 left-6 sm:left-14 right-6 sm:right-14 z-20 flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] pb-3 border-b border-[#111111]/8 dark:border-white/10">
          <span>THE TRANSFORMATION SEQUENCE · HORIZONTAL ATELIER STUDY</span>
          <span className="text-[#A88B58] font-bold">SCROLL DOWN TO ADVANCE →</span>
        </div>

        {/* Horizontal Track */}
        <div
          ref={scrollTrackRef}
          className="flex items-center gap-10 px-6 sm:px-14 will-change-transform pt-12"
          style={{ width: 'max-content' }}
        >
          {rawToRefinedStages.map((stage) => (
            <div
              key={stage.step}
              className="w-[85vw] sm:w-[540px] lg:w-[620px] bg-[#FAF9F5] dark:bg-[#181715] border border-[#111111]/12 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl flex-shrink-0 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-editorial-mono text-xs">
                  <span className="text-xl font-bold text-[#A88B58]">{stage.step}</span>
                  <span className="px-2.5 py-0.5 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] text-[9px] uppercase tracking-widest">
                    {stage.badge}
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2DFD6] dark:bg-[#22201D] border border-[#111111]/8 dark:border-white/10">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover filter contrast-[1.04]"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 text-[#FAF9F5] px-2 py-0.5 font-editorial-mono text-[8px] uppercase">
                    STUDIO ARCHIVE
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8A867E] dark:text-[#9E9A90] block">
                    {stage.subtitle}
                  </span>
                  <h3 className="font-display-grotesk text-2xl font-bold uppercase text-[#111111] dark:text-[#FAF9F5]">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] text-[#73716B] dark:text-[#9E9A90] flex items-center justify-between">
                <span>STAGE {stage.step} OF 04</span>
                <span className="text-[#A88B58] font-bold">100% UNTREATED CRAFT</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intimate Atelier Philosophy & Direct Shop CTA */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 mt-24">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <span className="font-editorial-mono text-[10px] uppercase tracking-[0.25em] text-[#A88B58] font-semibold block">
              THE STUDIO BENCH PHILOSOPHY
            </span>
            <h2 className="font-display-grotesk text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-tight">
              NO DUPLICATE MOLDS. <br />
              <span className="font-editorial-italiana italic font-normal text-[#A88B58]">
                Every piece is singular.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#C2BCAB] font-editorial-body leading-relaxed">
              When you wear a piece of Cora Hornby jewelry, you carry both an intimate natural landscape and a record of world travel: the sun-drenched stones of the Aegean, the copper dunes of Namibia, or ancient jade carved along Guatemalan rivers.
            </p>

            <div className="pt-4">
              <button
                onClick={onExploreShop}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono uppercase tracking-[0.18em] text-xs font-bold hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111] transition-all shadow-lg"
              >
                <span>EXPLORE THE ARCHIVE CATALOG</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#ECE9E0] dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 p-3 shadow-xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1597610631173-G0Z9BIUTKGQQA79JAPI3/Citrine+points+silver.jpg"
                alt="Studio bench close-up"
                className="w-full h-full object-cover filter contrast-[1.04]"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-black/75 backdrop-blur-md p-3 font-editorial-mono text-xs text-[#FAF9F5] flex items-center justify-between">
                <span>CAPE ELIZABETH STUDIO BENCH</span>
                <span className="text-[#A88B58]">ONE OF ONE PRODUCTION</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO } from '../data/coraData';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle GSAP reveal for oversized bottom wordmark
      gsap.fromTo(
        wordmarkRef.current,
        { y: 80, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#FAF8F2] dark:bg-[#060505] border-t border-[#12100E]/10 dark:border-white/10 pt-20 pb-0 overflow-hidden relative transition-colors duration-700"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[#12100E]/8 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <h3 className="font-editorial-luxury text-3xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2]">
              {BRAND_INFO.name}
            </h3>
            <p className="text-sm sm:text-base text-[#73716B] dark:text-[#A6A49E] font-editorial-body max-w-sm leading-relaxed">
              Traveling the world for inspiration and materials. Handcrafted on the coast of Maine using hammered metals, leather, freshwater pearls, druzies, and semi-precious stones.
            </p>
            <div className="pt-2 font-editorial-mono text-xs text-[#8A867E] dark:text-[#8E8B83]">
              Studio: 518 · 469 · 8981 <br />
              Cape Elizabeth, Maine · USA
            </div>
          </div>

          {/* Nav Column 1: TAXONOMY */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs sm:text-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              COLLECTIONS
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><a href="#collection" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Mixed Metals</a></li>
              <li><a href="#collection" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Geometrics</a></li>
              <li><a href="#collection" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Mayan Sol</a></li>
              <li><a href="#collection" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Pearls</a></li>
              <li><a href="#collection" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Black is Back</a></li>
            </ul>
          </div>

          {/* Nav Column 2: TRAVELS */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              TRAVEL ARCHIVE
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><a href="#travels" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Greece (Aegean)</a></li>
              <li><a href="#travels" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Namibia (Deadvlei)</a></li>
              <li><a href="#travels" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Brazil (Amethyst)</a></li>
              <li><a href="#travels" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Guatemala (Jade)</a></li>
              <li><a href="#travels" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Germany (Bauhaus)</a></li>
            </ul>
          </div>

          {/* Nav Column 3: CLIENT CARE */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              ASSURANCES
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><a href="#assurances" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Logo Gift Boxes</a></li>
              <li><a href="#assurances" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Insured Shipping</a></li>
              <li><a href="#assurances" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Money-Back Guarantee</a></li>
              <li><a href="#customers" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Cora's Customers</a></li>
              <li><a href="#story" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">About Cora's Story</a></li>
            </ul>
          </div>

          {/* Nav Column 4: CONNECT */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              CONNECT
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><a href="mailto:corahornby@corahornby.com" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Email Studio</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Instagram</a></li>
              <li><a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Pinterest</a></li>
              <li><a href="tel:5184698981" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">518 · 469 · 8981</a></li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-editorial-mono text-[#8A867E] dark:text-[#8E8B83] gap-4">
          <div>Est. 2018 · Cape Elizabeth, Maine</div>
          <div>© {new Date().getFullYear()} Cora Hornby Jewelry Insights. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* FINAL SIGNATURE: ENORMOUS OVERSIZED WORDMARK RUNNING OFF VIEWPORT EDGE */}
      {/* Exactly replicating the 'velore atelier' bottom treatment from the reference screenshot! */}
      <div 
        ref={wordmarkRef}
        className="w-full overflow-hidden select-none pointer-events-none mt-6 sm:mt-10 -mb-6 sm:-mb-10 lg:-mb-16"
      >
        <div className="font-editorial-luxury italic font-light text-[#12100E] dark:text-[#FAF8F2]/90 text-[18vw] leading-[0.75] tracking-tight whitespace-nowrap uppercase opacity-[0.96]">
          cora hornby atelier
        </div>
      </div>
    </footer>
  );
}

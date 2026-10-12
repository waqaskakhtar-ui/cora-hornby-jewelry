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
      className="bg-[#F8F6F1] dark:bg-[#0A0909] border-t border-[#E8E4DA] dark:border-[#262421] pt-24 sm:pt-32 pb-12 overflow-hidden relative transition-colors duration-300 font-sans"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#E5E1D6] dark:border-[#262421]">
          
          {/* Brand Info */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#1C1B19] dark:text-[#F8F6F2]">
              {BRAND_INFO.name}
            </h3>
            <p className="text-sm sm:text-base text-[#6B6760] dark:text-[#A6A49E] max-w-sm leading-relaxed font-normal">
              Traveling the world for inspiration and materials. Handcrafted on the coast of Maine using hammered metals, leather, freshwater pearls, druzies, and semi-precious stones.
            </p>
            <div className="pt-2 text-xs text-[#7A766E] dark:text-[#8E8B83] font-medium leading-relaxed">
              Studio Bench: 518 · 469 · 8981 <br />
              Cape Elizabeth, Maine · USA
            </div>
          </div>

          {/* Nav Column 1: COLLECTIONS */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A766E] dark:text-[#8E8B83] block font-bold">
              COLLECTIONS
            </span>
            <ul className="space-y-2.5 text-[#55524B] dark:text-[#B5B3AC] font-medium">
              <li><a href="#collections" className="hover:text-[#A88B58] transition-colors">Mixed Metals</a></li>
              <li><a href="#collections" className="hover:text-[#A88B58] transition-colors">Geometrics</a></li>
              <li><a href="#collections" className="hover:text-[#A88B58] transition-colors">Mayan Sol</a></li>
              <li><a href="#collections" className="hover:text-[#A88B58] transition-colors">Coastal Pearls</a></li>
              <li><a href="#collections" className="hover:text-[#A88B58] transition-colors">Black is Back</a></li>
            </ul>
          </div>

          {/* Nav Column 2: TRAVELS */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A766E] dark:text-[#8E8B83] block font-bold">
              TRAVEL ARCHIVE
            </span>
            <ul className="space-y-2.5 text-[#55524B] dark:text-[#B5B3AC] font-medium">
              <li><a href="#travels" className="hover:text-[#A88B58] transition-colors">Greece (Aegean)</a></li>
              <li><a href="#travels" className="hover:text-[#A88B58] transition-colors">Namibia (Deadvlei)</a></li>
              <li><a href="#travels" className="hover:text-[#A88B58] transition-colors">Brazil (Amethyst)</a></li>
              <li><a href="#travels" className="hover:text-[#A88B58] transition-colors">Guatemala (Jade)</a></li>
              <li><a href="#travels" className="hover:text-[#A88B58] transition-colors">Germany (Bauhaus)</a></li>
            </ul>
          </div>

          {/* Nav Column 3: CLIENT CARE */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A766E] dark:text-[#8E8B83] block font-bold">
              ASSURANCES
            </span>
            <ul className="space-y-2.5 text-[#55524B] dark:text-[#B5B3AC] font-medium">
              <li><a href="#assurances" className="hover:text-[#A88B58] transition-colors">Logo Gift Boxes</a></li>
              <li><a href="#assurances" className="hover:text-[#A88B58] transition-colors">Insured Shipping</a></li>
              <li><a href="#assurances" className="hover:text-[#A88B58] transition-colors">Money-Back Guarantee</a></li>
              <li><a href="#customers" className="hover:text-[#A88B58] transition-colors">Cora's Customers</a></li>
              <li><a href="#story" className="hover:text-[#A88B58] transition-colors">About Cora's Story</a></li>
            </ul>
          </div>

          {/* Nav Column 4: CONNECT */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A766E] dark:text-[#8E8B83] block font-bold">
              CONNECT
            </span>
            <ul className="space-y-2.5 text-[#55524B] dark:text-[#B5B3AC] font-medium">
              <li><a href="mailto:corahornby@corahornby.com" className="hover:text-[#A88B58] transition-colors">Email Studio</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#A88B58] transition-colors">Instagram</a></li>
              <li><a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#A88B58] transition-colors">Pinterest</a></li>
              <li><a href="tel:5184698981" className="hover:text-[#A88B58] transition-colors">518 · 469 · 8981</a></li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A766E] dark:text-[#8E8B83] gap-4 font-medium">
          <div>Est. 2018 · Cape Elizabeth, Maine</div>
          <div>© {new Date().getFullYear()} Cora Hornby Jewelry Insights. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1C1B19] dark:hover:text-[#F8F6F2]">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#1C1B19] dark:hover:text-[#F8F6F2]">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Signature Brand Wordmark */}
      <div 
        ref={wordmarkRef}
        className="w-full overflow-hidden select-none pointer-events-none mt-8 text-center"
      >
        <div className="font-extrabold text-[#1C1B19]/10 dark:text-[#FAF9F5]/10 text-[12vw] leading-none tracking-tight uppercase">
          cora hornby
        </div>
      </div>
    </footer>
  );
}

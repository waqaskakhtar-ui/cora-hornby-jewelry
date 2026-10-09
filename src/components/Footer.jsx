import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      className="bg-[#FAF9F5] dark:bg-[#0A0909] border-t border-[#111111]/10 dark:border-white/10 pt-16 pb-0 overflow-hidden relative transition-colors duration-300"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[#111111]/8 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Link to="/" className="block">
              <h3 className="font-editorial-heading text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5]">
                {BRAND_INFO.name}
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-[#73716B] dark:text-[#A6A49E] font-editorial-body max-w-sm leading-relaxed">
              Traveling the world for inspiration and materials. Handcrafted on the coast of Maine using hammered metals, leather, freshwater pearls, druzies, and semi-precious stones.
            </p>
            <div className="pt-2 font-editorial-mono text-xs text-[#8A867E] dark:text-[#8E8B83]">
              Studio: 518 · 469 · 8981 <br />
              Cape Elizabeth, Maine · USA
            </div>
          </div>

          {/* Nav Column 1: COLLECTIONS */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs sm:text-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              COLLECTIONS
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><Link to="/collections/mixed-metals" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Mixed Metals</Link></li>
              <li><Link to="/collections/geometrics" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Geometrics</Link></li>
              <li><Link to="/collections/mayan-sol" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Mayan Sol</Link></li>
              <li><Link to="/collections/pearls" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Pearls</Link></li>
              <li><Link to="/collections/black-is-back" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Black is Back</Link></li>
            </ul>
          </div>

          {/* Nav Column 2: TRAVELS */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              TRAVEL ARCHIVE
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><Link to="/travel/greece" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Greece (Aegean)</Link></li>
              <li><Link to="/travel/namibia" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Namibia (Deadvlei)</Link></li>
              <li><Link to="/travel/brazil" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Brazil (Citrine)</Link></li>
              <li><Link to="/travel/guatemala" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Guatemala (Jade)</Link></li>
              <li><Link to="/travel/germany" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Germany (Bauhaus)</Link></li>
              <li><Link to="/travel" className="text-[#A88B58] hover:underline font-bold">All 8 Countries →</Link></li>
            </ul>
          </div>

          {/* Nav Column 3: CLIENT CARE */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83] block font-semibold">
              ASSURANCES
            </span>
            <ul className="space-y-2 text-[#5E5C57] dark:text-[#B5B3AC]">
              <li><Link to="/packaging-and-shipping" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Logo Gift Boxes</Link></li>
              <li><Link to="/packaging-and-shipping" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Insured Shipping</Link></li>
              <li><Link to="/guarantees" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">30-Day Money-Back</Link></li>
              <li><Link to="/customers" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">Cora's Customers</Link></li>
              <li><Link to="/story" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors">About Cora's Story</Link></li>
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
        <div className="font-display-grotesk font-black text-[#111111] dark:text-[#FAF9F5]/90 text-[17vw] leading-[0.75] tracking-[-0.06em] whitespace-nowrap uppercase opacity-[0.98]">
          cora hornby atelier
        </div>
      </div>
    </footer>
  );
}

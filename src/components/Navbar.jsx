import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch, isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Travels", href: "#travels" },
    { label: "Collections", href: "#collection" },
    { label: "3-Way Index", href: "#index" },
    { label: "Customers", href: "#customers" },
    { label: "Guarantees", href: "#assurances" },
    { label: "About Cora", href: "#story" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F9F8F5]/90 dark:bg-[#0F0E0D]/90 backdrop-blur-md py-3 border-b border-[#111111]/8 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Left: Brand Origin / Identifier */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="group flex flex-col items-start text-left"
            >
              <span className="font-display-grotesk text-xl sm:text-2xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] group-hover:opacity-75 transition-opacity">
                {BRAND_INFO.name}
              </span>
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.2em] text-[#73716B] dark:text-[#9E9A90]">
                CAPE ELIZABETH · ME
              </span>
            </a>

            <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-[#111111]/10 dark:border-white/10 text-[#8A867E] dark:text-[#9E9A90] text-[11px] font-editorial-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/40 dark:bg-white/40"></span>
              <span>{BRAND_INFO.coordinates}</span>
            </div>
          </div>

          {/* Center: Minimal Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] tracking-[0.04em] text-[#111111]/80 dark:text-[#FAF9F5]/80 hover:text-[#A88B58] dark:hover:text-[#A88B58] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A88B58] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Theme Switcher, Search, Bag, Mobile Trigger) */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* Dark / Light Mode Switcher Button */}
            <button
              onClick={onToggleTheme}
              className="group relative flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-editorial-mono uppercase tracking-[0.12em] border border-[#111111]/15 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#1A1917] text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58] dark:hover:border-[#A88B58] hover:shadow-[0_0_15px_rgba(168,139,88,0.2)] transition-all shadow-xs"
              aria-label="Toggle dark mode"
              title={isDark ? "Switch to Ivory Studio theme" : "Switch to Obsidian Dark theme"}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#B09462] group-hover:rotate-45 transition-transform duration-300" />
                  <span className="hidden sm:inline">IVORY</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#111111] group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenSearch}
              className="text-[12px] font-editorial-mono uppercase tracking-[0.12em] text-[#111111]/75 dark:text-[#FAF9F5]/75 hover:text-[#A88B58] dark:hover:text-[#A88B58] flex items-center gap-1.5 py-1 transition-colors group"
              aria-label="Search Collection"
            >
              <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <button
              onClick={onOpenCart}
              className="group relative flex items-center gap-2 text-[12px] font-editorial-mono uppercase tracking-[0.12em] text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] dark:hover:text-[#A88B58] py-1 transition-colors"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110 group-hover:text-[#A88B58]" />
              <span>Bag</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] text-[10px] font-sans font-semibold group-hover:bg-[#A88B58] group-hover:text-white transition-colors">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] dark:text-[#FAF9F5] hover:opacity-75 transition-opacity"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F5] dark:bg-[#0F0E0D] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden animate-fade-in text-[#111111] dark:text-[#FAF9F5]">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
              <span className="font-editorial-mono text-[11px] uppercase tracking-widest text-[#8A867E] dark:text-[#9E9A90]">
                Studio Navigation
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 text-xs font-editorial-mono px-3 py-1 border border-[#111111]/15 dark:border-white/20"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#B09462]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? "IVORY MODE" : "DARK MODE"}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display-grotesk text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="font-editorial-mono text-sm text-[#8A867E]">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#111111]/10 dark:border-white/10 space-y-2 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <div>Cape Elizabeth, Maine · USA</div>
            <div>{BRAND_INFO.contact.email}</div>
            <div>{BRAND_INFO.contact.phone}</div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Sun, Moon, Compass, Sparkles, Grid } from 'lucide-react';
import { BRAND_INFO, TRAVEL_DESTINATIONS, COLLECTIONS, PRODUCT_CATEGORIES } from '../data/coraData';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch, isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Travel Inspiration", href: "/travel" },
    { label: "Collections", href: "/collections" },
    { label: "Shop", href: "/shop" },
    { label: "Customers", href: "/customers" },
    { label: "Story", href: "/story" },
    { label: "Packaging & Guarantees", href: "/packaging-and-shipping" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF9F5]/90 dark:bg-[#0A0909]/90 backdrop-blur-md py-3.5 border-b border-[#111111]/8 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.03)]'
            : 'bg-[#FAF9F5]/60 dark:bg-[#0A0909]/60 backdrop-blur-xs py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Left: Brand Origin / Identifier */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="group flex flex-col items-start text-left"
            >
              <span className="font-editorial-heading text-xl sm:text-2xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.22em] text-[#73716B] dark:text-[#9E9A90]">
                CAPE ELIZABETH · MAINE
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-[#111111]/10 dark:border-white/10 text-[#8A867E] dark:text-[#9E9A90] text-[10px] font-editorial-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]"></span>
              <span>EST. 2018 · STUDIO BENCH</span>
            </div>
          </div>

          {/* Center: Luxury Editorial Multi-Page Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = link.href === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[12px] font-editorial-mono uppercase tracking-[0.14em] py-1 transition-all relative ${
                    isActive
                      ? 'text-[#111111] dark:text-[#FAF9F5] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#A88B58]'
                      : 'text-[#6B6862] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Theme Switcher, Search, Bag, Mobile Trigger) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Dark / Ivory Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              className="group relative flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-editorial-mono uppercase tracking-[0.14em] border border-[#111111]/15 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#1A1917] text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58] dark:hover:border-[#A88B58] transition-all shadow-2xs"
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

            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#111111]/80 dark:text-[#FAF9F5]/80 hover:text-[#A88B58] dark:hover:text-[#A88B58] transition-colors"
              aria-label="Search Collection"
              title="Search Archive"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#111111]/80 dark:text-[#FAF9F5]/80 hover:text-[#A88B58] dark:hover:text-[#A88B58] transition-colors flex items-center gap-1.5"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="min-w-[16px] h-[16px] px-1 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] text-[9px] font-editorial-mono font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 lg:hidden text-[#111111] dark:text-[#FAF9F5]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F5] dark:bg-[#0A0909] pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden text-[#111111] dark:text-[#FAF9F5] overflow-y-auto animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90]">
                STUDIO DIRECTORY
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 text-xs font-editorial-mono px-3 py-1 border border-[#111111]/15 dark:border-white/20"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#B09462]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? "IVORY" : "DARK"}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-editorial-heading text-2xl font-bold text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center justify-between py-1 border-b border-[#111111]/5 dark:border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="font-editorial-mono text-xs text-[#8A867E]">0{idx + 1}</span>
                </Link>
              ))}
            </nav>

            {/* Quick Directory Links */}
            <div className="pt-2 grid grid-cols-2 gap-2 font-editorial-mono text-[10px] uppercase">
              <Link to="/travel/greece" className="p-2 bg-[#EFECE4] dark:bg-[#181715] text-[#5E5C57] dark:text-[#B5B0A4]">
                ✦ Greece (Inspiration)
              </Link>
              <Link to="/travel/guatemala" className="p-2 bg-[#EFECE4] dark:bg-[#181715] text-[#5E5C57] dark:text-[#B5B0A4]">
                ✦ Guatemala (Jade)
              </Link>
              <Link to="/travel/brazil" className="p-2 bg-[#EFECE4] dark:bg-[#181715] text-[#5E5C57] dark:text-[#B5B0A4]">
                ✦ Brazil (Citrine)
              </Link>
              <Link to="/travel/germany" className="p-2 bg-[#EFECE4] dark:bg-[#181715] text-[#5E5C57] dark:text-[#B5B0A4]">
                ✦ Germany (Bauhaus)
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#111111]/10 dark:border-white/10 space-y-1 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <div>Cape Elizabeth, Maine · Hand-Crafted Bench</div>
            <div>{BRAND_INFO.contact.email}</div>
          </div>
        </div>
      )}
    </>
  );
}

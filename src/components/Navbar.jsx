import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  isDark,
  onToggleTheme,
  currentView = 'home',
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Floating Dock auto-hide logic: hides on scroll down, reveals on scroll up
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "COLLECTIONS", view: "collections", href: "#collections" },
    { label: "SHOP ALL", view: "shop", href: "#shop" },
    { label: "THE WORLD", view: "travels", href: "#travels" },
    { label: "CRAFTSMANSHIP", view: "craftsmanship", href: "#craftsmanship" },
    { label: "ASSURANCES", view: "assurances", href: "#assurances" },
  ];

  const handleNavClick = (item, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(item.view);
    } else {
      const elem = document.querySelector(item.href);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* The Floating Dock */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          scrolled
            ? 'py-2.5 sm:py-3.5 bg-[#FAF9F5]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#111111]/8 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.04)]'
            : 'py-4 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-6">
            <button
              onClick={handleLogoClick}
              className="group flex flex-col items-start text-left focus:outline-none"
            >
              <span className="font-display-grotesk text-xl sm:text-2xl font-black tracking-tight text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.22em] text-[#73716B] dark:text-[#9E9A90]">
                CAPE ELIZABETH · ME
              </span>
            </button>

            <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-[#111111]/10 dark:border-white/10 text-[#8A867E] dark:text-[#9E9A90] text-[11px] font-editorial-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]"></span>
              <span>{BRAND_INFO.coordinates}</span>
            </div>
          </div>

          {/* Center Navigation Links (Matching Mockup) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-editorial-mono text-xs uppercase tracking-[0.14em]">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`py-1 relative transition-colors ${
                    isActive
                      ? 'text-[#A88B58] font-bold'
                      : 'text-[#111111]/80 dark:text-[#FAF9F5]/80 hover:text-[#A88B58] dark:hover:text-[#A88B58]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A88B58] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Dark/Light Mode, Search, Bag Counter Bubble */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Theme Toggle Pill */}
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-editorial-mono uppercase tracking-[0.14em] border border-[#111111]/15 dark:border-white/20 bg-[#FAF9F5] dark:bg-[#161514] text-[#111111] dark:text-[#FAF9F5] hover:border-[#A88B58] transition-all shadow-2xs"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-3 h-3 text-[#A88B58]" />
                  <span className="hidden sm:inline">IVORY</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-[#111111]" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-[#111111]/75 dark:text-[#FAF9F5]/75 hover:text-[#A88B58] transition-colors group"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Shopping Bag with Floating Counter Bubble */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] transition-colors"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#A88B58] text-[#111111] font-editorial-mono text-[9px] font-bold flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#111111] dark:text-[#FAF9F5]"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F5] dark:bg-[#0A0A0A] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden text-[#111111] dark:text-[#FAF9F5]">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
              <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8A867E]">
                STUDIO NAVIGATION
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 text-xs font-editorial-mono px-3 py-1 border border-[#111111]/15 dark:border-white/20"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#A88B58]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? "IVORY MODE" : "DARK MODE"}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4 font-display-grotesk text-2xl font-bold uppercase">
              <button
                onClick={handleLogoClick}
                className="text-left py-1 hover:text-[#A88B58] transition-colors"
              >
                JOURNAL HOME
              </button>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-left py-1 hover:text-[#A88B58] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-editorial-mono text-xs text-[#A88B58]">→</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#111111]/10 dark:border-white/10 space-y-1 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <div>Cape Elizabeth, Maine · USA</div>
            <div>{BRAND_INFO.contact.email}</div>
            <div>{BRAND_INFO.contact.phone}</div>
          </div>
        </div>
      )}
    </>
  );
}

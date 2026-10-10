import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/coraData';

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

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Travels", href: "/travels" },
    { label: "Collections", href: "/collections" },
    { label: "Shop All", href: "/shop" },
    { label: "Customers", href: "/customers" },
    { label: "Cora's Story", href: "/story" },
    { label: "Packaging", href: "/shipping" },
    { label: "Guarantees", href: "/guarantees" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#f8f4e7]/95 dark:bg-[#000000]/95 backdrop-blur-md py-3.5 border-b border-[#4e342e]/12 dark:border-white/12 shadow-[0_4px_25px_rgba(78,52,46,0.04)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Left: Brand Origin / Identifier */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="group flex flex-col items-start text-left"
            >
              <span className="font-display-serif text-xl sm:text-2xl font-bold tracking-tight text-[#4e342e] dark:text-[#ffffff] group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.22em] text-[#4e342e]/70 dark:text-[#ffffff]/70">
                CAPE ELIZABETH · MAINE
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-[#4e342e]/15 dark:border-white/15 text-[#4e342e]/60 dark:text-[#ffffff]/60 text-[11px] font-editorial-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cc5500] dark:bg-[#2c3480]"></span>
              <span>{BRAND_INFO.coordinates}</span>
            </div>
          </div>

          {/* Center: Minimal Editorial SPA Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-[12px] font-editorial-mono uppercase tracking-[0.14em] py-1 transition-all relative font-medium ${
                    isActive
                      ? 'text-[#cc5500] dark:text-[#ffffff] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#cc5500] dark:after:bg-[#2c3480]'
                      : 'text-[#4e342e]/80 dark:text-[#ffffff]/80 hover:text-[#cc5500] dark:hover:text-[#2c3480]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions (Theme Switcher, Search, Bag, Mobile Trigger) */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* Strict Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              className="group relative flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-editorial-mono uppercase tracking-[0.14em] border border-[#4e342e]/25 dark:border-white/25 bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] hover:border-[#cc5500] dark:hover:border-[#2c3480] transition-all shadow-2xs"
              aria-label="Toggle theme mode"
              title={isDark ? "Switch to Ivory Cream (#f8f4e7)" : "Switch to Obsidian Black (#000000)"}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#ffffff] group-hover:rotate-45 transition-transform" />
                  <span className="hidden sm:inline">CREAM</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#cc5500] group-hover:-rotate-12 transition-transform" />
                  <span className="hidden sm:inline font-bold">OBSIDIAN</span>
                </>
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="text-[12px] font-editorial-mono uppercase tracking-[0.12em] text-[#4e342e]/80 dark:text-[#ffffff]/80 hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1.5 py-1 transition-colors"
              aria-label="Search Collection"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">SEARCH</span>
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={onOpenCart}
              className="group relative flex items-center gap-2 text-[12px] font-editorial-mono uppercase tracking-[0.12em] text-[#4e342e] dark:text-[#ffffff] hover:text-[#cc5500] dark:hover:text-[#2c3480] py-1 transition-colors"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">COLLECTION</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#cc5500] dark:bg-[#2c3480] text-[#ffffff] text-[10px] font-mono font-bold">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4e342e] dark:text-[#ffffff] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#4e342e] dark:text-[#ffffff]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f8f4e7] dark:bg-[#000000] pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden animate-fade-in text-[#4e342e] dark:text-[#ffffff] border-b border-[#4e342e]/20 dark:border-white/20">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#4e342e]/15 dark:border-white/15 pb-4">
              <span className="font-editorial-mono text-[11px] uppercase tracking-widest text-[#4e342e]/70 dark:text-[#ffffff]/70">
                ATELIER DIRECTORY
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 text-xs font-editorial-mono px-3 py-1 border border-[#4e342e]/20 dark:border-white/20"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? "CREAM MODE" : "OBSIDIAN MODE"}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-display-serif text-2xl font-bold flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#cc5500] dark:text-[#2c3480]' : 'text-[#4e342e] dark:text-[#ffffff]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="font-editorial-mono text-xs opacity-50">0{idx + 1}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#4e342e]/15 dark:border-white/15 space-y-1 font-editorial-mono text-xs text-[#4e342e]/70 dark:text-[#ffffff]/70">
            <div>Cape Elizabeth, Maine Studio · 518 · 469 · 8981</div>
            <div>One-of-a-Kind Handcrafted Bench Creations</div>
          </div>
        </div>
      )}
    </>
  );
}

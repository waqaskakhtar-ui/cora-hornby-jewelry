import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, COLLECTIONS, TRAVEL_DESTINATIONS } from '../data/coraData';
import { ShieldCheck, Truck, Gift, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] border-t border-[#4e342e]/15 dark:border-white/15 pt-16 pb-12 transition-colors duration-400 overflow-hidden relative">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Upper Editorial Columns */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[#4e342e]/15 dark:border-white/15">
          
          {/* Brand Philosophy */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-display-serif text-3xl font-bold tracking-tight text-[#4e342e] dark:text-[#ffffff] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                {BRAND_INFO.name}
              </h3>
              <span className="font-editorial-mono text-[9px] uppercase tracking-[0.25em] text-[#4e342e]/70 dark:text-[#ffffff]/70 block mt-1">
                HANDCRAFTED ON THE COAST OF MAINE
              </span>
            </Link>
            
            <p className="text-sm text-[#4e342e]/85 dark:text-[#ffffff]/85 font-editorial-body max-w-sm leading-relaxed">
              Traveling the world for inspiration and materials. Cold-forged with hammered metals, leather, freshwater pearls, semi-precious stones, and raw druzies. Every piece is an edition of one.
            </p>

            <div className="pt-2 font-editorial-mono text-xs text-[#4e342e]/70 dark:text-[#ffffff]/70 space-y-1">
              <div>Studio Bench: Cape Elizabeth, Maine · USA</div>
              <div>Direct: 518 · 469 · 8981</div>
            </div>
          </div>

          {/* Column 1: The 5 Collections */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] block font-bold">
              COLLECTIONS (5)
            </span>
            <ul className="space-y-2.5 text-[#4e342e]/80 dark:text-[#ffffff]/80">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link 
                    to={`/collections/${c.slug}`}
                    className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors flex items-center gap-1 group"
                  >
                    <span>{c.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/collections" className="text-[#cc5500] dark:text-[#2c3480] font-bold underline underline-offset-4">
                  View Collections Grid →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: The 8 Travel Destinations */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] block font-bold">
              TRAVELS (8)
            </span>
            <ul className="space-y-2.5 text-[#4e342e]/80 dark:text-[#ffffff]/80">
              {TRAVEL_DESTINATIONS.slice(0, 5).map((d) => (
                <li key={d.id}>
                  <Link 
                    to={`/travels/${d.id}`}
                    className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors flex items-center gap-1 group"
                  >
                    <span>{d.country}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/travels" className="text-[#cc5500] dark:text-[#2c3480] font-bold underline underline-offset-4">
                  All 8 Lookbooks →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Care & Assurances */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] block font-bold">
              ASSURANCES
            </span>
            <ul className="space-y-2.5 text-[#4e342e]/80 dark:text-[#ffffff]/80">
              <li>
                <Link to="/shipping" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Signature Logo Boxes
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Insured USPS Priority
                </Link>
              </li>
              <li>
                <Link to="/guarantees" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Money-Back Guarantee
                </Link>
              </li>
              <li>
                <Link to="/customers" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Cora's Customers
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  About Cora's Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Curated Products */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] block font-bold">
              PRODUCT ARCHIVE
            </span>
            <ul className="space-y-2.5 text-[#4e342e]/80 dark:text-[#ffffff]/80">
              <li><Link to="/shop?category=earrings" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Earrings (38)</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Necklaces (24)</Link></li>
              <li><Link to="/shop?category=bracelets" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Bracelets (14)</Link></li>
              <li><Link to="/shop?category=rings" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Rings (8)</Link></li>
              <li><Link to="/shop?category=bag-charms" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">Bag Charms (6)</Link></li>
            </ul>
          </div>

        </div>

        {/* Massive Bottom Editorial Signature Wordmark */}
        <div className="pt-12 pb-6 flex items-center justify-center select-none overflow-hidden">
          <span className="font-display-serif font-black text-[12vw] tracking-tight text-[#4e342e]/10 dark:text-white/10 uppercase leading-none whitespace-nowrap">
            CORA HORNBY
          </span>
        </div>

        {/* Legal & Copyright Row */}
        <div className="pt-4 border-t border-[#4e342e]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-editorial-mono text-[#4e342e]/60 dark:text-white/60 gap-4">
          <div>Cape Elizabeth, Maine Studio · Est. 2018</div>
          <div>© {new Date().getFullYear()} Cora Hornby Jewelry. Traveling the World for Inspiration and Materials.</div>
          <div className="flex items-center gap-4">
            <Link to="/shipping" className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">Packaging & Shipping</Link>
            <Link to="/guarantees" className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">Guarantees</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, COLLECTIONS, TRAVEL_DESTINATIONS } from '../data/coraData';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] border-t border-[#4e342e]/15 dark:border-white/15 pt-16 transition-colors duration-400 overflow-hidden relative">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main Footer Editorial Columns (Exact Mockup Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#4e342e]/12 dark:border-white/12">
          
          {/* Column 1: Collections */}
          <div className="lg:col-span-3 space-y-3 font-editorial-mono text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#4e342e] dark:text-white block">
              Collections
            </span>
            <ul className="space-y-2 text-[#4e342e]/80 dark:text-white/80">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link 
                    to={`/collections/${c.slug}`}
                    className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors font-semibold">
                  Shop All Products (90)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Materials & Destinations */}
          <div className="lg:col-span-3 space-y-3 font-editorial-mono text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#4e342e] dark:text-white block">
              Materials &amp; Travels
            </span>
            <ul className="space-y-2 text-[#4e342e]/80 dark:text-white/80">
              <li>
                <Link to="/travels/guatemala" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Guatemala · Mountain Jade
                </Link>
              </li>
              <li>
                <Link to="/travels/brazil" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Brazil · Raw Amethyst &amp; Citrine
                </Link>
              </li>
              <li>
                <Link to="/travels/greece" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Greece · Ancient Aegean Spirals
                </Link>
              </li>
              <li>
                <Link to="/travels/namibia" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Namibia · Sun-Baked Beadwork
                </Link>
              </li>
              <li>
                <Link to="/travels" className="text-[#cc5500] dark:text-[#2c3480] font-bold transition-colors">
                  View All 8 Expeditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Studio */}
          <div className="lg:col-span-2 space-y-3 font-editorial-mono text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#4e342e] dark:text-white block">
              About Studio
            </span>
            <ul className="space-y-2 text-[#4e342e]/80 dark:text-white/80">
              <li>
                <Link to="/story" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Cora's Story
                </Link>
              </li>
              <li>
                <Link to="/customers" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Packaging &amp; Shipping
                </Link>
              </li>
              <li>
                <Link to="/guarantees" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors">
                  Guarantees
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Mockup accurate: "Type an email to sign up") */}
          <div className="lg:col-span-4 space-y-3 font-editorial-mono text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#4e342e] dark:text-white block">
              Newsletter
            </span>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative border-b border-[#4e342e]/30 dark:border-white/30 pb-1 flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type an email to sign up"
                  required
                  className="w-full bg-transparent text-xs text-[#4e342e] dark:text-white placeholder-[#4e342e]/50 dark:placeholder-white/50 focus:outline-hidden font-editorial-body pr-8"
                />
                <button
                  type="submit"
                  className="text-[#cc5500] dark:text-[#2c3480] hover:scale-110 transition-transform"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4 text-green-600" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              {subscribed && (
                <span className="text-[10px] text-green-600 dark:text-green-400 block">
                  Thank you for subscribing to the studio dispatch.
                </span>
              )}
            </form>

            {/* Social Initials: P T I L N and Explore More */}
            <div className="pt-4 flex items-center justify-between text-xs tracking-[0.3em] font-bold text-[#4e342e]/80 dark:text-white/80">
              <div className="flex items-center gap-4">
                <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">P</span>
                <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">T</span>
                <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">I</span>
                <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">L</span>
                <span className="hover:text-[#cc5500] dark:hover:text-[#2c3480] cursor-pointer">N</span>
              </div>

              <Link 
                to="/collections" 
                className="text-[10px] uppercase font-bold tracking-widest text-[#cc5500] dark:text-[#2c3480] hover:underline"
              >
                Explore More →
              </Link>
            </div>

          </div>

        </div>

        {/* Studio Bench Signoff & Address */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-editorial-mono uppercase text-[#4e342e]/60 dark:text-white/60">
          <div>Cape Elizabeth, Maine Studio · Est. 2018 · 518 · 469 · 8981</div>
          <div>© {new Date().getFullYear()} Cora Hornby Jewelry · Handcrafted on the Coast of Maine</div>
        </div>

        {/* GIANT CUTOFF BOTTOM WORDMARK: "HORNBY" (EXACT MOCKUP MATCH) */}
        <div className="w-full select-none overflow-hidden text-center pt-2 -mb-8 sm:-mb-14 lg:-mb-20">
          <span className="font-sans font-black text-[22vw] leading-[0.72] uppercase tracking-tighter text-[#4e342e] dark:text-[#ffffff] block transition-colors">
            HORNBY
          </span>
        </div>

      </div>
    </footer>
  );
}

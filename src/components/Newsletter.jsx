import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F2] dark:bg-[#0C0A09] text-[#12100E] dark:text-[#F7F5EE] border-t border-[#12100E]/8 dark:border-white/10 transition-colors duration-700">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          
          {/* Left: Headline in Cormorant Garamond */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-editorial-mono text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-bold">
              PRIVATE STUDIO DISPATCH
            </span>
            <h2 className="font-editorial-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#12100E] dark:text-[#FAF8F2] leading-[1.02]">
              Be the first to discover new single-edition creations.
            </h2>
            <p className="text-xs sm:text-sm text-[#78746B] dark:text-[#A8A49C] font-editorial-body max-w-lg leading-relaxed">
              New pieces are released directly from the Cape Elizabeth bench in unrepeated single editions. No spam, only rare studio notifications.
            </p>
          </div>

          {/* Right: Minimal Underline Email Form */}
          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="gloss-pill p-4 rounded-full flex items-center gap-3 text-xs font-editorial-mono text-[#12100E] dark:text-[#FAF8F2]">
                <Check className="w-4 h-4 text-[#C5A869]" />
                <span>You are subscribed to Cora's private studio releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center border-b border-[#12100E] dark:border-white/30 pb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent text-base sm:text-lg font-editorial-body text-[#12100E] dark:text-[#FAF8F2] placeholder-[#8F8A80] dark:placeholder-[#7E7A70] focus:outline-hidden py-1 pr-32"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#12100E] dark:text-[#FAF8F2] hover:text-[#C5A869] font-bold transition-colors flex items-center gap-2"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

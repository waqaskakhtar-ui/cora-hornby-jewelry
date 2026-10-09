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
    <section className="py-16 lg:py-20 bg-[#F9F8F5] dark:bg-[#0F0E0D] text-[#111111] dark:text-[#FAF9F5] border-t border-[#111111]/8 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-end">
          
          {/* Left: Headline */}
          <div className="col-span-12 lg:col-span-7 space-y-3">
            <h2 className="font-display-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-[1.05]">
              Be the first to know about new pieces and private collections.
            </h2>
            <p className="text-sm sm:text-base text-[#73716B] dark:text-[#9E9A90] font-editorial-body max-w-lg leading-relaxed">
              New works are released directly from the Cape Elizabeth studio in limited, single-edition releases. No spam, only studio updates.
            </p>
          </div>

          {/* Right: Minimal Underline Email Form */}
          <div className="col-span-12 lg:col-span-5">
            {subscribed ? (
              <div className="p-3.5 bg-[#EBE9DF]/60 dark:bg-[#1A1917] border border-[#111111]/10 dark:border-white/15 flex items-center gap-2.5 text-xs font-editorial-mono text-[#111111] dark:text-[#FAF9F5]">
                <Check className="w-4 h-4 text-[#A88B58]" />
                <span>You are subscribed to Cora's private studio releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center border-b border-[#111111] dark:border-white/40 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-transparent text-base sm:text-lg font-editorial-body text-[#111111] dark:text-[#FAF9F5] placeholder-[#8A867E] dark:placeholder-[#7E7A70] focus:outline-hidden py-1 pr-28"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-[11px] font-editorial-mono uppercase tracking-[0.18em] text-[#111111] dark:text-[#FAF9F5] font-semibold hover:opacity-70 transition-opacity flex items-center gap-1.5"
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

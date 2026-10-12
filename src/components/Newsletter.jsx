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
    <section className="py-24 sm:py-32 bg-[#F9F8F5] dark:bg-[#0C0B0A] text-[#1C1B19] dark:text-[#F8F6F2] border-t border-[#E8E4DA] dark:border-[#262421] transition-colors duration-500 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-end">
          
          {/* Left: Headline */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1C1B19] dark:text-[#F8F6F2] leading-[1.1]">
              Be the first to know about new pieces &amp; private collections.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6760] dark:text-[#9A968E] max-w-xl leading-relaxed font-normal">
              New works are released directly from the Cape Elizabeth studio in limited, single-edition releases. No spam, only studio updates.
            </p>
          </div>

          {/* Right: Minimal Underline Email Form */}
          <div className="col-span-12 lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-[#F2EFE7] dark:bg-[#161412] border border-[#DCD6C9] dark:border-[#2B2824] rounded-xl flex items-center gap-3 text-xs text-[#1C1B19] dark:text-[#F8F6F2] font-semibold">
                <Check className="w-4 h-4 text-[#A88B58]" />
                <span>You are subscribed to Cora's private studio releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center border-b-2 border-[#1C1B19] dark:border-white/50 pb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-transparent text-base sm:text-lg text-[#1C1B19] dark:text-[#F8F6F2] placeholder-[#8A867E] dark:placeholder-[#7E7A70] focus:outline-hidden py-1 pr-32 font-medium"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-xs uppercase tracking-[0.18em] text-[#1C1B19] dark:text-[#F8F6F2] font-bold hover:text-[#A88B58] transition-colors flex items-center gap-2"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

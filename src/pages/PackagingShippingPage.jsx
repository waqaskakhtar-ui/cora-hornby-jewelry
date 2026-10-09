import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Truck, CheckCircle2, ShieldCheck, ArrowRight, Package } from 'lucide-react';
import { STUDIO_ASSURANCES } from '../data/coraData';

export default function PackagingShippingPage() {
  const { packaging, shipping } = STUDIO_ASSURANCES;

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-4">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <span className="text-[#A88B58]">PACKAGING & SHIPPING</span>
        </div>

        {/* Section Header */}
        <div className="pb-12 border-b border-[#111111]/10 dark:border-white/10 space-y-4 max-w-4xl">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#A88B58]" />
            <span>COLLECTOR PRESENTATION & FULFILLMENT</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-tight">
            Packaging & Studio Shipping
          </h1>

          <p className="font-editorial-body text-base sm:text-lg text-[#5E5C57] dark:text-[#B5B0A4] leading-relaxed">
            Every piece leaves our Cape Elizabeth, Maine studio individually gift-boxed with signature debossing, ready for a lifetime of safekeeping or immediate luxury gifting.
          </p>
        </div>

        {/* 1. SIGNATURE LOGO GIFT BOX PRESENTATION */}
        <div className="mt-14 grid grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-editorial-micro text-[#A88B58]">
                01 / THE UNBOXING EXPERIENCE
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                {packaging.title}
              </h2>
              <p className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
                {packaging.subtitle}
              </p>
            </div>

            <p className="font-editorial-body text-sm sm:text-base text-[#4A4742] dark:text-[#D4D0C7] leading-relaxed">
              {packaging.description}
            </p>

            <div className="space-y-2 pt-2 font-editorial-mono text-xs">
              {packaging.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#F5F3EC] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/8">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase: Logo Gift Box Imagery with Physical Overlaps */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-[#1A1917] overflow-hidden reveal-clip shadow-xl p-3 border border-[#111111]/10 dark:border-white/10">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657275999-NO6EK65SN16E85AOD73A/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fec8df4%2F3451414898%2Fil_fullxfull.3451414898_qvov.jpg"
                alt="Cora Hornby Signature Logo Gift Box"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>

            {/* Negative Margin Physical Overlay Plaque */}
            <div className="mt-[-2.5rem] ml-6 relative z-10 p-5 bg-[#FAF9F5]/95 dark:bg-[#161514]/95 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 shadow-lg max-w-xs">
              <span className="font-editorial-micro text-[#A88B58] block mb-1">SIGNATURE SPECIFICATION</span>
              <p className="font-editorial-body text-xs text-[#5E5C57] dark:text-[#A6A49E]">
                Rigid matte-black presentation box with debossed metallic logo and tied satin grosgrain ribbon.
              </p>
            </div>
          </div>

        </div>

        {/* 2. SHIPPING & INSURED TRANSIT SPECIFICATION */}
        <div className="mt-24 pt-16 border-t border-[#111111]/10 dark:border-white/10 grid grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="col-span-12 lg:col-span-6 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="font-editorial-micro text-[#A88B58]">
                02 / FULFILLMENT & TRANSIT
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                {shipping.title}
              </h2>
              <p className="font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
                {shipping.subtitle}
              </p>
            </div>

            <p className="font-editorial-body text-sm sm:text-base text-[#4A4742] dark:text-[#D4D0C7] leading-relaxed">
              {shipping.description}
            </p>

            <div className="space-y-2 pt-2 font-editorial-mono text-xs">
              {shipping.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#F5F3EC] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/8">
                  <CheckCircle2 className="w-4 h-4 text-[#A88B58] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/guarantees"
                className="inline-flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] underline underline-offset-4 hover:text-[#A88B58]"
              >
                <span>VIEW STUDIO GUARANTEES & RETURN POLICY →</span>
              </Link>
            </div>
          </div>

          {/* Shipping Graphic Card */}
          <div className="col-span-12 lg:col-span-6 lg:order-1 p-8 bg-[#F2ECE1] dark:bg-[#141210] border border-[#A88B58]/30 space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-editorial-micro text-[#A88B58]">
                ESTIMATED DELIVERY TIMELINES
              </span>
              <h3 className="font-editorial-heading text-2xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                Fast, Insured Benchmark Transit
              </h3>
            </div>

            <div className="space-y-3 font-editorial-mono text-xs">
              <div className="flex justify-between py-2 border-b border-[#A88B58]/20">
                <span className="text-[#5E5C57] dark:text-[#B5B0A4]">DOMESTIC STANDARD:</span>
                <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">2–4 Business Days (USPS Priority)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#A88B58]/20">
                <span className="text-[#5E5C57] dark:text-[#B5B0A4]">ORDERS OVER $100:</span>
                <span className="font-bold text-[#A88B58]">Complimentary Domestic Shipping</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#A88B58]/20">
                <span className="text-[#5E5C57] dark:text-[#B5B0A4]">INTERNATIONAL:</span>
                <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">6–10 Days Tracked Transit</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#5E5C57] dark:text-[#B5B0A4]">INSURANCE:</span>
                <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">100% Value Insured Against Loss</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

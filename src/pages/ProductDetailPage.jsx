import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Check, Shield, MapPin, Truck, Award, Sparkles, ShoppingBag, Eye } from 'lucide-react';
import gsap from 'gsap';
import { PRODUCTS, STUDIO_ASSURANCES } from '../data/coraData';

export default function ProductDetailPage({ product, onBack, onAddToCart, onSelectRelated }) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [isAdded, setIsAdded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, hovering: false });
  const rightColRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  // Handle floating cursor follower inside CTA zone
  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      hovering: true
    });
  };

  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, hovering: false }));
  };

  const handleAdd = () => {
    if (onAddToCart && product) {
      onAddToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2200);
    }
  };

  if (!product) return null;

  const relatedPieces = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.collection === product.collection || p.category === product.category)
  ).slice(0, 3);

  const images = [product.image, product.altImage, product.modelImage].filter(Boolean);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F5] pt-28 pb-24 px-6 sm:px-10 lg:px-14 transition-colors duration-500 relative"
    >
      <div className="max-w-[1720px] mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 border-b border-[#111111]/10 dark:border-white/10 mb-10">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-widest text-[#73716B] dark:text-[#9E9A90] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ARCHIVE</span>
          </button>

          <div className="flex items-center gap-4 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <span className="hidden sm:inline">PROVENANCE: {product.origin}</span>
            <span className="text-[#A88B58]">·</span>
            <span className="text-[#A88B58] font-bold">ONE OF ONE</span>
          </div>
        </div>

        {/* Split-Screen Vertical Architecture */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Sticky High-Gloss Macro Visual Viewer with Specular Sheen */}
          <div className="col-span-12 lg:col-span-7 lg:sticky lg:top-28 space-y-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#ECE9E0] dark:bg-[#161514] border border-[#111111]/10 dark:border-white/10 overflow-hidden p-3 shadow-xl gloss-highlight">
              {/* Hairline Exhibition Corner Accents */}
              <div className="absolute inset-4 pointer-events-none z-10 opacity-70">
                <span className="absolute top-0 left-0 text-xs font-editorial-mono text-[#A88B58]">+</span>
                <span className="absolute top-0 right-0 text-xs font-editorial-mono text-[#A88B58]">+</span>
                <span className="absolute bottom-0 left-0 text-xs font-editorial-mono text-[#A88B58]">+</span>
                <span className="absolute bottom-0 right-0 text-xs font-editorial-mono text-[#A88B58]">+</span>
              </div>

              <div className="w-full h-full overflow-hidden bg-[#E5E2DA] dark:bg-[#201F1C] relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover filter contrast-[1.04] transition-all duration-700 ease-out hover:scale-105"
                />

                {/* Floating Specular Badge */}
                <div className="absolute bottom-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#111111]/90 backdrop-blur-md px-3 py-1 font-editorial-mono text-[9px] uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] border border-[#111111]/10 dark:border-white/10">
                  MACRO DETAIL · 100% BENCH HANDWORK
                </div>
              </div>
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-[4/3] bg-[#E8E5DC] dark:bg-[#1A1917] border overflow-hidden p-1 transition-all ${
                      selectedImage === img
                        ? 'border-[#A88B58] shadow-md scale-98'
                        : 'border-[#111111]/10 dark:border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover filter contrast-[1.03]"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Atelier Verification Seal */}
            <div className="p-4 bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#A88B58]" />
                <span>INDIVIDUALLY FORGED AT THE MAINE COAST ANVIL</span>
              </div>
              <span className="text-[#111111] dark:text-[#FAF9F5] font-semibold">SIGNED ARCHIVE PIECE</span>
            </div>
          </div>

          {/* Right Column: Scrollable Content with Reveal Specs, Provenance & Acquire CTA */}
          <div ref={rightColRef} className="col-span-12 lg:col-span-5 space-y-8">
            
            {/* Header Tier */}
            <div className="space-y-3 pb-6 border-b border-[#111111]/10 dark:border-white/10">
              <div className="flex items-center justify-between font-editorial-mono text-xs">
                <span className="text-[#A88B58] uppercase font-semibold tracking-widest">
                  {product.collection} COLLECTION
                </span>
                <span className="text-2xl font-bold font-editorial-mono text-[#111111] dark:text-[#FAF9F5]">
                  {product.price}
                </span>
              </div>

              <h1 className="font-display-grotesk text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111111] dark:text-[#FAF9F5] leading-[0.98]">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#73716B] dark:text-[#9E9A90]">
                <MapPin className="w-3.5 h-3.5 text-[#A88B58]" />
                <span>{product.origin}</span>
              </div>
            </div>

            {/* Narrative & Storytelling */}
            <div className="space-y-4">
              <span className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#9E9A90] block">
                ATELIER SPECIFICATION & PROVENANCE
              </span>
              <p className="text-sm sm:text-base text-[#4A4843] dark:text-[#D4D0C7] font-editorial-body leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Anatomy Grid */}
            <div className="p-6 bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/10 dark:border-white/10 space-y-4 font-editorial-mono text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#A88B58] font-bold block">
                BENCH MEASUREMENTS & COMPOSITION
              </span>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#111111]/8 dark:border-white/10">
                <div>
                  <span className="text-[9px] uppercase text-[#8A867E] dark:text-[#7E7A70] block">MATERIALS</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] font-medium block mt-0.5">{product.material}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase text-[#8A867E] dark:text-[#7E7A70] block">DIMENSIONS</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] font-medium block mt-0.5">{product.dimensions || 'One size · Studio spec'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#111111]/8 dark:border-white/10">
                <div>
                  <span className="text-[9px] uppercase text-[#8A867E] dark:text-[#7E7A70] block">MINERAL PROVENANCE</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] font-medium block mt-0.5">{product.travelCountry || 'Global Lapidary'}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase text-[#8A867E] dark:text-[#7E7A70] block">EDITION RUN</span>
                  <span className="text-[#A88B58] font-bold block mt-0.5">EDITION OF ONE (NO DUPLICATES)</span>
                </div>
              </div>
            </div>

            {/* Studio Packaging & Dispatch Assurances */}
            <div className="space-y-3 font-editorial-mono text-xs text-[#5E5C57] dark:text-[#B5B0A4] pt-2">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#A88B58] flex-shrink-0" />
                <span>Dispatches from Cape Elizabeth, Maine within 1–2 business days</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A88B58] flex-shrink-0" />
                <span>Signature matte black debossed logo box with anti-tarnish velvet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A88B58] flex-shrink-0" />
                <span>100% 30-Day Studio Money-Back Guarantee</span>
              </div>
            </div>

            {/* Primary Acquire CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleAdd}
                className={`w-full py-5 px-8 font-editorial-mono uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${
                  isAdded
                    ? 'bg-[#2E5E4E] text-[#FAF9F5]'
                    : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>ACQUIRED TO COLLECTOR BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>ACQUIRE PIECE · {product.price}</span>
                  </>
                )}
              </button>
            </div>

            {/* Related Pieces from same Collection */}
            {relatedPieces.length > 0 && (
              <div className="pt-8 border-t border-[#111111]/10 dark:border-white/10 space-y-4">
                <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8A867E] dark:text-[#9E9A90] block">
                  RELATED STUDIO CREATIONS
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {relatedPieces.map((rp) => (
                    <div
                      key={rp.id}
                      onClick={() => onSelectRelated && onSelectRelated(rp)}
                      className="group cursor-pointer bg-[#F2EFE8] dark:bg-[#141312] border border-[#111111]/8 dark:border-white/10 p-2 space-y-1 hover:border-[#A88B58] transition-colors"
                    >
                      <div className="aspect-square overflow-hidden bg-[#E2DFD6] dark:bg-[#1E1C1A]">
                        <img
                          src={rp.image}
                          alt={rp.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-[10px] font-display-grotesk font-bold block truncate text-[#111111] dark:text-[#FAF9F5]">
                        {rp.name}
                      </span>
                      <span className="text-[9px] font-editorial-mono text-[#A88B58] block font-semibold">
                        {rp.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

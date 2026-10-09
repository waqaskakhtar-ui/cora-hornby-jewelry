import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Check, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const images = [
    product.image,
    product.altImage,
    product.modelImage
  ].filter(Boolean);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#111111]/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/15 dark:border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row transition-colors duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF9F5] dark:bg-[#1A1918] text-[#111111] dark:text-[#FAF9F5] hover:bg-[#111111] dark:hover:bg-[#FAF9F5] hover:text-[#FAF9F5] dark:hover:text-[#111111] transition-colors border border-[#111111]/10 dark:border-white/15"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Photography Showcase */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#F0EEE6] dark:bg-[#161514] flex flex-col justify-between">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E2DFD6] dark:bg-[#1E1D1B] border border-[#111111]/8 dark:border-white/10">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-contain filter contrast-[1.04] transition-all duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#121110]/90 px-2.5 py-1 font-editorial-mono text-[9px] uppercase tracking-widest text-[#111111] dark:text-[#FAF9F5] border border-[#111111]/10 dark:border-white/15">
              ONE-OF-A-KIND
            </div>
          </div>

          {/* Alternate Image Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 border overflow-hidden transition-all ${
                    activeImage === img
                      ? 'border-[#111111] dark:border-white ring-1 ring-[#111111] dark:ring-white'
                      : 'border-[#111111]/15 dark:border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Acquisition */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[85vh]">
          <div className="space-y-6">
            
            {/* Header / Taxonomy */}
            <div>
              <div className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#8A867E] dark:text-[#8E8B83]">
                {product.category} · {product.origin || 'Cape Elizabeth Studio'}
              </div>
              <h2 className="font-display-grotesk text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5] mt-1">
                {product.name}
              </h2>
              <div className="font-editorial-mono text-xl font-semibold text-[#111111] dark:text-[#FAF9F5] mt-2">
                {product.price}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5E5C57] dark:text-[#B5B3AC] font-editorial-body leading-relaxed">
              {product.description}
            </p>

            {/* Technical Specifications */}
            <div className="space-y-3 pt-4 border-t border-[#111111]/10 dark:border-white/10 font-editorial-mono text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#111111]/6 dark:border-white/6">
                <span className="text-[#8A867E] dark:text-[#8E8B83]">MATERIALS</span>
                <span className="text-[#111111] dark:text-[#FAF9F5] text-right font-medium max-w-[240px] truncate">
                  {product.material}
                </span>
              </div>
              {product.dimensions && (
                <div className="flex justify-between py-1 border-b border-[#111111]/6 dark:border-white/6">
                  <span className="text-[#8A867E] dark:text-[#8E8B83]">DIMENSIONS</span>
                  <span className="text-[#111111] dark:text-[#FAF9F5] text-right font-medium">
                    {product.dimensions}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-[#111111]/6 dark:border-white/6">
                <span className="text-[#8A867E] dark:text-[#8E8B83]">ORIGIN</span>
                <span className="text-[#111111] dark:text-[#FAF9F5] text-right font-medium">
                  Cape Elizabeth, Maine
                </span>
              </div>
            </div>

            {/* Studio Guarantee */}
            <div className="p-3.5 bg-[#EBE9DF]/60 dark:bg-[#1A1918]/70 border border-[#111111]/10 dark:border-white/10 flex items-start gap-2.5 text-[11px] font-editorial-mono text-[#73716B] dark:text-[#A6A49E]">
              <ShieldCheck className="w-4 h-4 text-[#A88B58] shrink-0 mt-0.5" />
              <span>
                Each piece is individually assembled by hand by Cora Hornby. Natural variations in minerals make each work singular.
              </span>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-6 mt-6 border-t border-[#111111]/10 dark:border-white/10 space-y-3">
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs font-editorial-mono uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 ${
                added
                  ? 'bg-[#A88B58] text-[#FAF9F5]'
                  : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#2C2B28] dark:hover:bg-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO STUDIO BAG</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>ADD TO STUDIO BAG · {product.price}</span>
                </>
              )}
            </button>

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="w-full py-3 text-center flex items-center justify-center gap-2 text-[11px] font-editorial-mono uppercase tracking-[0.2em] border border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-[#FAF9F5] hover:border-[#111111] dark:hover:border-white hover:bg-[#111111]/5 dark:hover:bg-white/5 transition-all"
            >
              <span>VIEW FULL PIECE ARCHIVE & PROVENANCE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="text-center">
              <a
                href={`mailto:corahornby@corahornby.com?subject=Inquiry regarding ${encodeURIComponent(product.name)}`}
                className="text-[10px] font-editorial-mono uppercase tracking-widest text-[#8A867E] dark:text-[#8E8B83] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
              >
                REQUEST CUSTOM LENGTH OR INQUIRY
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

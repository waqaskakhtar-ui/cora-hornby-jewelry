import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ShoppingBag, ShieldCheck, Truck, Gift, Check, 
  MapPin, Compass, Sparkles, ChevronRight, Star, Heart
} from 'lucide-react';
import { PRODUCTS, TRAVEL_DESTINATIONS } from '../data/coraData';

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  // Find product by id, fallback to first product
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // Find travel destination if applicable
  const destination = TRAVEL_DESTINATIONS.find((d) => 
    product.travelCountry && (
      d.country.toLowerCase().includes(product.travelCountry.toLowerCase()) ||
      product.travelCountry.toLowerCase().includes(d.country.toLowerCase())
    )
  );

  const images = [
    product.image,
    product.altImage,
    product.modelImage
  ].filter(Boolean);

  const activeImage = images[selectedImageIndex] || product.image;

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-12">
        
        {/* Top Breadcrumb Navigation */}
        <div data-stagger="text" className="flex items-center justify-between pb-4 border-b border-[#4e342e]/15 dark:border-white/15 text-xs font-editorial-mono uppercase tracking-wider text-[#4e342e]/70 dark:text-white/70">
          <div className="flex items-center gap-2">
            <Link to="/shop" className="hover:text-[#cc5500] dark:hover:text-[#2c3480] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>SHOP ALL</span>
            </Link>
            <span>/</span>
            {product.collection && (
              <>
                <Link to={`/collections/${product.collection.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#cc5500] dark:hover:text-[#2c3480]">
                  {product.collection}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#4e342e] dark:text-white font-bold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <span className="hidden sm:inline text-[#cc5500] dark:text-[#2c3480] font-bold">
            EDITION OF ONE · CAPE ELIZABETH BENCH
          </span>
        </div>

        {/* 2-Column CRO Asymmetrical Viewport:
            - Left: Deep Storytelling, Travel Pair, Material Specs, Macro Imagery
            - Right: Pinned STICKY Purchasing Zone
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Deep Visuals & Storytelling (Scrollable) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Primary Gallery Showcase */}
            <div className="space-y-4">
              <div data-stagger="image" className="aspect-[4/3] sm:aspect-[1/1] bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 overflow-hidden relative shadow-xl group">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 bg-[#f8f4e7]/90 dark:bg-black/90 px-3 py-1 text-[10px] font-editorial-mono uppercase tracking-widest text-[#4e342e] dark:text-white border border-[#4e342e]/15 dark:border-white/15">
                  VIEW {selectedImageIndex + 1} OF {images.length}
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#f8f4e7]/90 dark:bg-black/90 p-3 text-[11px] font-editorial-mono text-[#4e342e] dark:text-white flex items-center justify-between border border-[#4e342e]/10 dark:border-white/10 backdrop-blur-xs">
                  <span>PROVENANCE: {product.origin || 'Cape Elizabeth, Maine'}</span>
                  <span className="font-bold text-[#cc5500] dark:text-[#2c3480]">NO DUPLICATE MOLDS</span>
                </div>
              </div>

              {/* Multi-Angle Thumbnail Selector */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIndex(i)}
                      className={`aspect-square bg-[#4e342e]/5 dark:bg-white/5 overflow-hidden border transition-all ${
                        selectedImageIndex === i
                          ? 'border-[#cc5500] dark:border-[#2c3480] shadow-md scale-102'
                          : 'border-[#4e342e]/15 dark:border-white/15 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Angle ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Inspiration Connection (If product has regional heritage) */}
            {destination && (
              <div className="p-8 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 space-y-5">
                <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    <span>TRAVEL INSPIRATION STORY</span>
                  </span>
                  <span>{destination.country.toUpperCase()}</span>
                </div>

                <h3 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
                  The Journey Behind the Piece
                </h3>

                <p className="font-editorial-serif italic text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85">
                  "{destination.tagline}"
                </p>

                <p className="text-sm text-[#4e342e]/80 dark:text-white/80 font-editorial-body leading-relaxed">
                  {destination.sourceNotes} Sourced and composed directly by Cora during her world travel journeys and brought to life on an antique bench anvil in Maine.
                </p>

                <div className="pt-2">
                  <Link
                    to={`/travels/${destination.id}`}
                    className="text-xs font-editorial-mono uppercase font-bold text-[#cc5500] dark:text-[#2c3480] hover:underline flex items-center gap-1"
                  >
                    <span>EXPLORE ALL 3 {destination.country.toUpperCase()} PIECES</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Material & Craft Specifications */}
            <div className="space-y-6 pt-4 border-t border-[#4e342e]/15 dark:border-white/15">
              <h3 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
                Material & Anatomical Specs
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-editorial-mono text-xs">
                <div className="p-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest opacity-60 block">MATERIALS</span>
                  <span className="font-bold text-[#4e342e] dark:text-white block">{product.material}</span>
                </div>

                <div className="p-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest opacity-60 block">DIMENSIONS</span>
                  <span className="font-bold text-[#4e342e] dark:text-white block">{product.dimensions || 'Studio Custom Proportion'}</span>
                </div>

                <div className="p-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest opacity-60 block">STUDIO PRODUCTION</span>
                  <span className="font-bold text-[#4e342e] dark:text-white block">Cape Elizabeth, Maine Bench</span>
                </div>

                <div className="p-4 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest opacity-60 block">MINERAL INTEGRITY</span>
                  <span className="font-bold text-[#cc5500] dark:text-[#2c3480] block">100% Ethically Harvested</span>
                </div>
              </div>
            </div>

            {/* Unboxing Experience */}
            <div className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 flex items-start gap-4 font-editorial-mono text-xs">
              <Gift className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-[#4e342e] dark:text-white block uppercase">
                  Signature Rigid Black Gift Box Included
                </span>
                <p className="text-[11px] text-[#4e342e]/75 dark:text-white/75 font-editorial-body leading-relaxed">
                  Every order arrives in our custom rigid black gift box debossed with the signature Cora Hornby logo, tied with grosgrain ribbon, and cushioned in anti-tarnish velvet with a handwritten provenance note signed by Cora.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: PINNED STICKY PURCHASING ZONE (HIGH-CONVERSION HEAT ZONE) */}
          <div className="lg:col-span-5 sticky top-28 self-start space-y-8">
            <div className="bg-[#4e342e]/5 dark:bg-white/5 border-2 border-[#4e342e]/20 dark:border-white/20 p-8 sm:p-10 shadow-2xl space-y-6">
              
              {/* Collection and Silhouette Tag */}
              <div className="flex items-center justify-between font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#cc5500] dark:text-[#2c3480] font-bold">
                <span>{product.collection || 'STUDIO MASTERPIECE'}</span>
                <span>{product.productType || product.category}</span>
              </div>

              {/* Title & Price */}
              <div className="space-y-2 border-b border-[#4e342e]/15 dark:border-white/15 pb-6">
                <h1 className="font-display-serif text-3xl sm:text-4xl font-bold text-[#4e342e] dark:text-white leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-3 pt-1">
                  <span className="font-display-serif text-3xl sm:text-4xl font-bold text-[#4e342e] dark:text-white">
                    {product.price}
                  </span>
                  <span className="font-editorial-mono text-xs text-[#cc5500] dark:text-[#2c3480] font-bold uppercase">
                    COMPLIMENTARY SHIPPING
                  </span>
                </div>
              </div>

              {/* Description Snippet */}
              <p className="text-xs sm:text-sm text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed">
                {product.description}
              </p>

              {/* CRO PURCHASING ZONE:
                  - Strict Micro-copy: "Hand-crafted in Maine" placed directly above CTA
                  - Primary CTA: "Add to Collection" in strict #cc5500 / #2c3480
                  - Strict Trust Signal: "Money-back guarantee"
              */}
              <div className="space-y-3 pt-2">
                
                {/* Micro-Copy Trust Signal Placed Directly Above CTA */}
                <div className="flex items-center justify-between text-[11px] font-editorial-mono uppercase tracking-[0.18em]">
                  <span className="text-[#cc5500] dark:text-[#2c3480] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc5500] dark:bg-[#2c3480]"></span>
                    Hand-crafted in Maine
                  </span>
                  <span className="text-[#4e342e]/60 dark:text-white/60">
                    EDITION: 1 OF 1
                  </span>
                </div>

                {/* Primary CTA Button: Add to Collection */}
                <button
                  onClick={handleAdd}
                  className={`w-full py-4 px-6 text-white font-editorial-mono text-xs uppercase tracking-[0.22em] font-bold transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                    isAdded
                      ? 'bg-[#2E5E4E]'
                      : 'bg-[#cc5500] dark:bg-[#2c3480] hover:bg-[#b34700] dark:hover:bg-[#3b46a3]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO YOUR COLLECTION</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO COLLECTION</span>
                    </>
                  )}
                </button>

                {/* Pinned Trust Signal: Money-Back Guarantee */}
                <div className="p-3.5 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs">
                  <div className="flex items-center gap-2 text-[#4e342e] dark:text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480]" />
                    <span>Money-back guarantee</span>
                  </div>
                  <Link to="/guarantees" className="text-[10px] text-[#cc5500] dark:text-[#2c3480] font-bold hover:underline">
                    30-Day Policy →
                  </Link>
                </div>

              </div>

              {/* Additional Assurances Checklist */}
              <div className="pt-4 border-t border-[#4e342e]/15 dark:border-white/15 space-y-2.5 font-editorial-mono text-[11px] text-[#4e342e]/75 dark:text-white/75">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                  <span>Ships in 1–2 days via fully insured USPS Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-3.5 h-3.5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                  <span>Debossed logo gift box & velvet pouch included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#cc5500] dark:text-[#2c3480] flex-shrink-0" />
                  <span>Complimentary chain & cord sizing adjustments</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

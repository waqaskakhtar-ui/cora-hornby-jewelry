import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Check, ArrowLeft, ArrowRight, ShieldCheck, Gift, Truck, RefreshCw, Compass, Sparkles } from 'lucide-react';
import { getProductById, PRODUCTS, STUDIO_ASSURANCES } from '../data/coraData';

export default function ProductDetailPage({ onQuickAdd }) {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('bench'); // 'bench' | 'shipping' | 'guarantee'

  // Update selected image if route product changes
  React.useEffect(() => {
    setSelectedImage(product.image);
  }, [product.id]);

  const images = [
    { label: 'BENCH SHOT', src: product.image },
    product.altImage ? { label: 'INSPIRATION / ALT', src: product.altImage } : null,
    product.modelImage ? { label: 'MODEL STYLING', src: product.modelImage } : null,
  ].filter(Boolean);

  const handleAdd = () => {
    if (onQuickAdd) onQuickAdd(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Find related pieces
  const relatedPieces = PRODUCTS.filter(p => 
    p.id !== product.id && (p.collection === product.collection || p.category === product.category)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-editorial-micro text-[#8A867E] mb-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">SHOP</Link>
            <span>/</span>
            <span className="text-[#A88B58] font-bold truncate max-w-[200px] sm:max-w-none">{product.name.toUpperCase()}</span>
          </div>

          <Link to="/shop" className="hover:text-[#111111] dark:hover:text-[#FAF9F5] flex items-center gap-1 font-editorial-mono text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SHOP</span>
          </Link>
        </div>

        {/* Asymmetrical High-End Editorial Presentation */}
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Multi-Angle Imagery & Zoom with Negative Margin Overlaps */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            
            {/* Primary Large Image Frame */}
            <div className="relative aspect-[4/5] bg-[#ECE8DF] dark:bg-[#151413] overflow-hidden reveal-clip shadow-xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover filter contrast-[1.05] transition-all duration-700 ease-out"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-[#111111]/90 text-[#FAF9F5] px-3 py-1 font-editorial-micro tracking-widest">
                ONE-OF-A-KIND BENCH EDITION
              </div>

              {product.travelCountry && (
                <div className="absolute bottom-4 left-4 bg-[#FAF9F5]/90 dark:bg-[#111111]/90 backdrop-blur-xs px-3 py-1 font-editorial-mono text-[10px] text-[#111111] dark:text-[#FAF9F5]">
                  ✦ {product.travelCountry.toUpperCase()}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img.src)}
                  className={`relative w-20 h-24 flex-shrink-0 bg-[#E8E4DA] dark:bg-[#181715] overflow-hidden border-2 transition-all ${
                    selectedImage === img.src
                      ? 'border-[#A88B58] scale-102 shadow-sm'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[#FAF9F5] text-[7px] font-editorial-mono py-0.5 text-center truncate">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Physical Overlap Text & Luxury Spec Sheet */}
          <div className="col-span-12 lg:col-span-5 space-y-8 lg:-ml-6 relative z-10">
            
            {/* Title & Core Pricing */}
            <div className="p-6 sm:p-8 bg-[#FAF9F5]/95 dark:bg-[#121110]/95 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 shadow-lg space-y-4">
              <div className="flex items-center justify-between font-editorial-micro text-[#8A867E]">
                <span>{product.collection || 'STUDIO ARCHIVE'}</span>
                <span>{product.category}</span>
              </div>

              <h1 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] dark:text-[#FAF9F5] leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 pt-1">
                <span className="font-editorial-heading text-3xl font-bold text-[#A88B58]">
                  {product.price}
                </span>
                <span className="font-editorial-mono text-[10px] text-[#73716B] dark:text-[#9E9A90] uppercase tracking-wider">
                  USD · INCLUDES LOGO GIFT BOX
                </span>
              </div>

              <p className="font-editorial-body text-sm text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Add to Bag CTA */}
              <div className="pt-4">
                <button
                  onClick={handleAdd}
                  className={`w-full py-4 px-6 font-editorial-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all shadow-md ${
                    isAdded
                      ? 'bg-[#2E5E4E] text-[#FAF9F5]'
                      : 'bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] hover:bg-[#A88B58] dark:hover:bg-[#A88B58] hover:text-[#111111]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO SHOPPING BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG · {product.price}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Studio bench dispatch note */}
              <div className="pt-2 text-center font-editorial-mono text-[10px] text-[#8A867E]">
                SHIPS WITHIN 1–2 DAYS FROM CAPE ELIZABETH, MAINE STUDIO
              </div>
            </div>

            {/* Microscopic Specifications Table */}
            <div className="space-y-3 font-editorial-mono text-xs border border-[#111111]/10 dark:border-white/10 p-6 bg-[#FAF9F5] dark:bg-[#141312]">
              <span className="font-editorial-micro text-[#A88B58] block mb-2">
                STUDIO BENCH SPECIFICATIONS
              </span>

              <div className="flex justify-between py-2 border-b border-[#111111]/8 dark:border-white/8">
                <span className="text-[#8A867E]">MATERIALS:</span>
                <span className="text-right text-[#111111] dark:text-[#FAF9F5] font-semibold max-w-[240px]">
                  {product.material}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#111111]/8 dark:border-white/8">
                <span className="text-[#8A867E]">DIMENSIONS:</span>
                <span className="text-right text-[#111111] dark:text-[#FAF9F5] font-semibold">
                  {product.dimensions || 'Custom bench proportion'}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#111111]/8 dark:border-white/8">
                <span className="text-[#8A867E]">PROVENANCE:</span>
                <span className="text-right text-[#111111] dark:text-[#FAF9F5] font-semibold">
                  {product.origin}
                </span>
              </div>

              {product.travelCountry && (
                <div className="flex justify-between py-2">
                  <span className="text-[#8A867E]">EXPEDITION:</span>
                  <span className="text-right text-[#A88B58] font-bold">
                    {product.travelCountry} ({product.isMaterialSource ? 'Material Source' : 'Design Inspiration'})
                  </span>
                </div>
              )}
            </div>

            {/* Studio Assurances Tabs */}
            <div className="border border-[#111111]/10 dark:border-white/10 p-5 bg-[#F5F3EC] dark:bg-[#161514] space-y-3">
              <div className="flex items-center gap-2 border-b border-[#111111]/10 dark:border-white/10 pb-2">
                <button
                  onClick={() => setActiveTab('bench')}
                  className={`text-[10px] font-editorial-mono uppercase tracking-wider py-1 px-2 ${
                    activeTab === 'bench' ? 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] font-bold' : 'text-[#73716B]'
                  }`}
                >
                  PACKAGING
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`text-[10px] font-editorial-mono uppercase tracking-wider py-1 px-2 ${
                    activeTab === 'shipping' ? 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] font-bold' : 'text-[#73716B]'
                  }`}
                >
                  SHIPPING
                </button>
                <button
                  onClick={() => setActiveTab('guarantee')}
                  className={`text-[10px] font-editorial-mono uppercase tracking-wider py-1 px-2 ${
                    activeTab === 'guarantee' ? 'bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] font-bold' : 'text-[#73716B]'
                  }`}
                >
                  30-DAY GUARANTEE
                </button>
              </div>

              <div className="font-editorial-body text-xs text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed pt-1">
                {activeTab === 'bench' && STUDIO_ASSURANCES.packaging.description}
                {activeTab === 'shipping' && STUDIO_ASSURANCES.shipping.description}
                {activeTab === 'guarantee' && STUDIO_ASSURANCES.guarantees.description}
              </div>
            </div>

          </div>

        </div>

        {/* Companion / Related Pieces */}
        {relatedPieces.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[#111111]/10 dark:border-white/10 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-editorial-micro text-[#A88B58] block">COMPANION DESIGNS</span>
                <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAF9F5]">
                  More from {product.collection || 'the Atelier'}
                </h3>
              </div>
              <Link to="/shop" className="font-editorial-mono text-xs uppercase tracking-wider text-[#A88B58] font-bold hover:underline">
                VIEW CATALOG →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedPieces.map(rel => (
                <Link key={rel.id} to={`/product/${rel.id}`} className="group block space-y-2">
                  <div className="aspect-[4/5] bg-[#ECE8DF] dark:bg-[#161514] overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-baseline justify-between text-xs font-editorial-mono">
                    <span className="font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] truncate">{rel.name}</span>
                    <span className="text-[#A88B58]">{rel.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

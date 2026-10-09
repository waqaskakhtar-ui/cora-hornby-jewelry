import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layers, ArrowRight, ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/coraData';

export default function ShopCategoryPage({ onQuickAdd, onSelectProduct }) {
  const { categorySlug } = useParams();
  const [addedId, setAddedId] = useState(null);

  // Find matching category object
  const category = PRODUCT_CATEGORIES.find(c => 
    c.id === categorySlug.toLowerCase() || 
    c.name.toLowerCase().replace(/\s+/g, '-') === categorySlug.toLowerCase()
  ) || PRODUCT_CATEGORIES[0];

  // Filter products
  const categoryProducts = PRODUCTS.filter(p => 
    p.category.toLowerCase().includes(category.name.toLowerCase()) ||
    (p.productType && p.productType.toLowerCase() === category.name.toLowerCase())
  );

  const displayProducts = categoryProducts.length > 0 
    ? categoryProducts 
    : PRODUCTS.slice(0, 6);

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    if (onQuickAdd) onQuickAdd(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0A0909] text-[#111111] dark:text-[#FAF9F5] pt-28 sm:pt-36 pb-24 transition-colors duration-500">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-editorial-micro text-[#8A867E] mb-6">
          <Link to="/" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">HOME</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#111111] dark:hover:text-[#FAF9F5]">SHOP</Link>
          <span>/</span>
          <span className="text-[#A88B58] font-bold">{category.name.toUpperCase()}</span>
        </div>

        {/* Section Header */}
        <div className="pb-10 border-b border-[#111111]/10 dark:border-white/10 space-y-4 max-w-4xl">
          <div className="font-editorial-micro text-[#A88B58] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#A88B58]" />
            <span>ANATOMICAL SILHOUETTE ARCHIVE</span>
          </div>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FAF9F5]">
            {category.name}
          </h1>

          <p className="font-editorial-body text-base sm:text-lg text-[#5E5C57] dark:text-[#C2BCAB] leading-relaxed">
            Individually forged in Cape Elizabeth, Maine using hammered brass, sterling silver, leather, and hand-selected minerals from global expeditions.
          </p>

          <div className="pt-2 flex items-center gap-6 font-editorial-mono text-xs text-[#73716B] dark:text-[#9E9A90]">
            <span>{displayProducts.length} CATALOG LISTINGS</span>
            <span>·</span>
            <span className="text-[#A88B58]">100% BENCH FORGED</span>
            <span>·</span>
            <span>NO DUPLICATE MOLDS</span>
          </div>
        </div>

        {/* Floating Borderless Cards in Negative Space */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 editorial-gallery-group">
          {displayProducts.map((product, idx) => {
            const isStaggered = idx % 2 === 1;
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className={`floating-product-card group flex flex-col justify-between ${
                  isStaggered ? 'sm:translate-y-8' : ''
                }`}
              >
                {/* Borderless Floating Container */}
                <div className="relative aspect-[4/5] bg-[#ECE8DF] dark:bg-[#161514] overflow-hidden reveal-clip">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-0.5 text-[8px] font-editorial-mono uppercase text-[#111111] dark:text-[#FAF9F5]">
                    {product.collection}
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="p-2.5 bg-[#111111] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#111111] shadow-lg hover:bg-[#A88B58] dark:hover:bg-[#A88B58] transition-colors rounded-full"
                      title="Add to Shopping Bag"
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Overlapping Metadata Block */}
                <div className="pt-4 space-y-1">
                  <div className="flex items-center justify-between text-[9px] font-editorial-mono text-[#8A867E]">
                    <span>{product.travelCountry || product.origin}</span>
                    <span className="font-bold text-[#111111] dark:text-[#FAF9F5]">{product.price}</span>
                  </div>

                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-editorial-heading text-xl font-bold text-[#111111] dark:text-[#FAF9F5] group-hover:text-[#A88B58] transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="font-editorial-body text-xs text-[#5E5C57] dark:text-[#A6A49E] line-clamp-2 pt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link to Shop */}
        <div className="mt-20 pt-8 border-t border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-editorial-mono text-xs">
          <Link
            to="/shop"
            className="text-[#111111] dark:text-[#FAF9F5] hover:text-[#A88B58] flex items-center gap-2 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO SHOP DIRECTORY</span>
          </Link>

          <Link
            to="/travel"
            className="text-[#A88B58] hover:underline"
          >
            BROWSE TRAVEL INSPIRATION COUNTRIES →
          </Link>
        </div>

      </div>
    </div>
  );
}

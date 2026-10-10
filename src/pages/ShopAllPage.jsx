import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Grid, Filter, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, COLLECTIONS, TRAVEL_DESTINATIONS } from '../data/coraData';

export default function ShopAllPage({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';
  const initialCollection = searchParams.get('collection') || 'ALL';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCollection, setSelectedCollection] = useState(initialCollection);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'ALL' ||
        (p.productType && p.productType.toLowerCase() === selectedCategory.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      const matchCol = selectedCollection === 'ALL' ||
        (p.collection && p.collection.toLowerCase() === selectedCollection.toLowerCase());

      return matchCat && matchCol;
    });
  }, [selectedCategory, selectedCollection]);

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1720px] mx-auto space-y-12">
        
        {/* Header Block */}
        <div data-stagger="text" className="space-y-4 max-w-4xl border-b border-[#4e342e]/15 dark:border-white/15 pb-8">
          <div className="flex items-center gap-2 font-editorial-mono text-xs uppercase tracking-[0.25em] text-[#cc5500] dark:text-[#2c3480] font-bold">
            <Grid className="w-4 h-4" />
            <span>STUDIO BENCH INVENTORY · ONE-OF-A-KIND LISTINGS</span>
          </div>

          <h1 className="font-display-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#4e342e] dark:text-white leading-[0.96]">
            Shop All Creations
          </h1>

          <p className="text-base sm:text-lg text-[#4e342e]/85 dark:text-white/85 font-editorial-body leading-relaxed pt-1">
            Every piece is individually handcrafted on the coast of Maine. Filter by category silhouette, thematic collection, or destination origin.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="space-y-4 p-6 bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 font-editorial-mono text-xs">
          
          {/* Category Silhouettes */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#4e342e]/60 dark:text-white/60 mr-2 uppercase tracking-wider text-[10px]">
              SILHOUETTE:
            </span>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1.5 uppercase transition-all ${
                selectedCategory === 'ALL'
                  ? 'bg-[#cc5500] dark:bg-[#2c3480] text-white font-bold'
                  : 'bg-transparent text-[#4e342e] dark:text-white border border-[#4e342e]/20 dark:border-white/20 hover:border-[#cc5500] dark:hover:border-[#2c3480]'
              }`}
            >
              ALL SILHOUETTES ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1.5 uppercase transition-all ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase()
                    ? 'bg-[#cc5500] dark:bg-[#2c3480] text-white font-bold'
                    : 'bg-transparent text-[#4e342e] dark:text-white border border-[#4e342e]/20 dark:border-white/20 hover:border-[#cc5500] dark:hover:border-[#2c3480]'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Collection Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#4e342e]/10 dark:border-white/10">
            <span className="text-[#4e342e]/60 dark:text-white/60 mr-2 uppercase tracking-wider text-[10px]">
              COLLECTION:
            </span>
            <button
              onClick={() => setSelectedCollection('ALL')}
              className={`px-3 py-1 uppercase transition-all text-[11px] ${
                selectedCollection === 'ALL'
                  ? 'bg-[#4e342e] dark:bg-white text-white dark:text-black font-bold'
                  : 'text-[#4e342e]/70 dark:text-white/70 hover:text-[#cc5500] dark:hover:text-[#2c3480]'
              }`}
            >
              ALL COLLECTIONS
            </button>
            {COLLECTIONS.map((col) => (
              <button
                key={col.id}
                onClick={() => setSelectedCollection(col.name)}
                className={`px-3 py-1 uppercase transition-all text-[11px] ${
                  selectedCollection.toLowerCase() === col.name.toLowerCase()
                    ? 'bg-[#4e342e] dark:bg-white text-white dark:text-black font-bold'
                    : 'text-[#4e342e]/70 dark:text-white/70 hover:text-[#cc5500] dark:hover:text-[#2c3480]'
                }`}
              >
                {col.name}
              </button>
            ))}
          </div>

        </div>

        {/* Product Count & Status */}
        <div className="flex items-center justify-between text-xs font-editorial-mono text-[#4e342e]/70 dark:text-white/70 pb-2">
          <span>SHOWING {filteredProducts.length} INDIVIDUALLY FORGED PIECES</span>
          <span className="text-[#cc5500] dark:text-[#2c3480] font-bold">100% BENCH FABRICATED</span>
        </div>

        {/* Editorial Product Grid with Luxury Focus Hover Physics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 editorial-hover-parent">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-[#4e342e]/5 dark:bg-white/5 border border-[#4e342e]/15 dark:border-white/15 p-5 flex flex-col justify-between editorial-hover-card group"
            >
              <div className="space-y-4">
                {/* Visual Preview */}
                <Link to={`/product/${p.id}`} className="block relative aspect-square bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden border border-[#4e342e]/10 dark:border-white/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.collection && (
                    <span className="absolute top-2 left-2 bg-[#f8f4e7]/90 dark:bg-black/90 text-[#4e342e] dark:text-white px-2 py-0.5 text-[8px] font-editorial-mono uppercase font-bold tracking-wider">
                      {p.collection}
                    </span>
                  )}
                  {p.travelCountry && (
                    <span className="absolute bottom-2 left-2 bg-[#cc5500] dark:bg-[#2c3480] text-white px-2 py-0.5 text-[8px] font-editorial-mono uppercase font-bold">
                      {p.travelCountry}
                    </span>
                  )}
                </Link>

                <div className="space-y-1">
                  <span className="text-[9px] font-editorial-mono uppercase tracking-widest text-[#4e342e]/60 dark:text-white/60 block">
                    {p.productType || p.category}
                  </span>
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-display-serif text-lg font-bold text-[#4e342e] dark:text-white group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors line-clamp-1">
                      {p.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#4e342e]/75 dark:text-white/75 font-editorial-body line-clamp-2">
                    {p.material}
                  </p>
                </div>
              </div>

              {/* Bottom CRO Zone */}
              <div className="pt-4 mt-4 border-t border-[#4e342e]/10 dark:border-white/10 flex items-center justify-between font-editorial-mono text-xs">
                <span className="font-bold text-base text-[#4e342e] dark:text-white">
                  {p.price}
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/product/${p.id}`}
                    className="p-2 border border-[#4e342e]/20 dark:border-white/20 hover:border-[#cc5500] dark:hover:border-[#2c3480] text-[#4e342e] dark:text-white transition-colors"
                    title="View details"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onAddToCart && onAddToCart(p)}
                    className="px-3 py-1.5 bg-[#cc5500] dark:bg-[#2c3480] text-white font-bold uppercase tracking-wider text-[10px] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

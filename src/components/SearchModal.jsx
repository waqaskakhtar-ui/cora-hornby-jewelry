import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/coraData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) => {
        const text = `${p.name} ${p.material} ${p.category} ${p.description} ${p.origin} ${p.collection} ${p.travelCountry}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });

  const handleSelect = (item) => {
    navigate(`/product/${item.id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] border border-[#4e342e]/15 dark:border-white/15 shadow-2xl overflow-hidden p-6 sm:p-10 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#4e342e]/15 dark:border-white/15">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#cc5500] dark:text-[#2c3480]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pieces, minerals (jade, citrine, druzy, pearls)..."
              className="w-full bg-transparent font-display-serif text-xl sm:text-2xl text-[#4e342e] dark:text-white placeholder-[#4e342e]/40 dark:placeholder-white/40 focus:outline-hidden"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4e342e] dark:text-white hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors ml-4"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="py-4 flex flex-wrap gap-2 border-b border-[#4e342e]/10 dark:border-white/10 font-editorial-mono text-[10px] uppercase">
          <span className="py-1 text-[#4e342e]/60 dark:text-white/60">POPULAR:</span>
          {['Jade', 'Citrine', 'Druzy', 'Pearls', 'Turquoise', 'Brass', 'Zebra Jasper', 'Bauhaus'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 border border-[#4e342e]/15 dark:border-white/15 hover:border-[#cc5500] dark:hover:border-[#2c3480] hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-6 max-h-[50vh] overflow-y-auto space-y-3">
          <div className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#4e342e]/60 dark:text-white/60">
            {query ? `RESULTS FOR "${query}" (${filtered.length})` : 'FEATURED FROM ARCHIVE'}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-editorial-mono text-[#4e342e]/60 dark:text-white/60">
              NO MATCHING PIECES FOUND. TRY SEARCHING FOR "JADE", "CITRINE", OR "BRASS".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group flex items-center justify-between p-3.5 hover:bg-[#4e342e]/5 dark:hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-[#4e342e]/10 dark:hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden shrink-0 border border-[#4e342e]/10 dark:border-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display-serif text-base font-bold text-[#4e342e] dark:text-white group-hover:text-[#cc5500] dark:group-hover:text-[#2c3480] transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-editorial-mono text-xs text-[#4e342e]/70 dark:text-white/70 block line-clamp-1">
                      {item.material}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-editorial-mono text-xs font-bold text-[#4e342e] dark:text-white">
                    {item.price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#cc5500] dark:text-[#2c3480] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

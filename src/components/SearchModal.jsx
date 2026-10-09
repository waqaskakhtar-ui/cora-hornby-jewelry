import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/coraData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) => {
        const text = `${p.name} ${p.material} ${p.category} ${p.description} ${p.origin}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-[#111111]/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#FAF9F5] dark:bg-[#121110] border border-[#111111]/15 dark:border-white/15 shadow-2xl overflow-hidden p-6 sm:p-10 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#111111]/15 dark:border-white/15">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#8A867E] dark:text-[#8E8B83]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pieces, stones (druzy, brass, jade, citrine)..."
              className="w-full bg-transparent font-display-grotesk text-xl sm:text-2xl text-[#111111] dark:text-[#FAF9F5] placeholder-[#8A867E] dark:placeholder-[#8E8B83] focus:outline-hidden"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#111111] dark:text-[#FAF9F5] hover:opacity-60 transition-opacity ml-4"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="py-4 flex flex-wrap gap-2 border-b border-[#111111]/8 dark:border-white/10 font-editorial-mono text-[10px] uppercase text-[#73716B] dark:text-[#A6A49E]">
          <span className="py-1 text-[#8A867E] dark:text-[#8E8B83]">FREQUENT:</span>
          {['Brass', 'Druzy', 'Turquoise', 'Citrine', 'Leather', 'Pearl', 'Amethyst'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-[#EBE9DF]/70 dark:bg-[#1E1D1B] hover:bg-[#111111] dark:hover:bg-[#FAF9F5] hover:text-[#FAF9F5] dark:hover:text-[#111111] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-6 max-h-[50vh] overflow-y-auto space-y-4">
          <div className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8A867E] dark:text-[#8E8B83]">
            {query ? `RESULTS FOR "${query}" (${filtered.length})` : 'FEATURED FROM ARCHIVE'}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-editorial-mono text-[#8A867E] dark:text-[#8E8B83]">
              NO MATCHING PIECES FOUND. TRY SEARCHING FOR "BRASS", "DRUZY", OR "STONE".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  if (onSelectProduct) onSelectProduct(item);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 hover:bg-[#F2EFE8] dark:hover:bg-[#1A1918] cursor-pointer transition-colors border border-transparent hover:border-[#111111]/8 dark:hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#E5E2DA] dark:bg-[#1E1D1B] overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display-grotesk text-sm font-bold text-[#111111] dark:text-[#FAF9F5]">
                      {item.name}
                    </h4>
                    <span className="font-editorial-mono text-xs text-[#73716B] dark:text-[#A6A49E]">
                      {item.material}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-editorial-mono text-xs font-semibold text-[#111111] dark:text-[#FAF9F5]">
                    {item.price}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#8A867E] dark:text-[#8E8B83] group-hover:translate-x-1 group-hover:text-[#111111] dark:group-hover:text-[#FAF9F5] transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

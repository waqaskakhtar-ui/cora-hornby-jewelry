import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const val = parseFloat(item.price.replace('$', '')) || 0;
    return acc + val;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#111111]/60 dark:bg-black/75 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#FAF8F2] dark:bg-[#0C0A09] h-full shadow-2xl flex flex-col justify-between border-l border-[#12100E]/10 dark:border-white/10 overflow-hidden transition-colors duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#12100E]/10 dark:border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-editorial-luxury text-2xl font-normal text-[#12100E] dark:text-[#FAF8F2]">
              STUDIO BAG
            </h3>
            <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#8F8A80]">
              {items.length} {items.length === 1 ? 'PIECE' : 'PIECES'} SELECTED
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#12100E] dark:text-[#FAF8F2] hover:opacity-60 transition-opacity"
            aria-label="Close bag drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-6 flex-1 overflow-y-auto divide-y divide-[#12100E]/8 dark:divide-white/10">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
              <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#8F8A80]">
                YOUR BAG IS EMPTY
              </span>
              <p className="text-xs text-[#78746B] dark:text-[#A8A49C] max-w-xs font-editorial-body">
                Explore the studio archive and discover handcrafted pieces from Maine.
              </p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="py-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-[#F2EFE8] dark:bg-[#161412] overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-editorial-luxury text-lg font-normal text-[#12100E] dark:text-[#FAF8F2] truncate">
                    {item.name}
                  </h4>
                  <div className="font-editorial-mono text-sm font-bold text-[#C5A869]">
                    {item.price}
                  </div>
                  <div className="font-editorial-mono text-[10px] uppercase text-[#8A867E] dark:text-[#8E8B83] truncate">
                    {item.material}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(index)}
                  className="p-2 text-[#8A867E] dark:text-[#8E8B83] hover:text-[#111111] dark:hover:text-[#FAF9F5] transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-[#F5F3EC] dark:bg-[#181716] border-t border-[#111111]/10 dark:border-white/10 space-y-4">
            <div className="space-y-1.5 font-editorial-mono text-xs">
              <div className="flex justify-between text-[#73716B] dark:text-[#A6A49E]">
                <span>SHIPPING</span>
                <span>COMPLIMENTARY (USA)</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#111111] dark:text-[#FAF9F5] pt-2 border-t border-[#111111]/10 dark:border-white/10">
                <span>ESTIMATED TOTAL</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Directing to secure studio checkout for $${total.toFixed(2)} USD.\n\nAll pieces are packaged in archival studio boxes and shipped from Cape Elizabeth, Maine.`);
              }}
              className="w-full py-4 bg-[#111111] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#111111] font-editorial-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#2C2B28] dark:hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <span>PROCEED TO ACQUISITION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] font-editorial-mono text-[#8A867E] dark:text-[#8E8B83]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A88B58]" />
              <span>HANDCRAFTED & PACKAGED IN CAPE ELIZABETH, ME</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

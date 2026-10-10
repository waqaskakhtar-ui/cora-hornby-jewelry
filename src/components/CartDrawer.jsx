import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const val = parseFloat(item.price.replace('$', '')) || 0;
    return acc + val;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#f8f4e7] dark:bg-[#000000] text-[#4e342e] dark:text-[#ffffff] h-full shadow-2xl flex flex-col justify-between border-l border-[#4e342e]/15 dark:border-white/15 overflow-hidden transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#4e342e]/15 dark:border-white/15 flex items-center justify-between">
          <div>
            <h3 className="font-display-serif text-2xl font-bold text-[#4e342e] dark:text-white">
              YOUR COLLECTION
            </h3>
            <span className="font-editorial-mono text-[10px] uppercase tracking-widest text-[#cc5500] dark:text-[#2c3480] font-bold">
              {items.length} {items.length === 1 ? 'BENCH PIECE' : 'BENCH PIECES'} SELECTED
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4e342e] dark:text-white hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-6 flex-1 overflow-y-auto divide-y divide-[#4e342e]/10 dark:divide-white/10">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
              <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#4e342e]/60 dark:text-white/60">
                YOUR COLLECTION IS EMPTY
              </span>
              <p className="text-sm text-[#4e342e]/80 dark:text-white/80 max-w-xs font-editorial-body">
                Explore the studio archive and discover handcrafted pieces forged in Cape Elizabeth, Maine.
              </p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="py-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-[#4e342e]/10 dark:bg-white/10 overflow-hidden shrink-0 border border-[#4e342e]/10 dark:border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-display-serif text-base font-bold text-[#4e342e] dark:text-white truncate">
                    {item.name}
                  </h4>
                  <div className="font-editorial-mono text-sm font-bold text-[#cc5500] dark:text-[#2c3480]">
                    {item.price}
                  </div>
                  <div className="font-editorial-mono text-[10px] uppercase text-[#4e342e]/60 dark:text-white/60 truncate">
                    {item.material || 'Cape Elizabeth Bench Edition'}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(index)}
                  className="p-2 text-[#4e342e]/50 dark:text-white/50 hover:text-[#cc5500] dark:hover:text-[#2c3480] transition-colors"
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
          <div className="p-6 bg-[#4e342e]/5 dark:bg-white/5 border-t border-[#4e342e]/15 dark:border-white/15 space-y-4">
            <div className="space-y-1.5 font-editorial-mono text-xs">
              <div className="flex justify-between text-[#4e342e]/70 dark:text-white/70">
                <span>USPS PRIORITY SHIPPING</span>
                <span className="font-bold text-[#cc5500] dark:text-[#2c3480]">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-[#4e342e]/70 dark:text-white/70">
                <span>SIGNATURE PACKAGING</span>
                <span>DEBOSSED LOGO BOX</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#4e342e] dark:text-white pt-2 border-t border-[#4e342e]/10 dark:border-white/10">
                <span>ESTIMATED TOTAL</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Strict Accent CTA: #cc5500 in light, #2c3480 in dark */}
            <button
              onClick={() => {
                alert(`Proceeding to secure acquisition for $${total.toFixed(2)} USD.\n\nEvery piece is hand-packaged in our custom debossed logo box with full USPS transit insurance from Cape Elizabeth, Maine.`);
              }}
              className="w-full py-4 bg-[#cc5500] dark:bg-[#2c3480] text-white font-editorial-mono text-xs uppercase tracking-[0.2em] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>PROCEED TO ACQUISITION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] font-editorial-mono text-[#4e342e]/70 dark:text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cc5500] dark:text-[#2c3480]" />
              <span>30-DAY MONEY-BACK GUARANTEE</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import { Trash2, X } from "lucide-react";
import type React from "react";
import { useStore } from "@nanostores/react";
import { $cart, $cartTotal, removeFromCart, $isCartOpen } from "../store/cart";

export const CartDrawer: React.FC = () => {
  const cart = useStore($cart);
  const cartTotal = useStore($cartTotal);
  const isOpen = useStore($isCartOpen);

  const onClose = () => $isCartOpen.set(false);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm w-full h-full border-none cursor-default"
        onClick={onClose}
      />
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-brand-surface border-l-4 border-brand-primary transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">
              YOUR <span className="text-brand-primary">UNIT</span>
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-white hover:text-brand-secondary transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-8 pr-4 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="text-white/30 font-black italic text-xl uppercase tracking-widest pt-20 text-center">
                YOUR GEAR BAG IS EMPTY
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="w-24 h-32 bg-[#1A1A1A] overflow-hidden flex-shrink-0 border border-white/10">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-black italic text-lg uppercase tracking-tight text-brand-primary">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/30 hover:text-brand-secondary transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-white/50 font-bold text-xs uppercase tracking-widest mt-1">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-white/40 italic">QTY: {item.quantity}</span>
                      <span className="font-black italic text-xl text-white">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-12 pt-8 border-t-2 border-white/10">
              <div className="flex justify-between items-end mb-8">
                <span className="font-black italic text-xl uppercase tracking-widest text-white/50">
                  TOTAL
                </span>
                <span className="font-black italic text-4xl text-brand-primary">${cartTotal}</span>
              </div>
              <button
                type="button"
                className="w-full bg-brand-primary hover:bg-white text-brand-dark font-black italic tracking-widest uppercase text-xl py-5 -skew-x-12 transition-all group"
              >
                <span className="block skew-x-12 group-hover:scale-105 transition-transform">
                  DEPLOY ORDER
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

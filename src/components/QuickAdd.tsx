import { ShoppingBag } from "lucide-react";
import type React from "react";
import { addToCart } from "../store/cart";
import type { Product } from "../data";

interface QuickAddProps {
  product: Product;
}

export const QuickAdd: React.FC<QuickAddProps> = ({ product }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(product);
      }}
      className="absolute bottom-0 left-0 w-full bg-brand-primary text-brand-dark py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-30 flex justify-center items-center gap-3 cursor-pointer"
    >
      <span className="font-black italic uppercase tracking-widest text-lg">Quick Add</span>
      <ShoppingBag size={20} fill="currentColor" />
    </button>
  );
};

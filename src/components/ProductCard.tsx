import { ShoppingBag } from "lucide-react";
import type React from "react";
import { useCart } from "../CartContext";
import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/5 overflow-hidden bg-[#1A1A1A] mb-6">
        {/* Image */}
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 scale-100 group-hover:scale-110 ease-out"
        />

        {/* Dynamic Overlay Box */}
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-brand-primary transition-colors duration-300 pointer-events-none z-20" />

        {/* Tag */}
        <div className="absolute top-4 left-4 z-20 bg-brand-secondary text-white font-black italic text-[10px] uppercase tracking-widest px-3 py-1 -skew-x-15">
          <span className="block skew-x-15">{product.tag}</span>
        </div>

        {/* Quick Add */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 w-full bg-brand-primary text-brand-dark py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-30 flex justify-center items-center gap-3 cursor-pointer"
        >
          <span className="font-black italic uppercase tracking-widest text-lg">
            Quick Add
          </span>
          <ShoppingBag size={20} fill="currentColor" />
        </button>
      </div>

      <div className="flex justify-between items-start">
        <h3 className="font-black italic text-2xl uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors max-w-[70%]">
          {product.name}
        </h3>
        <span className="font-black italic text-xl text-brand-secondary">
          {product.price}
        </span>
      </div>
    </div>
  );
};

import { ShoppingBag } from "lucide-react";
import type React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { gear } from "../data";

export const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { addToCart } = useCart();

  const filteredGear = categoryId
    ? gear.filter((item) => item.category === categoryId)
    : gear;

  const title = categoryId ? categoryId : "All Gear";

  return (
    <div className="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen relative z-10 pb-32">
      <div className="mb-16">
        <h1 className="text-[4rem] md:text-[6rem] font-black italic uppercase tracking-tighter leading-none mb-4">
          <span className="text-[#E1FF00]">{title}</span>
        </h1>
        <div className="w-24 h-2 bg-[#FF2A00] transform -skew-x-20" />
      </div>

      {filteredGear.length === 0 ? (
        <div className="text-white/50 font-bold text-xl uppercase tracking-widest">
          No gear found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGear.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-4/5 overflow-hidden bg-[#1A1A1A] mb-6">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 scale-100 group-hover:scale-110 ease-out"
                />

                {/* Dynamic Overlay Box */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#E1FF00] transition-colors duration-300 pointer-events-none z-20" />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-20 bg-[#FF2A00] text-white font-black italic text-[10px] uppercase tracking-widest px-3 py-1 -skew-x-15">
                  <span className="block skew-x-15">{item.tag}</span>
                </div>

                {/* Quick Add */}
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="absolute bottom-0 left-0 w-full bg-[#E1FF00] text-[#090909] py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-30 flex justify-center items-center gap-3 cursor-pointer"
                >
                  <span className="font-black italic uppercase tracking-widest text-lg">
                    Quick Add
                  </span>
                  <ShoppingBag size={20} fill="currentColor" />
                </button>
              </div>

              <div className="flex justify-between items-start">
                <h3 className="font-black italic text-2xl uppercase tracking-tight text-white group-hover:text-[#E1FF00] transition-colors max-w-[70%]">
                  {item.name}
                </h3>
                <span className="font-black italic text-xl text-[#FF2A00]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

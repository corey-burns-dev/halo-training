import type React from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { gear } from "../data";

export const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const filteredGear = categoryId
    ? gear.filter((item) => item.category === categoryId)
    : gear;

  const title = categoryId ? categoryId : "All Gear";

  return (
    <div className="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen relative z-10 pb-32">
      <div className="mb-16">
        <h1 className="text-[4rem] md:text-[6rem] font-black italic uppercase tracking-tighter leading-none mb-4">
          <span className="text-brand-primary">{title}</span>
        </h1>
        <div className="w-24 h-2 bg-brand-secondary transform -skew-x-20" />
      </div>

      {filteredGear.length === 0 ? (
        <div className="text-white/50 font-bold text-xl uppercase tracking-widest">
          No gear found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGear.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

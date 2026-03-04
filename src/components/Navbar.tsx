import { Menu, ShoppingBag, Zap } from "lucide-react";
import type React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../CartContext";

interface NavbarProps {
  navItems: string[];
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  onMenuOpen,
  onCartOpen,
}) => {
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <nav className="fixed w-full top-0 px-6 py-4 flex justify-between items-center z-50 mix-blend-difference bg-transparent backdrop-blur-none border-b border-transparent">
      <div className="flex items-center gap-8">
        <button
          type="button"
          onClick={onMenuOpen}
          className="text-brand-primary hover:text-white transition-colors group p-2 lg:hidden"
        >
          <Menu
            size={28}
            className="group-hover:scale-110 transition-transform"
          />
        </button>

        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              className={`font-black italic text-xl uppercase tracking-tighter text-white hover:text-brand-primary transition-colors relative group ${location.pathname.includes(item.toLowerCase()) ? "text-brand-primary" : ""}`}
            >
              {item}
              <span
                className={`absolute -bottom-2 -left-2 w-[calc(100%+16px)] h-2 bg-brand-primary transform -skew-x-20 transition-transform origin-left mix-blend-exclusion ${location.pathname.includes(item.toLowerCase()) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
      >
        <Zap
          size={32}
          className="text-brand-primary animate-[pulse_2s_ease-in-out_infinite] group-hover:text-white transition-colors"
          fill="currentColor"
        />
        <span className="font-black italic text-3xl md:text-4xl tracking-tighter uppercase group-hover:text-brand-primary transition-colors">
          AXIS.
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/login"
          className="hidden sm:block font-black italic text-lg uppercase tracking-widest text-white hover:text-brand-primary border-2 border-white/20 px-4 py-1 hover:border-brand-primary -skew-x-12 transition-all"
        >
          <span className="block skew-x-12">Login</span>
        </Link>
        <button
          type="button"
          onClick={onCartOpen}
          className="text-white hover:text-brand-primary transition-colors relative group"
        >
          <ShoppingBag size={28} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-primary text-brand-dark font-black w-5 h-5 flex items-center justify-center rounded-none -skew-x-12">
              <span className="skew-x-12 text-xs">{cartCount}</span>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

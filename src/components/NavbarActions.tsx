import { ShoppingBag, Menu } from "lucide-react";
import { useStore } from "@nanostores/react";
import { $cartCount, $isCartOpen, $isMenuOpen } from "../store/cart";

export const NavbarActions = () => {
  const cartCount = useStore($cartCount);

  return (
    <div className="flex items-center gap-6">
      <a
        href="/login"
        className="hidden sm:block font-black italic text-lg uppercase tracking-widest text-white hover:text-brand-primary border-2 border-white/20 px-4 py-1 hover:border-brand-primary -skew-x-12 transition-all"
      >
        <span className="block skew-x-12">Login</span>
      </a>
      <button
        type="button"
        onClick={() => $isCartOpen.set(true)}
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
  );
};

export const MenuButton = () => {
  return (
    <button
      type="button"
      onClick={() => $isMenuOpen.set(true)}
      className="text-brand-primary hover:text-white transition-colors group p-2 lg:hidden"
    >
      <Menu size={28} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

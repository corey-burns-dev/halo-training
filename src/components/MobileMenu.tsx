import { X, Zap } from "lucide-react";
import type React from "react";
import { useStore } from "@nanostores/react";
import { $isMenuOpen } from "../store/cart";

interface MobileMenuProps {
  navItems: string[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const isOpen = useStore($isMenuOpen);
  const onClose = () => $isMenuOpen.set(false);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/90 backdrop-blur-md w-full h-full border-none cursor-default"
        onClick={onClose}
      />
      <div
        className={`absolute top-0 left-0 h-full w-full max-w-xs bg-brand-dark border-r-4 border-brand-primary transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <Zap
                size={32}
                className="text-brand-primary"
                fill="currentColor"
              />
              <span className="font-black italic text-3xl tracking-tighter uppercase">
                AXIS.
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-white hover:text-brand-secondary transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/category/${item.toLowerCase()}`}
                className="font-black italic text-4xl uppercase tracking-tighter text-white hover:text-brand-primary transition-colors flex items-center justify-between group"
              >
                {item}
                <Zap
                  size={24}
                  className="opacity-0 group-hover:opacity-100 text-brand-primary transition-opacity"
                  fill="currentColor"
                />
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="/login"
                className="font-black italic text-2xl uppercase tracking-widest text-brand-secondary hover:text-brand-primary transition-colors"
              >
                Login / Join
              </a>
            </div>
          </nav>

          <div className="mt-auto">
            <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-4">
              Follow the Unit
            </p>
            <div className="flex gap-6 font-black italic text-lg text-white">
              <a href="/" className="hover:text-brand-primary">
                IG
              </a>
              <a href="/" className="hover:text-brand-primary">
                TW
              </a>
              <a href="/" className="hover:text-brand-primary">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

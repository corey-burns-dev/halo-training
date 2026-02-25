import { Menu, ShoppingBag, Trash2, X, Zap } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useCart } from "../CartContext";

export const Layout: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, cartCount, cartTotal, removeFromCart } = useCart();

  useEffect(() => {
    setIsReady(true);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, []);

  const navItems = ["Footwear", "Apparel", "Accessories", "Training"];

  return (
    <div
      className={`min-h-screen bg-[#090909] text-white font-sans overflow-x-hidden selection:bg-[#E1FF00] selection:text-[#090909] transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E1FF00] opacity-[0.05] blur-[150px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] left-[-20%] w-[50%] h-[50%] rounded-full bg-[#FF2A00] opacity-[0.03] blur-[150px]" />

        {/* Slanted lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgNDBMNDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 px-6 py-4 flex justify-between items-center z-50 mix-blend-difference bg-transparent backdrop-blur-none border-b border-transparent">
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="text-[#E1FF00] hover:text-white transition-colors group p-2 lg:hidden"
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
                className={`font-black italic text-xl uppercase tracking-tighter text-white hover:text-[#E1FF00] transition-colors relative group ${location.pathname.includes(item.toLowerCase()) ? "text-[#E1FF00]" : ""}`}
              >
                {item}
                <span
                  className={`absolute -bottom-2 -left-2 w-[calc(100%+16px)] h-2 bg-[#E1FF00] transform -skew-x-20 transition-transform origin-left mix-blend-exclusion ${location.pathname.includes(item.toLowerCase()) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
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
            className="text-[#E1FF00] animate-[pulse_2s_ease-in-out_infinite] group-hover:text-white transition-colors"
            fill="currentColor"
          />
          <span className="font-black italic text-3xl md:text-4xl tracking-tighter uppercase group-hover:text-[#E1FF00] transition-colors">
            AXIS.
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="hidden sm:block font-black italic text-lg uppercase tracking-widest text-white hover:text-[#E1FF00] border-2 border-white/20 px-4 py-1 hover:border-[#E1FF00] -skew-x-12 transition-all"
          >
            <span className="block skew-x-12">Login</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="text-white hover:text-[#E1FF00] transition-colors relative group"
          >
            <ShoppingBag size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E1FF00] text-[#090909] font-black w-5 h-5 flex items-center justify-center rounded-none -skew-x-12">
                <span className="skew-x-12 text-xs">{cartCount}</span>
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/90 backdrop-blur-md w-full h-full border-none cursor-default"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-xs bg-[#090909] border-r-4 border-[#E1FF00] transition-transform duration-500 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <Zap size={32} className="text-[#E1FF00]" fill="currentColor" />
                <span className="font-black italic text-3xl tracking-tighter uppercase">
                  AXIS.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#FF2A00] transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  className="font-black italic text-4xl uppercase tracking-tighter text-white hover:text-[#E1FF00] transition-colors flex items-center justify-between group"
                >
                  {item}
                  <Zap
                    size={24}
                    className="opacity-0 group-hover:opacity-100 text-[#E1FF00] transition-opacity"
                    fill="currentColor"
                  />
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link
                  to="/login"
                  className="font-black italic text-2xl uppercase tracking-widest text-[#FF2A00] hover:text-[#E1FF00] transition-colors"
                >
                  Login / Join
                </Link>
              </div>
            </nav>

            <div className="mt-auto">
              <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-4">
                Follow the Unit
              </p>
              <div className="flex gap-6 font-black italic text-lg text-white">
                <a href="/" className="hover:text-[#E1FF00]">
                  IG
                </a>
                <a href="/" className="hover:text-[#E1FF00]">
                  TW
                </a>
                <a href="/" className="hover:text-[#E1FF00]">
                  YT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close cart"
          className="absolute inset-0 bg-black/80 backdrop-blur-sm w-full h-full border-none cursor-default"
          onClick={() => setIsCartOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-[#111111] border-l-4 border-[#E1FF00] transition-transform duration-500 transform ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">
                YOUR <span className="text-[#E1FF00]">UNIT</span>
              </h2>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="text-white hover:text-[#FF2A00] transition-colors"
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
                          <h3 className="font-black italic text-lg uppercase tracking-tight text-[#E1FF00]">
                            {item.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/30 hover:text-[#FF2A00] transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-white/50 font-bold text-xs uppercase tracking-widest mt-1">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-white/40 italic">
                          QTY: {item.quantity}
                        </span>
                        <span className="font-black italic text-xl text-white">
                          {item.price}
                        </span>
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
                  <span className="font-black italic text-4xl text-[#E1FF00]">
                    ${cartTotal}
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#E1FF00] hover:bg-white text-[#090909] font-black italic tracking-widest uppercase text-xl py-5 -skew-x-12 transition-all group"
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

      {/* Main Content */}
      <main className="relative z-10 w-full min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#090909] border-t-4 border-[#E1FF00] relative overflow-hidden">
        {/* Giant Logo bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] font-black italic text-[20vw] text-white/2 text-center select-none pointer-events-none scale-150 tracking-tighter leading-none whitespace-nowrap">
          AXIS
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="flex items-center gap-2 mb-6 text-[#E1FF00] hover:text-white transition-colors"
              >
                <Zap size={40} fill="currentColor" />
                <span className="font-black italic text-4xl tracking-tighter uppercase text-white hover:text-[#E1FF00] transition-colors">
                  AXIS.
                </span>
              </Link>
              <p className="text-white/50 font-bold text-sm tracking-wide mb-8 pr-4">
                Redefining human performance through state-of-the-art materials
                and aggressive design. Don't stop.
              </p>
            </div>

            <div>
              <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-[#FF2A00] pl-3">
                Gear
              </h4>
              <ul className="space-y-4 font-bold text-[#E1FF00] uppercase tracking-wider text-sm">
                <li>
                  <Link
                    to="/category/training"
                    className="hover:text-white transition-colors"
                  >
                    - Men's Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/training"
                    className="hover:text-white transition-colors"
                  >
                    - Women's Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/footwear"
                    className="hover:text-white transition-colors"
                  >
                    - Running
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/accessories"
                    className="hover:text-white transition-colors"
                  >
                    - Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-[#FF2A00] pl-3">
                Company
              </h4>
              <ul className="space-y-4 font-bold text-[#E1FF00] uppercase tracking-wider text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    - About Axis
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    - Lab Tech
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    - Athletes
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    - Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-[#FF2A00] pl-3">
                Join The Unit
              </h4>
              <div className="flex border-b-2 border-white/20 pb-2 focus-within:border-[#E1FF00] transition-colors relative">
                <input
                  type="email"
                  placeholder="ENTER EMAIL"
                  className="bg-transparent border-none outline-none text-white font-bold tracking-widest uppercase w-full placeholder:text-white/30"
                />
                <button
                  type="button"
                  className="text-[#E1FF00] absolute right-0 top-1/2 -translate-y-1/2 hover:text-white hover:scale-110 transition-all font-black text-xl"
                >
                  {`>`}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-bold tracking-widest text-xs text-white/40 uppercase">
            <p>© {new Date().getFullYear()} ATHLETE AXIS CORP.</p>
            <div className="flex gap-8">
              <a href="/" className="hover:text-[#E1FF00] transition-colors">
                Privacy
              </a>
              <a href="/" className="hover:text-[#E1FF00] transition-colors">
                Terms
              </a>
              <a href="/" className="hover:text-[#E1FF00] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

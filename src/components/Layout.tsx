import type React from "react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { Navbar } from "./Navbar";

export const Layout: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsReady(true);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, [location.pathname]);

  const navItems = ["Footwear", "Apparel", "Accessories", "Training"];

  return (
    <div
      className={`min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-brand-primary selection:text-brand-dark transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-primary opacity-[0.05] blur-[150px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] left-[-20%] w-[50%] h-[50%] rounded-full bg-brand-secondary opacity-[0.03] blur-[150px]" />

        {/* Slanted lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgNDBMNDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      <Navbar
        navItems={navItems}
        onMenuOpen={() => setIsMenuOpen(true)}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Main Content */}
      <main className="relative z-10 w-full min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

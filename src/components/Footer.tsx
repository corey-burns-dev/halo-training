import { Zap } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t-4 border-brand-primary relative overflow-hidden">
      {/* Giant Logo bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] font-black italic text-[20vw] text-white/2 text-center select-none pointer-events-none scale-150 tracking-tighter leading-none whitespace-nowrap">
        AXIS
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 mb-6 text-brand-primary hover:text-white transition-colors"
            >
              <Zap size={40} fill="currentColor" />
              <span className="font-black italic text-4xl tracking-tighter uppercase text-white hover:text-brand-primary transition-colors">
                AXIS.
              </span>
            </Link>
            <p className="text-white/50 font-bold text-sm tracking-wide mb-8 pr-4">
              Redefining human performance through state-of-the-art materials
              and aggressive design. Don't stop.
            </p>
          </div>

          <div>
            <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-brand-secondary pl-3">
              Gear
            </h4>
            <ul className="space-y-4 font-bold text-brand-primary uppercase tracking-wider text-sm">
              <li>
                <Link to="/category/training" className="hover:text-white transition-colors">
                  - Men's Training
                </Link>
              </li>
              <li>
                <Link to="/category/training" className="hover:text-white transition-colors">
                  - Women's Training
                </Link>
              </li>
              <li>
                <Link to="/category/footwear" className="hover:text-white transition-colors">
                  - Running
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="hover:text-white transition-colors">
                  - Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-brand-secondary pl-3">
              Company
            </h4>
            <ul className="space-y-4 font-bold text-brand-primary uppercase tracking-wider text-sm">
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
            <h4 className="font-black italic text-xl uppercase tracking-widest text-white mb-6 border-l-4 border-brand-secondary pl-3">
              Join The Unit
            </h4>
            <div className="flex border-b-2 border-white/20 pb-2 focus-within:border-brand-primary transition-colors relative">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="bg-transparent border-none outline-none text-white font-bold tracking-widest uppercase w-full placeholder:text-white/30"
              />
              <button
                type="button"
                className="text-brand-primary absolute right-0 top-1/2 -translate-y-1/2 hover:text-white hover:scale-110 transition-all font-black text-xl"
              >
                {`>`}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-bold tracking-widest text-xs text-white/40 uppercase">
          <p>© {new Date().getFullYear()} ATHLETE AXIS CORP.</p>
          <div className="flex gap-8">
            <a href="/" className="hover:text-brand-primary transition-colors">
              Privacy
            </a>
            <a href="/" className="hover:text-brand-primary transition-colors">
              Terms
            </a>
            <a href="/" className="hover:text-brand-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

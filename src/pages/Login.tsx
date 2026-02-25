import { ArrowRight, Zap } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 flex items-center justify-center relative z-10 pb-32">
      <div className="w-full max-w-md bg-[#111111] p-10 border-t-4 border-[#E1FF00] relative group">
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#FF2A00] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#E1FF00] opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex justify-center mb-8">
          <Zap
            size={48}
            className="text-[#E1FF00] animate-[pulse_2s_ease-in-out_infinite]"
            fill="currentColor"
          />
        </div>

        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2 text-center">
          ACCESS <span className="text-[#E1FF00]">SYSTEM</span>
        </h2>
        <p className="text-white/50 text-center font-bold text-sm tracking-widest uppercase mb-10">
          Identify yourself to proceed
        </p>

        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="OPERATIVE EMAIL"
              className="w-full bg-transparent border-b-2 border-white/20 px-4 py-3 text-white font-bold tracking-widest uppercase outline-none focus:border-[#E1FF00] transition-colors placeholder:text-white/20"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="PASSCODE"
              className="w-full bg-transparent border-b-2 border-white/20 px-4 py-3 text-white font-bold tracking-widest uppercase outline-none focus:border-[#E1FF00] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase pt-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 border-2 border-white/20 group-hover:border-[#E1FF00] transition-colors relative">
                <input
                  type="checkbox"
                  className="absolute opacity-0 cursor-pointer"
                />
              </div>
              <span className="text-white/60 group-hover:text-white transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="/"
              className="text-[#FF2A00] hover:text-[#E1FF00] transition-colors"
            >
              {" "}
              Reset Code
            </a>
          </div>

          <button
            type="button"
            className="w-full relative bg-[#E1FF00] hover:bg-white text-[#090909] font-black italic tracking-widest uppercase text-xl px-10 py-4 -skew-x-15 transition-all duration-300 overflow-hidden mt-8 group"
          >
            <span className="absolute inset-0 bg-[#FF2A00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex skew-x-15 items-center justify-center gap-3">
              INITIATE LOGIN
              <ArrowRight
                size={20}
                className="transform group-hover:translate-x-2 transition-all duration-300"
              />
            </span>
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-8">
          <p className="text-white/40 font-bold text-xs tracking-widest uppercase">
            Not registered?{" "}
            <Link
              to="/"
              className="text-[#E1FF00] hover:text-white transition-colors"
            >
              Join the Unit
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

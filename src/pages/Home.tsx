import { ArrowRight, Crosshair, Play, ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { gear } from "../data";

export const Home: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-[#090909] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-[#090909] via-[#090909]/50 to-transparent w-full md:w-2/3" />

        {/* Dynamic Image */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 clip-path-hero">
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=80"
            alt="Athlete training"
            className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-luminosity scale-105 animate-[slow-pan_20s_linear_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-[#E1FF00] mix-blend-overlay opacity-20" />
        </div>

        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: dynamic keyframes
          dangerouslySetInnerHTML={{
            __html: `
          .clip-path-hero { clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%); }
          @media (max-width: 768px) { .clip-path-hero { clip-path: none; } }
          @keyframes slow-pan { 0% { transform: scale(1.05) translateX(0); } 100% { transform: scale(1.05) translateX(-2%); } }
          .glitch-effect { position: relative; }
          .glitch-effect::before, .glitch-effect::after {
            content: attr(data-text);
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
          }
          .glitch-effect::before {
            left: 2px;
            text-shadow: -2px 0 #FF2A00;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim 3s infinite linear alternate-reverse;
          }
          .glitch-effect::after {
            left: -2px;
            text-shadow: -2px 0 #E1FF00;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 2.5s infinite linear alternate-reverse;
          }
          @keyframes glitch-anim {
            0% { clip: rect(10px, 9999px, 80px, 0); }
            20% { clip: rect(60px, 9999px, 15px, 0); }
            40% { clip: rect(120px, 9999px, 110px, 0); }
            60% { clip: rect(20px, 9999px, 90px, 0); }
            80% { clip: rect(80px, 9999px, 30px, 0); }
            100% { clip: rect(5px, 9999px, 130px, 0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `,
          }}
        />

        <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-12 flex flex-col justify-center h-full pt-12">
          <div className="inline-block animate-[fade-in-right_0.6s_ease-out_both] mb-6">
            <span className="bg-[#E1FF00] text-[#090909] font-black italic uppercase tracking-widest px-4 py-1 text-sm md:text-md -skew-x-20 inline-block">
              <span className="block skew-x-20">Season 04 Drop</span>
            </span>
          </div>

          <h1
            data-text="BREAK YOUR"
            className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black italic uppercase leading-[0.85] tracking-tighter text-white mb-2 max-w-4xl glitch-effect"
          >
            BREAK YOUR <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #E1FF00" }}
            >
              LIMITS.
            </span>
          </h1>

          <p className="text-white/70 font-bold text-lg max-w-xl mt-8 mb-12 animate-[fade-in-up_0.8s_ease-out_0.3s_both] border-l-4 border-[#E1FF00] pl-6 py-2">
            Engineered for relentless performance. When everyone else stops, you
            push harder.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.5s_both]">
            <Link
              to="/category/apparel"
              className="group relative bg-[#E1FF00] hover:bg-white text-[#090909] font-black italic tracking-widest uppercase text-xl px-10 py-5 -skew-x-15 transition-all duration-300 overflow-hidden inline-block"
            >
              <span className="absolute inset-0 bg-[#FF2A00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex skew-x-15 items-center gap-3">
                Shop Collection
                <ArrowRight
                  size={20}
                  className="transform group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300"
                />
              </span>
            </Link>

            <button
              type="button"
              className="group relative text-white border-2 border-white/20 hover:border-[#E1FF00] font-black italic tracking-widest uppercase text-xl px-8 py-5 -skew-x-15 transition-all duration-300 bg-black/40 backdrop-blur-md"
            >
              <span className="relative z-10 flex skew-x-15 items-center gap-3 group-hover:text-[#E1FF00] transition-colors">
                <Play size={20} fill="currentColor" /> Watch Film
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Marquee Banner */}
      <div className="relative z-20 w-full overflow-hidden bg-[#E1FF00] text-[#090909] py-4 border-y border-[#090909]">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: pure visual duplication
            <React.Fragment key={`marquee-${i}`}>
              <span className="font-black italic text-2xl uppercase tracking-tighter">
                UNLEASH POTENTIAL
              </span>
              <Crosshair size={28} />
              <span
                className="font-black italic text-2xl uppercase tracking-tighter outline-text"
                style={{
                  WebkitTextStroke: "1px #090909",
                  color: "transparent",
                }}
              >
                DOMINATE
              </span>
              <Crosshair size={28} />
            </React.Fragment>
          ))}
        </div>
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: dynamic keyframes
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `,
          }}
        />
      </div>

      {/* Products Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-[3rem] md:text-[5rem] font-black italic uppercase tracking-tighter leading-none mb-4 flex flex-col">
              <span className="text-[#E1FF00]">LATEST</span>
              <span
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                ARRIVALS
              </span>
            </h2>
            <div className="w-16 h-2 bg-[#FF2A00] transform -skew-x-20" />
          </div>
          <Link
            to="/category/apparel"
            className="text-[#E1FF00] hover:text-white font-black italic text-xl uppercase tracking-widest flex items-center gap-2 group border-b-2 border-transparent hover:border-white pb-1 transition-all"
          >
            View All Gear{" "}
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gear.slice(0, 12).map((item) => (
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
      </section>

      {/* Tech CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 filter grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-r from-[#090909] via-[#090909]/80 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-[#E1FF00] border-l-4 border-[#E1FF00] pl-4 font-black italic text-sm uppercase tracking-widest mb-6 block">
              Innovation lab
            </span>
            <h2 className="text-[4rem] lg:text-[6rem] font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
              AERO-WEAVE <br />{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px white" }}
              >
                TECHNOLOGY
              </span>
            </h2>
            <p className="text-white/60 font-bold text-xl max-w-md mb-12">
              Micro-perforated yarns that actively release body heat while
              maintaining core temperature. Tested to 120°F.
            </p>
            <button
              type="button"
              className="bg-transparent border-2 border-[#E1FF00] text-[#E1FF00] hover:bg-[#E1FF00] hover:text-[#090909] font-black italic text-lg uppercase tracking-widest px-8 py-4 -skew-x-15 transition-all duration-300"
            >
              <span className="block skew-x-15">Explore Tech</span>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-[#E1FF00]/30 animate-[spin_20s_linear_infinite] flex items-center justify-center">
              <div className="absolute w-[120%] h-px bg-linear-to-r from-transparent via-[#FF2A00] to-transparent transform rotate-45" />
              <div className="absolute w-[120%] h-px bg-linear-to-r from-transparent via-[#E1FF00] to-transparent transform -rotate-45" />
              <div className="w-48 h-48 md:w-64 md:h-64 bg-[#090909] rounded-full border-2 border-[#E1FF00] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(225,255,0,0.2)]">
                <span className="font-black italic text-[#E1FF00] text-3xl mb-2">
                  -4.2°C
                </span>
                <span className="text-white/80 font-bold uppercase tracking-widest text-xs">
                  Core Temp Drop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

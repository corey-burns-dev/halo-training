import { ArrowRight, Crosshair, Play } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { gear } from "../data";

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-175 flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-brand-dark via-brand-dark/50 to-transparent w-full md:w-2/3" />

        {/* Dynamic Image */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 clip-path-hero">
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=80"
            alt="Athlete training"
            className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-luminosity animate-slow-pan"
          />
          <div className="absolute inset-0 bg-brand-primary mix-blend-overlay opacity-20" />
        </div>

        <div className="relative z-20 w-full max-w-400 px-6 md:px-12 flex flex-col justify-center h-full pt-12">
          <div className="inline-block animate-[fade-in-right_0.6s_ease-out_both] mb-6">
            <span className="bg-brand-primary text-brand-dark font-black italic uppercase tracking-widest px-4 py-1 text-sm md:text-md -skew-x-20 inline-block">
              <span className="block skew-x-20">Season 04 Drop</span>
            </span>
          </div>

          <h1
            data-text="BREAK YOUR"
            className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black italic uppercase leading-[0.85] tracking-tighter text-white mb-2 max-w-4xl glitch-effect"
          >
            BREAK YOUR <br />
            <span
              className="outline-text"
              style={{ WebkitTextStrokeColor: "var(--color-brand-primary)" }}
            >
              LIMITS.
            </span>
          </h1>

          <p className="text-white/70 font-bold text-lg max-w-xl mt-8 mb-12 animate-[fade-in-up_0.8s_ease-out_0.3s_both] border-l-4 border-brand-primary pl-6 py-2">
            Engineered for relentless performance. When everyone else stops, you
            push harder.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.5s_both]">
            <Button to="/category/apparel">
              Shop Collection
              <ArrowRight
                size={20}
                className="transform group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300"
              />
            </Button>

            <Button variant="outline">
              <Play size={20} fill="currentColor" /> Watch Film
            </Button>
          </div>
        </div>
      </header>

      {/* Marquee Banner */}
      <div className="relative z-20 w-full overflow-hidden bg-brand-primary text-brand-dark py-4 border-y border-brand-dark">
        <div className="whitespace-nowrap animate-marquee flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={`marquee-${i}`}>
              <span className="font-black italic text-2xl uppercase tracking-tighter">
                UNLEASH POTENTIAL
              </span>
              <Crosshair size={28} />
              <span
                className="font-black italic text-2xl uppercase tracking-tighter outline-text"
                style={{ WebkitTextStrokeColor: "var(--color-brand-dark)" }}
              >
                DOMINATE
              </span>
              <Crosshair size={28} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-[3rem] md:text-[5rem] font-black italic uppercase tracking-tighter leading-none mb-4 flex flex-col">
              <span className="text-brand-primary">LATEST</span>
              <span
                className="outline-text"
                style={{ WebkitTextStrokeColor: "white" }}
              >
                ARRIVALS
              </span>
            </h2>
            <div className="w-16 h-2 bg-brand-secondary transform -skew-x-20" />
          </div>
          <Link
            to="/category/apparel"
            className="text-brand-primary hover:text-white font-black italic text-xl uppercase tracking-widest flex items-center gap-2 group border-b-2 border-transparent hover:border-white pb-1 transition-all"
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
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* Tech CTA Section */}
      <section className="relative py-32 overflow-hidden bg-brand-surface">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 filter grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-brand-primary border-l-4 border-brand-primary pl-4 font-black italic text-sm uppercase tracking-widest mb-6 block">
              Innovation lab
            </span>
            <h2 className="text-[4rem] lg:text-[6rem] font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
              AERO-WEAVE <br />{" "}
              <span
                className="outline-text"
                style={{ WebkitTextStrokeColor: "white" }}
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
              className="bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark font-black italic text-lg uppercase tracking-widest px-8 py-4 -skew-x-15 transition-all duration-300"
            >
              <span className="block skew-x-15">Explore Tech</span>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-brand-primary/30 animate-[spin_20s_linear_infinite] flex items-center justify-center">
              <div className="absolute w-[120%] h-px bg-linear-to-r from-transparent via-brand-secondary to-transparent transform rotate-45" />
              <div className="absolute w-[120%] h-px bg-linear-to-r from-transparent via-brand-primary to-transparent transform -rotate-45" />
              <div className="w-48 h-48 md:w-64 md:h-64 bg-brand-dark rounded-full border-2 border-brand-primary flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(225,255,0,0.2)]">
                <span className="font-black italic text-brand-primary text-3xl mb-2">
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

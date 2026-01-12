import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/chalet-winter.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chalet Ciocănești iarna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream mb-6 animate-fade-up">
            Chalet Ciocănești
          </h1>
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-cream/90 italic mb-4 animate-fade-up animation-delay-100">
            Relaxare autentică la munte
          </p>
          <p className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            Cabana ideală pentru vacanțe în natură, familii și grupuri. 
            Descoperă liniștea Bucovinei într-un cadru rustic și confortabil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-forest text-cream rounded-md font-semibold text-base hover:opacity-90 transition-all shadow-warm hover:shadow-elevated transform hover:-translate-y-0.5"
            >
              Cere disponibilitate
            </a>
            <a
              href="#galerie"
              className="px-8 py-4 bg-cream/10 backdrop-blur-sm border border-cream/30 text-cream rounded-md font-semibold text-base hover:bg-cream/20 transition-all"
            >
              Vezi galeria foto
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#despre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;

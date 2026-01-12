import { useEffect, useRef, useState } from "react";
import { Sparkles, Wind, Moon, Heart } from "lucide-react";
import hotTubImage from "@/assets/hot-tub.jpg";
import saunaImage from "@/assets/sauna.jpg";

const Relaxation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: Sparkles,
      title: "Ciubăr cu apă caldă",
      description:
        "Relaxează-te în ciubărul nostru cu apă caldă, ideal în zilele reci de iarnă, sub cerul înstelat al munților.",
    },
    {
      icon: Wind,
      title: "Saună finlandeză",
      description:
        "Completează experiența de relaxare în sauna noastră autentică, pentru o detoxifiere completă.",
    },
    {
      icon: Moon,
      title: "Seri liniștite",
      description:
        "Bucură-te de seri liniștite la munte, departe de zgomotul și agitația orașului.",
    },
    {
      icon: Heart,
      title: "Deconectare totală",
      description:
        "Reconectează-te cu natura și cu cei dragi, într-un cadru care te ajută să te relaxezi complet.",
    },
  ];

  return (
    <section
      id="relaxare"
      ref={sectionRef}
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Relaxare & Experiență
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            O experiență de neuitat
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Lasă-te purtat de magia locului și bucură-te de momente de relaxare 
            autentică în mijlocul naturii.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <img
                src={hotTubImage}
                alt="Ciubăr exterior"
                className="w-full h-64 object-cover rounded-lg shadow-warm"
              />
              <div className="h-32 bg-gradient-forest rounded-lg flex items-center justify-center shadow-warm">
                <p className="text-cream text-center px-4 font-display text-lg italic">
                  "Cel mai frumos loc din Bucovina"
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-32 bg-cream rounded-lg flex items-center justify-center shadow-soft">
                <div className="text-center">
                  <span className="block text-3xl font-display font-bold text-primary">
                    100%
                  </span>
                  <span className="text-sm text-muted-foreground">Relaxare</span>
                </div>
              </div>
              <img
                src={saunaImage}
                alt="Saună"
                className="w-full h-64 object-cover rounded-lg shadow-warm"
              />
            </div>
          </div>

          {/* Features */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-cream rounded-xl hover:shadow-warm transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relaxation;

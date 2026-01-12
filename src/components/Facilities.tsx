import { useEffect, useRef, useState } from "react";
import {
  Droplets,
  Flame,
  TreePine,
  UtensilsCrossed,
  Car,
  Wifi,
  Tv,
  Thermometer,
  Mountain,
  Baby,
  Home,
  Beef,
} from "lucide-react";

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const facilities = [
    { icon: Droplets, name: "Ciubăr exterior", description: "Cu apă caldă" },
    { icon: Flame, name: "Saună", description: "Relaxare completă" },
    { icon: TreePine, name: "Curte mare", description: "Spațiu privat" },
    { icon: Home, name: "Foișor", description: "Zonă de relaxare" },
    { icon: UtensilsCrossed, name: "Bucătărie", description: "Complet utilată" },
    { icon: Beef, name: "Zonă grătar", description: "Exterior acoperit" },
    { icon: Car, name: "Parcare", description: "Privată și gratuită" },
    { icon: Wifi, name: "Wi-Fi", description: "Internet rapid" },
    { icon: Tv, name: "Smart TV", description: "În living" },
    { icon: Thermometer, name: "Încălzire", description: "Centrală termică" },
    { icon: Mountain, name: "Peisaj", description: "Vedere montană" },
    { icon: Baby, name: "Loc de joacă", description: "Pentru copii" },
  ];

  return (
    <section
      id="facilitati"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Facilități
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Tot ce ai nevoie pentru o vacanță perfectă
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Am pregătit totul pentru a te simți ca acasă, ba chiar mai bine. 
            Relaxare, confort și natură la un singur pas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`group p-6 bg-cream rounded-xl hover:bg-primary hover:shadow-warm transition-all duration-300 cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-cream/20 flex items-center justify-center mb-4 transition-colors">
                <facility.icon className="w-6 h-6 text-primary group-hover:text-cream transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-cream transition-colors mb-1">
                {facility.name}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-cream/80 transition-colors">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;

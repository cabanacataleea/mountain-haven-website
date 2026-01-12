import { useEffect, useRef, useState } from "react";
import { Users, Bed, Home, Sofa } from "lucide-react";

const Capacity = () => {
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

  const capacityItems = [
    {
      icon: Users,
      value: "10+",
      label: "Persoane",
      description: "Capacitate optimă pentru grupuri",
    },
    {
      icon: Bed,
      value: "5",
      label: "Dormitoare",
      description: "Camere spațioase și confortabile",
    },
    {
      icon: Sofa,
      value: "1",
      label: "Living mare",
      description: "Zonă generoasă de relaxare",
    },
    {
      icon: Home,
      value: "2",
      label: "Etaje",
      description: "Spațiu amplu pentru toți",
    },
  ];

  return (
    <section
      id="capacitate"
      ref={sectionRef}
      className="section-padding bg-gradient-forest text-cream"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-cream/80 font-medium text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Capacitate
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Spațiu generos pentru întreaga familie
          </h2>
          <p
            className={`text-cream/80 text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cabana noastră este perfectă pentru grupuri mari, oferind spații comune 
            generoase și dormitoare confortabile pentru toți oaspeții.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capacityItems.map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-cream/5 backdrop-blur-sm rounded-xl border border-cream/10 hover:bg-cream/10 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-cream" />
              </div>
              <span className="block text-4xl font-display font-bold mb-1">
                {item.value}
              </span>
              <span className="block text-lg font-medium mb-2">{item.label}</span>
              <span className="text-sm text-cream/70">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capacity;

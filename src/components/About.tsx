import { useEffect, useRef, useState } from "react";
import { Mountain, Users, TreePine, Home } from "lucide-react";
import aboutImage from "@/assets/exterior-summer.jpg";

const About = () => {
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

  const features = [
    { icon: Mountain, text: "Zonă montană, liniște și aer curat" },
    { icon: Users, text: "Potrivită pentru familii și grupuri" },
    { icon: TreePine, text: "Natură autentică și peisaje spectaculoase" },
    { icon: Home, text: "Construcție din lemn masiv, atmosferă caldă" },
  ];

  return (
    <section
      id="despre"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Chalet Ciocănești - exterior vara"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-forest rounded-lg flex items-center justify-center shadow-warm">
                <div className="text-center text-cream">
                  <span className="block text-3xl font-display font-bold">4</span>
                  <span className="text-sm">Sezoane</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Despre noi
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Un refugiu autentic în inima Bucovinei
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Situată în Ciocănești, într-o zonă montană de o frumusețe rară, 
              cabana noastră oferă intimitate și confort pentru vacanțe memorabile 
              la munte. Construită din lemn masiv în stil tradițional, Chalet 
              Ciocănești este locul perfect pentru a evada din agitația urbană și 
              a te reconecta cu natura.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

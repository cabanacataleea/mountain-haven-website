import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Clock, TreePine } from "lucide-react";

const Location = () => {
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

  const locationFeatures = [
    {
      icon: MapPin,
      title: "Ciocănești, Suceava",
      description: "În inima Bucovinei",
    },
    {
      icon: Navigation,
      title: "Acces facil",
      description: "Drum asfaltat până la cabană",
    },
    {
      icon: TreePine,
      title: "Natură sălbatică",
      description: "Trasee montane în apropiere",
    },
    {
      icon: Clock,
      title: "Liniște deplină",
      description: "Departe de aglomerație",
    },
  ];

  return (
    <section
      id="locatie"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Locație
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cum ajungi la noi
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Situată în inima Bucovinei, în comuna Ciocănești, cabana oferă acces 
            rapid la natură și trasee montane spectaculoase.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div
            className={`rounded-xl overflow-hidden shadow-elevated transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10632.096694086766!2d25.210947!3d47.471847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734f8a3b8b5a3d9%3A0x4c8d8f4e2c8e8c8e!2sCioc%C4%83ne%C8%99ti%2C%20Suceava!5e0!3m2!1sro!2sro!4v1705000000000!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Chalet Ciocănești"
              className="w-full h-[400px]"
            />
          </div>

          {/* Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {locationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 bg-background rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-forest rounded-xl text-cream">
              <h3 className="font-display text-xl font-bold mb-3">
                Bucovina te așteaptă!
              </h3>
              <p className="text-cream/90 text-sm leading-relaxed mb-4">
                Zona este renumită pentru mănăstirile pictate, tradițiile 
                autentice și peisajele montane de poveste. Chalet Ciocănești 
                este punctul de plecare ideal pentru a explora tot ce are de 
                oferit această regiune unică.
              </p>
              <a
                href="https://www.google.com/maps/dir//Ciocănești,+Suceava"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cream text-forest rounded-md font-medium text-sm hover:bg-cream/90 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Obține direcții
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

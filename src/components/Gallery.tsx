import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import exteriorSummer from "@/assets/exterior-summer.jpg";
import exteriorWinter from "@/assets/exterior-winter.jpg";
import chaletSummer from "@/assets/chalet-summer.jpg";
import chaletWinter from "@/assets/chalet-winter.jpg";
import interiorDining from "@/assets/interior-dining.jpg";
import kitchen from "@/assets/kitchen.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import sauna from "@/assets/sauna.jpg";
import bbqArea from "@/assets/bbq-area.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const images = [
    { src: chaletWinter, alt: "Cabana iarna", category: "Exterior" },
    { src: interiorDining, alt: "Zona de dining", category: "Interior" },
    { src: exteriorSummer, alt: "Exterior vara", category: "Exterior" },
    { src: hotTub, alt: "Ciubăr", category: "Relaxare" },
    { src: sauna, alt: "Saună", category: "Relaxare" },
    { src: kitchen, alt: "Bucătărie", category: "Interior" },
    { src: bbqArea, alt: "Zonă grătar", category: "Exterior" },
    { src: exteriorWinter, alt: "Cabana iarna", category: "Iarnă" },
    { src: chaletSummer, alt: "Vedere generală vara", category: "Vară" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + images.length) % images.length
        : (selectedImage + 1) % images.length;
    setSelectedImage(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="galerie"
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
            Galerie foto
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Descoperă Chalet Ciocănești
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Explorează cabana noastră prin imagini și lasă-te inspirat pentru 
            următoarea ta vacanță la munte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-lg aspect-square ${
                index === 0 || index === 4 ? "md:col-span-1 md:row-span-2 md:aspect-auto" : ""
              } ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms`, transitionDuration: "500ms" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-cream/90 text-foreground text-xs font-medium rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-cream/80 hover:text-cream transition-colors"
            aria-label="Închide"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 p-2 text-cream/80 hover:text-cream transition-colors"
            aria-label="Imaginea anterioară"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 p-2 text-cream/80 hover:text-cream transition-colors"
            aria-label="Imaginea următoare"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/80 text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

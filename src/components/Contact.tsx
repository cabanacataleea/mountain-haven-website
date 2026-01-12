import { useState, useEffect, useRef } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    period: "",
    message: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "",
        period: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "0700 000 000", href: "tel:+40700000000" },
    { icon: Mail, label: "Email", value: "contact@chalet-ciocanesti.ro", href: "mailto:contact@chalet-ciocanesti.ro" },
    { icon: MapPin, label: "Adresă", value: "Ciocănești, Suceava, România", href: "#locatie" },
  ];

  return (
    <section
      id="contact"
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
            Contact & Rezervări
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Rezervă-ți vacanța de vis
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Completează formularul de mai jos și te vom contacta în cel mai 
            scurt timp pentru a confirma disponibilitatea.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="p-6 bg-gradient-forest rounded-xl text-cream">
              <h3 className="font-display text-xl font-bold mb-6">
                Informații de contact
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cream/20 transition-colors">
                      <info.icon className="w-5 h-5 text-cream" />
                    </div>
                    <div>
                      <span className="block text-sm text-cream/70">
                        {info.label}
                      </span>
                      <span className="font-medium group-hover:underline">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-cream rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">
                Program răspuns
              </h4>
              <p className="text-sm text-muted-foreground">
                Răspundem la cereri în maxim 24 de ore. Pentru urgențe, 
                ne poți contacta direct la telefon.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center p-12 bg-cream rounded-xl">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Mulțumim!
                  </h3>
                  <p className="text-muted-foreground">
                    Cererea ta a fost trimisă. Te vom contacta în curând.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-cream rounded-xl shadow-soft"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="0700 000 000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Număr persoane *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Selectează</option>
                      <option value="2-4">2-4 persoane</option>
                      <option value="5-8">5-8 persoane</option>
                      <option value="9-12">9-12 persoane</option>
                      <option value="12+">Peste 12 persoane</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="period"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Perioada dorită *
                  </label>
                  <input
                    type="text"
                    id="period"
                    name="period"
                    required
                    value={formData.period}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Ex: 15-18 Ianuarie 2025"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Orice detalii suplimentare..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-forest text-cream rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-warm"
                >
                  <Send className="w-5 h-5" />
                  Trimite cererea
                </button>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Vă vom contacta în cel mai scurt timp pentru confirmarea 
                  disponibilității.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

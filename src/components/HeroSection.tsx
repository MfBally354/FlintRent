import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="FlintRent hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-4 animate-fade-up">
          Flint<span className="text-gradient-flame">Rent</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Rental Laptop & PC Profesional
        </p>
        <p className="text-lg text-primary font-semibold tracking-widest uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Cepat · Siap Pakai · Terpercaya
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#packages"
            className="bg-gradient-flame text-primary-foreground px-8 py-3.5 rounded-lg font-semibold shadow-flame hover:shadow-flame-lg transition-all hover:scale-105"
          >
            Lihat Paket
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

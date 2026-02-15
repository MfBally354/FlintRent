const CTASection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Siap Mulai <span className="text-gradient-flame">Sewa</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Hubungi kami sekarang untuk mendapatkan perangkat terbaik sesuai kebutuhan Anda.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-flame text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-flame hover:shadow-flame-lg transition-all hover:scale-105 animate-glow-pulse"
          >
            Booking via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

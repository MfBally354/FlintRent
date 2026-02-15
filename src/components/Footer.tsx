const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              Flint<span className="text-gradient-flame">Rent</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rental laptop & PC profesional untuk kebutuhan bisnis, event, dan personal.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Paket Rental</a></li>
              <li><a href="#how" className="hover:text-primary transition-colors">Cara Rental</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimoni</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Email: hello@flintrent.id</li>
              <li>Instagram: @flintrent.id</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          © 2026 FlintRent. Part of FlintWorks ecosystem.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

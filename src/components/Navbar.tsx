import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Keunggulan", href: "#why" },
    { label: "Paket", href: "#packages" },
    { label: "Cara Rental", href: "#how" },
    { label: "Testimoni", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="font-display text-xl font-bold tracking-tight">
          Flint<span className="text-gradient-flame">Rent</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-flame text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold shadow-flame hover:shadow-flame-lg transition-shadow"
          >
            WhatsApp Booking
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-flame text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center shadow-flame"
          >
            WhatsApp Booking
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

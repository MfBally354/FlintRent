import { Laptop, Code, Gamepad2, MonitorSpeaker } from "lucide-react";

const packages = [
  {
    icon: Laptop,
    name: "Laptop Office",
    desc: "Cocok untuk kerja kantoran, presentasi, dan administrasi.",
    specs: ["Intel i5 / Ryzen 5", "8GB RAM", "256GB SSD", "14\" FHD"],
    price: "Mulai Rp 500rb/bulan",
    popular: false,
  },
  {
    icon: Code,
    name: "Laptop Coding",
    desc: "Untuk developer & programmer yang butuh performa lebih.",
    specs: ["Intel i7 / Ryzen 7", "16GB RAM", "512GB SSD", "15.6\" FHD"],
    price: "Mulai Rp 800rb/bulan",
    popular: true,
  },
  {
    icon: Gamepad2,
    name: "Laptop Gaming",
    desc: "Untuk gaming, 3D rendering, dan desain grafis berat.",
    specs: ["Intel i7 + RTX 3060", "16GB RAM", "512GB SSD", "15.6\" 144Hz"],
    price: "Mulai Rp 1.2jt/bulan",
    popular: false,
  },
  {
    icon: MonitorSpeaker,
    name: "PC Event",
    desc: "Paket lengkap untuk acara, seminar, dan workshop.",
    specs: ["PC + Monitor 24\"", "Keyboard & Mouse", "Setup di lokasi", "Min. 5 unit"],
    price: "Hubungi Kami",
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Paket <span className="text-gradient-flame">Rental</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Pilih paket sesuai kebutuhan Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, i) => (
            <div
              key={i}
              className={`relative bg-card border rounded-xl p-6 flex flex-col transition-all hover:scale-[1.02] ${
                p.popular ? "border-primary shadow-flame" : "border-border hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-flame text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Populer
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.specs.map((s, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-primary font-bold text-sm mb-4">{p.price}</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-gradient-flame text-primary-foreground shadow-flame hover:shadow-flame-lg"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Booking Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

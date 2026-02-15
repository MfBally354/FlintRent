import { Monitor, Wrench, Headphones, DollarSign } from "lucide-react";

const reasons = [
  { icon: Monitor, title: "Device Siap Pakai", desc: "Semua perangkat sudah di-setup dan siap digunakan langsung tanpa ribet." },
  { icon: Wrench, title: "Maintenance Rutin", desc: "Perawatan berkala untuk memastikan performa optimal setiap saat." },
  { icon: Headphones, title: "Support Teknisi", desc: "Tim teknisi standby siap membantu jika ada kendala teknis." },
  { icon: DollarSign, title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi. Harga jelas di awal." },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Kenapa <span className="text-gradient-flame">FlintRent</span>?
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Kami memastikan setiap perangkat yang Anda sewa dalam kondisi terbaik.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

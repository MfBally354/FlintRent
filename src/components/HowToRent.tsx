import { Package, MessageCircle, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Package, step: "01", title: "Pilih Paket", desc: "Tentukan jenis perangkat dan durasi sewa yang sesuai." },
  { icon: MessageCircle, step: "02", title: "Hubungi Admin", desc: "Chat via WhatsApp untuk konfirmasi ketersediaan." },
  { icon: Truck, step: "03", title: "Pengiriman / Ambil", desc: "Perangkat diantar ke lokasi atau ambil sendiri." },
  { icon: CheckCircle2, step: "04", title: "Selesai!", desc: "Gunakan perangkat. Kami siap bantu jika ada kendala." },
];

const HowToRent = () => {
  return (
    <section id="how" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Cara <span className="text-gradient-flame">Rental</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Prosesnya mudah dan cepat. Hanya 4 langkah.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{s.step}</span>
              <h3 className="font-semibold text-lg mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRent;

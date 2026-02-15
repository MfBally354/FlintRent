import { Star } from "lucide-react";

const testimonials = [
  { name: "Andi S.", role: "Freelancer", text: "Laptop yang disewa performanya mantap. Support teknisi juga responsif banget!" },
  { name: "Diana K.", role: "Event Organizer", text: "Sudah 3x sewa PC untuk event dan selalu puas. Setup cepat dan rapi." },
  { name: "Rizky P.", role: "Startup Founder", text: "FlintRent sangat membantu saat kami butuh laptop tambahan untuk tim remote." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Apa Kata <span className="text-gradient-flame">Mereka</span>?
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Testimoni dari pelanggan yang sudah menggunakan layanan kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import deviceLaptop from "@/assets/device-laptop.jpg";
import devicePc from "@/assets/device-pc.jpg";

const devices = [
  {
    img: deviceLaptop,
    name: "ThinkPad / Ideapad Series",
    specs: "Intel i5-i7 · 8-16GB RAM · SSD 256-512GB",
    desc: "Laptop andalan untuk produktivitas kantor dan coding.",
  },
  {
    img: devicePc,
    name: "Custom Gaming PC",
    specs: "RTX 3060/4060 · 16-32GB RAM · SSD 512GB-1TB",
    desc: "PC performa tinggi untuk gaming, rendering, dan event.",
  },
];

const DeviceHighlight = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Device <span className="text-gradient-flame">Highlight</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Beberapa perangkat unggulan yang tersedia untuk disewa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {devices.map((d, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="h-56 overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-1">{d.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{d.specs}</p>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceHighlight;

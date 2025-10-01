import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Coffee, Sparkles, FlowerIcon, Apple, Sprout, UtensilsCrossed, Flower2 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Leaf,
      title: "O'tlar va To'plamlar",
      description: "Eng sifatli dorivor o'tlar va tayyorlangan aralashmalar",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Coffee,
      title: "Fitochoylar",
      description: "Salomatlik uchun maxsus tayyorlangan tabiiy choylar",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Sparkles,
      title: "Ziravorlar",
      description: "Aromatik ziravorlar va dori o'simliklar",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FlowerIcon,
      title: "Ivan-Choy",
      description: "Rus milliy choy - kiprey o'ti",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Apple,
      title: "Mevalar va Rezavorlar",
      description: "Quritilgan mevalar va foydali rezavorlar",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Sprout,
      title: "Ildizlar",
      description: "Shifobaxsh o'simlik ildizlari",
      color: "from-yellow-500 to-lime-600",
    },
    {
      icon: UtensilsCrossed,
      title: "Qo'ziqorinlar",
      description: "Tibbiy qo'ziqorinlar va ekstraktlar",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: Flower2,
      title: "Gullar",
      description: "Shifobaxsh gul barglari va gultojlar",
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Bizning Mahsulotlar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Biz Taqdim Etamiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oltoy tog'laridan qo'lda terilgan, yuqori sifatli tabiiy mahsulotlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} p-4 group-hover:scale-110 transition-transform shadow-[var(--shadow-soft)]`}
                  >
                    <product.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border/50 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold">Minimal Buyurtma</h3>
          </div>
          <p className="text-muted-foreground text-lg">
            Bir mahsulotdan <span className="text-primary font-bold">5 kg</span>,
            jami summa <span className="text-primary font-bold">10,000 rubl</span> dan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;

import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";

const Delivery = () => {
  const deliverySteps = [
    {
      icon: Package,
      title: "Buyurtma",
      description: "Siz buyurtma berasiz va to'lovni amalga oshirasiz",
      step: "01",
    },
    {
      icon: CheckCircle,
      title: "Tayyorlov",
      description: "Mahsulotlar ehtiyotkorlik bilan qadoqlanadi",
      step: "02",
    },
    {
      icon: Truck,
      title: "Yetkazish",
      description: "Mahsulot yetkazib berish xizmatiga topshiriladi",
      step: "03",
    },
    {
      icon: MapPin,
      title: "Qabul Qilish",
      description: "Siz mahsulotni 1-3 kun ichida qabul qilasiz",
      step: "04",
    },
  ];

  const deliveryRegions = [
    { name: "Rossiya", time: "1-3 kun" },
    { name: "Qozog'iston", time: "2-4 kun" },
    { name: "Belorussiya", time: "2-5 kun" },
    { name: "MDH davlatlari", time: "3-7 kun" },
  ];

  return (
    <section id="delivery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Yetkazib Berish
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Qanday Ishlaydi?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oddiy va qulay yetkazib berish jarayoni - sizning vaqtingizni tejash uchun
          </p>
        </div>

        {/* Delivery Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliverySteps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="group hover:shadow-[var(--shadow-medium)] transition-all border-border/50 h-full">
                <CardContent className="p-6 text-center relative">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 inline-block">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {index < deliverySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Delivery Regions */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] border border-border/50 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">Yetkazib Berish Hududlari</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryRegions.map((region, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors border border-border/30"
              >
                <div className="text-2xl font-bold text-primary mb-2">{region.name}</div>
                <div className="text-muted-foreground">{region.time}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Bepul yetkazib berish:</span> 50,000 rubldan ortiq buyurtmalar uchun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

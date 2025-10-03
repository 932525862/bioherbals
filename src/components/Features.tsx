import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Truck, Award, Users, Shield, Clock } from "lucide-react";
import herbsImage from "@/assets/img.png";

const Features = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Yuqori Sifat",
      description: "Barcha mahsulotlar qo'lda terilgan va sifat nazoratidan o'tgan",
    },
    {
      icon: Truck,
      title: "Tez Yetkazish",
      description: "Oddiy va qulay – mahsulotingizni siz xohlagan usulda tez va sifatli yetkazib beramiz.",
    },
    {
      icon: Award,
      title: "Sertifikatlangan",
      description: "Barcha kerakli sertifikatlar va ruxsatnomalar mavjud",
    },
    {
      icon: Users,
      title: "Ishonchli Hamkor",
      description: "Har bir mijoz uchun ishonchli hamkorlikni kafolatlaymiz.",
    },
    {
      icon: Shield,
      title: "Kafolat",
      description: "Mahsulot sifati va xavfsizligiga to'liq kafolat beramiz",
    },
    {
      icon: Clock,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Har qanday savollarga tezkor javob va yordam",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img
                src={herbsImage}
                alt="Oltoy o'tlari kolleksiyasi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Tabiiy Mahsulotlar</h3>
                <p className="text-white/90">
                O‘zbekiston quyoshi ostida yetilgan quritilgan mevalar, tog‘ giyohlari va mazali yong‘oqlar ulgurji savdosi. Yuqori sifat va tezkor yetkazib berish kafolatlanadi.
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Features Side */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Bizning Afzalliklarimiz
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Nima Uchun Bizni Tanlaydilar?
              </h2>
              <p className="text-muted-foreground text-lg">
              Bioherbals — sog‘lom hayot uchun tabiiy mahsulotlar manbai. Biz yuqori sifatli quritilgan mevalar, sabzavotlar va shifobaxsh o‘simliklarni tayyorlab, ularning tabiiy ta’mi, hidi va foydali xususiyatlarini saqlagan holda eksport qilamiz. Bioherbals — har bir mahsulotda sifat va g‘amxo‘rlik.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:shadow-[var(--shadow-soft)] transition-all hover:border-primary/20 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

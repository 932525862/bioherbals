import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Truck, Award, Users, Shield, Clock } from "lucide-react";
import herbsImage from "@/assets/tabi.jpg";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: CheckCircle2,
      title: t("features.items.quality.title"),
      description: t("features.items.quality.description"),
    },
    {
      icon: Truck,
      title: t("features.items.delivery.title"),
      description: t("features.items.delivery.description"),
    },
    {
      icon: Award,
      title: t("features.items.certified.title"),
      description: t("features.items.certified.description"),
    },
    {
      icon: Users,
      title: t("features.items.partner.title"),
      description: t("features.items.partner.description"),
    },
    {
      icon: Shield,
      title: t("features.items.guarantee.title"),
      description: t("features.items.guarantee.description"),
    },
    {
      icon: Clock,
      title: t("features.items.support.title"),
      description: t("features.items.support.description"),
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
                alt={t("features.image.alt")}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {t("features.image.title")}
                </h3>
                <p className="text-white/90">
                  {t("features.image.description")}
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Features Side */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t("features.section.subtitle")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                {t("features.section.title")}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t("features.section.description")}
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
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
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

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrainFront, Truck, CheckCircle, Ship, Plane, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import Fura from "../assets/fura.jpeg";
import Poyez from "../assets/poyez.jpeg";
import dengiz from "../assets/debgiz.jpg";
import Havo from "../assets/samalyot.jpeg";

const Delivery = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const BOT_TOKEN = "8323212944:AAGmTs2XqmRfkKdzGu2nIFDhrkyxcPC005k";
  const CHAT_ID = "-1003125167301";
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = `
📩 ${t("delivery.sectionTitle")} Bioherbals saytidan:
👤 ${t("delivery.modal.nameLabel")} ${formData.name}
📧 ${t("delivery.modal.emailLabel")} ${formData.email}
💬 ${t("delivery.modal.messageLabel")} ${formData.message || "Xabar yo‘q"}
`;

    try {
      await fetch(TELEGRAM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      toast.success(t("delivery.toast.success"));
      setFormData({ name: "", email: "", message: "" });
      setIsModalOpen(false);
    } catch (error) {
      toast.error(t("delivery.toast.error"));
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  const deliveryMethods = [
    {
      icon: Ship,
      title: t("delivery.methods.sea.title"),
      description: t("delivery.methods.sea.description"),
      features: t("delivery.methods.sea.features", { returnObjects: true }),
      image: dengiz,
    },
    {
      icon: TrainFront,
      title: t("delivery.methods.train.title"),
      description: t("delivery.methods.train.description"),
      features: t("delivery.methods.train.features", { returnObjects: true }),
      image: Poyez,
    },
    {
      icon: Truck,
      title: t("delivery.methods.truck.title"),
      description: t("delivery.methods.truck.description"),
      features: t("delivery.methods.truck.features", { returnObjects: true }),
      image: Fura,
    },
    {
      icon: Plane,
      title: t("delivery.methods.air.title"),
      description: t("delivery.methods.air.description"),
      features: t("delivery.methods.air.features", { returnObjects: true }),
      image: Havo,
    },
  ];

  const deliveryRegions = t("delivery.regions.items", { returnObjects: true });

  return (
    <section id="delivery" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("delivery.sectionTitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("delivery.mainTitle")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("delivery.description")}   
          </p>
        </div>

        {/* Delivery Methods */}
        <div className="animate-fade-in">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                <Card className="group overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all border-border/50">
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={method.image}
                      alt={method.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 md:gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <method.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
                        {method.title}
                      </h4>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                      {method.description}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {method.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                          <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-4 md:p-8 rounded-2xl md:rounded-3xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-sm md:text-lg">
              <span className="font-semibold text-primary">{t("delivery.terms.title")}</span>
              <span className="text-foreground ml-1 md:ml-2">
                {t("delivery.terms.text")}
              </span>
            </p>
          </div>
        </div>

        {/* Delivery Regions */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] border border-border/50 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">
            {t("delivery.regions.title")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryRegions.map((region: any, index: number) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors border border-border/30"
              >
                <div className="text-2xl font-bold text-primary mb-2">{region.name}</div>
                <div className="text-muted-foreground">{region.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                {t("delivery.regions.footer.bold")}
              </span>{" "}
              {t("delivery.regions.footer.text")}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative p-6 md:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              {t("delivery.modal.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("delivery.modal.nameLabel")}
                </label>
                <Input
                  placeholder={t("delivery.modal.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("delivery.modal.emailLabel")}
                </label>
                <Input
                  type="email"
                  placeholder={t("delivery.modal.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("delivery.modal.messageLabel")}
                </label>
                <Textarea
                  placeholder={t("delivery.modal.messagePlaceholder")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t("delivery.modal.submitButton")}
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Delivery;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Xabaringiz muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+998 90 123-45-67",
      link: "tel:+998901234567",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@oltoy_export",
      link: "https://t.me/oltoy_export",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+998 90 123-45-67",
      link: "https://wa.me/998901234567",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@oltoy-export.uz",
      link: "mailto:info@oltoy-export.uz",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Bog'lanish
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Biz Bilan Bog'laning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Savollaringiz bormi? Biz har doim sizga yordam berishga tayyormiz
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Aloqa Ma'lumotlari</h3>
              <p className="text-muted-foreground mb-8">
                O'zingizga qulay usulda biz bilan bog'laning. Biz tez orada javob beramiz va sizga yordam beramiz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="group hover:shadow-[var(--shadow-medium)] transition-all border-border/50 hover:border-primary/20 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[var(--shadow-soft)]`}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1">{method.title}</h4>
                          <p className="text-muted-foreground text-sm truncate">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Ish Vaqti</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dushanba - Juma:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shanba:</span>
                    <span className="font-medium">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Yakshanba:</span>
                    <span className="font-medium">Dam olish</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-[var(--shadow-medium)] animate-slide-in-right">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Xabar Yuborish</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ismingiz *
                  </label>
                  <Input
                    placeholder="To'liq ismingizni kiriting"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefon raqam *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+998 90 123-45-67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Xabaringiz
                  </label>
                  <Textarea
                    placeholder="Savol yoki fikringizni yozing..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="border-border/50 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Xabar Yuborish
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

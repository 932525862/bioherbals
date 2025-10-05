"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔹 Telegram sozlamalari
  const BOT_TOKEN = "8323212944:AAGmTs2XqmRfkKdzGu2nIFDhrkyxcPC005k";
  const CHAT_ID = "-1003125167301";
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
📩 ${t("contact.newMessage")}
👤 ${t("contact.name")}: ${formData.name}
📧 ${t("contact.email")}: ${formData.email}
💬 ${t("contact.message")}: ${formData.message || t("contact.noMessage")}
`;

    try {
      await fetch(TELEGRAM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
      });

      toast.success(t("contact.success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(t("contact.error"));
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+998 00 000-00-00",
      link: "tel:+998000000000",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@bioherbals_export",
      link: "",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+998 00 000-00-00",
      link: "",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@bioherbals.uz",
      link: "mailto:",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("contact.sectionTitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("contact.heading")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subheading")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("contact.infoTitle")}</h3>
              <p className="text-muted-foreground mb-8">
                {t("contact.infoText")}
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
                <h4 className="font-semibold mb-4">{t("contact.hoursTitle")}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.weekdays")}</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.saturday")}</span>
                    <span className="font-medium">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.sunday")}</span>
                    <span className="font-medium">{t("contact.closed")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-[var(--shadow-medium)] animate-slide-in-right">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t("contact.formTitle")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.name")} *
                  </label>
                  <Input
                    placeholder={t("contact.namePlaceholder")}
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
                    {t("contact.email")} *
                  </label>
                  <Input
                    type="email"
                    placeholder="info@bioherbals.uz"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    placeholder={t("contact.messagePlaceholder")}
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
                  {t("contact.send")}
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

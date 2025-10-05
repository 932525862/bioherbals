import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroImage1 from "../assets/bog`.png";
import heroImage2 from "../assets/meva.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroImages = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem
                key={index}
                className={`h-screen transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <img
                  src={image}
                  alt={`Oltoy tog'lari ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Leaf className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float opacity-20 [animation-delay:1s]">
        <Leaf className="w-20 h-20 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xl font-medium">
              ♻️ {t("hero.naturalProduct")}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent">
              {t("hero.brand")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group text-lg px-8 py-6"
            >
              {t("hero.contactBtn")}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-lg px-8 py-6 text-[#000000] border-white/40 hover:bg-white/20"
            >
              {t("hero.productsBtn")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

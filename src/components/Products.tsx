import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import product images
import walnuts from "@/assets/products/walnuts.jpg";
import almonds from "@/assets/products/almonds.jpg";

// herbs & teas
import Травы from "@/assets/products/Травы, сборы.jpeg";
import Фиточаи from "@/assets/products/Фиточаи.webp";
import Специи from "@/assets/products/Специи, пряности.jpg";
import Иван from "@/assets/products/Иван-Чай.jpeg";
import Плоды from "@/assets/products/Плоды, ягоды .jpg";
import Коренья from "@/assets/products/Коренья.webp";
import Грибы from "@/assets/products/Грибы.png";
import Цветы from "@/assets/products/Цветы.jpg";

// fruits
import Изюм from "@/assets/products/sultana-raisins.jpg";
import ИзюмТомпсон from "../assets/products/izym-tompson.jpg";
import ИзюмГолден from "../assets/products/golden-raisins.jpg";
import ЧёрныйИзюм from "../assets/products/izyum-sayaki.jpg";
import Курага from "../assets/products/kuraga-subhona.jpg";
import Чернослив from "../assets/products/chernosliv-1.jpg";
import КурагаОрганик from "../assets/products/kuraga-organik.jpg";

// nuts
import Миндаль from "../assets/products/mindal-main.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("herbs");
  const { t } = useTranslation();

  const categories = [
    { id: "herbs", label: t("products.categories.herbs") },
    { id: "fruits", label: t("products.categories.fruits") },
    { id: "nuts", label: t("products.categories.nuts") },
  ];

  const allProducts = {
    herbs: [
      { name: t("products.herbsList.Травы"), image: Травы },
      { name: t("products.herbsList.Специи"), image: Специи },
      { name: t("products.herbsList.Фиточаи"), image: Фиточаи },
      { name: t("products.herbsList.Иван"), image: Иван },
      { name: t("products.herbsList.Плоды"), image: Плоды },
      { name: t("products.herbsList.Коренья"), image: Коренья },
      { name: t("products.herbsList.Грибы"), image: Грибы },
      { name: t("products.herbsList.Цветы"), image: Цветы },
    ],
    fruits: [
      { name: t("products.fruitsList.Изюм"), image: Изюм },
      { name: t("products.fruitsList.ИзюмТомпсон"), image: ИзюмТомпсон },
      { name: t("products.fruitsList.ЧёрныйИзюм"), image: ЧёрныйИзюм },
      { name: t("products.fruitsList.Курага"), image: Курага },
      { name: t("products.fruitsList.КурагаОрганик"), image: КурагаОрганик },
      { name: t("products.fruitsList.Чернослив"), image: Чернослив },
    ],
    nuts: [
      { name: t("products.nutsList.Yongoq"), image: walnuts },
      { name: t("products.nutsList.Миндаль"), image: Миндаль },
    ],
  };

  const currentProducts = allProducts[selectedCategory as keyof typeof allProducts];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("products.sectionTitle")}
          </h2>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full max-w-2xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {currentProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="group overflow-hidden border-border/50 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>

        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border/50 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold">{t("products.minimal.title")}</h3>
          </div>
          <p className="text-muted-foreground text-lg">
            {t("products.minimal.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;

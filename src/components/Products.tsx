import { useState } from "react";
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
import blackRaisins from "@/assets/products/black-raisins.jpg";
import goldenRaisins from "@/assets/products/golden-raisins.jpg";
import driedApricots from "@/assets/products/dried-apricots.jpg";
import prunes from "@/assets/products/prunes.jpg";
import walnuts from "@/assets/products/walnuts.jpg";
import almonds from "@/assets/products/almonds.jpg";
import chamomile from "@/assets/products/chamomile.jpg";
import mint from "@/assets/products/mint.jpg";
import ivanChai from "@/assets/products/ivan-chai.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("herbs");

  const categories = [
    { id: "herbs", label: "O'TLAR VA CHOYLAR" },
    { id: "fruits", label: "QURITILGAN MEVALAR" },
    { id: "nuts", label: "YONG'OQLAR" },
  ];

  const allProducts = {
    herbs: [
      {
        name: "Romashka",
        image: chamomile,
      },
      {
        name: "Yalpiz",
        image: mint,
      },
      {
        name: "Ivan-Choy",
        image: ivanChai,
      },
      {
        name: "Romashka",
        image: chamomile,
      },
    ],
    fruits: [
      {
        name: "Qora Mayiz",
        image: blackRaisins,
      },
      {
        name: "Oltin Mayiz",
        image: goldenRaisins,
      },
      {
        name: "Quritilgan O'rik",
        image: driedApricots,
      },
      {
        name: "Olxo'ri",
        image: prunes,
      },
    ],
    nuts: [
      {
        name: "Yong'oq",
        image: walnuts,
      },
      {
        name: "Bodom",
        image: almonds,
      },
      {
        name: "Yong'oq",
        image: walnuts,
      },
      {
        name: "Bodom",
        image: almonds,
      },
    ],
  };

  const currentProducts = allProducts[selectedCategory as keyof typeof allProducts];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Biz taqdim etamiz
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
            <h3 className="text-2xl font-bold">Minimal Buyurtma</h3>
          </div>
          <p className="text-muted-foreground text-lg">
          Biz faqat <span className="text-primary font-bold">yirik</span>,
          buyurtmalar bilan ishlaymiz–kamida <span className="text-primary font-bold">1 tonna.</span> 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;

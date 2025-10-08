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
import Травы from "@/assets/products/Травы, сборы.jpeg";
import Фиточаи from "@/assets/products/Фиточаи.webp";
import Иван from "@/assets/products/Иван-Чай.jpeg";
import Коренья from "@/assets/products/Коренья.webp";

import AspenBark3 from "@/assets/products/AspenBark3.jpg";
import NettleLeaf4 from "@/assets/products/NettleLeaf4.jpg";
import WormwoodHerb5 from "@/assets/products/WormwoodHerb5.webp";
import TansyHerb6 from "@/assets/products/TansyHerb6.jpg";
import FieldHorsetailHerb7  from "@/assets/products/FieldHorsetailHerb7.webp";
import Hypericumperforatum8 from "@/assets/products/Hypericumperforatum8.webp";
import ChagaMushroom9 from "@/assets/products/ChagaMushroom9.png";
import BurdockRoot11 from "@/assets/products/BurdockRoot11.jpg";
import DandelionRoot12  from "@/assets/products/Dandelion Root12.webp";
import GreaterPlantain13  from "@/assets/products/Greater Plantain13.jpg";
import RibwortPlantain15  from "@/assets/products/Ribwort Plantain15.webp";
import SunflowerPetals16  from "@/assets/products/Sunflower Petals16.webp";
import BlackberryLeaf17  from "@/assets/products/BlackberryLeaf.webp";
import MintLeaves18 from "@/assets/products/Mint Leaves18.jpg";
import Basil18 from "@/assets/products/Basil18.webp";



// fruits

import ЧёрныйИзюм from "../assets/products/izyum-sayaki.jpg";
import Курага from "../assets/products/kuraga-subhona.jpg";
import Чернослив from "../assets/products/chernosliv-1.jpg";
import КурагаОрганик from "../assets/products/kuraga-organik.jpg";

// nuts
import Миндаль from "../assets/products/bod.webp";

import DriedLicoriceRoot1 from "../assets/products/Dried Licorice Root1.jpg";
import DriedElecampaneRoot2 from "../assets/products/Elecampane-420x280.jpg";
import DriedMulberryLeaves3 from "../assets/products/yalpz.png";
import DriedRoseHips4 from "../assets/products/jngil.jpg";
import oil1 from "../assets/products/oil1.webp"
import oil2 from "../assets/products/oil2.webp"
import oil3 from "../assets/products/oil33.jpg"
import oil4 from "../assets/products/oil4.jpg"
import oilw1 from "../assets/products/oilw1.webp"
import oilw4 from "../assets/products/oilw2.jpg"
import oilw5 from "../assets/products/oil3.webp"
import oilw6 from "../assets/products/oilw4.jpg"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("herbs");
  const { t } = useTranslation();

  const categories = [
    { id: "herbs", label: t("products.categories.herbs") },
    { id: "fruits", label: t("products.categories.fruits") },
    { id: "nuts", label: t("products.categories.nuts") },
    { id: "oil", label: t("products.categories.oil") },
    { id: "water", label: t("products.categories.WATER") },
  ];
 
  const allProducts = {
    herbs: [
      { name: t("products.herbsList.Травы"), image: Травы },
      { name: t("products.herbsList.Фиточаи"), image: Фиточаи },
      { name: t("products.herbsList.Иван"), image: Иван },
      { name: t("products.herbsList.Коренья"), image: Коренья },
      { name: t("aspenBark"), image: AspenBark3 },
      { name: t("nettleLeaf"), image: NettleLeaf4 },
      { name: t("wormwoodHerb"), image: WormwoodHerb5 },
      { name: t("tansyHerb"), image: TansyHerb6 },
      { name: t("fieldHorsetailHerb"), image: FieldHorsetailHerb7 },
      { name: t("blackberryLeaf"), image: BlackberryLeaf17 },
      { name: t("stJohnsWortHerb"), image: Hypericumperforatum8 },
      { name: t("chagaMushroom"), image: ChagaMushroom9 },
      { name: t("burdockRoot"), image: BurdockRoot11 },
      { name: t("dandelionRoot"), image: DandelionRoot12 },
      { name: t("greaterCelandine"), image: Коренья },
      { name: t("greaterPlantain"), image: GreaterPlantain13 },
      { name: t("ribwortPlantain"), image: RibwortPlantain15 },
      { name: t("sunflowerPetals"), image: SunflowerPetals16  },
      { name: t("mintLeaves"), image: MintLeaves18 },
      { name: t("basil"), image: Basil18 },
    
     
    ],
    fruits: [
      { name: t("products.nutsList.Yongoq"), image: walnuts },
      { name: t("products.nutsList.Миндаль"), image: Миндаль },
      { name: t("products.fruitsList.ЧёрныйИзюм"), image: ЧёрныйИзюм },
      { name: t("products.fruitsList.Курага"), image: Курага },
      { name: t("products.fruitsList.КурагаОрганик"), image: КурагаОрганик },
      { name: t("products.fruitsList.Чернослив"), image: Чернослив },
    ],
    nuts: [
      { name: t("driedLicoriceRoot"), image: DriedLicoriceRoot1 },
      { name: t("driedElecampaneRoot"), image: DriedElecampaneRoot2 },
      { name: t("driedMulberryLeaves"), image: DriedMulberryLeaves3 },
      { name: t("driedRoseHips"), image: DriedRoseHips4 },
    
    ],
    oil: [
      { name: t("monarda"), image: oil1 },
      { name: t("chamomile"), image: oil2 },
      { name: t("horse_chestnut"), image: oil3 },
      { name: t("tansy"), image: oil4 },
    ],
    water: [
      { name: t("peppermint_leaf"), image: oilw1 },
      { name: t("plantain_leaf"), image:oilw4 },
      { name: t("rosemary"), image:oilw5 },
      { name: t("greater_celandine"), image:oilw6 },
    ]
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
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 h-auto">
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
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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
            <CarouselPrevious className="hidden md:block left-0 -translate-x-12" />
<CarouselNext className="hidden md:block right-0 translate-x-12" />

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

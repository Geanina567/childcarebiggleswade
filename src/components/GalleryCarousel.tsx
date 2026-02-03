import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery28 from "@/assets/gallery-28.jpg";
import gallery29 from "@/assets/gallery-29.jpg";
import gallery30 from "@/assets/gallery-30.jpg";
import gallery31 from "@/assets/gallery-31.jpg";
import gallery32 from "@/assets/gallery-32.jpg";
import gallery33 from "@/assets/gallery-33.jpg";
import gallery34 from "@/assets/gallery-34.jpg";
import gallery36 from "@/assets/gallery-36.jpg";
import gallery37 from "@/assets/gallery-37.jpg";
import gallery38 from "@/assets/gallery-38.jpg";
import gallery39 from "@/assets/gallery-39.jpg";
import gallery40 from "@/assets/gallery-40.jpg";
import gallery41 from "@/assets/gallery-41.jpg";
import gallery42 from "@/assets/gallery-42.jpg";
import gallery43 from "@/assets/gallery-43.jpg";
import gallery44 from "@/assets/gallery-44.jpg";

const galleryImages = [
  { src: gallery7, alt: "Sensory lights and calming toys" },
  { src: gallery8, alt: "Homemade rice pudding" },
  { src: gallery9, alt: "Nutritious soup with dumplings" },
  { src: gallery10, alt: "Nature exploration tray" },
  { src: gallery11, alt: "Natural materials discovery" },
  { src: gallery12, alt: "Outdoor sensory play" },
  { src: gallery13, alt: "Forest treasures collection" },
  { src: gallery14, alt: "Nature walk findings" },
  { src: gallery15, alt: "Magnetic building tiles play" },
  { src: gallery16, alt: "Creative construction with tiles" },
  { src: gallery17, alt: "Magnetic tiles building set" },
  { src: gallery18, alt: "Outdoor craft activities" },
  { src: gallery19, alt: "Story time craft session" },
  { src: gallery20, alt: "Creative play tray setup" },
  { src: gallery21, alt: "Outdoor learning space" },
  { src: gallery22, alt: "Story book reading activity" },
  { src: gallery23, alt: "Interactive story crafts" },
  { src: gallery24, alt: "Behaviour champion rewards" },
  { src: gallery25, alt: "Positive behaviour celebration" },
  { src: gallery26, alt: "Shape matching learning" },
  { src: gallery27, alt: "Cosy reading corner with dolls" },
  { src: gallery28, alt: "Handprint craft keepsake" },
  { src: gallery29, alt: "Mother's Day craft card" },
  { src: gallery30, alt: "Creative blow painting art" },
  { src: gallery31, alt: "October focus books newsletter" },
  { src: gallery32, alt: "Christmas Elf Report" },
  { src: gallery33, alt: "January learning plans" },
  { src: gallery34, alt: "September focus books" },
  { src: gallery36, alt: "Flower water sensory play" },
  { src: gallery37, alt: "Colourful foam building blocks" },
  { src: gallery38, alt: "Creative block construction" },
  { src: gallery39, alt: "Farm animals sensory play" },
  { src: gallery40, alt: "Farm tray with wooden animals" },
  { src: gallery41, alt: "Farm sensory play overview" },
  { src: gallery42, alt: "Magnetic animal board" },
  { src: gallery43, alt: "Animal magnets learning activity" },
  { src: gallery44, alt: "Nature treasure collection" },
];

const GalleryCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {galleryImages.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="group relative rounded-2xl overflow-hidden aspect-square shadow-soft hover:shadow-lg transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:-left-12 bg-card/90 border-border hover:bg-card" />
      <CarouselNext className="right-2 md:-right-12 bg-card/90 border-border hover:bg-card" />
    </Carousel>
  );
};

export default GalleryCarousel;

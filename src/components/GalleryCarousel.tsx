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
import gallery14 from "@/assets/gallery-14.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
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
import gallery36 from "@/assets/gallery-36.jpg";
import gallery37 from "@/assets/gallery-37.jpg";
import gallery38 from "@/assets/gallery-38.jpg";
import gallery39 from "@/assets/gallery-39.jpg";
import gallery40 from "@/assets/gallery-40.jpg";
import gallery42 from "@/assets/gallery-42.jpg";
import gallery43 from "@/assets/gallery-43.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  { src: "/videos/gallery-video-1.mov", alt: "Fun activities video", type: "video" },
  { src: gallery7, alt: "Sensory lights and calming toys", type: "image" },
  { src: gallery8, alt: "Homemade rice pudding", type: "image" },
  { src: gallery9, alt: "Nutritious soup with dumplings", type: "image" },
  { src: gallery10, alt: "Nature exploration tray", type: "image" },
  { src: gallery14, alt: "Nature walk findings", type: "image" },
  { src: gallery12, alt: "Outdoor sensory play", type: "image" },
  { src: gallery15, alt: "Magnetic building tiles play", type: "image" },
  { src: gallery16, alt: "Creative construction with tiles", type: "image" },
  { src: gallery18, alt: "Outdoor craft activities", type: "image" },
  { src: gallery19, alt: "Story time craft session", type: "image" },
  { src: gallery20, alt: "Creative play tray setup", type: "image" },
  { src: gallery21, alt: "Outdoor learning space", type: "image" },
  { src: gallery22, alt: "Story book reading activity", type: "image" },
  { src: gallery23, alt: "Interactive story crafts", type: "image" },
  { src: gallery24, alt: "Behaviour champion rewards", type: "image" },
  { src: gallery25, alt: "Positive behaviour celebration", type: "image" },
  { src: gallery26, alt: "Shape matching learning", type: "image" },
  { src: gallery27, alt: "Cosy reading corner with dolls", type: "image" },
  { src: gallery28, alt: "Handprint craft keepsake", type: "image" },
  { src: gallery29, alt: "Mother's Day craft card", type: "image" },
  { src: gallery30, alt: "Creative blow painting art", type: "image" },
  { src: gallery31, alt: "October focus books newsletter", type: "image" },
  { src: gallery32, alt: "Christmas Elf Report", type: "image" },
  { src: gallery36, alt: "Flower water sensory play", type: "image" },
  { src: gallery37, alt: "Colourful foam building blocks", type: "image" },
  { src: gallery38, alt: "Creative block construction", type: "image" },
  { src: gallery39, alt: "Farm animals sensory play", type: "image" },
  { src: gallery40, alt: "Farm tray with wooden animals", type: "image" },
  { src: gallery42, alt: "Magnetic animal board", type: "image" },
  { src: gallery43, alt: "Animal magnets learning activity", type: "image" },
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
        {galleryItems.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="group relative rounded-2xl overflow-hidden aspect-square shadow-soft hover:shadow-lg transition-all duration-300">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">{item.alt}</p>
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

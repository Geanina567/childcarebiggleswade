import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
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

const galleryImages = [
  { src: gallery1, alt: "Children playing together" },
  { src: gallery2, alt: "Arts and crafts activities" },
  { src: gallery3, alt: "Peaceful nap time" },
  { src: gallery4, alt: "Story time with caregiver" },
  { src: gallery5, alt: "Outdoor play area" },
  { src: gallery6, alt: "Healthy snack time" },
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
];

const GalleryCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
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

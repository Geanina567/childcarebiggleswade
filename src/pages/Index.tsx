import { Star, MapPin, Phone, Clock, Shield, Heart, Baby, Sparkles, Mail, PoundSterling } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";

import heroImage from "@/assets/hero-daycare.jpg";
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

const Index = () => {
  const features = [
    {
      icon: Baby,
      title: "Ages 0-3",
      description: "Specialized care for babies and toddlers"
    },
    {
      icon: Shield,
      title: "Fully Accredited",
      description: "Ofsted registered and regulated childminder"
    },
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Warm, loving home-from-home environment"
    },
    {
      icon: Sparkles,
      title: "Play & Learn",
      description: "EYFS aligned play-based learning"
    }
  ];

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-20 md:pt-24 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <AnimatedBackground />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">Fully Accredited & Regulated</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Where Little Ones <span className="text-primary">Shine</span> Bright
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                A nurturing home-from-home childminding service for children aged 0-3 in 
                Biggleswade. Where every child is cherished, cared for, and encouraged to flourish.
              </p>

              {/* Pricing Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-card/90 backdrop-blur-sm rounded-2xl shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <PoundSterling className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">£7.50<span className="text-base font-normal text-muted-foreground">/hour</span></div>
                  <div className="text-sm text-muted-foreground">Flexible scheduling available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                    Meet Ema
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Biggleswade, SG18 8YF</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Mon-Fri 8am-5:30pm</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage}
                  alt="Little People Childminding - A warm and welcoming environment"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-soft animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Baby className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Ages 0-3</div>
                    <div className="text-sm text-muted-foreground">Babies & Toddlers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Schedule & Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Flexible Care for Your Family
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Opening Hours</h3>
              <p className="text-3xl font-bold text-foreground mb-2">8:00 AM - 5:30 PM</p>
              <p className="text-muted-foreground">Monday to Friday</p>
              <p className="text-sm text-primary mt-4 font-medium">Schedule can be slightly flexible</p>
            </div>

            <div className="bg-gradient-to-br from-accent to-secondary/30 rounded-3xl p-8 text-center">
              <PoundSterling className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Hourly Rate</h3>
              <p className="text-3xl font-bold text-foreground mb-2">£7.50 / hour</p>
              <p className="text-muted-foreground">Competitive & Fair Pricing</p>
              <p className="text-sm text-primary mt-4 font-medium">Contact for availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Our Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              A Day in the Life
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a peek into the nurturing environment where children learn, play, and grow together every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-square shadow-soft hover:shadow-lg transition-all duration-300"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* About Biggleswade Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent/50 to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Location
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                In the Heart of Biggleswade
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nestled in the charming market town of Biggleswade, Bedfordshire, this 
                  childminding service is perfectly positioned for families in the local community. 
                  This historic town offers the perfect blend of traditional character and modern amenities.
                </p>
                <p>
                  Biggleswade is known for its friendly community spirit, beautiful parks, and 
                  excellent transport links. With the River Ivel flowing through, there's plenty 
                  of natural beauty for families to enjoy, from riverside walks to the 
                  award-winning town centre.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">SG18 8YF</span>
                </div>
                <a 
                  href="https://wa.me/447733876089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft hover:shadow-lg transition-shadow"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">07733 876089</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-soft">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">Why Biggleswade?</h3>
                <ul className="space-y-4">
                  {[
                    "Historic market town with friendly community",
                    "Excellent schools and family amenities",
                    "Beautiful parks and riverside walks",
                    "Great transport links to Cambridge & London",
                    "Safe, welcoming neighbourhood",
                    "Active local events and activities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ema would love to meet you and discuss how she can support your child's 
              early years journey. Get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="mailto:littlepeople.biggleswade@gmail.com">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
              </a>
            </div>
            <a
              href="https://www.facebook.com/share/1GGzMemeYy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              Follow us on Facebook →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

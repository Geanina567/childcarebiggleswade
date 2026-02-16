import { Star, MapPin, Phone, Clock, Shield, Heart, Baby, Sparkles, Mail, PoundSterling } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import GalleryCarousel from "@/components/GalleryCarousel";
import FloatingBugs from "@/components/FloatingBugs";

import heroImage from "@/assets/hero-nursery.png";
import childminderIllustration from "@/assets/childminder-illustration.png";

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
      description: "EYFS aligned play-based learning. Outdoor learning & nature-based activities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      <FloatingBugs />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-20 md:pt-24 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <AnimatedBackground />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              {/* Childminder Illustration */}
              <div id="hero-picture-frame" className="flex justify-center lg:justify-start mb-4 animate-fade-in-scale relative">
                <img 
                  src={childminderIllustration}
                  alt="Childminder with happy children"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full shadow-soft hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 backdrop-blur-sm rounded-full animate-bounce-soft">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">Fully Accredited & Regulated</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-in-up">
                Where Little Ones <span className="text-primary animate-pulse-soft inline-block">Shine</span> Bright
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                A nurturing home-from-home childminding service for children aged 0-3 in 
                Biggleswade. Where every child is cherished, cared for, and encouraged to flourish.
              </p>

              {/* Pricing Badge */}
              {/* Funded Places Highlight - Prominent Card */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-card/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">Affordable childcare with funded places</div>
                  <div className="text-sm text-muted-foreground">For eligible children</div>
                </div>
              </div>

              {/* Pricing Badge - Subtle */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                <PoundSterling className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Starting at £7.50/hour · Subject to availability</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 w-full sm:w-auto hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-glow">
                    <Phone className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm hover:bg-secondary hover:scale-105 transition-all duration-200">
                    Meet Ema
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-secondary transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Biggleswade, SG18 8YF</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/80 backdrop-blur-sm rounded-full hover:bg-accent transition-colors">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Mon-Fri 8am-5:30pm</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-glow hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={heroImage}
                  alt="Little People Childminding - A warm and welcoming environment"
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-soft animate-float hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Baby className="w-6 h-6 text-primary animate-wiggle" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Ages 0-3</div>
                    <div className="text-sm text-muted-foreground">Babies & Toddlers</div>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute -top-2 -right-2 bg-accent rounded-xl p-3 shadow-soft animate-float-delayed hidden md:block">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/30 via-muted/20 to-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-card hover:to-secondary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:animate-wiggle" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
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
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4 animate-bounce-soft">
              Schedule & Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Flexible Care for Your Family
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-secondary/40 via-accent/20 to-primary/10 rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Opening Hours</h3>
              <p className="text-3xl font-bold text-primary mb-2">8:00 AM - 5:30 PM</p>
              <p className="text-muted-foreground">Monday to Friday</p>
              <p className="text-sm text-secondary-foreground mt-4 font-medium bg-secondary/50 rounded-full px-3 py-1 inline-block">Schedule can be flexible</p>
            </div>

            <div className="group bg-gradient-to-br from-accent/50 via-secondary/30 to-primary/10 rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <PoundSterling className="w-8 h-8 text-primary group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Hourly Rate</h3>
              <p className="text-3xl font-bold text-primary mb-2">Starting at £7.50</p>
              <p className="text-muted-foreground">Subject to availability</p>
              <p className="text-sm text-accent-foreground mt-4 font-medium bg-accent/50 rounded-full px-3 py-1 inline-block">Contact for availability</p>
            </div>

            {/* Funded Places Banner */}
            <div className="md:col-span-2 bg-gradient-to-r from-primary/10 via-secondary/30 to-accent/20 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <p className="text-lg font-display font-bold text-foreground">
                  Affordable childcare with funded places for eligible children
                </p>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ask about government-funded hours for 2, 3 & 4 year olds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent/20 via-muted/30 to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4 animate-bounce-soft">
              ✨ Our Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              A Day in the Life
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a peek into the nurturing environment where children learn, play, and grow together every day.
            </p>
          </div>

          <div className="px-8 md:px-16">
            <GalleryCarousel />
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
          <div className="relative bg-gradient-to-br from-primary via-primary to-[hsl(25,85%,55%)] rounded-3xl p-8 md:p-12 text-center text-primary-foreground overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <Heart className="w-10 h-10 animate-pulse-soft" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Join Our Family?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Ema would love to meet you and discuss how she can support your child's 
                early years journey. Get in touch today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto hover:scale-105 transition-transform shadow-lg">
                    <Phone className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="mailto:littlepeople.biggleswade@gmail.com">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-all">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </Button>
                </a>
              </div>
              <a
                href="https://www.facebook.com/share/1GGzMemeYy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors group"
              >
                Follow us on Facebook 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

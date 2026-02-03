import { Heart, Shield, Award, Users, Check, Baby, Sparkles, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Warmth & Security",
      description: "Creating a calm, safe and loving environment where children feel valued and confident."
    },
    {
      icon: Shield,
      title: "Safe & Regulated",
      description: "Fully accredited and regulated childminder meeting all UK early years standards."
    },
    {
      icon: BookOpen,
      title: "Development-Focused",
      description: "Intentional care aligned with UK early years standards and EYFS curriculum."
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "Close communication with parents to ensure personalised care for each child."
    }
  ];

  const accreditations = [
    "Ofsted Registered & Regulated",
    "Enhanced DBS Checked",
    "First Aid Certified",
    "Early Years Foundation Stage (EYFS) Aligned",
    "Health & Safety Compliant",
    "Safeguarding Trained"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Meet Ema
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Where Little Ones <span className="text-primary">Thrive</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A fully accredited and regulated childminder providing high-quality care 
            for children aged 0-3 in Biggleswade. Dedicated to giving every child 
            the strongest possible start in life.
          </p>
        </div>
      </section>

      {/* About Ema */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                About Ema
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ema is a fully accredited and regulated childminder in the UK, providing 
                  high-quality care for children aged 0–3 years. With a deep understanding 
                  of early childhood development and a genuine passion for nurturing young 
                  minds, she is committed to giving every child the strongest possible start in life.
                </p>
                <p>
                  As a mother of two young girls aged 3 and 1, Ema understands firsthand how 
                  important the early years are. She recognises that babies and toddlers need 
                  more than supervision — they need warmth, structure, consistency and emotional 
                  security. Her approach is built around creating a calm, safe and loving 
                  environment where children feel valued, supported and confident to explore.
                </p>
                <p>
                  Ema delivers care that is intentional and development-focused, aligned with 
                  UK early years standards. Through structured routines, play-based learning 
                  and close communication with parents, she supports each child's emotional, 
                  social and cognitive development at their own pace.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Baby className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">Ema's Philosophy</h3>
                </div>
                <blockquote className="text-center text-foreground italic leading-relaxed">
                  "When children feel secure, understood and encouraged, they thrive. I work 
                  in partnership with families to ensure every child receives personalised care 
                  designed to build confidence, curiosity and a lifelong love of learning."
                </blockquote>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  What Makes Ema Special
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mother of two young children (ages 3 and 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Deep understanding of early childhood development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Focus on warmth, structure and emotional security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Play-based learning approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Care Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything is guided by a commitment to providing the highest 
              quality care and supporting each child's unique development journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Fully Accredited & Regulated
            </h2>
            <p className="text-muted-foreground">
              Your child's safety and development are the top priorities.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {accreditations.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

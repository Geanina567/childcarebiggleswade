import { Heart, Shield, Award, Users, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Every child receives individual attention and love in our warm, supportive environment."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Fully accredited and regulated facility with trained staff and secure premises."
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "Age-appropriate learning through play, fostering curiosity and development."
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "We believe in working closely with families to support each child's journey."
    }
  ];

  const accreditations = [
    "Ofsted Registered & Regulated",
    "Enhanced DBS Checked Staff",
    "First Aid Certified Team",
    "Early Years Foundation Stage (EYFS) Curriculum",
    "Health & Safety Compliant",
    "Safeguarding Trained"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            A Place Where Little Ones <span className="text-primary">Thrive</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over a decade, we've been providing exceptional care for children aged 0-3 
            in the heart of Biggleswade. Our dedicated team creates a loving environment 
            where every child can explore, learn, and grow.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded by passionate early years educators, our daycare centre was born 
                from a simple belief: every child deserves the best possible start in life.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located in the beautiful market town of Biggleswade, we've created a 
                home-from-home environment where children aged 0-3 can thrive. Our small 
                group sizes ensure each child receives the individual attention they need 
                to flourish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're proud to be fully accredited and regulated, giving parents peace 
                of mind while their little ones are in our care.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary mb-2">0-3</div>
                  <div className="text-xl text-foreground font-medium">Years Old</div>
                  <p className="text-muted-foreground mt-2">Babies to Toddlers</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-4 shadow-soft">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
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
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our commitment to providing the highest 
              quality care and education for your little ones.
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
              Your child's safety and development are our top priorities.
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

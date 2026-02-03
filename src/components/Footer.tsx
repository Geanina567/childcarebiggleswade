import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Baby, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Baby className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Little People</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Providing exceptional care and early education for children aged 0-3 
              in the heart of Biggleswade. Fully accredited and regulated.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Mon-Fri: 8:00 AM - 5:30 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-background text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-background/70 hover:text-background text-sm transition-colors">
                About Ema
              </Link>
              <a
                href="https://www.facebook.com/share/1GGzMemeYy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background text-sm transition-colors flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-background/70 text-sm">
                  Biggleswade, SG18 8YF
                </span>
              </div>
              <a 
                href="https://wa.me/447733876089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">07733 876089</span>
              </a>
              <a 
                href="mailto:littlepeople.biggleswade@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">littlepeople.biggleswade@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Little People Childminding. All rights reserved. 
            Fully accredited and regulated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

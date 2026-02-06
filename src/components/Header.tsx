import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Ema" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Ofsted Tagline */}
      <div className="bg-primary/10 text-center py-1.5 px-4">
        <p className="text-xs md:text-sm font-medium text-foreground">
          Ofsted Registered Childminder in Biggleswade | Emanuela Vasile
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoIcon} 
              alt="Little People Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-display font-bold text-xl text-foreground">
              Little People
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1GGzMemeYy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
            </a>
            <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="https://www.facebook.com/share/1GGzMemeYy/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2 w-full">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                </a>
                <a href="https://wa.me/447733876089" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm" className="gap-2 w-full">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

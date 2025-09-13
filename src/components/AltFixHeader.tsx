import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const AltFixHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo ALT-FIX */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center border border-primary/20">
              <span className="text-primary-foreground font-bold text-xs">AF</span>
            </div>
            <span className="text-xl font-bold text-foreground">ALT-FIX</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#tarifs" className="text-foreground hover:text-primary transition-smooth">
              Tarifs
            </a>
            <a href="#boutique" className="text-foreground hover:text-primary transition-smooth">
              Boutique
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <Button className="hidden md:flex" variant="default">
            Demander un devis
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#accueil"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#tarifs"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Tarifs
              </a>
              <a
                href="#boutique"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Boutique
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="pt-2">
                <Button className="w-full">Demander un devis</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AltFixHeader;
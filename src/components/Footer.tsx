import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AF</span>
              </div>
              <span className="text-2xl font-bold">ALT-FIX</span>
            </div>
            <p className="text-secondary-foreground/80">
              Votre spécialiste en réparation informatique et téléphonique. 
              Intervention rapide, tarifs transparents, garantie 6 mois.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Nos Services</h3>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#services" className="hover:text-primary transition-colors">Réparation Smartphone</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Réparation PC/Mac</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Réparation Tablette</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Récupération Données</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Suppression Virus</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dépannage Domicile</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-4 text-secondary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>06 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contact@alt-fix.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Genlis / Dijon</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <span>Lun-Ven 8h-19h<br />Sam 9h-17h</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Actualités</h3>
            <p className="text-secondary-foreground/80">
              Recevez nos conseils tech et nos promotions
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 ALT-FIX. Tous droits réservés. | Micro-entreprise
            </div>
            <div className="flex space-x-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
              <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
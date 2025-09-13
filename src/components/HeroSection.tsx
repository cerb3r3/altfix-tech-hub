import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech-repair.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Réparation professionnelle ALT-FIX"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Réparation <span className="text-primary">Express</span>
                <br />
                PC & Smartphone
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Dépannage professionnel à domicile autour de Genlis et Dijon. 
                Diagnostic gratuit, tarifs transparents, intervention rapide.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Intervention sous 24h</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Diagnostic gratuit</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Garantie 6 mois</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 shadow-tech transition-bounce">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Phone className="mr-2 w-5 h-5" />
                06 XX XX XX XX
              </Button>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-muted-foreground">Besoin d'aide immédiate ?</span>
              <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl shadow-card p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-secondary mb-6">Urgence ?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                  <span className="font-medium">Réparation écran cassé</span>
                  <span className="text-primary font-bold">À partir de 89€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                  <span className="font-medium">Virus / Lenteur PC</span>
                  <span className="text-primary font-bold">À partir de 49€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                  <span className="font-medium">Installation Windows</span>
                  <span className="text-primary font-bold">À partir de 69€</span>
                </div>
              </div>
              <Button className="w-full mt-6" variant="secondary">
                Voir tous les tarifs
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
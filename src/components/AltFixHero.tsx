import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AltFixHero = () => {
  return (
    <section id="accueil" className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Hero Principal */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Votre expert <span className="text-primary">informatique</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Montage PC • Dépannage • Installation à domicile (Genlis / Dijon)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-altfix transition-bounce">
                Demander un devis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10">
                Voir les services
              </Button>
            </div>
          </div>

          {/* Licence Windows Card */}
          <div className="space-y-4">
            <Card className="bg-card border border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Licence Windows 11 (officielle)
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Régularisez votre PC avec une licence authentique + service d'installation.
                </p>
                
                <div className="flex flex-col gap-3 mb-4">
                  <Button className="w-full text-sm">
                    Payer en ligne
                  </Button>
                  <Button variant="outline" className="w-full text-sm border-primary/20 hover:bg-primary/10">
                    Acheter chez Microsoft
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Clé fournie par le client ou via revendeur agréé. Facture nominative. Tarifs hors licence.
                </p>
              </CardContent>
            </Card>

            {/* Navigation arrows */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-primary/20">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-primary/20">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltFixHero;
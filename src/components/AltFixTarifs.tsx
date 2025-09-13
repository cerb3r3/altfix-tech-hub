import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const tarifs = [
  {
    title: "Diagnostic",
    price: "Gratuit",
    description: "Évaluation rapide et devis.",
    features: []
  },
  {
    title: "Dépannage à domicile (1h)",
    price: "45 €",
    description: "+ 30 € / h suppl. (hors pièces).",
    features: ["Intervention sur site", "Première heure incluse", "Déplacement gratuit ≤ 5km"]
  },
  {
    title: "Montage PC",
    price: "80–150 €",
    description: "Selon complexité (hors composants).",
    features: ["Assemblage professionnel", "Tests complets", "Optimisation"]
  },
  {
    title: "Réinstallation Windows",
    price: "50 €",
    description: "Sauvegarde en option (hors licence).",
    features: ["Installation propre", "Pilotes inclus", "Configuration de base"]
  },
  {
    title: "Nettoyage & optimisation",
    price: "40 €",
    description: "Logiciel + matériel (hors pièces).",
    features: ["Suppression virus", "Nettoyage physique", "Optimisation système"]
  },
  {
    title: "Installation périphérique",
    price: "25 €",
    description: "Imprimante, écran… (hors accessoires).",
    features: ["Configuration complète", "Tests de fonctionnement", "Formation utilisateur"]
  }
];

const AltFixTarifs = () => {
  return (
    <section id="tarifs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tarifs <span className="text-primary">indicatifs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Montants <strong>hors pièces</strong> (composants, licences, accessoires). Devis gratuit.
          </p>
        </div>

        {/* Tarifs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tarifs.map((tarif, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border/50 card-hover"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">{tarif.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">{tarif.price}</div>
                <CardDescription className="text-muted-foreground">
                  {tarif.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {tarif.features.length > 0 && (
                  <ul className="space-y-2">
                    {tarif.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Frais de déplacement */}
        <Card className="bg-card border border-primary/20 shadow-altfix mb-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Frais de déplacement
            </h3>
            <div className="text-4xl font-bold text-primary mb-2">0,80 € / km</div>
            <p className="text-muted-foreground mb-4">
              Gratuit dans un rayon de 5 km autour de Genlis.
            </p>
            <p className="text-sm text-muted-foreground">
              Au-delà : calcul au départ de Genlis.
            </p>
          </CardContent>
        </Card>

        {/* Mentions légales */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm">
            TVA non applicable, art. 293 B du CGI.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-altfix">
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AltFixTarifs;